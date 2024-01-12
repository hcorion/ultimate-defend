const defendUnitCompositions = {
    grunters: {
        units: [{ amount: 6, unit: PIGLIN_ARCHETYPE.GRUNTER }],
        delayUntilSentOut: 15
    },
    gruntersDisrupt: {
        units: [
            { amount: 6, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.DISRUPTOR }
        ],
        delayUntilSentOut: 15
    },
    bruisersDisrupt: {
        units: [
            { amount: 3, unit: PIGLIN_ARCHETYPE.BRUISER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.DISRUPTOR }
        ],
        delayUntilSentOut: 15
    },
    pyroMD: {
        units: [
            { amount: 6, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 2, unit: PIGLIN_ARCHETYPE.MEDIC }
        ],
        delayUntilSentOut: 15
    },
    fireRain: {
        units: [
            { amount: 5, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.ENGINEER }
        ],
        delayUntilSentOut: 15
    },
    runts: {
        units: [{ amount: 8, unit: PIGLIN_ARCHETYPE.RUNT }],
        delayUntilSentOut: 15
    },
    runtsButTwelveOfThem: {
        units: [{ amount: 12, unit: PIGLIN_ARCHETYPE.RUNT }],
        delayUntilSentOut: 15
    },
    maceMD: {
        units: [
            { amount: 6, unit: PIGLIN_ARCHETYPE.RUNT },
            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
        ],
        delayUntilSentOut: 15
    },
    heavyMetal: {
        units: [
            { amount: 7, unit: PIGLIN_ARCHETYPE.RUNT },
            { amount: 1, unit: PIGLIN_ARCHETYPE.ENGINEER }
        ],
        delayUntilSentOut: 15
    },
    bruisers: {
        units: [{ amount: 2, unit: PIGLIN_ARCHETYPE.BRUISER }],
        delayUntilSentOut: 15
    },
    bruisersButThreeOfThem: {
        units: [{ amount: 3, unit: PIGLIN_ARCHETYPE.BRUISER }],
        delayUntilSentOut: 15
    },
    bobTheBruisers: {
        units: [
            { amount: 1, unit: PIGLIN_ARCHETYPE.ENGINEER },
            { amount: 2, unit: PIGLIN_ARCHETYPE.BRUISER }
        ],
        delayUntilSentOut: 15
    },
    maceAndSlice: {
        units: [
            { amount: 6, unit: PIGLIN_ARCHETYPE.RUNT },
            { amount: 2, unit: PIGLIN_ARCHETYPE.BRUISER }
        ],
        delayUntilSentOut: 15
    },
    bruisersMD: {
        units: [
            { amount: 1, unit: PIGLIN_ARCHETYPE.BRUISER },
            { amount: 4, unit: PIGLIN_ARCHETYPE.RUNT }
        ],
        delayUntilSentOut: 15
    },
    despicableRunts: {
        units: [
            { amount: 7, unit: PIGLIN_ARCHETYPE.RUNT },
            { amount: 1, unit: PIGLIN_ARCHETYPE.PORTAL_GUARD }
        ],
        delayUntilSentOut: 15
    },
    heavyHitter: {
        units: [{ amount: 1, unit: PIGLIN_ARCHETYPE.PORTAL_GUARD }],
        delayUntilSentOut: 15
    },
    bobTheBruisersEnhanced: {
        units: [
            { amount: 5, unit: PIGLIN_ARCHETYPE.RUNT },
            { amount: 1, unit: PIGLIN_ARCHETYPE.ENGINEER },
            { amount: 2, unit: PIGLIN_ARCHETYPE.BRUISER }
        ],
        delayUntilSentOut: 15
    },
    gruntRunts: {
        units: [
            { amount: 3, unit: PIGLIN_ARCHETYPE.RUNT },
            { amount: 3, unit: PIGLIN_ARCHETYPE.GRUNTER }
        ],
        delayUntilSentOut: 15
    },
    despicableRuntsMD: {
        units: [
            { amount: 4, unit: PIGLIN_ARCHETYPE.RUNT },
            { amount: 1, unit: PIGLIN_ARCHETYPE.PORTAL_GUARD },
            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
        ],
        delayUntilSentOut: 15
    },
    healyBruisers: {
        units: [
            { amount: 3, unit: PIGLIN_ARCHETYPE.BRUISER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.MEDIC }
        ],
        delayUntilSentOut: 15
    },
    portalGuard: {
        units: [{ amount: 1, unit: PIGLIN_ARCHETYPE.PORTAL_GUARD }],
        delayUntilSentOut: 15
    },
    blazingClangs: {
        units: [
            { amount: 4, unit: PIGLIN_ARCHETYPE.GRUNTER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.DISRUPTOR }
        ],
        delayUntilSentOut: 15
    },
    clangyBruisers: {
        units: [
            { amount: 3, unit: PIGLIN_ARCHETYPE.BRUISER },
            { amount: 1, unit: PIGLIN_ARCHETYPE.DISRUPTOR }
        ],
        delayUntilSentOut: 15
    },
    bruiserAndRuntsParty: {
        units: [
            { amount: 1, unit: PIGLIN_ARCHETYPE.BRUISER },
            { amount: 4, unit: PIGLIN_ARCHETYPE.RUNT }
        ],
        delayUntilSentOut: 15
    }
}

/* 
    To alter where an encounter is located in a base:
        * Add a tag to building(s) that should have the encounter
        * Set buildableTag to be the same tag
*/
const defendDiscreteEncounters = {
    downtownRush: {
        unitComposition: defendUnitCompositions.fireRain,
        buildableTag: "pigRangeUp",
        leashDistance: 15,
        returnDistance: 10
    },
    foundation: {
        unitComposition: defendUnitCompositions.bruisersMD,
        buildableTag: "pigGate",
        leashDistance: 15,
        returnDistance: 10
    },
    magmaFoundation: {
        unitComposition: defendUnitCompositions.gruntRunts,
        buildableTag: "pigMagmaTower",
        leashDistance: 15,
        returnDistance: 10
    },
    healerHouse: {
        unitComposition: defendUnitCompositions.maceMD,
        buildableTag: "pigCarpenter",
        leashDistance: 15,
        returnDistance: 10
    },
    runtsStandGround: {
        unitComposition: defendUnitCompositions.runts,
        buildableTag: "pigTower",
        leashDistance: 15,
        returnDistance: 10
    },
    gruntersStandGround: {
        unitComposition: defendUnitCompositions.gruntersDisrupt,
        buildableTag: "pigGate",
        leashDistance: 15,
        returnDistance: 10
    },
    rangeRangers: {
        unitComposition: defendUnitCompositions.despicableRuntsMD,
        buildableTag: "pigRangeUp",
        leashDistance: 15,
        returnDistance: 10
    },
    bruisedMagma: {
        unitComposition: defendUnitCompositions.bruisers,
        buildableTag: "pigMagmaTower",
        leashDistance: 15,
        returnDistance: 10
    },
    bruisedArrow: {
        unitComposition: defendUnitCompositions.bruisers,
        buildableTag: "pigTower",
        leashDistance: 15,
        returnDistance: 10
    },
    grunterSpread: {
        unitComposition: defendUnitCompositions.pyroMD,
        buildableTag: "pigSpreader",
        leashDistance: 15,
        returnDistance: 10
    },
    runtSpread: {
        unitComposition: defendUnitCompositions.runts,
        buildableTag: "pigSpreader",
        leashDistance: 15,
        returnDistance: 10
    },
    grunterMagma: {
        unitComposition: defendUnitCompositions.grunters,
        buildableTag: "pigMagmaTower",
        leashDistance: 15,
        returnDistance: 10
    },
    portalGuard: {
        unitComposition: defendUnitCompositions.portalGuard,
        buildableTag: "pigMagmaTower",
        leashDistance: 50,
        returnDistance: 10
    },
    bruisersStandGround: {
        unitComposition: defendUnitCompositions.bruisersDisrupt,
        buildableTag: "airChopper",
        leashDistance: 15,
        returnDistance: 10
    },
    outpostCrateA2: {
        unitComposition: defendUnitCompositions.runtsButTwelveOfThem,
        buildableTag: "pigCrateOutpostL2",
        leashDistance: 100,
        returnDistance: 50
    },
    outpostCrateA3: {
        unitComposition: defendUnitCompositions.heavyHitter,
        buildableTag: "pigCrateOutpostL3",
        leashDistance: 100,
        returnDistance: 50
    },
    outpostCrateB2: {
        unitComposition: defendUnitCompositions.grunters,
        buildableTag: "pigCrateOutpostL2",
        leashDistance: 100,
        returnDistance: 50
    },
    outpostCrateB3: {
        unitComposition: defendUnitCompositions.blazingClangs,
        buildableTag: "pigCrateOutpostL3",
        leashDistance: 100,
        returnDistance: 50
    },
    outpostCrateC2: {
        unitComposition: defendUnitCompositions.bruisersButThreeOfThem,
        buildableTag: "pigCrateOutpostL2",
        leashDistance: 100,
        returnDistance: 50
    },
    outpostCrateC3: {
        unitComposition: defendUnitCompositions.clangyBruisers,
        buildableTag: "pigCrateOutpostL3",
        leashDistance: 100,
        returnDistance: 50
    },
    mediumCrateA2: {
        unitComposition: defendUnitCompositions.blazingClangs,
        buildableTag: "pigCrateOutpostL2",
        leashDistance: 100,
        returnDistance: 50
    },
    mediumCrateA3: {
        unitComposition: defendUnitCompositions.blazingClangs,
        buildableTag: "pigCrateOutpostL3",
        leashDistance: 100,
        returnDistance: 50
    },
    mediumCrateB2: {
        unitComposition: defendUnitCompositions.bruisers,
        buildableTag: "pigCrateOutpostL2",
        leashDistance: 100,
        returnDistance: 50
    },
    mediumCrateB3: {
        unitComposition: defendUnitCompositions.bruisers,
        buildableTag: "pigCrateOutpostL3",
        leashDistance: 100,
        returnDistance: 50
    },
    largeCrateLevel2: {
        unitComposition: defendUnitCompositions.portalGuard,
        buildableTag: "pigCrateOutpostL2",
        leashDistance: 100,
        returnDistance: 50
    }
}

const defendDiscreteEncounterVariations = {
    [BASE_SIZE_LARGE]: {
        [VILLAGE_VARIATION_A]: {
            ["de0"]: { type: defendDiscreteEncounters.bruisedMagma, amount: 5 },
            ["de1"]: { type: defendDiscreteEncounters.bruisersStandGround, amount: 1 },
            ["de2"]: { type: defendDiscreteEncounters.portalGuard, amount: 1 },
            ["de3"]: { type: defendDiscreteEncounters.largeCrateLevel2, amount: 1 }
        }
    }
}

const defendRallyPointVariations = {
    [BASE_SIZE_LARGE]: {
        [VILLAGE_VARIATION_A]: {
            [DEFEND_DEFEND_AI.CG_0]: {
                controlGroupTag: DEFEND_DEFEND_AI.CG_0,
                composition: defendUnitCompositions.heavyHitter,
                ais: [[DEFEND_DEFEND_AI.TAG, 100]],
                positionTags: [DEFEND_DEFEND_AI.RALLY_POINT],
                positionTagExcludes: []
            },
            [DEFEND_SIEGE_AI.CG_0]: {
                controlGroupTag: DEFEND_SIEGE_AI.CG_0,
                composition: defendUnitCompositions.gruntRunts,
                ais: [[DEFEND_SIEGE_AI.TAG, 100]],
                positionTags: [DEFEND_SIEGE_AI.RALLY_POINT],
                positionTagExcludes: []
            },
            [DEFEND_SIEGE_AI.CG_1]: {
                controlGroupTag: DEFEND_SIEGE_AI.CG_0,
                composition: defendUnitCompositions.bobTheBruisersEnhanced,
                ais: [[DEFEND_SIEGE_AI.TAG, 100]],
                positionTags: [DEFEND_SIEGE_AI.RALLY_POINT],
                positionTagExcludes: []
            },
            [DEFEND_UNIQUE_AI.CG_0]: {
                controlGroupTag: DEFEND_UNIQUE_AI.CG_0,
                composition: defendUnitCompositions.despicableRuntsMD,
                ais: [[DEFEND_UNIQUE_AI.TAG, 100]],
                positionTags: [DEFEND_DEFEND_AI.RALLY_POINT],
                positionTagExcludes: []
            }
        }
    }
}

