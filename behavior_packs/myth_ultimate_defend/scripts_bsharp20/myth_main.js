SNIPPET_InheritsFromGameMode("myth_ultimate_defend", () => {
    LISTENFOR_PlayerConnected({
        snippet: "pc_setup_compass",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT
    })

    //Set the current Act to Act 2
    OUTPUT_SetGlobalVariable(GV_STARTED_ACT_2, 1)
    OUTPUT_SetGlobalVariable(ACTS.ACT_1A, 0)
    OUTPUT_SetGlobalVariable(GV_STARTED_ACT_1_B, 1)
    OUTPUT_SetGlobalVariable(GV_STARTED_ACT_3_A, 0)
    OUTPUT_SetGlobalVariable(GV_STARTED_ACT_3_B, 0)
    OUTPUT_SetGlobalVariable(GV_STARTED_EPILOGUE, 0)
})

SNIPPET_PlayerConnected("pc_setup_compass", (_playerEntity, _isReconnecting, _payload) => {
    OUTPUT_UpdateHUDVisibility("hud_compass", true)
})
