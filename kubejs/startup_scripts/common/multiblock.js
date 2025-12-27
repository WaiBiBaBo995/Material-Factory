const $ResourceKey = Java.loadClass('net.minecraft.resources.ResourceKey');
const $PatchouliAPI = Java.loadClass('vazkii.patchouli.api.PatchouliAPI');
const $Character = Java.loadClass('java.lang.Character');

// 定义多方块结构创建函数
global.SourceFluidTank = () =>
    $PatchouliAPI.get().makeMultiblock(
        [
            ['_______', '_______', '_______', '___0___', '_______', '_______', '_______'],
            ['___B___', '_C___C_', '__DDD__', 'B_DED_B', '__DDD__', '_C___C_', '___B___'],
            ['__AAA__', '_AAAAA_', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', '_AAAAA_', '__AAA__'],
        ],
        new $Character('_'),
        $PatchouliAPI.get().anyMatcher(),
        new $Character('0'),
        "ars_nouveau:arcane_platform[facing=up]",
        new $Character('A'),
        "ars_nouveau:mage_block",
        new $Character('B'),
        "supplementaries:candle_holder_magenta[candles=4]",
        new $Character('C'),
        "minecraft:pink_candle[candles=4]",
        new $Character('D'),
        "chisel:llama/magenta_wool",
        new $Character('E'),
        "chisel:legacy/pink_wool"
    )

global.SourceFluidExtractor = () =>
    $PatchouliAPI.get().makeMultiblock(
        [
            ['___________', '_I_______I_', '___________', '___________', '___________', '___________', '___________', '___________', '___________', '_I_______I_', '___________'],
            ['_F_______G_', 'FFF_____GGG', '_F_______G_', '___________', '___________', '_____0_____', '___________', '___________', '_J_______K_', 'JJJ_____KKK', '_J_______K_'],
            ['___________', '_F_______G_', '_____B_____', '___C___C___', '____DDD____', '__B_DED_B__', '____DDD____', '___C___C___', '_____B_____', '_J_______K_', '___________'],
            ['___________', '_FF_LLL_GG_', '_F_LAAAL_G_', '__LAAAAAL__', '_LAAAAAAAL_', '_LAAAAAAAL_', '_LAAAAAAAL_', '__LAAAAAL__', '_J_LAAAL_K_', '_JJ_LLL_KK_', '___________'],
            ['___________', '_FFFHHHGGG_', '_FFHHHHHGG_', '_FHHHHHHHG_', '_HHHHHHHHH_', '_HHHHHHHHH_', '_HHHHHHHHH_', '_JHHHHHHHK_', '_JJHHHHHKK_', '_JJJHHHKKK_', '___________'],
        ],
        new $Character('_'),
        $PatchouliAPI.get().anyMatcher(),
        new $Character('0'),
        "ars_nouveau:arcane_pedestal",
        new $Character('A'),
        "ars_nouveau:mage_block",
        new $Character('B'),
        "supplementaries:candle_holder_magenta[candles=4]",
        new $Character('C'),
        "minecraft:pink_candle[candles=4]",
        new $Character('D'),
        "chisel:llama/magenta_wool",
        new $Character('E'),
        "chisel:legacy/pink_wool",
        new $Character('F'),
        "ars_nouveau:red_archwood_wood",
        new $Character('G'),
        "ars_nouveau:purple_archwood_wood",
        new $Character('H'),
        "botania:bifrost_perm",
        new $Character('I'),
        "ars_nouveau:ritual_brazier",
        new $Character('J'),
        "ars_nouveau:blue_archwood_wood",
        new $Character('K'),
        "ars_nouveau:green_archwood_wood",
        new $Character('L'),
        "ars_nouveau:rune[facing=up]"
    )

// 如果需要，也可以将多方块结构添加到全局对象中
global.MULTIBLOCK = {
    SourceFluidTank: global.SourceFluidTank,
    SourceFluidExtractor: global.SourceFluidExtractor
}

// 在postInit事件中注册多方块结构
StartupEvents.postInit((event) => {
    $PatchouliAPI.get().registerMultiblock(
        ResourceLocation("materialfactory:source_fluid_tank"),
        global.SourceFluidTank()
    );
    $PatchouliAPI.get().registerMultiblock(
        ResourceLocation("materialfactory:source_fluid_extractor"),
        global.SourceFluidExtractor()
    );
})