const defendVal = {
    aiConfig: {
        [DEFEND_UNIQUE_AI.TAG]: {
            controllerArchetype: "badger:ai_entity_defend_offensive",
            controllerTag: "defendHordeUniqueAi",
            waveReinforcementsEnabled: false,
            reinforcementPositionTagsToSearchFor: ["defendHordeDefendAiRally"],
            reinforcementControlGroupTag: "defendHordeUnique0",
            reinforcementInterval: 10,
            reinforcementPercentage: 100
        },
        [DEFEND_SIEGE_AI.TAG]: {
            controllerArchetype: "badger:ai_entity_defend_siege",
            controllerTag: "defendHordeSiegeAi",
            waveReinforcementsEnabled: false,
            reinforcementPositionTagsToSearchFor: ["defendHordeSiegeAiRally"],
            reinforcementControlGroupTag: "defendHordeSiege0",
            reinforcementInterval: 10,
            reinforcementPercentage: 100
        },
        [DEFEND_DEFEND_AI.TAG]: {
            controllerArchetype: "badger:ai_entity_defend_defensive",
            controllerTag: "defendHordeDefendAi",
            waveReinforcementsEnabled: false,
            reinforcementPositionTagsToSearchFor: ["defendHordeDefendAiRally"],
            reinforcementControlGroupTag: "defendHordeDefend0",
            reinforcementInterval: 10,
            reinforcementPercentage: 100
        }
    },
    audioPerPhaseArray: ["initial_defense", "phase1_defense", "phase2_defense", "phase3_defense", "phase4_defense"],
    audioPerBossPhaseArray: ["initial", "phase1", "phase2", "phase3", "phase4"],
    escalation: {
        outerWallDestroyed: "defendOuterWallDestroyed",
        innerWallDestroyed: "defendInnerWallDestroyed",
        innerKeep: "innerKeep",
        playerCloseToBase: "playerCloseToBase"
    },
    message: {
        escalationPhase2: "piglin_defend_escalation1",
        escalationPhase3: "piglin_defend_escalation2",
        escalationPhase4: "piglin_defend_escalation3",
        massRebuildIsHappening: "piglin_defend_mass_rebuild"
    },
    global: {
        hasVisited: "defend_faction_has_been_visted",
        lavaSprayerTacticPresented: "defend_lava_sprayer_tactic_presented",
        basesDestroyed: "defend_bases_destroyed",
        largeBasesDestroyed: "defend_large_bases_destroyed",
        bossIntroPresented: "defend_boss_intro_presented",
        bossSpawned: "defend_boss_spawned",
        hasVisitedCoilBase: "defend_faction_has_visited_coil_base",
        doPortalGuardSpawnCallbackOnce: "defend_do_portal_guard_spawn_callback_once",
        doBruiserSpawnCallbackOnce: "defend_do_bruiser_spawn_callback_once",
        baseAudioPhase: "defend_base_audio_phase",
        anyBasesKilled: "defend_any_bases_killed",
        destroyedBuildingsCount: "defendMassRebuildBuildingsDestroyedCount",
        engineerBuildTimerDelay: "engineerBuildTimerDelay",
        pathOptions: "defend_path_options"
    },
    village: {
        towersDestroyed: "towers_Destroyed"
    },
    raidingPartyVars: {
        cageTag: "defend_raiding_party_cage",
        cageAmount: 2
    },
    cinematic: {
        firstTimeNonShieldBaseIntro: "hrd01_c51_portal",
        shieldIntro: "hrd01_c50a_shield_intro",
        bossDead: "hrd01_c05_defend_boss_death",
        bossIntro: "hrd01_c05_defend_boss_arrives"
    },
    VO: {
        postIntroVO: "defense_intro",
        postShieldIntroVO: "base_attack_lava_post_nis",
        postBossSpawnVO: "defense_boss_overworld",
        postBossDeath: "defense_boss_death_initial",
        postBossDeathDelayedReaction: "defense_boss_death_subsequent",
        bigUnit: ["piglin_big_unit_defend_1", "piglin_big_unit_defend_2", "piglin_big_unit_defend_3"],
        wallDestroyed: ["piglin_defend_escalation_2", "piglin_defend_escalation_3"]
    },
    consts: {
        timeUntilBigUnit: 5,
        timeUntilWallDestroyed: 3,
        smallSizeVODistance: 250,
        mediumSizeVODistance: 270,
        largeSizeVODistance: 400,
        bossSizeVODistance: 600
    },
    music: {
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: "badger:music_combat_defend_base_large_1"
        }
    },
    barracks: {
        [BARRACKS_NAME_SIEGER]: SiegerBarracksConfig_DefendFaction_Variations,
        [BARRACKS_NAME_FIGHTER]: FighterBarracksConfig_DefendFaction_Variations,
        [BARRACKS_NAME_DISRUPTOR]: DisruptorBarracksConfig_DefendFaction_Variations,
        [BARRACKS_NAME_SPECIALIST]: SpecialistBarracksConfig_DefendFaction_Variations
    },
    baseSetup: {
        reescalationSnippet: "spe_defend_gameplay",
        [BASE_SIZE_LARGE]: {
            boundsTV: "badger:spatial_trigger_zone_piglin_defend_base_large",
            reescalation: true,
            snippets: [
                { snippet: "spe_defend_general", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER_OR_MOB },
                { snippet: "spe_piglin_base_onboarding", type: TV_TYPE.BOUNDS, event: TV_EVENT.ENTER, tagset: TAGSET_PLAYER, gv: ONBOARDING_GLOBALS.ONBOARDING_ENABLED }
            ]
        }
    },
    amountOfDefendFactionLargeBases: 1,
    villageAngerRadius: 160,
    insideInnerWallsRadius: 60,
    /*
    --------------------------------
    ----- VILLAGE COMPOSITIONS -----  
    --------------------------------
    */
    villageComposition: {
        /*
        =================
        ===== LARGE =====  
        =================
        */
        large: {
            portalHpHigh: {
                gatherPercentage: 100,
                aiDistribution: [
                    ["attackAi", 0],
                    ["defendAi", 60],
                    ["siegeAi", 40]
                ],
                spawnedUnits: {
                    villageVariationA: [
                        { amount: 1, unit: "badger:piglin_engineer" },
                        { amount: 2, unit: "badger:piglin_bruiser" }
                    ]
                }
            },
            portalHpMed: {
                gatherPercentage: 90,
                aiDistribution: [
                    ["attackAi", 10],
                    ["defendAi", 60],
                    ["siegeAi", 30]
                ],
                spawnedUnits: {
                    villageVariationA: [
                        { amount: 1, unit: "badger:piglin_engineer" },
                        { amount: 2, unit: "badger:piglin_bruiser" }
                    ]
                }
            },
            portalHpLow: {
                gatherPercentage: 70,
                aiDistribution: [
                    ["attackAi", 20],
                    ["defendAi", 60],
                    ["siegeAi", 20]
                ],
                spawnedUnits: {
                    villageVariationA: [
                        { amount: 1, unit: "badger:piglin_engineer" },
                        { amount: 2, unit: "badger:piglin_bruiser" }
                    ]
                }
            },
            phase1PG: {
                gatherPercentage: 100,
                aiDistribution: [
                    ["attackAi", 0],
                    ["defendAi", 100],
                    ["siegeAi", 0]
                ],
                spawnedUnits: {
                    villageVariationA: [{ amount: 1, unit: "badger:piglin_portal_guard" }]
                }
            },
            phase2: {
                gatherPercentage: 50,
                aiDistribution: [
                    ["attackAi", 10],
                    ["defendAi", 40],
                    ["siegeAi", 30]
                ],
                spawnedUnits: {
                    villageVariationA: [
                        { amount: 1, unit: "badger:piglin_engineer" },
                        { amount: 2, unit: "badger:piglin_bruiser" }
                    ]
                }
            },
            phase2PG: {
                gatherPercentage: 40,
                aiDistribution: [
                    ["attackAi", 25],
                    ["defendAi", 75],
                    ["siegeAi", 0]
                ],
                spawnedUnits: {
                    villageVariationA: [{ amount: 1, unit: "badger:piglin_portal_guard" }]
                }
            },
            phase3: {
                gatherPercentage: 75,
                aiDistribution: [
                    ["attackAi", 10],
                    ["defendAi", 40],
                    ["siegeAi", 30]
                ],
                spawnedUnits: {
                    villageVariationA: [
                        { amount: 1, unit: "badger:piglin_engineer" },
                        { amount: 2, unit: "badger:piglin_bruiser" }
                    ]
                }
            },
            phase3PG: {
                gatherPercentage: 40,
                aiDistribution: [
                    ["attackAi", 0],
                    ["defendAi", 100],
                    ["siegeAi", 0]
                ],
                spawnedUnits: {
                    villageVariationA: [{ amount: 1, unit: "badger:piglin_portal_guard" }]
                }
            },
            phase4: {
                gatherPercentage: 90,
                aiDistribution: [
                    ["attackAi", 10],
                    ["defendAi", 60],
                    ["siegeAi", 30]
                ],
                spawnedUnits: {
                    villageVariationA: [
                        { amount: 1, unit: "badger:piglin_disruptor" },
                        { amount: 2, unit: "badger:piglin_bruiser" }
                    ]
                }
            },
            phase4PG: {
                gatherPercentage: 40,
                aiDistribution: [
                    ["attackAi", 0],
                    ["defendAi", 100],
                    ["siegeAi", 0]
                ],
                spawnedUnits: {
                    villageVariationA: [{ amount: 1, unit: "badger:piglin_portal_guard" }]
                }
            },
            tier2StructureDamaged: {
                gatherPercentage: 30,
                aiDistribution: [
                    ["attackAi", 20],
                    ["defendAi", 0],
                    ["siegeAi", 30]
                ],
                spawnedUnits: {
                    villageVariationA: [
                        { amount: 1, unit: "badger:piglin_engineer" },
                        { amount: 2, unit: "badger:piglin_bruiser" }
                    ]
                }
            },
            tier3StructureDamaged: {
                gatherPercentage: 60,
                aiDistribution: [
                    ["attackAi", 15],
                    ["defendAi", 0],
                    ["siegeAi", 45]
                ],
                spawnedUnits: {
                    villageVariationA: [
                        { amount: 1, unit: "badger:piglin_engineer" },
                        { amount: 2, unit: "badger:piglin_bruiser" }
                    ]
                }
            },
            wallDamaged: {
                gatherPercentage: 0,
                aiDistribution: [
                    ["attackAi", 0],
                    ["defendAi", 0],
                    ["siegeAi", 0]
                ],
                spawnedUnits: {
                    villageVariationA: [
                        { amount: 1, unit: "badger:piglin_engineer" },
                        { amount: 2, unit: "badger:piglin_bruiser" }
                    ]
                }
            },
            tier2StructureDestroyed: {
                gatherPercentage: 30,
                aiDistribution: [
                    ["attackAi", 40],
                    ["defendAi", 0],
                    ["siegeAi", 25]
                ],
                spawnedUnits: {
                    villageVariationA: [
                        { amount: 1, unit: "badger:piglin_engineer" },
                        { amount: 2, unit: "badger:piglin_bruiser" }
                    ]
                }
            },
            tier3StructureDestroyed: {
                gatherPercentage: 60,
                aiDistribution: [
                    ["attackAi", 45],
                    ["defendAi", 5],
                    ["siegeAi", 30]
                ],
                spawnedUnits: {
                    villageVariationA: [
                        { amount: 1, unit: "badger:piglin_disruptor" },
                        { amount: 2, unit: "badger:piglin_bruiser" }
                    ]
                }
            },
            playerStructureBuilt: {
                gatherPercentage: 20,
                aiDistribution: [
                    ["attackAi", 0],
                    ["defendAi", 0],
                    ["siegeAi", 60]
                ],
                spawnedUnits: {
                    villageVariationA: [
                        { amount: 1, unit: "badger:piglin_engineer" },
                        { amount: 2, unit: "badger:piglin_bruiser" }
                    ]
                }
            }
        }
    }
}

const defBattleRepairsVal = {
    responseCountVariable: "vv_response_battle_repair_count",
    responseLimit: {
        [BASE_SIZE_LARGE]: 3
    },
    buildingTag: "defendBattleRepairBuilding", // this is the card tag and the actual tag
    squadConfigs: {
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: {
                // Runt Grunt
                engineerCount: 1,
                units: [Unit("badger:piglin_bruiser", 4), Unit("badger:piglin_disruptor", 1)]
            }
        }
    },
    buildConfigs: {
        innerKeepWall: {
            buildCards: () => {
                return BuildableCard("piglinTower")
            },
            placementRules: () => {
                return [ZoneFilterCard("defInnerKeepWall"), PlacementPreferenceCard("placeCloseToWalls"), PlacementPreferenceCard("towardsEnemies"), TagCard("defendBattleRepairBuilding")]
            }
        },
        outterKeepWall: {
            buildCards: () => {
                return BuildableCard("piglinTower")
            },
            placementRules: () => {
                return [ZoneFilterCard("defOuterWalls"), PlacementPreferenceCard("placeCloseToWalls"), PlacementPreferenceCard("towardsEnemies"), TagCard("defendBattleRepairBuilding")]
            }
        }
    }
}

const GetDefendAIConfig = () => defendVal.aiConfig

const GetDefendDiscreteEncountersData = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)
    const data = GetChild(defendDiscreteEncounterVariations, size, flavour)
    if (data === undefined) {
    }
    return data
}

const GetDefendRallyPoints = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)
    const data = GetChild(defendRallyPointVariations, size, flavour)
    if (data === undefined) {
    }
    return data
}

const _CheckIfDefendFactionIsDefeated = () => {
    if (IsPiglinFactionDefeated(FACTION_NAME_DEFEND)) {
        GV_ROAMING_PIGLIN_DEFEND_FACTION_SPAWNERS.forEach((roamingGV) => {
            OUTPUT_SetGlobalVariable(roamingGV, 1)
        })

        // Correct horde decks since one horde just went out of action
        ReplenishNightOutpostHordeDeck()
    }
}

SNIPPET_RuleInitialized(GAME_RULE_NAMES.campaignBasesEnabled, (rule) => {
    if (rule.value) {
        OUTPUT_SetGlobalVariable(defendVal.global.engineerBuildTimerDelay, 5)

        LISTENFOR_VillageGenerated({
            snippet: "vg_defend",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: FACTION_NAME_DEFEND
        })

        LISTENFOR_VillageGenerated({
            snippet: "vg_defend_responses",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            factionName: FACTION_NAME_DEFEND
        })

        LISTENFOR_ExternalEvent({
            snippet: "ee_defend_portal_on",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "defend_portal_on"
        })

        LISTENFOR_ExternalEvent({
            snippet: "ee_defend_portal_off",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "defend_portal_off"
        })

        LISTENFOR_ExternalEvent({
            snippet: "ee_defend_phase_engineer",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            eventName: "forcephaseengineer"
        })
    }
})

SNIPPET_ExternalEvent("ee_defend_portal_on", () => {
    const introVar = defendVal.cinematic.shieldIntro
    const player = RandomEntity(GetPlayers())
    const portal = FILTER_ByDistance(QUERY_GetEntitiesWithTags("portal_piglin"), player, 500)
    const villageId = QUERY_GetVillageIDFromEntity(portal)

    LISTENFOR_CinematicEvent({
        snippet: "ce_defend_portal_shield_on",
        ownerVillageId: villageId,
        eventName: "portal_shield_on"
    })

    OUTPUT_TriggerCinematic(introVar, [player])
})

SNIPPET_ExternalEvent("ee_defend_portal_off", () => {
    const introVar = defendVal.cinematic.shieldDown
    const player = RandomEntity(GetPlayers())
    const portal = FILTER_ByDistance(QUERY_GetEntitiesWithTags("portal_piglin"), player, 500)
    const piglinStructure = RandomEntity(QUERY_GetEntitiesWithTags("piglin"))
    const villageId = QUERY_GetVillageIDFromEntity(portal)

    LISTENFOR_CinematicEvent({
        snippet: "ce_defend_portal_shield_off",
        ownerVillageId: villageId,
        eventName: "portal_shield_off"
    })

    OUTPUT_TriggerCinematic(introVar, [piglinStructure, portal])
})

SNIPPET_ExternalEvent("ee_defend_phase_engineer", () => {
    let villages = QUERY_GetAllAliveVillages()
    villages = FILTER_ByVillageSize(villages, BASE_SIZE_BOSS)

    const vid = QUERY_GetVillageIDFromEntity(villages)
    _MagmaBossActivatePhaseEngineers(vid)
})

SNIPPET_VillageDestroyed("vd_magma_boss_base_destroyed", (villageId) => {
    _onDefendBossBaseDefeated(villageId)
})

const _onDefendBossBaseDefeated = (villageId) => {
    if (DoOnce("magmaBossKilled")) {
        UnlockJournalEntry(JOURNAL_UNLOCKS.HORDE_DEFEND_BOSS)

        OUTPUT_AddOrSubtractObjectiveProgress("objectives.defeatBastion", 1)

        const villageEntity = GetVillageEntityFromID(villageId)
        OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.BOSS, MAP_BOSS.DEFEATED)

        _CheckIfDefendFactionIsDefeated()

        TelemetrySendBossKilled(GetAllPlayers(), "DefendBoss") //telemetry achievement event for killing boss
        TelemetrySendKeyActionCompletedServerEvent(BOSS_BASE_VALS.telemetry.defendBossDefeat)

        LISTENFOR_LocalTimer({
            snippet: "lt_post_portal_death_boss_action",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime: 5,
            payloadString: defendVal.VO.postBossDeath
        })
    }
}

SNIPPET_CinematicStarted("cs_defend_boss_dead", (payload) => {
    const bossPortal = GetVillagePortal(payload.ownerVillageId)
    //make portal vulnerable
    SetPortalInvulnerable(payload.ownerVillageId, false)
    //set portal health to 5%
    OUTPUT_SetHealthPercent(bossPortal, 5)
    Once()
})

SNIPPET_BuildingComplete("bc_defend_portal", (portalEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(portalEntity)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)

    //portal destruction cineamtics for mob alliances also play from here
    LISTENFOR_DeferredDeath({
        snippet: "dd_defend_portal_destruction",
        ownerVillageId: villageId,
        villageId: villageId,
        payloadEntities: portalEntity
    })

    if (baseSize !== BASE_SIZE_SMALL && baseSize !== BASE_SIZE_MEDIUM && baseSize !== BASE_SIZE_LARGE && baseSize !== BASE_SIZE_BOSS) {
        return
    }

    OUTPUT_SetObjectiveHealthBarVisible(portalEntity, false)

    if (baseSize !== BASE_SIZE_BOSS) {
        SetAudioPhaseForBase(villageId, defendVal.audioPerPhaseArray[0])
    } else if (baseSize === BASE_SIZE_BOSS) {
        SetAudioPhaseForBase(villageId, defendVal.audioPerBossPhaseArray[0])
    }

    //INNER KEEP TRIGGER VOLUME
    const defenseInnerKeepTV = SpawnTriggerVolumeWithMultipleTagsets(portalEntity, portalEntity, "badger:spatial_trigger_defense_inner", TEAM_ORANGE, villageId, true, TAGSET_PLAYER_OR_MOB)

    LISTENFOR_SpatialPartitionEntered({
        snippet: "spe_defend_player_enter_inner_keep",
        ownerVillageId: villageId,
        triggerEntity: defenseInnerKeepTV
    })

    LISTENFOR_SpatialPartitionExited({
        snippet: "spe_defend_player_exit_inner_keep",
        ownerVillageId: villageId,
        triggerEntity: defenseInnerKeepTV
    })

    //LISTEN FOR DEFEND Faction DESTRUCTION
    LISTENFOR_VillageDestroyed({
        snippet: "vd_defend_faction_portal",
        ownerVillageId: villageId,
        villageId: villageId,
        payloadEntities: defenseInnerKeepTV, // clean this on portal desruction
        despawned: false
    })

    BASE_InitPiglinStructureDamagedResponse(villageId, [
        { snippetName: "hc_defend_portal_hp_high", healthThreshold: 0.99, includeTags: ["portal_piglin"] },
        { snippetName: "hc_defend_portal_hp_high", healthThreshold: 0.89, includeTags: ["portal_piglin"] },
        { snippetName: "hc_defend_portal_hp_mid", healthThreshold: 0.79, includeTags: ["portal_piglin"] },
        { snippetName: "hc_defend_portal_hp_mid", healthThreshold: 0.69, includeTags: ["portal_piglin"] },
        { snippetName: "hc_defend_portal_hp_mid", healthThreshold: 0.59, includeTags: ["portal_piglin"] },
        { snippetName: "hc_defend_portal_hp_low", healthThreshold: 0.49, includeTags: ["portal_piglin"] },
        { snippetName: "hc_defend_portal_hp_low", healthThreshold: 0.39, includeTags: ["portal_piglin"] },
        { snippetName: "hc_defend_portal_flood_stinger", healthThreshold: 0.34, includeTags: ["portal_piglin"] },
        { snippetName: "hc_defend_portal_extreme", healthThreshold: 0.34, includeTags: ["portal_piglin"] },
        { snippetName: "hc_defend_portal_extreme", healthThreshold: 0.24, includeTags: ["portal_piglin"] },
        { snippetName: "hc_defend_portal_extreme", healthThreshold: 0.14, includeTags: ["portal_piglin"] },
        { snippetName: "hc_defend_portal_extreme", healthThreshold: 0.09, includeTags: ["portal_piglin"] },
        { snippetName: "hc_defend_portal_extreme", healthThreshold: 0.05, includeTags: ["portal_piglin"] }
    ])

    //set up proper distance checks based on base size

    BASE_InitPiglinStructureDestroyedResponse(villageId, [
        //goldmine / nether spreader destroyed squad
        { snippetName: "ed_defend_tier_1_piglin_structure_destroyed_squad", debounceTimer: 60.0, distanceCheck: 250, includeTags: ["pigGoldMine"] },
        { snippetName: "ed_defend_tier_1_piglin_structure_destroyed_squad", debounceTimer: 60.0, distanceCheck: 250, includeTags: ["pigSpreader"] },
        //barracks / arrow tower destroyed squad
        { snippetName: "ed_defend_tier_2_piglin_structure_destroyed_squad", debounceTimer: 60.0, distanceCheck: 250, includeTags: ["barracks"] },
        { snippetName: "ed_defend_tier_2_piglin_structure_destroyed_squad", debounceTimer: 60.0, distanceCheck: 250, includeTags: ["pigTower"] },
        //-----tier 3 piglin structure destroyed responses-----
        //magma tower destroyed squad
        { snippetName: "ed_defend_magma_tower_barracks_squad", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["pigMagmaTower"] },
        //regenerator destroyed squad
        { snippetName: "ed_defend_building_regenerator_destroyed", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["pigCarpenter"] },
        //range extender destroyed squad
        { snippetName: "ed_defend_range_extender_destroyed", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["pigRangeUp"] },
        //general wall breach squad
        { snippetName: "ed_defend_wall_breach", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["piglin_wall_outer"] },
        { snippetName: "ed_defend_wall_breach", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["pigTower"] },
        { snippetName: "ed_defend_wall_breach", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["pigGate"] },
        { snippetName: "ed_defend_wall_breach", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["piglin_wall_inner"] },
        { snippetName: "ed_defend_wall_breach", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["pigTowerInner"] },
        { snippetName: "ed_defend_wall_breach", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["pigGateInner"] },
        //phase 2 wall check
        { snippetName: "ed_defend_phase_trigger_wall_destruction", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["piglin_wall_outer"], excludeTags: ["piglin_wall_inner"] },
        { snippetName: "ed_defend_phase_trigger_wall_destruction", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["pigTowerOuter"], excludeTags: ["pigTowerInner"] },
        { snippetName: "ed_defend_phase_trigger_wall_destruction", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["pigGateOuter"], excludeTags: ["pigGateInner"] },
        //phase 3 wall check
        { snippetName: "ed_defend_phase_trigger_wall_destruction_inner", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["piglin_wall_inner"], excludeTags: ["piglin_wall_outer"] },
        { snippetName: "ed_defend_phase_trigger_wall_destruction_inner", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["pigTowerInner"], excludeTags: ["pigTowerOuter"] },
        { snippetName: "ed_defend_phase_trigger_wall_destruction_inner", debounceTimer: 120.0, distanceCheck: 250, includeTags: ["pigGateInner"], excludeTags: ["pigGateOuter"] },
        //battle repairs
        { snippetName: "ed_defend_battle_repairs_inner", debounceTimer: 15, distanceCheck: 250, includeTags: ["piglin_wall_inner"], excludeTags: [] },
        { snippetName: "ed_defend_battle_repairs_outer", debounceTimer: 15, distanceCheck: 250, includeTags: ["piglin_wall_outer"], excludeTags: [] }
    ])

    BASE_InitPiglinStructureDamagedResponse(villageId, [
        //goldmine / nether spreader damaged squad
        { snippetName: "sd_defend_tier_1_piglin_structure_damaged_squad", debounceTimer: 120.0, includeTags: ["pigGoldMine"] },
        { snippetName: "sd_defend_tier_1_piglin_structure_damaged_squad", debounceTimer: 120.0, includeTags: ["pigSpreader"] },
        //barracks / arrow tower damaged squad
        { snippetName: "sd_defend_tier_2_piglin_structure_damaged_squad", debounceTimer: 120.0, includeTags: ["barracks"] },
        { snippetName: "sd_defend_tier_2_piglin_structure_damaged_squad", debounceTimer: 120.0, includeTags: ["pigTower"] },
        //-----tier 3 piglin structure destroyed responses-----
        //magma tower damaged squad
        { snippetName: "sd_defend_magma_tower_barracks_squad", debounceTimer: 120.0, includeTags: ["pigMagmaTower"] },
        //regenerator damaged squad
        { snippetName: "sd_defend_building_regenerator_damaged", debounceTimer: 120.0, includeTags: ["pigCarpenter"] },
        //range extender damaged squad
        { snippetName: "sd_defend_range_extender_damaged", debounceTimer: 120.0, includeTags: ["pigRangeUp"] },
        //general wall damaged squad
        { snippetName: "sd_defend_wall_breach", debounceTimer: 120.0, includeTags: ["piglin_wall_outer"] },
        { snippetName: "sd_defend_wall_breach", debounceTimer: 120.0, includeTags: ["pigGate"] },
        { snippetName: "sd_defend_wall_breach", debounceTimer: 120.0, includeTags: ["piglin_wall_inner"] },
        { snippetName: "sd_defend_wall_breach", debounceTimer: 120.0, includeTags: ["pigGateInner"] }
    ])

    BASE_InitPlayerBuiltStructureResponse(villageId, [
        //tier 1 player structure built squad // tower // wall // gate // freeze trap
        { snippetName: "pb_defend_tier_1_structure_squad", debounceTimer: 120.0, distanceCheck: 350, includeTags: ["tier1PlayerStructure"], excludeTags: ["playerBridge"] },
        //tier 2 player structure built squad // spawner // Crows nest // War drums
        { snippetName: "pb_defend_tier_2_structure_squad", debounceTimer: 120.0, distanceCheck: 350, includeTags: ["tier2PlayerStructure"], excludeTags: ["playerBridge"] },
        //tier 3 player structure built squad // RSL // Kaboomery // Outpost // mason // carpenter // POI towers
        { snippetName: "pb_defend_tier_3_structure_squad", debounceTimer: 120.0, distanceCheck: 350, includeTags: ["tier3PlayerStructure"], excludeTags: ["playerBridge"] },
        //bridge squad
        { snippetName: "pb_defend_bridge_squad", debounceTimer: 120.0, distanceCheck: 350, includeTags: ["buildable_structure", "playerBridge"] }
    ])

    if (baseSize === BASE_SIZE_BOSS) {
        SetupPortalInvulnerabilityVO(villageId)
    }
})

