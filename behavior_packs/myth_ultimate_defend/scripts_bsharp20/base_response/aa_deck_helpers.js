const DECK_QUERY = {
    BASE_SIZE: "BASE_SIZE",
    VARIATION: "VARIATION",
    OBJECTIVE: "OBJECTIVE",
    CUSTOM_QUERY: "CUSTOM_QUERY"
}

/*
KNOWN ISSUES:
- Paths/bridges/walls aren't considered yet, but should be easy enough to add.
- No error checking yet if the buildable you named doesn't exist
IDEAS:
- If debugging is enabled, on village finished building, do a check of all buildable and see which ones failed to place.
- The system should be strict about which data is allowed where, for example, you can't have a placementRules field outside of a zone, district or buildables card field.
This should help as designers familiarize themselves with the system and give them the tools to fix their mistakes when they make mistakes.
*/

const customFunctionTest = (_villageId) => {
    const deck = DECK_Empty()
    const mobCage = BuildableCard(BUILDABLE_CARD.MOB_CAGE, 1)
    DECK_MultiplyByMultipleRules(mobCage, [DistrictCard("attackDistrict1")])
    DECK_PutOnBottomOf(mobCage, deck)
    return deck
}

const getCardinalAreaShuffleGroup = (villageId) => {
    const key = "GV_SHUFFLE_GROUP"
    let shuffleGroup = 0
    if (!QUERY_IsGlobalVariableSet(GetVillageVariableKey(villageId, key))) {
        shuffleGroup = QUERY_RandomNumber(0, 3)
        SetVillageVariable(villageId, key, shuffleGroup)
        return shuffleGroup
    }
    const gv = GetVillageVariable(villageId, key)
    if (gv >= 3) {
        SetVillageVariable(villageId, key, 0)
        return 0
    }
    SetVillageVariable(villageId, key, gv + 1)
    return gv + 1
}

