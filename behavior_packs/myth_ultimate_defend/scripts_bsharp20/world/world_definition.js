const WorldGenDefinition = {
    base: null,
    modify: (filterManager) => {
        // Maditory Below
        filterManager.AppendFilter(["myth", "center"], 1)
        filterManager.AppendFilter(["myth", "fountain_village"], 1)
        filterManager.AppendFilter(["myth", "piglin_defend_large"], 1)

        filterManager.AppendFilter(["myth", "jungle"], 1)
        filterManager.AppendFilter(["myth", "brokenlands"], 1)
        filterManager.AppendFilter(["myth", "forest"], 1)
        filterManager.AppendFilter(["myth", "frostlands"], 1)
    }
}

SNIPPET_InheritsFromGameMode("myth_ultimate_defend", () => {
    SetWorldGenDefinition(WorldGenDefinition)
})