SNIPPET_DeferredDeath("dd_defend_portal_destruction", (entity, _payload) => {
    PlayPortalDestructionCine(entity, FACTION_NAME_DEFEND)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("hc_defend_portal_hp_high", (villageId, _portal) => {
    Once()
    const spawnLocation = GetVillagePortalSpawnLocation(villageId)
    const villageSize = QUERY_GetFactionSizeFromVillageID(villageId)

    if (!IsBossVillage(villageId)) {
        SpawnVillageVariationUnits(villageId, defendVal.villageComposition[villageSize].portalHpHigh.spawnedUnits, spawnLocation)
    }

    Once()
})

BASE_DeclarePiglinStructureDamagedResponseHandler("hc_defend_portal_hp_mid", (villageId, _portal) => {
    Once()
    const spawnLocation = GetVillagePortalSpawnLocation(villageId)
    const villageSize = QUERY_GetFactionSizeFromVillageID(villageId)

    if (!IsBossVillage(villageId)) {
        SpawnVillageVariationUnits(villageId, defendVal.villageComposition[villageSize].portalHpMed.spawnedUnits, spawnLocation)
    }

    Once()
})

BASE_DeclarePiglinStructureDamagedResponseHandler("hc_defend_portal_hp_low", (villageId, _portal) => {
    Once()
    const spawnLocation = GetVillagePortalSpawnLocation(villageId)
    const villageSize = QUERY_GetFactionSizeFromVillageID(villageId)

    if (!IsBossVillage(villageId)) {
        SpawnVillageVariationUnits(villageId, defendVal.villageComposition[villageSize].portalHpLow.spawnedUnits, spawnLocation)
    }

    Once()
})

BASE_DeclarePiglinStructureDamagedResponseHandler("hc_defend_portal_flood_stinger", (villageId, portal) => {
    Once()

    _playDefendTargetStinger(portal)

    LISTENFOR_LocalTimer({
        snippet: "lt_delayed_vo_defend_portal",
        ownerVillageId: villageId,
        waitTime: 2,
        payloadInt: villageId
    })

    Once()
})

SNIPPET_LocalTimer("lt_delayed_vo_defend_portal", (payload) => {
    PlayCommonPortalHealthGroup2VO(payload.int)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("hc_defend_portal_extreme", (villageId, portal) => {
    const villageSize = QUERY_GetFactionSizeFromVillageID(villageId)

    SetEscalationValueAndUpdateAllBarracksForVillageVariation(villageId, defendVal.barracks, 42)

    const spawnLocation = GetVillagePortalSpawnLocation(villageId)
    if (!IsBossVillage(villageId)) {
        SpawnVillageVariationUnits(villageId, defendVal.villageComposition[villageSize].portalHpLow.spawnedUnits, spawnLocation)
    }

    let target = portal
    const intrudingEntities = QUERY_GetEntitiesWithTags([defendVal.escalation.innerKeep])
    if (HasEntities(intrudingEntities)) {
        target = FILTER_ByClosest(intrudingEntities, portal, 1)
    }
    GatherNearestUnitsAndSendToLocation(TAGS_PIGLIN_MOB, [], villageId, target, 100, "", "")
})

//Experimental Prototype Setup
SNIPPET_BuildingComplete("bc_defend_sub_structures_count", (crystalEntity, payload) => {
    const villageId = payload.ownerVillageId
    const substructures = GetVillageVariable(villageId, "remaining_sub_structures") + 1
    SetVillageVariable(villageId, "remaining_sub_structures", substructures)
})

SNIPPET_NonPopCappedEntityDestroyed("ed_defend_sub_structures", (entity, payload) => {
    const villageId = payload.ownerVillageId
    const substructures = DeltaVillageVariable(villageId, "remaining_sub_structures", -1)
    if (substructures === 0) {
        SetPortalInvulnerable(villageId, false)
    }
})

//fighter barracks built
SNIPPET_BuildingComplete("bc_defend_fighter_barracks", (spawner, _payload) => {
    SetBarracksConfigForVillageVariation(spawner, FighterBarracksConfig_DefendFaction_Variations)
})

//sieger barracks built
SNIPPET_BuildingComplete("bc_defend_sieger_barracks", (spawner, _payload) => {
    SetBarracksConfigForVillageVariation(spawner, SiegerBarracksConfig_DefendFaction_Variations)
})

//disruptor barracks built
SNIPPET_BuildingComplete("bc_defend_disruptor_barracks", (spawner, _payload) => {
    SetBarracksConfigForVillageVariation(spawner, DisruptorBarracksConfig_DefendFaction_Variations)
})

SNIPPET_VillageDestroyed("vd_defend_faction_portal", (villageId, payload) => {
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)

    _CheckIfDefendFactionIsDefeated()

    const triggerVolumesToClean = payload.entities
    OUTPUT_DespawnEntities(triggerVolumesToClean)

    //Music: Stop combat music
    const portalAudioEntity = FILTER_ByVillageID(QUERY_GetEntitiesWithTags(["portalAudioTag"]), villageId)
    OUTPUT_SetGlobalVariable(defendVal.global.baseAudioPhase, 0)
    OUTPUT_TriggerPresentationEvent(portalAudioEntity, "on_piglin_combat_stop")

    IncrementGlobal(defendVal.global.basesDestroyed)
    if (baseSize === BASE_SIZE_LARGE) {
        IncrementGlobal(defendVal.global.largeBasesDestroyed)
    }

    OUTPUT_SetGlobalVariable(defendVal.global.anyBasesKilled, 1)

    // Cinematics
    SetEscalationValueAndUpdateAllBarracksForVillageVariation(villageId, defendVal.barracks, 0)
})

const _DeckShuffleDefend = (deck) => {
    DECK_ShuffleGroup(deck, RANDOM_GROUP_DEFEND_HORDE)
}

//generate base
SNIPPET_VillageGenerated("vg_defend_responses", (villageId, _payload) => {
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)

    //portal built
    LISTENFOR_BuildingComplete({
        snippet: "bc_defend_portal",
        ownerVillageId: villageId,
        includeTags: ["portal_piglin"],
        villageId: villageId
    })

    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_defend_sub_structures",
        ownerVillageId: villageId,
        includeTags: ["pigCrystal"],
        villageId: villageId,
        factionName: FACTION_NAME_DEFEND
    })
    LISTENFOR_BuildingComplete({
        snippet: "bc_defend_sub_structures_count",
        ownerVillageId: villageId,
        includeTags: ["pigCrystal"],
        villageId: villageId,
        factionName: FACTION_NAME_DEFEND
    })

    //Base setup
    LISTENFOR_VillageFinishedBuilding({
        snippet: "vfb_defend_base_setup",
        ownerVillageId: villageId,
        villageId: villageId
    })

    const discreteEncounters = GetDefendDiscreteEncountersData(villageId)
    if (discreteEncounters !== undefined) {
        CreateDiscreteEncountersListeners(villageId, discreteEncounters)
    }

    //Audio
    SetupAudioEntityForBase(villageId, defendVal.music)

    //ALL BASES
    //FIGHTER barracks complete
    LISTENFOR_BuildingComplete({
        snippet: "bc_defend_fighter_barracks",
        ownerVillageId: villageId,
        includeTags: [BARRACKS_NAME_FIGHTER],
        villageId: villageId
    })
    //SIEGER barracks complete
    LISTENFOR_BuildingComplete({
        snippet: "bc_defend_sieger_barracks",
        ownerVillageId: villageId,
        includeTags: [BARRACKS_NAME_SIEGER],
        villageId: villageId
    })
    //DISRUPTOR barracks complete
    LISTENFOR_BuildingComplete({
        snippet: "bc_defend_disruptor_barracks",
        ownerVillageId: villageId,
        includeTags: [BARRACKS_NAME_DISRUPTOR],
        villageId: villageId
    })

    // Fancy lava coil behaviour
    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_north_east_tower_destroyed",
        ownerVillageId: villageId,
        includeTags: ["defNorthEastCoil"],
        villageId: villageId,
        factionName: FACTION_NAME_DEFEND
    })
    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_south_east_tower_destroyed",
        ownerVillageId: villageId,
        includeTags: ["defSouthEastCoil"],
        villageId: villageId,
        factionName: FACTION_NAME_DEFEND
    })
    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_south_west_tower_destroyed",
        ownerVillageId: villageId,
        includeTags: ["defSouthWestCoil"],
        villageId: villageId,
        factionName: FACTION_NAME_DEFEND
    })
    LISTENFOR_NonPopCappedEntityDestroyed({
        snippet: "ed_north_west_tower_destroyed",
        ownerVillageId: villageId,
        includeTags: ["defNorthWestCoil"],
        villageId: villageId,
        factionName: FACTION_NAME_DEFEND
    })

    if (BASE_SIZE_ALL_PORTALS_AND_BOSS.includes(baseSize)) {
        LISTENFOR_BuildingComplete({
            snippet: "bc_defend_barracks_siege_defend",
            ownerVillageId: villageId,
            includeTags: ["barracksdefendHordeSiege0", "barracksdefendHordeDefend0"],
            villageId: villageId
        })

        LISTENFOR_BuildingComplete({
            snippet: "bc_defend_barracks_defend_defend",
            ownerVillageId: villageId,
            includeTags: ["barracksdefendHordeDefend0", "barracksdefendHordeDefend1"],
            villageId: villageId
        })

        LISTENFOR_BuildingComplete({
            snippet: "bc_defend_barracks_unique_defend",
            ownerVillageId: villageId,
            includeTags: ["barracksdefendHordeUnique0", "barracksdefendHordeDefend0"],
            villageId: villageId
        })

        LISTENFOR_BuildingComplete({
            snippet: "bc_defend_barracks_siege_siege",
            ownerVillageId: villageId,
            includeTags: ["barracksdefendHordeSiege0", "barracksdefendHordeSiege1"],
            villageId: villageId
        })

        LISTENFOR_BuildingComplete({
            snippet: "bc_defend_barracks_siege_unique",
            ownerVillageId: villageId,
            includeTags: ["barracksdefendHordeSiege0", "barracksdefendHordeUnique0"],
            villageId: villageId
        })
    }

    //set the appearance of the piglins spawned by the obstacle faction
    LISTENFOR_EntitySpawned({
        snippet: "es_set_appearance_to_defend_faction_piglins",
        ownerVillageId: villageId,
        villageId: villageId,
        includeTags: ["piglin", "mob"]
    })

    //listen for portalguard spawns, play VO
    LISTENFOR_EntitySpawned({
        snippet: "es_portal_guard_vo",
        ownerVillageId: villageId,
        villageId: villageId,
        includeTags: ["portalguard"]
    })

    //S/M/L
    if (baseSize === BASE_SIZE_SMALL || baseSize === BASE_SIZE_MEDIUM || baseSize === BASE_SIZE_LARGE || baseSize === BASE_SIZE_BOSS) {
        //tower counting for mass rebuild
        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_countingTowers",
            ownerVillageId: villageId,
            includeTags: ["pigTowerOuter"],
            excludeTags: [],
            villageId: villageId
        })

        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_countingTowers",
            ownerVillageId: villageId,
            includeTags: ["pigTower"],
            excludeTags: [],
            villageId: villageId
        })

        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "ed_countingTowers",
            ownerVillageId: villageId,
            includeTags: ["pigTowerInner"],
            excludeTags: [],
            villageId: villageId
        })
    }
    //LARGE ONLY
    if (baseSize === BASE_SIZE_LARGE) {
        //mass rebuild tactic
        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "defendMassRebuildCounter",
            ownerVillageId: villageId,
            villageId: villageId,
            includeTags: ["pigTower"],
            despawned: false
        })

        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "defendMassRebuildCounter",
            ownerVillageId: villageId,
            villageId: villageId,
            includeTags: ["pigTowerInner"],
            despawned: false
        })

        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "defendMassRebuildCounter",
            ownerVillageId: villageId,
            villageId: villageId,
            includeTags: ["pigGoldMine"],
            despawned: false
        })

        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "defendMassRebuildCounter",
            ownerVillageId: villageId,
            villageId: villageId,
            includeTags: ["pigSpreader"],
            despawned: false
        })

        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "defendMassRebuildCounter",
            ownerVillageId: villageId,
            villageId: villageId,
            includeTags: [BARRACKS_NAME_FIGHTER],
            despawned: false
        })

        LISTENFOR_NonPopCappedEntityDestroyed({
            snippet: "defendMassRebuildCounter",
            ownerVillageId: villageId,
            villageId: villageId,
            includeTags: [BARRACKS_NAME_SIEGER],
            despawned: false
        })
    }
})

SNIPPET_NonPopCappedEntityDestroyed("ed_north_east_tower_destroyed", (entities, payload) => {
    Once()
    Logv("Lava coil destroyed, sending reinforcements")
    const engineer = SpawnAtPortal(payload.ownerVillageId, "badger:piglin_super_engineer", 1)
    const followers1 = SpawnAtPortal(payload.ownerVillageId, PIGLIN_ARCHETYPE.GRUNTER, 30)
    const followers2 = SpawnAtPortal(payload.ownerVillageId, PIGLIN_ARCHETYPE.BRUISER, 5)
    const followers = OPER_Union(followers1, followers2)
    OUTPUT_SetLeash(followers, engineer, 10, 5)

    const lavaCoilDeck = BuildableCard(BUILDABLE_CARD.PIGLIN_CRYSTAL, 1)
    DECK_MultiplyByMultipleRules(lavaCoilDeck, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_DISTRICT_START), DistrictCard("defNorthEastCornerDistrict"), ZoneFilterCard("defNorthEastCorner"), ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard("placeWithoutSpacing"), TagCard("defNorthEastCoil")])
    OUTPUT_AppendNamedDeck(TICKET_BUILD_DECK_NAME + payload.ownerVillageId, lavaCoilDeck)

    LISTENFOR_BuildingComplete({
        snippet: "bc_north_east_tower_built",
        ownerVillageId: payload.ownerVillageId,
        includeTags: ["defNorthEastCoil"],
        payloadEntities: engineer,
        villageId: payload.ownerVillageId
    })
})

