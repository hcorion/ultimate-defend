/* eslint-disable @typescript-eslint/no-unused-vars */
const villageHelperVal = {
    behaviorVolumes: {
        nearbyVolume: "nearby_village_behavior_volume",
        insideVolume: "inside_village_behavior_volume",
        snippet: "spe_behavior_volume_update",
        debounceSnippet: "lt_behavior_debounce"
    }
}

const ForEachAliveVillageEntity = (callback) => {
    let villageEntities = QUERY_GetAllAliveVillages()
    while (HasEntities(villageEntities)) {
        const entityToCheck = FILTER_RandomCount(villageEntities, 1)
        villageEntities = OPER_Difference(villageEntities, entityToCheck)
        callback(entityToCheck)
    }
}

const GetVillageFountain = (villageId) => {
    return FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), [TAG_BUILDABLE, TAG_VILLAGE_FOUNTAIN], [])
}

const GetPlayerOutpostStructure = (villageId) => {
    return FILTER_ByTagFilter(QUERY_GetEntitiesOwnedByVillage(villageId), [TAG_BUILDABLE, TAG_OUTPOST_STRUCTURE], [])
}

const IsVillageFountainDisabled = (villageId) => {
    return QUERY_HasTags(GetVillageEntityFromID(villageId), [TAG_INACTIVE_VILLAGE])
}

// ==================== VILLAGE BEHAVIOUR ====================

const _GetTempBehaviorVariable = (behaviorState) => {
    return VILLAGE_VARIABLE_TEMP_BEHAVIOR_STATE + "_" + behaviorState
}

const SetupVillageBehavior = (fountain, villageId) => {
    _SetupBehaviorVolumes(fountain, villageId)
}

const _SetupBehaviorVolumes = (fountain, villageId) => {
    const enemyNearbyVolume = SpawnTriggerVolume(fountain, fountain, "badger:spatial_trigger_village_nearby", TEAM_WILD, villageId, true, ["piglin"], [], ALLIANCE_ENEMY)
    OUTPUT_AddTag(enemyNearbyVolume, villageHelperVal.behaviorVolumes.nearbyVolume)
    const enemyInsideVolume = SpawnTriggerVolume(fountain, fountain, "badger:spatial_trigger_village_inside", TEAM_WILD, villageId, true, ["piglin"], [], ALLIANCE_ENEMY)
    OUTPUT_AddTag(enemyInsideVolume, villageHelperVal.behaviorVolumes.insideVolume)

    LISTENFOR_SpatialPartitionEntered({
        snippet: villageHelperVal.behaviorVolumes.snippet,
        ownerVillageId: villageId,
        triggerEntity: enemyNearbyVolume,
        payloadString: villageHelperVal.behaviorVolumes.nearbyVolume
    })

    LISTENFOR_SpatialPartitionEntered({
        snippet: villageHelperVal.behaviorVolumes.snippet,
        ownerVillageId: villageId,
        triggerEntity: enemyInsideVolume,
        payloadString: villageHelperVal.behaviorVolumes.insideVolume
    })
}

SNIPPET_SpatialPartitionEntered(villageHelperVal.behaviorVolumes.snippet, (triggerEntity, _enteringEntity, payload) => {
    const villageId = payload.ownerVillageId
    const timerKey = GetVillageVariableKey(villageId, payload.string)

    if (QUERY_GetGlobalVariable(timerKey) === 0) {
        OUTPUT_SetGlobalVariable(timerKey, 1)
        SetVillageBehavior(villageId)
        LISTENFOR_LocalTimer({
            snippet: villageHelperVal.behaviorVolumes.debounceSnippet,
            ownerVillageId: villageId,
            waitTime: 5,
            payloadEntities: triggerEntity,
            payloadString: payload.string
        })
    }
})

SNIPPET_LocalTimer(villageHelperVal.behaviorVolumes.debounceSnippet, (payload) => {
    const timerKey = GetVillageVariableKey(payload.ownerVillageId, payload.string)
    OUTPUT_SetGlobalVariable(timerKey, 0)
})