const getTestDeck = (villageId) => {
    const shuffleBuildables = [
        // 0
        [
            {
                card: BUILDABLE_CARD.TOWER_PIGLIN_ARROW,
                count: 1,
                placementRules: [PLACEMENT_FAR_FROM_VILLAGE_START]
            },
            {
                card: BUILDABLE_CARD.TOWER_PIGLIN_ARROW,
                count: 1,
                placementRules: [PLACEMENT_CLOSE_TO_VILLAGE_START]
            }
        ],
        // 1
        [
            {
                card: BUILDABLE_CARD.TOWER_LAVA_SPREADER,
                count: 1,
                placementRules: [PLACEMENT_FAR_FROM_VILLAGE_START]
            }
        ],
        // 2
        [
            {
                card: BUILDABLE_CARD.BARRACKS_FIGHTER,
                count: 1,
                placementRules: [PLACEMENT_FAR_FROM_VILLAGE_START]
            }
        ],
        // 3
        [
            {
                card: BUILDABLE_CARD.GOLDMINE,
                count: 2,
                placementRules: [PLACEMENT_FAR_FROM_VILLAGE_START]
            }
        ]
    ]

    return MakeDeck(villageId, [
        {
            // There two different district fields (one here, and one in zone), this one defines the creation of the actual district.
            district: {
                name: "attackDistrict1",
                placementRules: [PLACEMENT_CLOSE_TO_VILLAGE_START]
            },
            zone: {
                singleZones: 24,
                tags: ["defInnerKeep"],
                heightCard: "def10Height",
                // This is the second district field, this one tells the system that this zone and it's buildables are to be placed in that district
                district: "attackDistrict1",
                placementRules: {
                    queryType: DECK_QUERY.BASE_SIZE,
                    [BASE_SIZE_MEDIUM]: ["placeInDirectionNorthWithWedgeBrush"],
                    [BASE_SIZE_SMALL]: ["placeInDirectionSouthWithWedgeBrush"],
                    all: [PLACEMENT_CLOSE_TO_DISTRICT_START],
                    none: ["placeInDirectionSouthWithWedgeBrush"]
                }
            },
            buildables: [
                { card: "defendPortalSmall", forcePlacement: true },
                { card: BUILDABLE_CARD.TOWER_PIGLIN_ARROW, count: 3 },
                {
                    card: BUILDABLE_CARD.PIGLIN_CRYSTAL,
                    forcePlacement: true,
                    count: {
                        queryType: DECK_QUERY.OBJECTIVE,
                        [VILLAGE_VARIATION_STRUCTURE_DESTRUCTION]: 1,
                        none: 0
                    }
                },
                {
                    // Can do more complex logic with these custom functions. Right now these functions are ideal for placing paths/bridges/walls
                    customFunction: customFunctionTest
                }
            ]
        },
        {
            zone: {
                layerZones: 2,
                tags: ["defMidKeep"],
                heightCard: "def7Height",
                district: "attackDistrict1",
                placementRules: [PLACEMENT_CLOSE_TO_VILLAGE_START]
            },
            buildables: [
                { card: BUILDABLE_CARD.TOWER_PIGLIN_ARROW, count: 3 },
                {
                    card: BUILDABLE_CARD.PIGLIN_CRYSTAL,
                    tags: ["defendInnerKeepBuilding"],
                    forcePlacement: true,
                    count: {
                        queryType: DECK_QUERY.OBJECTIVE,
                        [VILLAGE_VARIATION_STRUCTURE_DESTRUCTION]: 1,
                        none: 1
                    }
                }
            ]
        },
        {
            zone: {
                singleZones: 10,
                tags: ["northElement"],
                heightCard: "def6Height",
                district: "attackDistrict1",
                placementRules: ["placeInDirectionNorthWithWedgeBrush"]
            },
            buildables: {
                queryType: DECK_QUERY.CUSTOM_QUERY,
                customQuery: getCardinalAreaShuffleGroup,
                0: shuffleBuildables[0],
                1: shuffleBuildables[1],
                2: shuffleBuildables[2],
                3: shuffleBuildables[3]
            }
        },
        {
            zone: {
                singleZones: 10,
                tags: ["eastElement"],
                heightCard: "def6Height",
                district: "attackDistrict1",
                placementRules: ["placeInDirectionEastWithWedgeBrush"]
            },
            buildables: {
                queryType: DECK_QUERY.CUSTOM_QUERY,
                customQuery: getCardinalAreaShuffleGroup,
                0: shuffleBuildables[0],
                1: shuffleBuildables[1],
                2: shuffleBuildables[2],
                3: shuffleBuildables[3]
            }
        },
        {
            zone: {
                singleZones: 10,
                tags: ["southElement"],
                heightCard: "def6Height",
                district: "attackDistrict1",
                placementRules: ["placeInDirectionSouthWithWedgeBrush"]
            },
            buildables: {
                queryType: DECK_QUERY.CUSTOM_QUERY,
                customQuery: getCardinalAreaShuffleGroup,
                0: shuffleBuildables[0],
                1: shuffleBuildables[1],
                2: shuffleBuildables[2],
                3: shuffleBuildables[3]
            }
        },
        {
            zone: {
                singleZones: 10,
                tags: ["westElement"],
                heightCard: "def6Height",
                district: "attackDistrict1",
                placementRules: ["placeInDirectionWestWithWedgeBrush"]
            },
            buildables: {
                queryType: DECK_QUERY.CUSTOM_QUERY,
                customQuery: getCardinalAreaShuffleGroup,
                0: shuffleBuildables[0],
                1: shuffleBuildables[1],
                2: shuffleBuildables[2],
                3: shuffleBuildables[3]
            }
        },
        {
            buildables: [
                {
                    card: BUILDABLE_CARD.TOWER_PIGLIN_ARROW,
                    count: {
                        queryType: DECK_QUERY.BASE_SIZE,
                        [BASE_SIZE_SMALL]: 1,
                        [BASE_SIZE_MEDIUM]: 5,
                        none: 0
                    }
                }
            ]
        }
    ])
}