SNIPPET_BuildingComplete("bc_north_east_tower_built", (buildingEntity, payload) => {
    if (HasEntities(payload.entities) && QUERY_CurrentHealth(payload.entities) > 0) {
        OUTPUT_DestroyEntities(payload.entities)
    }
    Once()
})

SNIPPET_NonPopCappedEntityDestroyed("ed_south_east_tower_destroyed", (entities, payload) => {
    Once()
    Logv("Lava coil destroyed, sending reinforcements")
    const engineer = SpawnAtPortal(payload.ownerVillageId, "badger:piglin_super_engineer", 1)
    const followers1 = SpawnAtPortal(payload.ownerVillageId, PIGLIN_ARCHETYPE.GRUNTER, 30)
    const followers2 = SpawnAtPortal(payload.ownerVillageId, PIGLIN_ARCHETYPE.BRUISER, 5)
    const followers = OPER_Union(followers1, followers2)
    OUTPUT_SetLeash(followers, engineer, 10, 5)

    const lavaCoilDeck = BuildableCard(BUILDABLE_CARD.PIGLIN_CRYSTAL, 1)
    DECK_MultiplyByMultipleRules(lavaCoilDeck, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_DISTRICT_START), DistrictCard("defSouthEastCornerDistrict"), ZoneFilterCard("defSouthEastCorner"), ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard("placeWithoutSpacing"), TagCard("defSouthEastCoil")])
    OUTPUT_AppendNamedDeck(TICKET_BUILD_DECK_NAME + payload.ownerVillageId, lavaCoilDeck)

    LISTENFOR_BuildingComplete({
        snippet: "bc_south_east_tower_built",
        ownerVillageId: payload.ownerVillageId,
        includeTags: ["defSouthEastCoil"],
        payloadEntities: engineer,
        villageId: payload.ownerVillageId
    })
})

SNIPPET_BuildingComplete("bc_south_east_tower_built", (buildingEntity, payload) => {
    if (HasEntities(payload.entities) && QUERY_CurrentHealth(payload.entities) > 0) {
        OUTPUT_DestroyEntities(payload.entities)
    }
    Once()
})

SNIPPET_NonPopCappedEntityDestroyed("ed_south_west_tower_destroyed", (entities, payload) => {
    Once()
    Logv("Lava coil destroyed, sending reinforcements")
    const engineer = SpawnAtPortal(payload.ownerVillageId, "badger:piglin_super_engineer", 1)
    const followers1 = SpawnAtPortal(payload.ownerVillageId, PIGLIN_ARCHETYPE.GRUNTER, 30)
    const followers2 = SpawnAtPortal(payload.ownerVillageId, PIGLIN_ARCHETYPE.BRUISER, 5)
    const followers = OPER_Union(followers1, followers2)
    OUTPUT_SetLeash(followers, engineer, 10, 5)

    const lavaCoilDeck = BuildableCard(BUILDABLE_CARD.PIGLIN_CRYSTAL, 1)
    DECK_MultiplyByMultipleRules(lavaCoilDeck, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_DISTRICT_START), DistrictCard("defSouthWestCornerDistrict"), ZoneFilterCard("defSouthWestCorner"), ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard("placeWithoutSpacing"), TagCard("defSouthWestCoil")])
    OUTPUT_AppendNamedDeck(TICKET_BUILD_DECK_NAME + payload.ownerVillageId, lavaCoilDeck)

    LISTENFOR_BuildingComplete({
        snippet: "bc_south_west_tower_built",
        ownerVillageId: payload.ownerVillageId,
        includeTags: ["defSouthWestCoil"],
        payloadEntities: engineer,
        villageId: payload.ownerVillageId
    })
})

SNIPPET_BuildingComplete("bc_south_west_tower_built", (buildingEntity, payload) => {
    if (HasEntities(payload.entities) && QUERY_CurrentHealth(payload.entities) > 0) {
        OUTPUT_DestroyEntities(payload.entities)
    }
    Once()
})

SNIPPET_NonPopCappedEntityDestroyed("ed_north_west_tower_destroyed", (entities, payload) => {
    Once()
    Logv("Lava coil destroyed, sending reinforcements")
    const engineer = SpawnAtPortal(payload.ownerVillageId, "badger:piglin_super_engineer", 1)
    const followers1 = SpawnAtPortal(payload.ownerVillageId, PIGLIN_ARCHETYPE.GRUNTER, 30)
    const followers2 = SpawnAtPortal(payload.ownerVillageId, PIGLIN_ARCHETYPE.BRUISER, 5)
    const followers = OPER_Union(followers1, followers2)
    OUTPUT_SetLeash(followers, engineer, 10, 5)

    const lavaCoilDeck = BuildableCard(BUILDABLE_CARD.PIGLIN_CRYSTAL, 1)
    DECK_MultiplyByMultipleRules(lavaCoilDeck, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_DISTRICT_START), DistrictCard("defNorthWestCornerDistrict"), ZoneFilterCard("defNorthWestCorner"), ForceBuildingPlacementCard("forceBuildingPlacement"), PlacementPreferenceCard("placeWithoutSpacing"), TagCard("defNorthWestCoil")])
    OUTPUT_AppendNamedDeck(TICKET_BUILD_DECK_NAME + payload.ownerVillageId, lavaCoilDeck)

    LISTENFOR_BuildingComplete({
        snippet: "bc_north_west_tower_built",
        ownerVillageId: payload.ownerVillageId,
        includeTags: ["defNorthWestCoil"],
        payloadEntities: engineer,
        villageId: payload.ownerVillageId
    })
})

SNIPPET_BuildingComplete("bc_north_west_tower_built", (buildingEntity, payload) => {
    if (HasEntities(payload.entities) && QUERY_CurrentHealth(payload.entities) > 0) {
        OUTPUT_DestroyEntities(payload.entities)
    }
    Once()
})

SNIPPET_BuildingComplete("bc_defend_barracks_siege_defend", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    RecruitSpawnerOutputToEntitiesWithMultipleTags(villageId, buildingEntity, "barracksdefendHordeSiege0", "barracksdefendHordeDefend0")
})

SNIPPET_BuildingComplete("bc_defend_barracks_siege_defend", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    RecruitSpawnerOutputToEntitiesWithMultipleTags(villageId, buildingEntity, "barracksdefendHordeSiege0", "barracksdefendHordeDefend0")
})

SNIPPET_BuildingComplete("bc_defend_barracks_defend_defend", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    RecruitSpawnerOutputToEntitiesWithMultipleTags(villageId, buildingEntity, "barracksdefendHordeDefend0", "barracksdefendHordeDefend1")
})
SNIPPET_BuildingComplete("bc_defend_barracks_unique_defend", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    RecruitSpawnerOutputToEntitiesWithMultipleTags(villageId, buildingEntity, "barracksdefendHordeDefend0", "barracksdefendHordeDefend1")
})

SNIPPET_BuildingComplete("bc_defend_barracks_siege_siege", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    RecruitSpawnerOutputToEntitiesWithMultipleTags(villageId, buildingEntity, "barracksdefendHordeSiege0", "barracksdefendHordeSiege1")
})

SNIPPET_BuildingComplete("bc_defend_barracks_siege_unique", (buildingEntity, payload) => {
    const villageId = payload.ownerVillageId
    RecruitSpawnerOutputToEntitiesWithMultipleTags(villageId, buildingEntity, "barracksdefendHordeSiege0", "barracksdefendHordeDefend0")
})

SNIPPET_VillageFinishedBuilding("vfb_defend_base_setup", (villageId, _payload) => {
    SetupPiglinBase(villageId, defendVal.baseSetup)
})