const SetVillageTemporaryBehavior = (villageId, behaviorState, duration) => {
    const villageVariable = GetVillageVariableKey(villageId, _GetTempBehaviorVariable(behaviorState))

    if (DoOnce(villageVariable)) {
        LISTENFOR_Timer({
            snippet: "t_turn_off_village_temp_behaviour",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            timerName: villageVariable,
            threshold: 0,
            payloadInt: villageId,
            payloadString: behaviorState
        })
    }

    OUTPUT_SetNamedTimer(villageVariable, duration)
    if (IsCurrentAct(ACTS.ACT_1A) || IsCurrentAct(ACTS.ACT_1B)) {
        const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)
        const villagers = FILTER_ByTagFilter(villageEntities, ["villager"], ["illager"])
        const illagers = FILTER_ByTagFilter(villageEntities, ["illager"], ["villager"])
        if (HasEntities(villagers)) OUTPUT_SetBehavior(villagers, VILLAGE_BEHAVIOR.villager[behaviorState])
        if (HasEntities(illagers)) OUTPUT_SetBehavior(illagers, VILLAGE_BEHAVIOR.illager[behaviorState])
    } else {
        SetVillageBehavior(villageId)
    }
}

SNIPPET_Timer("t_turn_off_village_temp_behaviour", (_timeLeft, payload) => {
    const villageId = payload.int
    const behaviorState = payload.string
    const villageVariable = GetVillageVariableKey(villageId, _GetTempBehaviorVariable(behaviorState))
    OUTPUT_SetGlobalVariable(villageVariable, 0)
    SetVillageBehavior(villageId)

    Once()
})

const SetVillageBehavior = (villageId) => {
    const villageEntities = QUERY_GetEntitiesOwnedByVillage(villageId)

    const villagers = FILTER_ByTagFilter(villageEntities, ["villager"], ["illager"])
    SetVillagerBehavior(villagers)

    const illagers = FILTER_ByTagFilter(villageEntities, ["illager"], ["villager"])
    SetIllagerBehavior(illagers)
}

const SetVillagerBehavior = (villagerEG) => {
    _SetIllagerOrVillagerBehavior(villagerEG, "villager")
}

const SetIllagerBehavior = (illagerEG) => {
    _SetIllagerOrVillagerBehavior(illagerEG, "illager")
}

const _SetIllagerOrVillagerBehavior = (entities, type) => {
    if (!HasEntities(entities)) {
        return
    }
    const behaviorData = VILLAGE_BEHAVIOR[type]

    const playerDestroyedSecondBase = QUERY_GetGlobalVariable(GV_STARTED_ACT_1_B) > 0
    const playerDestroyedDarkBeaconBase = QUERY_GetGlobalVariable(GV_STARTED_ACT_2) > 0
    const villageId = QUERY_GetVillageIDFromEntity(RandomEntity(entities))
    const villageEntity = GetVillageEntityFromID(villageId)

    const nearbyVolume = FILTER_ByVillageID(QUERY_GetEntitiesWithTags(villageHelperVal.behaviorVolumes.nearbyVolume), villageId)
    let piglinsNearVillage = false
    if (HasEntities(nearbyVolume)) {
        piglinsNearVillage = HasEntities(QUERY_GetIntruders(nearbyVolume))
    }

    const insideVolume = FILTER_ByVillageID(QUERY_GetEntitiesWithTags(villageHelperVal.behaviorVolumes.insideVolume), villageId)
    let piglinsInsideVillage = false
    if (HasEntities(insideVolume)) {
        piglinsInsideVillage = HasEntities(QUERY_GetIntruders(insideVolume))
    }

    // Pause any temporary reactions while piglins are still nearby
    if (piglinsNearVillage || piglinsInsideVillage) {
        _PauseBehaviorTimers(villageId)
    } else {
        _ResumeBehaviorTimers(villageId)
    }

    // Override any behaviors if there are piglins nearby
    if (piglinsInsideVillage) {
        OUTPUT_SetBehavior(entities, behaviorData.heavyScared)
        return
    } else if (piglinsNearVillage) {
        OUTPUT_SetBehavior(entities, behaviorData.scared)
        return
    }

    if (IsVillageFountainDisabled(villageId)) {
        OUTPUT_SetBehavior(entities, behaviorData.sad)
        return
    }

    //Villagers/illages inside a cage
    const villagersInsideCage = FILTER_ByTagFilter(entities, [VILLAGERS_ILLAGERS_INSIDE_CAGE_TAG], [])
    if (HasEntities(villagersInsideCage)) {
        OUTPUT_SetBehavior(villagersInsideCage, behaviorData.sad)
        entities = OPER_Difference(entities, villagersInsideCage)
        if (!HasEntities(entities)) {
            return
        }
    }

    // Temporary behaviors override any other state-based behaviors
    const tempBehavior = _GetTemporaryBehavior(villageId, behaviorData)
    if (tempBehavior) {
        OUTPUT_SetBehavior(entities, behaviorData[tempBehavior])
        return
    }

    // "Default" state-based behaviors, in order of priority
    if (QUERY_HasTags(villageEntity, [TAG_INACTIVE_VILLAGE])) {
        OUTPUT_SetBehavior(entities, behaviorData.sad)
    } else if (IsCurrentAct(ACTS.ACT_3A)) {
        let entitiesRemaining = entities
        const entitiesScared = FILTER_RandomPercentage(entitiesRemaining, 33)
        OUTPUT_SetBehavior(entitiesScared, behaviorData.scared) // 1/3rd scared
        entitiesRemaining = OPER_Difference(entitiesRemaining, entitiesScared)

        const entitiesSad = FILTER_RandomPercentage(entitiesRemaining, 50)
        OUTPUT_SetBehavior(entitiesSad, behaviorData.sad) // 1/3rd sad
        entitiesRemaining = OPER_Difference(entitiesRemaining, entitiesSad)

        OUTPUT_SetBehavior(entitiesRemaining, behaviorData.act1B) // 1/3rd curious
    } else if (IsVillageUnderInvasionAttack(villageId) || GetVillageVariable(villageId, INVASION_OB_BUILT_VARIABLE)) {
        OUTPUT_SetBehavior(entities, behaviorData.heavyScared)
    } else if (playerDestroyedDarkBeaconBase) {
        OUTPUT_SetBehavior(entities, behaviorData.act2)
    } else if (playerDestroyedSecondBase) {
        OUTPUT_SetBehavior(entities, behaviorData.act1B)
    } else {
        OUTPUT_SetBehavior(entities, behaviorData.act1)
    }
}