const MakeDeck = (villageId, isDebugging, areaData) => {
    const flavour = QUERY_GetVillageFlavour(villageId) // Flavour also known as variation
    const objective = QUERY_GetVillageObjective(villageId)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const deck = DECK_Empty()
    let computedSteps = "Computed Steps:\n"
    // Do magic
    for (let i = 0; i < areaData.length; i++) {
        computedSteps += `#### Area ${i} ####:\n`
        const data = areaData[i]
        const zone = data.zone

        const throwDeckError = (errorString) => {
            let fullErrorString = `ERROR while making deck, area index ${i}`
            if (zone !== undefined && zone.tags !== undefined) {
                fullErrorString += `, zoneTag: ${zone.tags}`
            }
            Loge("Steps reached before error:\n" + computedSteps)
            throw new Error(fullErrorString + ": " + errorString)
        }

        const assertUndefined = (value, error) => {
            if (value === undefined) {
                throwDeckError(error)
            }
        }
        const getComplexValue = (value) => {
            if (typeof value === "object") {
                if (value.queryType === undefined) {
                    return value
                }

                let result = undefined
                computedSteps += `Found queryType of type ${value.queryType}\n`
                switch (value.queryType) {
                    case DECK_QUERY.BASE_SIZE:
                        if (value[baseSize] !== undefined) {
                            result = value[baseSize]
                            computedSteps += `using value ${result} indexed from ${baseSize}.\n`
                        }
                        break
                    case DECK_QUERY.VARIATION:
                        if (value[flavour] !== undefined) {
                            result = value[flavour]
                            computedSteps += `using value ${result} indexed from ${flavour}.\n`
                        }
                        break
                    case DECK_QUERY.OBJECTIVE:
                        if (value[objective] !== undefined) {
                            result = value[objective]
                            computedSteps += `using value ${result} indexed from ${objective}.\n`
                        }
                        break
                    case DECK_QUERY.CUSTOM_QUERY:
                        if (value.customQuery === undefined) {
                            throwDeckError("DECK_QUERY.CUSTOM_QUERY used, by no 'customQuery' function provided! Please provide a function to query.")
                        }
                        result = value.customQuery(villageId)
                        computedSteps += `using value ${result} indexed from custom query ${value.customQuery.name}.\n`
                        break
                    default:
                        throwDeckError(`Undefined DECK_QUERY query type ${value.queryType}!`)
                }
                if (result === undefined || value[result] === undefined) {
                    if (value.none === undefined) {
                        if (value.all !== undefined) {
                            computedSteps += `using value 'all', no other valid query found.\n`
                            return value.all
                        } else {
                            computedSteps += `return undefined query, no valid query found.\n`
                            return undefined
                        }
                    } else if (value.all !== undefined) {
                        computedSteps += `using combined array value 'none' and 'all', no specific valid query found for type of ${value.queryType}.\n`
                        if (Array.isArray(value.all)) {
                            return value.all.concat(value.none)
                        } else if (Array.isArray(value.none)) {
                            return value.none.concat(value.all)
                        } else {
                            return [value.all, value.none]
                        }
                    } else {
                        computedSteps += `using value 'none', no other valid query found.\n`
                        return value.none
                    }
                } else {
                    if (value.all !== undefined) {
                        computedSteps += `Result query found, returning that and 'all' field combined.\n`
                        if (Array.isArray(value[result])) {
                            return value[result].concat(value.all)
                        } else if (Array.isArray(value.all)) {
                            return value.all.concat(value[result])
                        } else {
                            return [value[result], value.all]
                        }
                    } else {
                        computedSteps += `Result query found, returning that.\n`
                        return value[result]
                    }
                }
            } else {
                return value
            }
        }

        const applyArrayToCard = (tagsValue, callback) => {
            const tags = getComplexValue(tagsValue)
            if (tags !== undefined) {
                if (Array.isArray(tags)) {
                    tags.forEach((tag) => {
                        if (tag === undefined) {
                            throwDeckError("Undefined tag while applying array to card!")
                        }
                        callback(tag)
                    })
                } else {
                    callback(tags)
                }
            }
        }

        const district = data.district
        if (district !== undefined) {
            assertUndefined(district.name, "This area has a district object, but no 'name' field exists! Please add a 'name' field.")
            const districtName = getComplexValue(district.name)
            computedSteps += `Added DistrictCard(${districtName})\n`
            const districtCard = DistrictCard(districtName)

            if (district.placementRules !== undefined) {
                applyArrayToCard(district.placementRules, (placementRule) => {
                    computedSteps += `Adding PlacementPreferenceCard("${placementRule}") to district ${districtName}.\n`
                    DECK_MultiplyBySingle(districtCard, PlacementPreferenceCard(placementRule))
                })
            }

            DECK_PutOnBottomOf(districtCard, deck)
        }

        if (zone !== undefined) {
            assertUndefined(zone.tags, "This area has a zone, but no 'zoneTag' field exists! Please add a 'zoneTag' field.")
            if (zone.singleZones === undefined && zone.layerZones === undefined) {
                throwDeckError("This area has a zone, but no zone count exists! Please add a 'singleZones' or 'layerZones' field to your 'zone' to define how many zones to use!")
            }

            let zonesCard = EMPTY_CARD
            if (zone.layerZones !== undefined) {
                const zoneCount = getComplexValue(zone.layerZones)
                assertUndefined(zoneCount, "Tried to get a valid 'layerZones' amount, but was unable to! Please check your 'queryType' field to make sure you have a 'none' or 'all' fallback option.")
                zonesCard = LayerOfZonesCard("addLayerOfZones", zoneCount)
                computedSteps += `Added ZonesCard(addLayerOfZones, ${zoneCount})\n`
            } else if (zone.singleZones !== undefined) {
                const zoneCount = getComplexValue(zone.singleZones)
                assertUndefined(zoneCount, "Tried to get a valid 'singleZones' amount, but was unable to! Please check your 'queryType' field to make sure you have a 'none' or 'all' fallback option.")
                let zoneCard = `add${zoneCount}Zones`
                let specificZoneCount = 1
                // TODO: I hate this, we should fix the costs files eventually to eradicate these inconsistent/missing zone names
                if (zoneCount === 1) {
                    zoneCard = "addZone"
                } else if (zoneCount === 2) {
                    zoneCard = "addTwoZones"
                } else if (zoneCount === 3) {
                    zoneCard = "addThreeZones"
                } else if (zoneCount === 12) {
                    zoneCard = "add12Zones"
                } else if (zoneCount === 16) {
                    zoneCard = "add16Zones"
                } else if (zoneCount === 18) {
                    zoneCard = "add18Zones"
                } else if (zoneCount === 24) {
                    zoneCard = "add24Zones"
                } else if (zoneCount > 10 || zoneCount === 7 || zoneCount === 8) {
                    zoneCard = "addZone"
                    specificZoneCount = zoneCount
                }
                zonesCard = ZonesCard(zoneCard, specificZoneCount)
                computedSteps += `Added ZonesCard(${zoneCard}, ${specificZoneCount})\n`
            }
            if (zone.heightCard !== undefined) {
                const heightCard = getComplexValue(zone.heightCard)
                if (heightCard !== undefined) {
                    computedSteps += `Added ZoneHeightChangeCard(${heightCard}) to zone.\n`
                    DECK_MultiplyBySingle(zonesCard, ZoneHeightChangeCard(heightCard))
                }
            }
            if (zone.district !== undefined) {
                const zoneDistrict = getComplexValue(zone.district)
                if (zoneDistrict !== undefined) {
                    computedSteps += `Added DistrictCard(${zoneDistrict}) to zone.\n`
                    DECK_MultiplyBySingle(zonesCard, DistrictCard(zoneDistrict))
                }
            }

            if (zone.placementRules !== undefined) {
                applyArrayToCard(zone.placementRules, (placementRule) => {
                    computedSteps += `Adding PlacementPreferenceCard("${placementRule}") to zone.\n`
                    DECK_MultiplyBySingle(zonesCard, PlacementPreferenceCard(placementRule))
                })
            }

            applyArrayToCard(zone.tags, (zoneTag) => {
                computedSteps += `Added ZoneTagCard(${zoneTag}) to zone.\n`
                DECK_MultiplyBySingle(zonesCard, ZoneTagCard(zoneTag))
            })

            DECK_PutOnBottomOf(zonesCard, deck)
        }
        const walls = getComplexValue(data.walls)
        if (walls !== undefined) {
            assertUndefined(walls.card, "This walls doesn't have a 'card' field! Please add a 'card' field!")
            const card = getComplexValue(walls.card)
            computedSteps += `Adding WallsCard(${card}).\n`
            const wallsCard = WallsCard(card)
            if (walls.zoneFilters !== undefined) {
                applyArrayToCard(walls.zoneFilters, (filterTag) => {
                    computedSteps += `Adding bonus ZoneFilterCard("${filterTag}") to Wall ${card}.\n`
                    DECK_MultiplyBySingle(wallsCard, ZoneFilterCard(filterTag))
                })
            }
            if (zone !== undefined && zone.district !== undefined) {
                const zoneDistrict = getComplexValue(zone.district)
                if (zoneDistrict !== undefined) {
                    computedSteps += `Adding DistrictCard("${zoneDistrict}") to WallsCard(${card}).\n`
                    DECK_MultiplyBySingle(wallsCard, DistrictCard(zoneDistrict))
                }
            }
            DECK_PutOnBottomOf(wallsCard, deck)
        }
        const paths = getComplexValue(data.paths)
        if (paths !== undefined) {
            for (let x = 0; x < paths.length; x++) {
                const path = paths[x]
                assertUndefined(path.card, "This paths doesn't have a 'card' field! Please add a 'card' field!")
                assertUndefined(path.startRules, "This paths doesn't have a 'startRules' field! Please add a 'card' field!")
                assertUndefined(path.endRules, "This paths doesn't have a 'endRules' field! Please add a 'card' field!")
                const card = getComplexValue(path.card)
                const startRules = getComplexValue(path.startRules)
                const endRules = getComplexValue(path.endRules)
                CreatePathRequestOnBottomOf(card, startRules, endRules, deck)
            }
        }
        const buildables = getComplexValue(data.buildables)
        if (buildables !== undefined) {
            for (let x = 0; x < buildables.length; x++) {
                const buildable = buildables[x]
                if (buildable.customFunction !== undefined) {
                    computedSteps += `Custom function found! Putting returned cards to bottom of deck.\n`
                    const customFunctionDeck = buildable.customFunction(villageId)
                    if (customFunctionDeck !== undefined && customFunctionDeck.length > 0) {
                        DECK_PutOnBottomOf(customFunctionDeck, deck)
                    } else {
                        // We don't return an outright error here since we don't know what the designer's intent is with this custom function.
                        computedSteps += `Custom function called, but returned 0 cards! Adding nothing to the deck.\n`
                    }
                    continue
                }

                let computedCardSteps = ""

                assertUndefined(buildable.card, "This buildable doesn't have a 'card' field! Please add a 'card' field!")
                const card = getComplexValue(buildable.card)
                let count = 1
                if (buildable.count !== undefined) {
                    count = getComplexValue(buildable.count)
                }
                if (count === 0) {
                    computedSteps += `Skipping buildable ${buildable.card} because count is 0.\n`
                    continue
                }
                computedSteps += `Adding BuildableCard(${card}, ${count}).\n`
                computedCardSteps += `BuildableCard(${card}, ${count})\n`
                const buildableCard = BuildableCard(card, count)

                if (buildable.forcePlacement !== undefined && buildable.forcePlacement === true) {
                    computedSteps += `Adding ForceBuildingPlacementCard("forceBuildingPlacement") to buildable ${card}.\n`
                    computedCardSteps += `ForceBuildingPlacementCard("forceBuildingPlacement")\n`
                    DECK_MultiplyBySingle(buildableCard, ForceBuildingPlacementCard("forceBuildingPlacement"))
                }

                if (zone !== undefined && zone.tags !== undefined) {
                    applyArrayToCard(zone.tags, (zoneTag) => {
                        computedSteps += `Adding ZoneFilterCard("${zoneTag}") to buildable ${card}.\n`
                        computedCardSteps += `ZoneFilterCard("${zoneTag}")\n`
                        DECK_MultiplyBySingle(buildableCard, ZoneFilterCard(zoneTag))
                    })
                }

                if (buildable.zoneFilters !== undefined) {
                    applyArrayToCard(buildable.zoneFilters, (filterTag) => {
                        computedSteps += `Adding bonus ZoneFilterCard("${filterTag}") to buildable ${card}.\n`
                        computedCardSteps += `ZoneFilterCard("${filterTag}")\n`
                        DECK_MultiplyBySingle(buildableCard, ZoneFilterCard(filterTag))
                    })
                }

                if (buildable.tags !== undefined) {
                    applyArrayToCard(buildable.tags, (buildableTag) => {
                        computedSteps += `Adding TagCard("${buildableTag}") to buildable ${card}.\n`
                        computedCardSteps += `TagCard("${buildableTag}")\n`
                        DECK_MultiplyBySingle(buildableCard, TagCard(buildableTag))
                    })
                }

                if (buildable.placementRules !== undefined) {
                    applyArrayToCard(buildable.placementRules, (placementRule) => {
                        computedSteps += `Adding PlacementPreferenceCard("${placementRule}") to buildable ${card}.\n`
                        computedCardSteps += `PlacementPreferenceCard("${placementRule}")\n`
                        DECK_MultiplyBySingle(buildableCard, PlacementPreferenceCard(placementRule))
                    })
                }

                if (zone !== undefined && zone.district !== undefined) {
                    const zoneDistrict = getComplexValue(zone.district)
                    if (zoneDistrict !== undefined) {
                        computedSteps += `Adding DistrictCard("${zoneDistrict}") to buildable ${card}.\n`
                        computedCardSteps += `DistrictCard("${zoneDistrict}")\n`
                        DECK_MultiplyBySingle(buildableCard, DistrictCard(zoneDistrict))
                    }
                }

                if (isDebugging) {
                    LISTENFOR_BuildingFailedToPlace({
                        snippet: "bftp_deck_helper",
                        ownerVillageId: villageId,
                        cardValue: buildable.card,
                        payloadInt: count,
                        // We use the squigly lines for text splitting
                        payloadString: `${buildable.card}~~~~${computedCardSteps}`
                    })
                }

                DECK_PutOnBottomOf(buildableCard, deck)
            }
        }
    }
    Logv(computedSteps)
    return deck
}

SNIPPET_BuildingFailedToPlace("bftp_deck_helper", (buildingId, villageId, payload) => {
    const splitStringPayload = payload.string.split("~~~~")
    const cardId = splitStringPayload[0]
    const body = splitStringPayload[1]
    let debugLog = `Failed to place building ${buildingId}, of BuildableCard(${cardId}) in village ${villageId}! Card details:`
    if (payload.int > 1) {
        const cardFailures = IncrementGlobal(`GV_BUILDING_FAILED_TO_PLACE_${villageId}_${cardId}_${payload.int}`)
        debugLog = `Failed to place building ${buildingId}, ${cardFailures} out of ${payload.int} of BuildableCard(${cardId}) in village ${villageId}! Card details:`
    }
    throw new Error(`${debugLog}\n${body}`)
})