SNIPPET_VillageGenerated("vg_defend", (villageId, _payload) => {
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    if (IsSmallOrGreater(baseSize)) {
        InitializeBaseAIs(villageId, defendVal.aiConfig, GetDefendRallyPoints(villageId))
    }

    const baseDeck = MakeDeck(villageId, true, [
        // The inner keep
        {
            district: {
                name: "defKeepDistrict",
                placementRules: [PLACEMENT_CLOSE_TO_VILLAGE_START]
            },
            zone: {
                singleZones: 1,
                tags: ["defKeepLayer1"],
                heightCard: "def28Height",
                district: "defKeepDistrict",
                placementRules: [PLACEMENT_CLOSE_TO_VILLAGE_START]
            },
            buildables: [{ card: "defendPortalLarge", forcePlacement: true, placementRules: [PLACEMENT_CLOSE_TO_VILLAGE_START], zoneFilters: ["placeInsideVillageAlways"] }]
        },
        {
            zone: {
                layerZones: 3,
                tags: ["defKeepLayer1"],
                heightCard: "def28Height",
                district: "defKeepDistrict",
                placementRules: [PLACEMENT_CLOSE_TO_VILLAGE_START]
            },
            walls: {
                card: "defInnerWalls",
                zoneFilters: ["defKeepLayer1"]
            },
            buildables: [
                { card: BUILDABLE_CARD.BUILDING_REGENERATOR, placementRules: [PLACEMENT_FAR_FROM_VILLAGE_START, DIRECTION_CARD.southWestWedge] },
                { card: BUILDABLE_CARD.TOWER_SPORE_FAN, placementRules: [PLACEMENT_CLOSE_TO_VILLAGE_START, DIRECTION_CARD.northEastWedge] },
                { card: BUILDABLE_CARD.TOWER_SPORE_FAN, placementRules: [PLACEMENT_CLOSE_TO_VILLAGE_START, DIRECTION_CARD.southWestWedge] },
                { card: BUILDABLE_CARD.BARRACKS_FIGHTER, count: 1, tags: ["barracksdefendHordeDefend0"] }
            ]
        },
        // The outer keep
        {
            zone: {
                layerZones: 2,
                tags: ["defKeepLayer2"],
                heightCard: "def21Height",
                district: "defKeepDistrict",
                placementRules: [PLACEMENT_CLOSE_TO_VILLAGE_START]
            },
            walls: {
                card: "defInnerWalls",
                zoneFilters: ["defKeepLayer2"]
            },
            buildables: [
                { card: BUILDABLE_CARD.RANGE_EXTENDER, placementRules: [PLACEMENT_FAR_FROM_VILLAGE_START, DIRECTION_CARD.northEastWedge] },
                { card: BUILDABLE_CARD.RANGE_EXTENDER, placementRules: [PLACEMENT_FAR_FROM_VILLAGE_START, DIRECTION_CARD.southWestWedge] },
                { card: BUILDABLE_CARD.BARRACKS_FIGHTER, count: 2, tags: ["barracksdefendHordeDefend0"] },
                { card: BUILDABLE_CARD.NETHERSPREADER, count: 2 }
            ],
            paths: [
                // North path
                {
                    card: "defend_district_path",
                    startRules: [ZoneFilterCard("defKeepLayer1"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ForceBuildingPlacementCard("forceBuildingPlacement")],
                    endRules: [ZoneFilterCard("defNorthZone1"), PlacementPreferenceCard("placeInDirectionNorthWithRectangleBrush"), PlacementPreferenceCard("withScoreThresholdPoint2"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)]
                },
                // South path
                {
                    card: "defend_district_path",
                    startRules: [ZoneFilterCard("defKeepLayer1"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ForceBuildingPlacementCard("forceBuildingPlacement")],
                    endRules: [ZoneFilterCard("defSouthZone1"), PlacementPreferenceCard("placeInDirectionSouthWithRectangleBrush"), PlacementPreferenceCard("withScoreThresholdPoint2"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)]
                },
                // Path to ground east
                {
                    card: "defend_district_path",
                    startRules: [ZoneFilterCard("defKeepLayer2"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.eastRect), ForceBuildingPlacementCard("forceBuildingPlacement")],
                    endRules: [ZoneFilterCard("defOutskirtsPathZone"), PlacementPreferenceCard("withScoreThresholdPoint2"), PlacementPreferenceCard(DIRECTION_CARD.eastRect), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)]
                },
                // Path to ground west
                {
                    card: "defend_district_path",
                    startRules: [ZoneFilterCard("defKeepLayer2"), PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START), PlacementPreferenceCard(DIRECTION_CARD.westRect), ForceBuildingPlacementCard("forceBuildingPlacement")],
                    endRules: [ZoneFilterCard("defOutskirtsPathZone"), PlacementPreferenceCard("withScoreThresholdPoint2"), PlacementPreferenceCard(DIRECTION_CARD.westRect), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)]
                }
            ]
        },
        // North east corner lava coil
        {
            district: {
                name: "defNorthEastCornerDistrict",
                placementRules: ["placeInDirectionNorthEastWithRectangleBrush15", "defCornerDistanceRange"]
            },
            zone: {
                singleZones: 1,
                tags: ["defNorthEastCorner"],
                heightCard: "def23Height",
                district: "defNorthEastCornerDistrict",
                placementRules: [PLACEMENT_CLOSE_TO_DISTRICT_START]
            },
            buildables: [{ card: BUILDABLE_CARD.PIGLIN_CRYSTAL, forcePlacement: true, placementRules: [PLACEMENT_CLOSE_TO_DISTRICT_START], tags: ["defNorthEastCoil"] }]
        },
        {
            zone: {
                layerZones: 2,
                tags: ["defNorthEastCorner"],
                heightCard: "def23Height",
                district: "defNorthEastCornerDistrict",
                placementRules: [PLACEMENT_CLOSE_TO_DISTRICT_START]
            },
            walls: {
                card: "defTowerWallLight",
                zoneFilters: ["defNorthEastCorner"]
            },
            buildables: [
                { card: "antiSiegeTower", placementRules: [PLACEMENT_CLOSE_TO_DISTRICT_START, DIRECTION_CARD.northWedge] },
                { card: "antiSiegeTower", placementRules: [PLACEMENT_CLOSE_TO_DISTRICT_START, DIRECTION_CARD.eastWedge] },
                { card: BUILDABLE_CARD.BARRACKS_FIGHTER, tags: ["barracksdefendHordeDefend0"] },
                { card: BUILDABLE_CARD.TOWER_PIGLIN_ARROW, count: 2 },
                { card: BUILDABLE_CARD.NETHERSPREADER, count: 1 }
            ],
            paths: []
        },
        // South east corner lava coil
        {
            district: {
                name: "defSouthEastCornerDistrict",
                placementRules: ["placeInDirectionSouthEastWithRectangleBrush15", "defCornerDistanceRange"]
            },
            zone: {
                singleZones: 1,
                tags: ["defSouthEastCorner"],
                heightCard: "def23Height",
                district: "defSouthEastCornerDistrict",
                placementRules: [PLACEMENT_CLOSE_TO_DISTRICT_START]
            },
            buildables: [{ card: BUILDABLE_CARD.PIGLIN_CRYSTAL, forcePlacement: true, placementRules: [PLACEMENT_CLOSE_TO_DISTRICT_START], tags: ["defSouthEastCoil"] }]
        },
        {
            zone: {
                layerZones: 2,
                tags: ["defSouthEastCorner"],
                heightCard: "def23Height",
                district: "defSouthEastCornerDistrict",
                placementRules: [PLACEMENT_CLOSE_TO_DISTRICT_START]
            },
            walls: {
                card: "defTowerWallLight",
                zoneFilters: ["defSouthEastCorner"]
            },
            buildables: [
                { card: "antiSiegeTower", placementRules: [PLACEMENT_CLOSE_TO_DISTRICT_START, DIRECTION_CARD.eastWedge] },
                { card: "antiSiegeTower", placementRules: [PLACEMENT_CLOSE_TO_DISTRICT_START, DIRECTION_CARD.southWedge] },
                { card: BUILDABLE_CARD.BARRACKS_FIGHTER, tags: ["barracksdefendHordeDefend0"] },
                { card: BUILDABLE_CARD.TOWER_PIGLIN_ARROW, count: 2 },
                { card: BUILDABLE_CARD.NETHERSPREADER, count: 1 }
            ],
            paths: []
        },
        // South west corner lava coil
        {
            district: {
                name: "defSouthWestCornerDistrict",
                placementRules: ["placeInDirectionSouthWestWithRectangleBrush15", "defCornerDistanceRange"]
            },
            zone: {
                singleZones: 1,
                tags: ["defSouthWestCorner"],
                heightCard: "def23Height",
                district: "defSouthWestCornerDistrict",
                placementRules: [PLACEMENT_CLOSE_TO_DISTRICT_START]
            },
            buildables: [{ card: BUILDABLE_CARD.PIGLIN_CRYSTAL, forcePlacement: true, placementRules: [PLACEMENT_CLOSE_TO_DISTRICT_START], tags: ["defSouthWestCoil"] }]
        },
        {
            zone: {
                layerZones: 2,
                tags: ["defSouthWestCorner"],
                heightCard: "def23Height",
                district: "defSouthWestCornerDistrict",
                placementRules: [PLACEMENT_CLOSE_TO_DISTRICT_START]
            },
            walls: {
                card: "defTowerWallLight",
                zoneFilters: ["defSouthWestCorner"]
            },
            buildables: [
                { card: "antiSiegeTower", placementRules: [PLACEMENT_CLOSE_TO_DISTRICT_START, DIRECTION_CARD.southWedge] },
                { card: "antiSiegeTower", placementRules: [PLACEMENT_CLOSE_TO_DISTRICT_START, DIRECTION_CARD.westWedge] },
                { card: BUILDABLE_CARD.BARRACKS_FIGHTER, tags: ["barracksdefendHordeDefend0"] },
                { card: BUILDABLE_CARD.TOWER_PIGLIN_ARROW, count: 2 },
                { card: BUILDABLE_CARD.NETHERSPREADER, count: 1 }
            ],
            paths: []
        },
        // North west corner lava coil
        {
            district: {
                name: "defNorthWestCornerDistrict",
                placementRules: ["placeInDirectionNorthWestWithRectangleBrush15", "defCornerDistanceRange"]
            },
            zone: {
                singleZones: 1,
                tags: ["defNorthWestCorner"],
                heightCard: "def23Height",
                district: "defNorthWestCornerDistrict",
                placementRules: [PLACEMENT_CLOSE_TO_DISTRICT_START]
            },
            buildables: [{ card: BUILDABLE_CARD.PIGLIN_CRYSTAL, forcePlacement: true, placementRules: [PLACEMENT_CLOSE_TO_DISTRICT_START], tags: ["defNorthWestCoil"] }]
        },
        {
            zone: {
                layerZones: 2,
                tags: ["defNorthWestCorner"],
                heightCard: "def23Height",
                district: "defNorthWestCornerDistrict",
                placementRules: [PLACEMENT_CLOSE_TO_DISTRICT_START]
            },
            walls: {
                card: "defTowerWallLight",
                zoneFilters: ["defNorthWestCorner"]
            },
            buildables: [
                { card: "antiSiegeTower", placementRules: [PLACEMENT_CLOSE_TO_DISTRICT_START, DIRECTION_CARD.northWedge] },
                { card: "antiSiegeTower", placementRules: [PLACEMENT_CLOSE_TO_DISTRICT_START, DIRECTION_CARD.westWedge] },
                { card: BUILDABLE_CARD.BARRACKS_FIGHTER, count: 2, tags: ["barracksdefendHordeDefend0"] },
                { card: BUILDABLE_CARD.TOWER_PIGLIN_ARROW, count: 2 },
                { card: BUILDABLE_CARD.NETHERSPREADER, count: 1 }
            ],
            paths: []
        },
        // East edge upper (stairs up)
        {
            district: {
                name: "defEastEdgeDistrict",
                placementRules: [DIRECTION_CARD.eastRect, PLACEMENT_CLOSE_TO_VILLAGE_START]
            },
            zone: {
                singleZones: 1,
                tags: ["defEastZone1"],
                heightCard: "def14Height",
                district: "defEastEdgeDistrict",
                placementRules: [PLACEMENT_CLOSE_TO_VILLAGE_START, DIRECTION_CARD.eastRect]
            },
            walls: {
                card: "defTowerWallLight",
                zoneFilters: ["defEastZone1"]
            },
            buildables: [
                { card: BUILDABLE_CARD.TOWER_PIGLIN_ARROW, count: 2, placementRules: [PLACEMENT_FAR_FROM_VILLAGE_START, DIRECTION_CARD.eastWedge] },
                { card: BUILDABLE_CARD.BARRACKS_SIEGER, count: 2, tags: ["barracksdefendHordeSiege0"] },
                { card: BUILDABLE_CARD.NETHERSPREADER, count: 1 },
                { card: BUILDABLE_CARD.GOLDMINE, count: 1 }
            ],
            paths: [
                // Path to south east lava coil
                {
                    card: "defend_district_path",
                    startRules: [ZoneFilterCard("defEastZone1"), PlacementPreferenceCard(DIRECTION_CARD.southRect), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_DISTRICT_START), ForceBuildingPlacementCard("forceBuildingPlacement")],
                    endRules: [ZoneFilterCard("defSouthEastCorner"), PlacementPreferenceCard(DIRECTION_CARD.northWestWedge), PlacementPreferenceCard("withScoreThresholdPoint2"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)]
                }
            ]
        },
        {
            zone: {
                layerZones: 2,
                tags: ["defEastZone1"],
                heightCard: "def14Height",
                district: "defEastEdgeDistrict",
                placementRules: [PLACEMENT_CLOSE_TO_VILLAGE_START]
            }
        },
        {
            zone: {
                singleZones: 8,
                tags: ["defEastZone1"],
                heightCard: "def14Height",
                district: "defEastEdgeDistrict",
                placementRules: [DIRECTION_CARD.southRect, PLACEMENT_CLOSE_TO_VILLAGE_START]
            }
        },
        {
            zone: {
                singleZones: 8,
                tags: ["defEastZone1"],
                heightCard: "def14Height",
                district: "defEastEdgeDistrict",
                placementRules: [DIRECTION_CARD.northRect, PLACEMENT_CLOSE_TO_VILLAGE_START]
            }
        },
        // West edge upper (stairs up)
        {
            district: {
                name: "defWestEdgeDistrict",
                placementRules: [DIRECTION_CARD.westRect, PLACEMENT_CLOSE_TO_VILLAGE_START]
            },
            zone: {
                singleZones: 1,
                tags: ["defWestZone1"],
                heightCard: "def14Height",
                district: "defWestEdgeDistrict",
                placementRules: [PLACEMENT_CLOSE_TO_VILLAGE_START, DIRECTION_CARD.westRect]
            },
            walls: {
                card: "defTowerWallLight",
                zoneFilters: ["defWestZone1"]
            },
            buildables: [
                { card: BUILDABLE_CARD.TOWER_PIGLIN_ARROW, count: 2, placementRules: [PLACEMENT_FAR_FROM_VILLAGE_START, DIRECTION_CARD.westWedge] },
                { card: BUILDABLE_CARD.BARRACKS_SIEGER, count: 2, tags: ["barracksdefendHordeSiege0"] },
                { card: BUILDABLE_CARD.NETHERSPREADER, count: 1 },
                { card: BUILDABLE_CARD.GOLDMINE, count: 1 }
            ],
            paths: [
                // Path to south east lava coil
                {
                    card: "defend_district_path",
                    startRules: [ZoneFilterCard("defWestZone1"), PlacementPreferenceCard(DIRECTION_CARD.southRect), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_DISTRICT_START), ForceBuildingPlacementCard("forceBuildingPlacement")],
                    endRules: [ZoneFilterCard("defSouthWestCorner"), PlacementPreferenceCard(DIRECTION_CARD.northWestWedge), PlacementPreferenceCard("withScoreThresholdPoint2"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)]
                }
            ]
        },
        {
            zone: {
                layerZones: 2,
                tags: ["defWestZone1"],
                heightCard: "def14Height",
                district: "defWestEdgeDistrict",
                placementRules: [PLACEMENT_CLOSE_TO_VILLAGE_START]
            }
        },
        {
            zone: {
                singleZones: 8,
                tags: ["defWestZone1"],
                heightCard: "def14Height",
                district: "defWestEdgeDistrict",
                placementRules: [DIRECTION_CARD.southRect, PLACEMENT_CLOSE_TO_VILLAGE_START]
            }
        },
        {
            zone: {
                singleZones: 8,
                tags: ["defWestZone1"],
                heightCard: "def14Height",
                district: "defWestEdgeDistrict",
                placementRules: [DIRECTION_CARD.northRect, PLACEMENT_CLOSE_TO_VILLAGE_START]
            }
        },
        // North edge (Reinforcements)
        {
            district: {
                name: "defNorthEdgeDistrict",
                placementRules: [DIRECTION_CARD.northRect, PLACEMENT_CLOSE_TO_VILLAGE_START]
            },
            zone: {
                singleZones: 1,
                tags: ["defNorthZone1"],
                heightCard: "def21Height",
                district: "defNorthEdgeDistrict",
                placementRules: [PLACEMENT_CLOSE_TO_VILLAGE_START, DIRECTION_CARD.northRect]
            },
            walls: {
                card: "defTowerWallLight",
                zoneFilters: ["defNorthZone1"]
            },
            buildables: [
                { card: BUILDABLE_CARD.BARRACKS_SIEGER, count: 2, tags: ["barracksdefendHordeSiege0"] },
                { card: BUILDABLE_CARD.BARRACKS_FIGHTER, count: 2, tags: ["barracksdefendHordeDefend0"] },
                { card: BUILDABLE_CARD.TOWER_PIGLIN_ARROW, count: 2 },
                { card: BUILDABLE_CARD.GOLDMINE, count: 1 },
                { card: BUILDABLE_CARD.TOWER_LAVA_SPREADER, count: 2, placementRules: [PLACEMENT_FAR_FROM_VILLAGE_START] }
            ],
            paths: [
                // Path to lava coils
                {
                    card: "defend_district_path",
                    startRules: [ZoneFilterCard("defNorthZone1"), PlacementPreferenceCard(DIRECTION_CARD.westRect), ForceBuildingPlacementCard("forceBuildingPlacement")],
                    endRules: [ZoneFilterCard("defNorthWestCorner"), PlacementPreferenceCard(DIRECTION_CARD.eastRect), PlacementPreferenceCard("withScoreThresholdPoint2"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)]
                },
                {
                    card: "defend_district_path",
                    startRules: [ZoneFilterCard("defNorthZone1"), PlacementPreferenceCard(DIRECTION_CARD.eastRect), ForceBuildingPlacementCard("forceBuildingPlacement")],
                    endRules: [ZoneFilterCard("defNorthEastCorner"), PlacementPreferenceCard(DIRECTION_CARD.westRect), PlacementPreferenceCard("withScoreThresholdPoint2"), PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START)]
                }
            ]
        },
        {
            zone: {
                layerZones: 3,
                tags: ["defNorthZone1"],
                heightCard: "def21Height",
                district: "defNorthEdgeDistrict",
                placementRules: [PLACEMENT_CLOSE_TO_VILLAGE_START]
            }
        },
        {
            zone: {
                singleZones: 8,
                tags: ["defNorthZone1"],
                heightCard: "def21Height",
                district: "defNorthEdgeDistrict",
                placementRules: [DIRECTION_CARD.westRect, PLACEMENT_CLOSE_TO_VILLAGE_START]
            }
        },
        {
            zone: {
                singleZones: 8,
                tags: ["defNorthZone1"],
                heightCard: "def21Height",
                district: "defNorthEdgeDistrict",
                placementRules: [DIRECTION_CARD.eastRect, PLACEMENT_CLOSE_TO_VILLAGE_START]
            }
        },
        // South edge (Reinforcements)
        {
            district: {
                name: "defSouthEdgeDistrict",
                placementRules: [DIRECTION_CARD.southRect, PLACEMENT_CLOSE_TO_VILLAGE_START]
            },
            zone: {
                singleZones: 1,
                tags: ["defSouthZone1"],
                heightCard: "def21Height",
                district: "defSouthEdgeDistrict",
                placementRules: [PLACEMENT_CLOSE_TO_VILLAGE_START, DIRECTION_CARD.southRect]
            },
            walls: {
                card: "defTowerWallLight",
                zoneFilters: ["defSouthZone1"]
            },
            buildables: [
                { card: BUILDABLE_CARD.BARRACKS_SIEGER, count: 2, tags: ["barracksdefendHordeSiege0"] },
                { card: BUILDABLE_CARD.BARRACKS_FIGHTER, count: 2, tags: ["barracksdefendHordeDefend0"] },
                { card: BUILDABLE_CARD.TOWER_PIGLIN_ARROW, count: 2 },
                { card: BUILDABLE_CARD.GOLDMINE, count: 1 },
                { card: BUILDABLE_CARD.TOWER_LAVA_SPREADER, count: 2, placementRules: [PLACEMENT_FAR_FROM_VILLAGE_START] }
            ]
        },
        {
            zone: {
                layerZones: 3,
                tags: ["defSouthZone1"],
                heightCard: "def21Height",
                district: "defSouthEdgeDistrict",
                placementRules: [PLACEMENT_CLOSE_TO_VILLAGE_START]
            }
        },
        {
            zone: {
                singleZones: 8,
                tags: ["defSouthZone1"],
                heightCard: "def21Height",
                district: "defSouthEdgeDistrict",
                placementRules: [DIRECTION_CARD.westRect, PLACEMENT_CLOSE_TO_VILLAGE_START]
            }
        },
        {
            zone: {
                singleZones: 8,
                tags: ["defSouthZone1"],
                heightCard: "def21Height",
                district: "defSouthEdgeDistrict",
                placementRules: [DIRECTION_CARD.eastRect, PLACEMENT_CLOSE_TO_VILLAGE_START]
            }
        },
        // East edge lower
        {
            zone: {
                layerZones: 2,
                tags: ["defEastZone2"],
                heightCard: "def7Height",
                district: "defEastEdgeDistrict",
                placementRules: [PLACEMENT_CLOSE_TO_DISTRICT_START]
            },
            walls: {
                card: "defTowerWallLight",
                zoneFilters: ["defEastZone2"]
            },
            // eslint-disable-next-line prettier/prettier
            buildables: [
                { card: BUILDABLE_CARD.BARRACKS_FIGHTER, count: 1, tags: ["barracksdefendHordeDefend0"] },
                { card: BUILDABLE_CARD.NETHERSPREADER },
                { card: BUILDABLE_CARD.TOWER_PIGLIN_ARROW, count: 2 },
                { card: BUILDABLE_CARD.GOLDMINE },
                { card: BUILDABLE_CARD.TOWER_LAVA_SPREADER, count: 2, placementRules: [PLACEMENT_FAR_FROM_VILLAGE_START] }
            ]
        },
        // West edge lower
        {
            zone: {
                layerZones: 2,
                tags: ["defWestZone2"],
                heightCard: "def7Height",
                district: "defWestEdgeDistrict",
                placementRules: [PLACEMENT_CLOSE_TO_DISTRICT_START]
            },
            walls: {
                card: "defTowerWallLight",
                zoneFilters: ["defWestZone2"]
            },
            // eslint-disable-next-line prettier/prettier
            buildables: [
                { card: BUILDABLE_CARD.BARRACKS_FIGHTER, count: 1, tags: ["barracksdefendHordeDefend0"] },
                { card: BUILDABLE_CARD.NETHERSPREADER },
                { card: BUILDABLE_CARD.TOWER_PIGLIN_ARROW, count: 2 },
                { card: BUILDABLE_CARD.GOLDMINE },
                { card: BUILDABLE_CARD.TOWER_LAVA_SPREADER, count: 2, placementRules: [PLACEMENT_FAR_FROM_VILLAGE_START] }
            ]
        },
        // western outskirts zone (used for paths)
        {
            zone: {
                singleZones: 6,
                tags: ["defOutskirtsPathZone"],
                district: "defWestEdgeDistrict",
                placementRules: [DIRECTION_CARD.westRect]
            }
        },
        // eastern outskirts zone (used for paths)
        {
            zone: {
                singleZones: 6,
                tags: ["defOutskirtsPathZone"],
                district: "defEastEdgeDistrict",
                placementRules: [DIRECTION_CARD.eastRect]
            }
        }
    ])
    DECK_PutOnBottomOf(TerrainWeatheringCard("terrainWeathering"), baseDeck)
    OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, baseDeck)
})

SNIPPET_NonPopCappedEntityDestroyed("defendMassRebuildCounter", (destroyedEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(destroyedEntity)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)

    if (IsSmall(baseSize)) {
        return
    } else if (QUERY_GetEntitiesCount(GetVillagePortal(villageId)) < 1) {
        return
    } else if (IsBaseEscalated(destroyedEntity, defendVal.escalation.innerWallDestroyed)) {
        return
    }

    const newValue = GetVillageVariable(villageId, defendVal.global.destroyedBuildingsCount) + 1
    SetVillageVariable(villageId, defendVal.global.destroyedBuildingsCount, newValue)
})

SNIPPET_PresenceEntered("spe_defend_gameplay", (triggerEntity, _count, _payload) => {
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)

    // Check for whether the village needs to reset due to previous disengagement by the player.
    // At this point, all the popcapped entities in the base have already been culled.
    // The village will never be flagged for a reset while a player is in this spatial partition, so we only need to check when we enter.
    if (ShouldBaseReset(villageId)) {
        ResetEscalationAndBarracksForVillageVariation(villageId, defendVal.barracks, defendVal.escalation)
        ResetDiscreteEncounters(villageId)
        SetVillageVariable(villageId, defBattleRepairsVal.responseCountVariable, 0)

        MarkBaseAsReset(villageId)
    }
})

///////////ESCALATION PHASES///////////////
//escalation "player close to base" - entering the trigger volume. escalate to phase 1
SNIPPET_SpatialPartitionEntered("spe_defend_general", (triggerEntity, intruderEntity, _payload) => {
    if (IsBaseEscalated(triggerEntity, defendVal.escalation.playerCloseToBase)) {
        return
    }

    MarkBaseAsEscalated(triggerEntity, defendVal.escalation.playerCloseToBase)
    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const portalEntity = GetVillagePortal(villageId)

    if (IsStructureDestructionBase(villageId) && QUERY_GetGlobalVariable(piglinGeneralVal.globals.firstCoilCinePlayed) !== 0) {
        if (DoOnce(defendVal.global.hasVisitedCoilBase + villageId)) {
            SetPortalInvulnerable(villageId, true)
        }
    }

    if (GetVillageVariable(villageId, "composition_listeners") === 0) {
        SetVillageVariable(villageId, "composition_listeners", 1)
        CreateCompositionRallyPoints(villageId, GetDefendRallyPoints(villageId))
        AssignAIHomeBases(villageId)
    }

    //Play audio if base is invasion action source
    CheckAndPlayInvasionActionOriginPointVO(villageId)

    OUTPUT_SetObjectiveHealthBarVisible(portalEntity, true)

    //SPAWN UNITS FOR VARIATION IF APPLICABLE
    const phase1PGVariation = defendVal.villageComposition[baseSize].phase1PG

    SetEscalationValueAndUpdateAllBarracksForVillageVariation(villageId, defendVal.barracks, 1)

    //SPAWN UNITS FOR VARIATION IF APPLICABLE
    if (IsLarge(baseSize)) {
        const newUnits = SpawnVillageVariationUnits(villageId, phase1PGVariation.spawnedUnits, GetVillagePortalSpawnLocation(villageId))
        if (HasEntities(newUnits)) {
            const medics = FILTER_ByTagFilter(newUnits, ["medic"], [])
            const otherPiglins = OPER_Difference(newUnits, medics)
            AssignEntitiesToAI(villageId, otherPiglins, defendVal.aiConfig[DEFEND_DEFEND_AI.TAG])
            AssignEntitiesToAI(villageId, medics, defendVal.aiConfig[DEFEND_UNIQUE_AI.TAG])
        }
    }
})