const _GetTemporaryBehavior = (villageId) => {
    for (const behaviorKey in VILLAGE_TEMP_BEHAVIOR_STATE) {
        const behaviorState = VILLAGE_TEMP_BEHAVIOR_STATE[behaviorKey]
        if (GetVillageVariable(villageId, _GetTempBehaviorVariable(behaviorState))) {
            return behaviorState
        }
    }

    return 0
}

const _PauseBehaviorTimers = (villageId) => {
    for (const behaviorKey in VILLAGE_TEMP_BEHAVIOR_STATE) {
        const behaviorState = VILLAGE_TEMP_BEHAVIOR_STATE[behaviorKey]
        const villageVariable = GetVillageVariableKey(villageId, _GetTempBehaviorVariable(behaviorState))

        // Since the engine updates all timers each tick, but BSharp can only run one snippet at a time, it is possible
        // for a timer to be finished, but the snippet that will update the global var is still queued due to multiple timers
        // finishing at once.
        // Hence we are confirming with the engine is the timer actually exists.
        if (QUERY_IsNamedTimerActive(villageVariable)) {
            OUTPUT_PauseNamedTimer(villageVariable)
        }
    }
}

const _ResumeBehaviorTimers = (villageId) => {
    for (const behaviorKey in VILLAGE_TEMP_BEHAVIOR_STATE) {
        const behaviorState = VILLAGE_TEMP_BEHAVIOR_STATE[behaviorKey]
        const villageVariable = GetVillageVariableKey(villageId, _GetTempBehaviorVariable(behaviorState))

        // Since the engine updates all timers each tick, but BSharp can only run one snippet at a time, it is possible
        // for a timer to be finished, but the snippet that will update the global var is still queued due to multiple timers
        // finishing at once.
        // Hence we are confirming with the engine is the timer actually exists.
        if (QUERY_IsNamedTimerActive(villageVariable)) {
            OUTPUT_ResumeNamedTimer(villageVariable)
        }
    }
}

const GetCultureLevelFromVillage = (villageId) => {
    const cultureValue = QUERY_GetCultureValue(villageId, "A")
    return GetCultureLevelFromValue(cultureValue)
}

const SetVillageAudioDefault = (villageId, override = "") => {
    const villageCentralStructure = GetVillageCentralStructures(villageId)

    if (override !== "") {
        OUTPUT_SetEmitterState(villageCentralStructure, override)
    } else {
        if (IsMobAllianceVillage(villageId)) {
            OUTPUT_SetEmitterState(villageCentralStructure, "default")
        } else if (IsPlayerOutpost(villageId)) {
            OUTPUT_SetEmitterState(villageCentralStructure, "default")
        } else {
            const level = GetCultureLevelFromVillage(villageId)
            const musicThresholds = ["default", "level1", "level2", "level3", "level3", "level3"]
            OUTPUT_SetEmitterState(villageCentralStructure, musicThresholds[level])
        }
    }
}

const GetCultureLevelFromValue = (cultureValue) => {
    let rewardIndex = 0
    while (rewardIndex < CULTURE_THRESHOLDS.length && cultureValue >= CULTURE_THRESHOLDS[rewardIndex]) {
        rewardIndex++
    }
    return rewardIndex
}