SNIPPET_CinematicEvent("ce_defend_portal_shield_on", (payload) => {
    SetPortalInvulnerable(payload.ownerVillageId, true)
    Once()
})

const _PlayVOBasedOnBaseSize = (villageId, line, pointOfReference) => {
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    let distance = 0
    switch (baseSize) {
        case BASE_SIZE_SMALL:
            distance = defendVal.consts.smallSizeVODistance
            break
        case BASE_SIZE_MEDIUM:
            distance = defendVal.consts.mediumSizeVODistance
            break
        case BASE_SIZE_LARGE:
            distance = defendVal.consts.largeSizeVODistance
            break
        case BASE_SIZE_BOSS:
            distance = defendVal.consts.bossSizeVODistance
            break
    }

    if (HasEntities(pointOfReference)) {
        PlayPresentationActionToClosePlayers(line, pointOfReference, distance)
    }
}

// escalation "wall destroyed"  set to phase 2
BASE_DeclarePiglinStructureDestroyedResponseHandler("ed_defend_phase_trigger_wall_destruction", (villageId, destroyedEntity) => {
    if (IsBaseEscalated(destroyedEntity, defendVal.escalation.outerWallDestroyed)) {
        return
    }

    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    const portal = GetVillagePortal(villageId)

    if (baseSize !== BASE_SIZE_SMALL && baseSize !== BASE_SIZE_MEDIUM && baseSize !== BASE_SIZE_LARGE) {
        return
    }

    // BARRACKS ============================================================================================================================================================
    SetEscalationValueAndUpdateAllBarracksForVillageVariation(villageId, defendVal.barracks, 2)

    // AUDIO ================================================================================================================================================================
    // Escalate combat music to phase 1
    if (baseSize !== BASE_SIZE_BOSS) {
        SetAudioPhaseForBase(villageId, defendVal.audioPerPhaseArray[1])
    } else {
        SetAudioPhaseForBase(villageId, defendVal.audioPerBossPhaseArray[1])
    }
    PlayStingerToClosePlayers(GetStingerForPiglinFaction(FACTION_NAME_DEFEND, "keepGoing"), portal)

    LISTENFOR_LocalTimer({
        snippet: "lt_wall_breached_esclation_vo",
        ownerVillageId: villageId,
        waitTime: defendVal.consts.timeUntilWallDestroyed,
        payloadInt: villageId
    })

    // SPAWN ============================================================================================================================================================
    //spawn units at portal
    let newUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        newUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].phase2.spawnedUnits, spawnPosition)
    }

    if (HasEntities(newUnits)) {
        const medics = FILTER_ByTagFilter(newUnits, ["medic"], [])
        const otherPiglins = OPER_Difference(newUnits, medics)
        AssignEntitiesToAI(villageId, otherPiglins, defendVal.aiConfig[DEFEND_DEFEND_AI.TAG])
        AssignEntitiesToAI(villageId, medics, defendVal.aiConfig[DEFEND_UNIQUE_AI.TAG])
    }

    MarkBaseAsEscalated(destroyedEntity, defendVal.escalation.outerWallDestroyed)
})

SNIPPET_LocalTimer("lt_wall_breached_esclation_vo", (payload) => {
    const villageId = payload.int
    const villageEntity = GetVillageEntityFromID(villageId)
    if (HasEntities(villageEntity)) {
        const line = ChooseFromArray(defendVal.VO.wallDestroyed)
        _PlayVOBasedOnBaseSize(villageId, line, villageEntity)
    }
})

//phase 3 triggered -- inner walls destroyed (medium and large -- small doesn't have inner walls so it never goes to ph3)
BASE_DeclarePiglinStructureDestroyedResponseHandler("ed_defend_phase_trigger_wall_destruction_inner", (villageId, destroyedEntity) => {
    if (IsBaseEscalated(destroyedEntity, defendVal.escalation.innerWallDestroyed)) {
        return
    }

    MarkBaseAsEscalated(destroyedEntity, defendVal.escalation.innerWallDestroyed)

    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const portal = GetVillagePortal(villageId)

    if (baseSize !== BASE_SIZE_SMALL && baseSize !== BASE_SIZE_MEDIUM && baseSize !== BASE_SIZE_LARGE) {
        return
    }

    if (!IsSmall(baseSize)) {
        SetEscalationValueAndUpdateBarracksForVillageVariation(villageId, BARRACKS_NAME_SIEGER, SiegerBarracksConfig_DefendFaction_Variations, 3)
        SetEscalationValueAndUpdateBarracksForVillageVariation(villageId, BARRACKS_NAME_FIGHTER, FighterBarracksConfig_DefendFaction_Variations, 3)
    }

    // AUDIO ================================================================================================================================================================
    //Music: Escalate combat music to phase 2
    if (baseSize !== BASE_SIZE_BOSS) {
        SetAudioPhaseForBase(villageId, defendVal.audioPerPhaseArray[2])
    } else if (baseSize === BASE_SIZE_BOSS) {
        SetAudioPhaseForBase(villageId, defendVal.audioPerBossPhaseArray[2])
    }

    // SPAWNS =======================================================================================================================================================
    const spawnLocation = GetVillagePortalSpawnLocation(villageId)
    let newUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        newUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].phase3.spawnedUnits, spawnLocation)
    }
    if (HasEntities(newUnits)) {
        const medics = FILTER_ByTagFilter(newUnits, ["medic"], [])
        const otherPiglins = OPER_Difference(newUnits, medics)
        AssignEntitiesToAI(villageId, otherPiglins, defendVal.aiConfig[DEFEND_DEFEND_AI.TAG])
        AssignEntitiesToAI(villageId, medics, defendVal.aiConfig[DEFEND_UNIQUE_AI.TAG])
    }

    if (IsLarge(baseSize)) {
        const portalGuards = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].phase3PG.spawnedUnits, spawnLocation)
        if (HasEntities(portalGuards)) {
            const medics = FILTER_ByTagFilter(portalGuards, ["medic"], [])
            const otherPiglins = OPER_Difference(portalGuards, medics)
            AssignEntitiesToAI(villageId, otherPiglins, defendVal.aiConfig[DEFEND_DEFEND_AI.TAG])
            AssignEntitiesToAI(villageId, medics, defendVal.aiConfig[DEFEND_UNIQUE_AI.TAG])
        }
    }

    const phase3OutputDeck = DECK_Empty()
    const phase3MiniDeck = CreateBuildableGenMiniDecks(defendBaseMiniDeckNames, defendBasePhase3, baseSize, villageId, RANDOM_GROUP_DEFEND_HORDE)

    if (IsLarge(baseSize)) {
        //outsideKeepWall
        DECK_MultiplyBySingle(phase3MiniDeck["outsideKeepWall"], ZoneFilterCard("defBetweenWalls"))
        DECK_MultiplyBySingle(phase3MiniDeck["outsideKeepWall"], PlacementPreferenceCard("placeCloseToWalls"))
        DECK_MultiplyBySingle(phase3MiniDeck["outsideKeepWall"], PlacementPreferenceCard(PLACEMENT_FAR_FROM_VILLAGE_START))

        //barracks tags go here
        DECK_MultiplyByMultipleRules(phase3MiniDeck["outsideKeepWall"], [TagCard("barracksdefendHordeDefend0"), TagCard("barracksdefendHordeDefend1")])
        DECK_MultiplyByMultipleRules(phase3MiniDeck["outsideKeepWall"], [TagCard("barracksdefendHordeDefend0"), TagCard("barracksdefendHordeDefend1")])

        DECK_PutOnBottomOf(phase3MiniDeck["outsideKeepWall"], phase3OutputDeck)
    }
    SpawnEngineersIfThereAreNone(villageId)
    // OUTPUT_AppendNamedDeck(TICKET_BUILD_DECK_NAME + villageId, phase3OutputDeck)
})

//phase 4 triggered // inner keep touched
SNIPPET_SpatialPartitionEntered("spe_defend_player_enter_inner_keep", (triggerEntity, intruderEntity, _payload) => {
    OUTPUT_AddTag(intruderEntity, defendVal.escalation.innerKeep)

    if (IsBaseEscalated(triggerEntity, defendVal.escalation.innerKeep)) {
        return
    }

    MarkBaseAsEscalated(triggerEntity, defendVal.escalation.innerKeep)

    const villageId = QUERY_GetVillageIDFromEntity(triggerEntity)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const portal = GetVillagePortal(villageId)

    // BARRACKS   =======================================================================================================================================================
    // small bases use "phase3" data for this phase
    if (IsSmall(baseSize)) {
        SetEscalationValueAndUpdateBarracksForVillageVariation(villageId, BARRACKS_NAME_SIEGER, SiegerBarracksConfig_DefendFaction_Variations, 3)
        SetEscalationValueAndUpdateBarracksForVillageVariation(villageId, BARRACKS_NAME_FIGHTER, FighterBarracksConfig_DefendFaction_Variations, 3)
    } else if (IsMediumOrGreater(baseSize)) {
        SetEscalationValueAndUpdateBarracksForVillageVariation(villageId, BARRACKS_NAME_SIEGER, SiegerBarracksConfig_DefendFaction_Variations, 4)
        SetEscalationValueAndUpdateBarracksForVillageVariation(villageId, BARRACKS_NAME_FIGHTER, FighterBarracksConfig_DefendFaction_Variations, 4)
    } else if (baseSize === BASE_SIZE_BOSS) {
        SetEscalationValueAndUpdateBarracksForVillageVariation(villageId, BARRACKS_NAME_SIEGER, SiegerBarracksConfig_DefendFaction_Variations, 0)
        SetEscalationValueAndUpdateBarracksForVillageVariation(villageId, BARRACKS_NAME_FIGHTER, FighterBarracksConfig_DefendFaction_Variations, 0)
    }

    // AUDIO  =======================================================================================================================================================
    //Music: Escalate combat music to phase 3
    if (baseSize !== BASE_SIZE_BOSS) {
        SetAudioPhaseForBase(villageId, defendVal.audioPerPhaseArray[3])
    } else if (baseSize === BASE_SIZE_BOSS) {
        SetAudioPhaseForBase(villageId, defendVal.audioPerBossPhaseArray[3])
    }

    // WAVES =======================================================================================================================================================

    const flaVar = GetVillageFlavour(villageId)
    const objVar = QUERY_GetVillageObjective(villageId)

    // send the new units to the closest spreader to the portal
    let initialPotentialTargets = EMPTY_ENTITY_GROUP

    if (flaVar === VILLAGE_VARIATION_A || objVar === VILLAGE_VARIATION_STRUCTURE_DESTRUCTION) {
        initialPotentialTargets = GetEntitiesWithTagsAndVillage(["pigGoldMine"], villageId)
    } else if (flaVar === VILLAGE_VARIATION_B) {
        initialPotentialTargets = GetEntitiesWithTagsAndVillage(["pigTower"], villageId)
    } else if (flaVar === VILLAGE_VARIATION_C) {
        initialPotentialTargets = GetEntitiesWithTagsAndVillage(["pigRangeUp"], villageId)
    }
    let initialTarget = null
    if (HasEntities(initialPotentialTargets)) {
        initialTarget = ClosestEntity(initialPotentialTargets, portal)
    }

    const spawnLocation = GetVillagePortalSpawnLocation(villageId)
    let newUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        newUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].phase4.spawnedUnits, spawnLocation)
    }
    if (HasEntities(newUnits) && initialTarget !== null) {
        const medics = FILTER_ByTagFilter(newUnits, ["medic"], [])
        const otherPiglins = OPER_Difference(newUnits, medics)
        AssignEntitiesToAI(villageId, otherPiglins, defendVal.aiConfig[DEFEND_DEFEND_AI.TAG])
        AssignEntitiesToAI(villageId, medics, defendVal.aiConfig[DEFEND_UNIQUE_AI.TAG])
    }

    if (IsLarge(baseSize)) {
        const moreUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].phase4PG.spawnedUnits, spawnLocation)
        const medics = FILTER_ByTagFilter(moreUnits, ["medic"], [])
        const otherPiglins = OPER_Difference(moreUnits, medics)
        AssignEntitiesToAI(villageId, otherPiglins, defendVal.aiConfig[DEFEND_DEFEND_AI.TAG])
        AssignEntitiesToAI(villageId, medics, defendVal.aiConfig[DEFEND_UNIQUE_AI.TAG])
    }

    const phase4OutputDeck = DECK_Empty()
    const phase4MiniDeck = CreateBuildableGenMiniDecks(defendBaseMiniDeckNames, defendBasePhase4, baseSize, villageId, RANDOM_GROUP_DEFEND_HORDE)

    if (IsMedium(baseSize)) {
        //outsideKeepWall
        DECK_MultiplyBySingle(phase4MiniDeck["outsideKeepWall"], PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START))
        DECK_MultiplyBySingle(phase4MiniDeck["outsideKeepWall"], TagCard("defendInnerKeepBuilding"))
        DECK_MultiplyBySingle(phase4MiniDeck["outsideKeepWall"], ZoneFilterCard("defMidKeep"))

        DECK_MultiplyByMultipleRules(phase4MiniDeck["outsideKeepWall"], [TagCard("barracksdefendHordeDefend0"), TagCard("barracksdefendHordeDefend1")])
        DECK_MultiplyByMultipleRules(phase4MiniDeck["outsideKeepWall"], [TagCard("barracksdefendHordeDefend0"), TagCard("barracksdefendHordeDefend1")])

        DECK_PutOnBottomOf(phase4MiniDeck["outsideKeepWall"], phase4OutputDeck)
    }
    if (IsLarge(baseSize)) {
        //keepNearPortal
        DECK_MultiplyBySingle(phase4MiniDeck["keepNearPortal"], PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START))
        DECK_MultiplyBySingle(phase4MiniDeck["keepNearPortal"], PlacementPreferenceCard("placeRandomly"))
        DECK_MultiplyBySingle(phase4MiniDeck["keepNearPortal"], ForceBuildingPlacementCard("forceBuildingPlacement"))
        DECK_MultiplyBySingle(phase4MiniDeck["keepNearPortal"], ZoneFilterCard("defInnerKeep"))

        DECK_PutOnBottomOf(phase4MiniDeck["keepNearPortal"], phase4OutputDeck)
    }
    SpawnEngineersIfThereAreNone(villageId)
    // OUTPUT_AppendNamedDeck(TICKET_BUILD_DECK_NAME + villageId, phase4OutputDeck)
})

SNIPPET_SpatialPartitionExited("spe_defend_player_exit_inner_keep", (_triggerEntity, extruderEntity, _payload) => {
    OUTPUT_RemoveTag(extruderEntity, defendVal.escalation.innerKeep)
})

const _DefendChooseEnemyStructureTarget = (villageId, checkOnlyBuildings = false) => {
    const portalEntity = GetVillagePortal(villageId)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    let maxDistance = 0

    if (IsSmall(baseSize)) {
        maxDistance = 150
    } else if (IsMedium(baseSize)) {
        maxDistance = 200
    } else if (IsLarge(baseSize)) {
        maxDistance = 250
    } else {
        maxDistance = 100
    }

    // target priorities
    const spawnerTargets = FILTER_ByDistance(GetPlayerOwned(["spawner"]), portalEntity, maxDistance)
    if (QUERY_GetEntitiesCount(spawnerTargets) > 0) {
        return RandomEntity(spawnerTargets)
    }
    const buffPlatformTargets = FILTER_ByDistance(GetPlayerOwned(["buff_platform"]), portalEntity, maxDistance)
    if (QUERY_GetEntitiesCount(buffPlatformTargets) > 0) {
        return RandomEntity(buffPlatformTargets)
    }
    const playerAndMobTargets = FILTER_ByDistance(GetPlayerAndMobs(), portalEntity, maxDistance)
    if (QUERY_GetEntitiesCount(playerAndMobTargets) > 0 && checkOnlyBuildings === false) {
        return RandomEntity(playerAndMobTargets)
    }
    const towerTargets = FILTER_ByDistance(GetPlayerOwned(["tower"]), portalEntity, maxDistance)
    if (QUERY_GetEntitiesCount(towerTargets) > 0) {
        return RandomEntity(towerTargets)
    }
    const wallTargets = FILTER_ByDistance(GetPlayerOwned(["wall"]), portalEntity, maxDistance)
    if (QUERY_GetEntitiesCount(wallTargets) > 0) {
        return RandomEntity(wallTargets)
    }
    const otherBuildableTargets = FILTER_ByDistance(GetPlayerStructures(), portalEntity, maxDistance)
    if (QUERY_GetEntitiesCount(otherBuildableTargets) > 0) {
        return RandomEntity(otherBuildableTargets)
    }

    return EMPTY_ENTITY_GROUP
}

BASE_DeclarePiglinStructureDestroyedResponseHandler("ed_defend_wall_breach", (villageId, _wallSectionDestroyed) => {
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const portal = GetVillagePortal(villageId)

    if (baseSize !== BASE_SIZE_VANGUARD && baseSize !== BASE_SIZE_SMALL && baseSize !== BASE_SIZE_MEDIUM && baseSize !== BASE_SIZE_LARGE) {
        return
    }

    PlayStingerToClosePlayers(GetStingerForPiglinFaction(FACTION_NAME_DEFEND, "tactic"), portal)
    _playDefendAttackStinger(portal)
})

//tier 1 piglin structure destroyed barracks squad
BASE_DeclarePiglinStructureDestroyedResponseHandler("ed_defend_tier_1_piglin_structure_destroyed_squad", (_villageId, _piglinStructure) => {})

//tier 2 piglin structure destroyed barracks squad
BASE_DeclarePiglinStructureDestroyedResponseHandler("ed_defend_tier_2_piglin_structure_destroyed_squad", (villageId, _towerDestroyed) => {
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)

    //spawn units
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    let spawnedUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        spawnedUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].tier2StructureDestroyed.spawnedUnits, spawnPosition)
        AssignEntitiesToAI(villageId, spawnedUnits, defendVal.aiConfig[DEFEND_SIEGE_AI.TAG])
    }

    PlayCommonBuildingDestroyedVO()
})

//tier 3 piglin structure destroyed barracks squad - magma tower
BASE_DeclarePiglinStructureDestroyedResponseHandler("ed_defend_magma_tower_barracks_squad", (villageId, _towerDestroyed) => {
    //spawn units
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    let spawnedUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        spawnedUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].tier3StructureDestroyed.spawnedUnits, spawnPosition)
        AssignEntitiesToAI(villageId, spawnedUnits, defendVal.aiConfig[DEFEND_SIEGE_AI.TAG])
    }

    PlayCommonBuildingDestroyedVO()
})

//tier 3 piglin structure destroyed barracks squad - regenerator
BASE_DeclarePiglinStructureDestroyedResponseHandler("ed_defend_building_regenerator_destroyed", (villageId, _towerDestroyed) => {
    //spawn units
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    let spawnedUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        spawnedUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].tier3StructureDestroyed.spawnedUnits, spawnPosition)
        const medics = FILTER_ByTagFilter(spawnedUnits, ["medic"], [])
        const otherPiglins = OPER_Difference(spawnedUnits, medics)
        AssignEntitiesToAI(villageId, otherPiglins, defendVal.aiConfig[DEFEND_DEFEND_AI.TAG])
        AssignEntitiesToAI(villageId, medics, defendVal.aiConfig[DEFEND_UNIQUE_AI.TAG])
    }

    PlayCommonBuildingDestroyedVO()
})

//tier 3 piglin structure destroyed barracks squad - range extender
BASE_DeclarePiglinStructureDestroyedResponseHandler("ed_defend_range_extender_destroyed", (villageId, _towerDestroyed) => {
    //spawn units
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    let spawnedUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        spawnedUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].tier3StructureDestroyed.spawnedUnits, spawnPosition)
        const medics = FILTER_ByTagFilter(spawnedUnits, ["medic"], [])
        const otherPiglins = OPER_Difference(spawnedUnits, medics)
        AssignEntitiesToAI(villageId, otherPiglins, defendVal.aiConfig[DEFEND_DEFEND_AI.TAG])
        AssignEntitiesToAI(villageId, medics, defendVal.aiConfig[DEFEND_UNIQUE_AI.TAG])
    }
    PlayCommonBuildingDestroyedVO()
})

const _TriggerBattleRepairResponse = (villageId, spawnLocation, destination, squadConfig, buildConfig) => {
    // units
    let spawnedUnits = EMPTY_ENTITY_GROUP
    for (const unit of squadConfig.units) {
        spawnedUnits = OPER_Append(spawnedUnits, SpawnEntitiesAt(spawnLocation, unit.archetype, unit.amount, TEAM_ORANGE, villageId))
    }
    // note the engineer may be engineer controlled, but fallback to the scripted control afterwards. we also cannot leash due to leashing being static
    OUTPUT_MoveAttackPosition(spawnedUnits, destination, 2, CALLBACK_NONE)

    const engineers = SpawnEngineersIfThereAreNone(villageId, 2)
    OUTPUT_MoveAttackPosition(engineers, destination, 2, CALLBACK_NONE)

    // buildable
    const deck = buildConfig.buildCards()
    DECK_MultiplyByMultipleRules(deck, buildConfig.placementRules())
    // OUTPUT_AppendNamedDeck(TICKET_BUILD_DECK_NAME + villageId, deck)

    LISTENFOR_BuildingStart({
        snippet: "bc_defend_battle_repair_building",
        ownerVillageId: villageId,
        villageId: villageId,
        includeTags: [defBattleRepairsVal.buildingTag],
        payloadEntities: spawnedUnits
    })
}

SNIPPET_BuildingStart("bc_defend_battle_repair_building", (buildingEntity, payload) => {
    const guards = payload.entities
    OUTPUT_MoveAttackPosition(guards, buildingEntity, 4, CALLBACK_NONE)
    Once()
})

//battle repairs response
BASE_DeclarePiglinStructureDestroyedResponseHandler("ed_defend_battle_repairs_inner", (villageId, destroyedEntity) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const limit = defBattleRepairsVal.responseLimit[size]

    if (limit === undefined) {
        // not supported
        Once()
        return
    }

    if (DeltaVillageVariable(villageId, defBattleRepairsVal.responseCountVariable, 1) > limit) {
        return
    }

    const flavour = QUERY_GetVillageFlavour(villageId)
    const squadConfig = GetChild(defBattleRepairsVal.squadConfigs, size, flavour)
    if (squadConfig === undefined) {
        return
    }
    const buildConfig = defBattleRepairsVal.buildConfigs.innerKeepWall

    _TriggerBattleRepairResponse(villageId, GetVillagePortalSpawnLocation(villageId), destroyedEntity, squadConfig, buildConfig)
})

BASE_DeclarePiglinStructureDestroyedResponseHandler("ed_defend_battle_repairs_outer", (villageId, destroyedEntity) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const limit = defBattleRepairsVal.responseLimit[size]

    if (limit === undefined) {
        // not supported
        Once()
        return
    }

    if (DeltaVillageVariable(villageId, defBattleRepairsVal.responseCountVariable, 1) > limit) {
        return
    }

    const flavour = QUERY_GetVillageFlavour(villageId)
    const squadConfig = GetChild(defBattleRepairsVal.squadConfigs, size, flavour)
    if (squadConfig === undefined) {
        return
    }
    const buildConfig = defBattleRepairsVal.buildConfigs.outterKeepWall

    _TriggerBattleRepairResponse(villageId, GetVillagePortalSpawnLocation(villageId), destroyedEntity, squadConfig, buildConfig)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_defend_tier_1_piglin_structure_damaged_squad", (villageId, _piglinStructure) => {
    _playDefendAttackStinger(GetVillagePortal(villageId))
})

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_defend_tier_2_piglin_structure_damaged_squad", (villageId, _piglinStructure) => {
    const portal = GetVillagePortal(villageId)

    //spawn units
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    let spawnedUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        spawnedUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].tier2StructureDamaged.spawnedUnits, spawnPosition)
        const medics = FILTER_ByTagFilter(spawnedUnits, ["medic"], [])
        const otherPiglins = OPER_Difference(spawnedUnits, medics)
        AssignEntitiesToAI(villageId, otherPiglins, defendVal.aiConfig[DEFEND_DEFEND_AI.TAG])
        AssignEntitiesToAI(villageId, medics, defendVal.aiConfig[DEFEND_UNIQUE_AI.TAG])
    }
    PlayStingerToClosePlayers(GetStingerForPiglinFaction(FACTION_NAME_DEFEND, "tactic"), portal)
    _playDefendAttackStinger(portal)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_defend_magma_tower_barracks_squad", (villageId, _piglinStructure) => {
    const portal = GetVillagePortal(villageId)

    //spawn units
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    let spawnedUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        spawnedUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].tier3StructureDamaged.spawnedUnits, spawnPosition)
        const medics = FILTER_ByTagFilter(spawnedUnits, ["medic"], [])
        const otherPiglins = OPER_Difference(spawnedUnits, medics)
        AssignEntitiesToAI(villageId, otherPiglins, defendVal.aiConfig[DEFEND_DEFEND_AI.TAG])
        AssignEntitiesToAI(villageId, medics, defendVal.aiConfig[DEFEND_UNIQUE_AI.TAG])
    }
    PlayStingerToClosePlayers(GetStingerForPiglinFaction(FACTION_NAME_DEFEND, "tactic"), portal)
    _playDefendAttackStinger(portal)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_defend_building_regenerator_damaged", (villageId, _piglinStructure) => {
    const portal = GetVillagePortal(villageId)

    //spawn units
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    let spawnedUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        spawnedUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].tier3StructureDamaged.spawnedUnits, spawnPosition)
        const medics = FILTER_ByTagFilter(spawnedUnits, ["medic"], [])
        const otherPiglins = OPER_Difference(spawnedUnits, medics)
        AssignEntitiesToAI(villageId, otherPiglins, defendVal.aiConfig[DEFEND_DEFEND_AI.TAG])
        AssignEntitiesToAI(villageId, medics, defendVal.aiConfig[DEFEND_UNIQUE_AI.TAG])
    }
    SpawnEngineersIfThereAreNone(villageId)
    // //send engineers to build 2 arrow towers
    // const regeneratorBuildDeck = BuildableCard("piglinTower", 2)
    // DECK_MultiplyByMultipleRules(regeneratorBuildDeck, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("towardsEnemies"), ZoneFilterCard("defGeneralZone")])
    // OUTPUT_AppendNamedDeck(TICKET_BUILD_DECK_NAME + villageId, regeneratorBuildDeck)
    _playDefendBuildStinger(portal)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_defend_range_extender_damaged", (villageId, _piglinStructure) => {
    const portal = GetVillagePortal(villageId)

    //spawn units
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    let spawnedUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        spawnedUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].tier2StructureDamaged.spawnedUnits, spawnPosition)
        const medics = FILTER_ByTagFilter(spawnedUnits, ["medic"], [])
        const otherPiglins = OPER_Difference(spawnedUnits, medics)
        AssignEntitiesToAI(villageId, otherPiglins, defendVal.aiConfig[DEFEND_DEFEND_AI.TAG])
        AssignEntitiesToAI(villageId, medics, defendVal.aiConfig[DEFEND_UNIQUE_AI.TAG])
    }

    SpawnEngineersIfThereAreNone(villageId)
    //send engineers to build 1 magma tower
    const regeneratorBuildDeck = BuildableCard("lavaSprayerTower", 1)
    DECK_MultiplyByMultipleRules(regeneratorBuildDeck, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("towardsEnemies"), ZoneFilterCard("defGeneralZone")])
    // OUTPUT_AppendNamedDeck(TICKET_BUILD_DECK_NAME + villageId, regeneratorBuildDeck)
    _playDefendBuildStinger(portal)
})

BASE_DeclarePiglinStructureDamagedResponseHandler("sd_defend_wall_breach", (villageId, _piglinStructure) => {
    const portal = GetVillagePortal(villageId)

    //spawn units
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    let spawnedUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        spawnedUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].wallDamaged.spawnedUnits, spawnPosition)
        const medics = FILTER_ByTagFilter(spawnedUnits, ["medic"], [])
        const otherPiglins = OPER_Difference(spawnedUnits, medics)
        AssignEntitiesToAI(villageId, otherPiglins, defendVal.aiConfig[DEFEND_DEFEND_AI.TAG])
        AssignEntitiesToAI(villageId, medics, defendVal.aiConfig[DEFEND_UNIQUE_AI.TAG])
    }

    _playDefendAttackStinger(portal)
})

BASE_DeclarePlayerStructureBuiltResponseHandler("pb_defend_tier_1_structure_squad", (villageId, _playerStructure) => {
    const portal = GetVillagePortal(villageId)

    //spawn units
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    let spawnedUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        spawnedUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].playerStructureBuilt.spawnedUnits, spawnPosition)
        const medics = FILTER_ByTagFilter(spawnedUnits, ["medic"], [])
        const otherPiglins = OPER_Difference(spawnedUnits, medics)
        AssignEntitiesToAI(villageId, otherPiglins, defendVal.aiConfig[DEFEND_DEFEND_AI.TAG])
        AssignEntitiesToAI(villageId, medics, defendVal.aiConfig[DEFEND_UNIQUE_AI.TAG])
    }
    _playDefendTargetStinger(portal)
})

BASE_DeclarePlayerStructureBuiltResponseHandler("pb_defend_tier_2_structure_squad", (villageId, _playerStructure) => {
    const portal = GetVillagePortal(villageId)

    //spawn units
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    let spawnedUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        spawnedUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].playerStructureBuilt.spawnedUnits, spawnPosition)
        AssignEntitiesToAI(villageId, spawnedUnits, defendVal.aiConfig[DEFEND_SIEGE_AI.TAG])
    }
    _playDefendTargetStinger(portal)
})

BASE_DeclarePlayerStructureBuiltResponseHandler("pb_defend_tier_3_structure_squad", (villageId, _playerStructure) => {
    const portal = GetVillagePortal(villageId)

    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    let spawnedUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        spawnedUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].playerStructureBuilt.spawnedUnits, spawnPosition)
        AssignEntitiesToAI(villageId, spawnedUnits, defendVal.aiConfig[DEFEND_SIEGE_AI.TAG])
    }
    SpawnEngineersIfThereAreNone(villageId)
    const tier3PlayerStructureBuildDeck = BuildableCard("piglinTower", 1)
    DECK_MultiplyByMultipleRules(tier3PlayerStructureBuildDeck, [PlacementPreferenceCard("closeToEnemies"), ZoneFilterCard("defGeneralZone")])
    // OUTPUT_AppendNamedDeck(TICKET_BUILD_DECK_NAME + villageId, tier3PlayerStructureBuildDeck)
    _playDefendTargetStinger(portal)
})

BASE_DeclarePlayerStructureBuiltResponseHandler("pb_defend_bridge_squad", (villageId, _playerStructure) => {
    const portal = GetVillagePortal(villageId)

    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const spawnPosition = GetVillagePortalSpawnLocation(villageId)
    let spawnedUnits = EMPTY_ENTITY_GROUP
    if (!IsBossVillage(villageId)) {
        spawnedUnits = SpawnVillageVariationUnits(villageId, defendVal.villageComposition[baseSize].playerStructureBuilt.spawnedUnits, spawnPosition)
        AssignEntitiesToAI(villageId, spawnedUnits, defendVal.aiConfig[DEFEND_SIEGE_AI.TAG])
    }
    _playDefendTargetStinger(portal)
})

SNIPPET_EntitySpawned("es_set_appearance_to_defend_faction_piglins", (piglinEntity) => {
    OUTPUT_OverrideFactionAppearanceByName(piglinEntity, FACTION_NAME_DEFEND)
})

SNIPPET_EntitySpawned("es_portal_guard_vo", (piglinEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(piglinEntity)
    LISTENFOR_LocalTimer({
        snippet: "lt_play_big_unit_vo",
        ownerVillageId: villageId,
        waitTime: defendVal.consts.timeUntilBigUnit,
        payloadInt: villageId
    })
    Once()
})

SNIPPET_LocalTimer("lt_play_big_unit_vo", (payload) => {
    const villageId = payload.int
    const villageEntity = GetVillageEntityFromID(villageId)
    if (HasEntities(villageEntity)) {
        const line = ChooseFromArray(defendVal.VO.bigUnit)
        _PlayVOBasedOnBaseSize(villageId, line, villageEntity)
    }
})

//audio stinger functions
const _playDefendAttackStinger = (portal) => {
    if (HasEntities(portal)) {
        OUTPUT_SendPositionalAudio("BAE_mus_stinger_rallyman_piglin_tactic_attack", portal)
    }
}

const _playDefendTargetStinger = (portal) => {
    if (HasEntities(portal)) {
        OUTPUT_SendPositionalAudio("BAE_mus_stinger_rallyman_piglin_tactic_target", portal)
    }
}

const _playDefendBuildStinger = (portal) => {
    if (HasEntities(portal)) {
        OUTPUT_SendPositionalAudio("BAE_mus_stinger_rallyman_piglin_tactic_build", portal)
    }
}

const _SpawnMagmaBoss = (villageId) => {
    if (QUERY_GetGlobalVariable(defendVal.global.bossSpawned)) {
        return
    }

    OUTPUT_SetGlobalVariable(defendVal.global.bossSpawned, 1)

    LISTENFOR_EntityTimer({
        snippet: "defendSpawnMagmaBoss",
        ownerVillageId: villageId,
        timerName: "defendSpawnMagmaBoss",
        entity: GetVillagePortal(villageId)
    })
    OUTPUT_SetEntityTimer(GetVillagePortal(villageId), "defendSpawnMagmaBoss", 2)
}

// phase summary: spawn an engineer from all remaining barracks and portal to build in the center platform.
const _MagmaBossActivatePhaseEngineers = (villageId) => {
    const maxRaxCount = 3 // +1 from the portal always

    const portalSpawnPoint = GetVillagePortalSpawnLocation(villageId)
    let spawnPoints = GetEntitiesWithTagsAndVillage([TAG_BARRACKS], villageId)
    spawnPoints = FILTER_ByClosest(spawnPoints, portalSpawnPoint, maxRaxCount)
    spawnPoints = OPER_Union(spawnPoints, portalSpawnPoint)

    SpawnEntitiesAt(spawnPoints, "badger:piglin_engineer", 1, TEAM_ORANGE, villageId)
    const deck = DECK_Empty()
    const gvValue = IncrementGlobal("gv_magma_phase")
    const numberOfArrowTowers = QUERY_RandomNumberGroup(1, 3, "number_of_towers")
    if (gvValue <= 1) {
        DECK_PutOnBottomOf(BuildableCard("piglinTower", numberOfArrowTowers), deck)
    } else {
        DECK_PutOnBottomOf(BuildableCard("piglinTower", numberOfArrowTowers), deck)
        DECK_PutOnBottomOf(BuildableCard("addFighterBarracks", 1), deck)
        DECK_Shuffle(deck)
    }

    DECK_MultiplyByMultipleRules(deck, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), ZoneFilterCard("defGeneralZone")])

    // OUTPUT_AppendNamedDeck(TICKET_BUILD_DECK_NAME + villageId, deck)
}

SNIPPET_EntityTimer("defendSpawnMagmaBoss", (portal, _payload) => {
    Once()
    const villageId = QUERY_GetVillageIDFromEntity(portal)

    SpawnBossAtPortal(villageId, "badger:piglin_magma_boss", 1)

    LISTENFOR_EntitySpawned({
        snippet: "es_defend_boss_spawned",
        ownerVillageId: villageId,
        villageId: villageId,
        includeTags: ["boss", "magma"]
    })

    LISTENFOR_HealthChanged({
        snippet: "hc_defend_magma_boss_first_stinger",
        ownerVillageId: villageId,
        includeTags: ["boss", "magma"],
        normalizedThreshold: 0.7,
        triggerMode: HEALTH_TRIGGER_MODE.CROSS,
        direction: HEALTH_DIRECTION.DAMAGE
    })
    LISTENFOR_HealthChanged({
        snippet: "hc_defend_magma_boss_geyser_activate",
        ownerVillageId: villageId,
        includeTags: ["boss", "magma"],
        normalizedThreshold: 0.45,
        triggerMode: HEALTH_TRIGGER_MODE.CROSS,
        direction: HEALTH_DIRECTION.DAMAGE
    })

    LISTENFOR_HealthChanged({
        snippet: "hc_defend_magma_boss_final_phase",
        ownerVillageId: villageId,
        includeTags: ["boss", "magma"],
        normalizedThreshold: 0.3,
        triggerMode: HEALTH_TRIGGER_MODE.CROSS,
        direction: HEALTH_DIRECTION.DAMAGE
    })
    const villageEntity = GetVillageEntityFromID(villageId)
    OUTPUT_MapSetKeyValue(villageEntity, MAP_KEY.BOSS, MAP_BOSS.DEFEND_BOSS)
    LISTENFOR_CinematicStarted({
        snippet: "cs_defend_boss_dead",
        ownerVillageId: villageId,
        cinematicName: defendVal.cinematic.bossDead
    })
    SetAudioPhaseForBase(villageId, defendVal.audioPerBossPhaseArray[4])
})
SNIPPET_HealthChanged("hc_defend_magma_boss_first_stinger", (_boss, _currentHealth, _previousHealth, payload) => {
    Logi("### hc_defend_magma_boss_first_stinger ###")
    const villageId = payload.ownerVillageId
    PlayPresentationActionToAll("piglin_boss_health_defend_1")
    const phase1PGVariation = defendVal.villageComposition[BASE_SIZE_BOSS].phase1
    const newUnits = SpawnVillageVariationUnits(villageId, phase1PGVariation.spawnedUnits, GetVillagePortalSpawnLocation(villageId))
    _MagmaBossActivatePhaseEngineers(payload.ownerVillageId)
    if (HasEntities(newUnits)) {
        AssignEntitiesToAI(villageId, newUnits, defendVal.aiConfig[DEFEND_DEFEND_AI.TAG])
    }
    Once()
})
SNIPPET_HealthChanged("hc_defend_magma_boss_geyser_activate", (boss, _currentHealth, _previousHealth, payload) => {
    Logi("### hc_defend_magma_boss_geyser_activate ###")
    const villageId = payload.ownerVillageId
    PlayPresentationActionToAll("piglin_boss_health_defend_2")
    OUTPUT_SetAttackMode(boss, "magma_boss_lava_geyser", true)
    _MagmaBossActivatePhaseEngineers(payload.ownerVillageId)
    _playDefendBuildStinger(boss)
    const phase1PGVariation = defendVal.villageComposition[BASE_SIZE_BOSS].phase2
    const newUnits = SpawnVillageVariationUnits(villageId, phase1PGVariation.spawnedUnits, GetVillagePortalSpawnLocation(villageId))
    if (HasEntities(newUnits)) {
        AssignEntitiesToAI(villageId, newUnits, defendVal.aiConfig[DEFEND_DEFEND_AI.TAG])
    }

    Once()
})

SNIPPET_HealthChanged("hc_defend_magma_boss_final_phase", (_boss, _currentHealth, _previousHealth, payload) => {
    Logi("### hc_defend_magma_boss_final_phase ###")
    const villageId = payload.ownerVillageId
    const phase1PGVariation = defendVal.villageComposition[BASE_SIZE_BOSS].phase3
    const newUnits = SpawnVillageVariationUnits(villageId, phase1PGVariation.spawnedUnits, GetVillagePortalSpawnLocation(villageId))
    if (HasEntities(newUnits)) {
        AssignEntitiesToAI(villageId, newUnits, defendVal.aiConfig[DEFEND_DEFEND_AI.TAG])
    }
    Once()
})
SNIPPET_EntitySpawned("es_defend_boss_spawned", (bossEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(bossEntity)
    const portal = GetVillagePortal(villageId)
    OUTPUT_AddTether(bossEntity, portal, 50)
})

//SNIPPET TO TRACK NUMBER OF TOWERS DESTROYED THEN BUILD MORE
SNIPPET_NonPopCappedEntityDestroyed("ed_countingTowers", (payload) => {
    const villageId = QUERY_GetVillageIDFromEntity(payload)
    const portal = GetVillagePortal(villageId)
    const baseSize = QUERY_GetFactionSizeFromVillageID(villageId)
    const towersDestroyed = GetVillageVariable(villageId, defendVal.village.towersDestroyed)
    //check and increment variable for number of towers destroyed

    if (!HasEntities(portal)) {
        return
    }

    if (towersDestroyed <= 5) {
        SetVillageVariable(villageId, defendVal.village.towersDestroyed, towersDestroyed + 1)
    } else if (towersDestroyed >= 5) {
        const towerBuildDeck = DECK_Empty()

        if (IsSmallOrGreater(baseSize)) {
            const closeTower = BuildableCard("piglinTower")
            DECK_MultiplyByMultipleRules(closeTower, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("towardsEnemies"), ZoneFilterCard("defGeneralZone")])
            DECK_PutOnBottomOf(towerBuildDeck, closeTower)
        }
        if (IsMediumOrGreater(baseSize)) {
            const farTower = BuildableCard("piglinTower")
            DECK_MultiplyByMultipleRules(farTower, [PlacementPreferenceCard(PLACEMENT_CLOSE_TO_VILLAGE_START), PlacementPreferenceCard("towardsEnemies"), ZoneFilterCard("defGeneralZone")])
            DECK_PutOnBottomOf(towerBuildDeck, farTower)
        }
        SpawnEngineersIfThereAreNone(villageId)
        // OUTPUT_AppendNamedDeck(TICKET_BUILD_DECK_NAME + villageId, towerBuildDeck)
        SetVillageVariable(villageId, defendVal.village.towersDestroyed, 0)

        _playDefendBuildStinger(GetVillagePortal(villageId))
    }
})

// BUILDING PLAN FOR DEFEND Faction
const defendBaseMiniDeckNames = ["keepNearPortal", "innerKeep", "insideKeepWall", "outsideKeepWall", "insideOuterWall", "outsideOuterWall", "outskirts"]

//NEAR PORTAL
const _flavourKeepNearPortalSlot1 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "addFighterBarracks" },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 2, build: "piglinSporeFan" },
            [VILLAGE_VARIATION_B]: { amount: 2, build: "piglinSporeFan" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 2, build: "piglinSporeFan" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

const _flavourKeepNearPortalSlot2 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "piglinTower" },
            [VILLAGE_VARIATION_B]: { amount: 2, build: "piglinTower" }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "rangeExtender" },
            [VILLAGE_VARIATION_B]: { amount: 1, build: "addFighterBarracks" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "addSiegerBarracks" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

const _flavourKeepNearPortalSlot3 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "goldMine" },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 2, build: "piglinTower" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

//INNER KEEP
const _flavourInnerKeepSlot1 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: 2, build: "addSiegerBarracks" },
            [VILLAGE_VARIATION_B]: { amount: 2, build: "piglinTower" }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 3, build: "piglinTower" },
            [VILLAGE_VARIATION_B]: { amount: 3, build: "piglinTower" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 2, build: "addFighterBarracks" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

const _flavourInnerKeepSlot2 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null },
            [VILLAGE_VARIATION_B]: { amount: 2, build: "addFighterBarracks" }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "addFighterBarracks" },
            [VILLAGE_VARIATION_B]: { amount: 1, build: "addFighterBarracks" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "rangeExtender" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

const _flavourInnerKeepSlot3 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: 3, build: "piglinTower" },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "addSiegerBarracks" },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "buildingRegenerator" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

//INSIDE KEEP WALL
const _flavourInsideKeepWallSlot1 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: 3, build: "piglinTower" },
            [VILLAGE_VARIATION_B]: { amount: 2, build: "addFighterBarracks" }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 2, build: "lavaSprayerTower" },
            [VILLAGE_VARIATION_B]: { amount: 2, build: "addFighterBarracks" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "addSpecialistBarracks" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

const _flavourInsideKeepWallSlot2 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "addFighterBarracks" },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 2, build: "piglinTower" },
            [VILLAGE_VARIATION_B]: { amount: 3, build: "netherSpreader" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 2, build: "piglinTower" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

const _flavourInsideKeepWallSlot3 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null },
            [VILLAGE_VARIATION_B]: { amount: 2, build: "piglinTower" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "lavaSprayerTower" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

//OUTSIDE KEEP WALL
const _flavourOutsideKeepWallSlot1 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: 4, build: "netherSpreader" },
            [VILLAGE_VARIATION_B]: { amount: 4, build: "netherSpreader" }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 3, build: "piglinTower" },
            [VILLAGE_VARIATION_B]: { amount: 3, build: "piglinTower" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "addFighterBarracks" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

const _flavourOutsideKeepWallSlot2 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 2, build: "addSiegerBarracks" },
            [VILLAGE_VARIATION_B]: { amount: 2, build: "addSiegerBarracks" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 2, build: "addSiegerBarracks" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

const _flavourOutsideKeepWallSlot3 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 2, build: "addSiegerBarracks" },
            [VILLAGE_VARIATION_B]: { amount: 1, build: "addSiegerBarracks" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 2, build: "lavaSprayerTower" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

//INSIDE OUTER WALL // MEDIUM+
const _flavourInsideOuterWallSlot1 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 2, build: "piglinTower" },
            [VILLAGE_VARIATION_B]: { amount: 3, build: "piglinTower" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "addSpecialistBarracks" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

const _flavourInsideOuterWallSlot2 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "netherSpreader" },
            [VILLAGE_VARIATION_B]: { amount: 1, build: "netherSpreader" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 6, build: "piglinTower" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

const _flavourInsideOuterWallSlot3 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "lavaSprayerTower" },
            [VILLAGE_VARIATION_B]: { amount: 2, build: "goldMine" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "lavaSprayerTower" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

//OUTSIDE OUTER WALL //MEDIUM+
const _flavourOutsideOuterWallSlot1 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 2, build: "netherSpreader" },
            [VILLAGE_VARIATION_B]: { amount: 2, build: "netherSpreader" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "lavaSprayerTower" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

const _flavourOutsideOuterWallSlot2 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 4, build: "netherSpreader" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

//OUTSKIRTS
const _flavourOutskirtsSlot1 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 4, build: "netherSpreader" },
            [VILLAGE_VARIATION_B]: { amount: 4, build: "netherSpreader" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 4, build: "netherSpreader" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

//PHASE BIULDS
const _flavourPhaseTowerSlot1 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "piglinTower" },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "addFighterBarracks" },
            [VILLAGE_VARIATION_B]: { amount: 1, build: "addFighterBarracks" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "addFighterBarracks" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

const _flavourPhaseTowerSlotDouble = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "piglinTower" },
            [VILLAGE_VARIATION_B]: { amount: null, build: null }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: null, build: null },
            [VILLAGE_VARIATION_B]: { amount: 1, build: "addFighterBarracks" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "piglinTower" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

const _flavourPhaseBarracksSlot1 = (villageId) => {
    const size = QUERY_GetFactionSizeFromVillageID(villageId)
    const flavour = GetVillageFlavour(villageId)

    const dict = {
        [BASE_SIZE_SMALL]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "addSiegerBarracks" },
            [VILLAGE_VARIATION_B]: { amount: 1, build: "addFighterBarracks" }
        },
        [BASE_SIZE_MEDIUM]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "addFighterBarracks" },
            [VILLAGE_VARIATION_B]: { amount: 1, build: "addFighterBarracks" }
        },
        [BASE_SIZE_LARGE]: {
            [VILLAGE_VARIATION_A]: { amount: 1, build: "addFighterBarracks" }
        }
    }

    const val = dict[size][flavour]
    return [val.build, val.amount]
}

const defendBaseGen = {
    small: {
        keepNearPortal: [_flavourKeepNearPortalSlot1, _flavourKeepNearPortalSlot2, _flavourKeepNearPortalSlot3],
        innerKeep: [["goldMine", 2], _flavourInnerKeepSlot1, _flavourInnerKeepSlot2, _flavourInnerKeepSlot3],
        insideKeepWall: [["goldMine"], _flavourInsideKeepWallSlot1, _flavourInsideKeepWallSlot2, _flavourInsideKeepWallSlot3],
        outsideKeepWall: [["netherSpreader", 2], _flavourOutsideKeepWallSlot1, _flavourOutsideKeepWallSlot2, _flavourOutsideKeepWallSlot3],
        insideOuterWall: [_flavourInsideOuterWallSlot1, _flavourInsideOuterWallSlot2, _flavourInsideOuterWallSlot3],
        outsideOuterWall: [_flavourOutsideOuterWallSlot1, _flavourOutsideOuterWallSlot2],
        outskirts: [_flavourOutskirtsSlot1]
    },
    medium: {
        keepNearPortal: [],
        innerKeep: [],
        insideKeepWall: [],
        outsideKeepWall: [],
        insideOuterWall: [["netherSpreader", 2]],
        outsideOuterWall: [],
        outskirts: []
    },
    large: {
        keepNearPortal: [],
        innerKeep: [],
        insideKeepWall: [["netherSpreader"]],
        outsideKeepWall: [],
        insideOuterWall: [],
        outsideOuterWall: [["netherSpreader", 2]],
        outskirts: []
    }
}

const defendBasePhase2 = {
    small: {
        keepNearPortal: [],
        innerKeep: [],
        insideKeepWall: [],
        outsideKeepWall: [],
        insideOuterWall: [],
        outsideOuterWall: [],
        outskirts: []
    },
    medium: {
        keepNearPortal: [],
        innerKeep: [_flavourPhaseBarracksSlot1],
        insideKeepWall: [],
        outsideKeepWall: [],
        insideOuterWall: [],
        outsideOuterWall: [],
        outskirts: []
    },

    large: {
        keepNearPortal: [],
        innerKeep: [],
        insideKeepWall: [],
        outsideKeepWall: [_flavourPhaseBarracksSlot1],
        insideOuterWall: [],
        outsideOuterWall: [],
        outskirts: []
    }
}

const defendBasePhase3 = {
    small: {
        keepNearPortal: [],
        innerKeep: [],
        insideKeepWall: [],
        outsideKeepWall: [],
        insideOuterWall: [],
        outsideOuterWall: [],
        outskirts: []
    },
    medium: {
        keepNearPortal: [],
        innerKeep: [_flavourPhaseBarracksSlot1],
        insideKeepWall: [],
        outsideKeepWall: [],
        insideOuterWall: [],
        outsideOuterWall: [],
        outskirts: []
    },

    large: {
        keepNearPortal: [],
        innerKeep: [],
        insideKeepWall: [],
        outsideKeepWall: [_flavourPhaseBarracksSlot1],
        insideOuterWall: [],
        outsideOuterWall: [],
        outskirts: []
    }
}

const defendBasePhase4 = {
    small: {
        keepNearPortal: [],
        innerKeep: [],
        insideKeepWall: [],
        outsideKeepWall: [],
        insideOuterWall: [],
        outsideOuterWall: [],
        outskirts: []
    },
    medium: {
        keepNearPortal: [],
        innerKeep: [],
        insideKeepWall: [],
        outsideKeepWall: [_flavourPhaseTowerSlotDouble],
        insideOuterWall: [],
        outsideOuterWall: [],
        outskirts: []
    },

    large: {
        keepNearPortal: [_flavourPhaseTowerSlot1],
        innerKeep: [],
        insideKeepWall: [],
        outsideKeepWall: [],
        insideOuterWall: [],
        outsideOuterWall: [],
        outskirts: []
    }
}

// ==== VO ====
SNIPPET_CinematicFinished(`cf_${defendVal.cinematic.firstTimeNonShieldBaseIntro}`, (payload) => {
    UnlockJournalEntry(JOURNAL_UNLOCKS.HORDE_DEFEND_FACTION)
    PlayPresentationActionToAll(defendVal.VO.postIntroVO)
    PlayBaseTooToughVO(payload.ownerVillageId, 7)
    HandleRSLOnboarding(payload.ownerVillageId)
})

SNIPPET_CinematicFinished(`cf_${defendVal.cinematic.bossIntro}`, (payload) => {
    _SpawnMagmaBoss(payload.ownerVillageId, true)
    PlayPresentationActionToAll(defendVal.VO.postBossSpawnVO)
    SetPortalInvulnerable(payload.ownerVillageId, true)
})

SNIPPET_CinematicFinished(`cf_${defendVal.cinematic.shieldIntro}`, (payload) => {
    PlayPresentationActionToAll(defendVal.VO.postShieldIntroVO)
    PlayBaseTooToughVO(payload.ownerVillageId, 1)
    HandleRSLOnboarding(payload.ownerVillageId)
    Once()
})

SNIPPET_SpatialPartitionEntered("spe_defend_outpost", () => {
    if (QUERY_GetGlobalVariable("outpostVisited") === 0) {
        OUTPUT_SetGlobalVariable("outpostVisited", 1)
    }
})

// TELEMETRY
SetupDefaultTelemetryForPiglinBase(FACTION_NAME_DEFEND)
