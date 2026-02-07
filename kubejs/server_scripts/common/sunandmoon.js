const CelesteConfig = Java.loadClass('org.infernalstudios.celesteconfig.Constants')
// 配置参数
const CONFIG = {
    MIN_SUN_SIZE: 1,      // 最小太阳大小
    MAX_SUN_SIZE: 5,      // 最大太阳大小
    MAX_DAYS: 100,        // 达到最大太阳所需天数
    START_DAY: 1,         // 开始增长的天数（默认为第1天）
    ENABLE_DEBUG: false    // 是否启用调试输出
};
MEJSEvents.newDay(event => {
    if (event.serverLevel.dimension != "minecraft:overworld") return;
    
    let totalDayTime = event.serverLevel.getDayTime();
    let dayNumber = Math.floor(totalDayTime / 24000) + 1;
    
    let SunSize = CONFIG.MIN_SUN_SIZE;
    
    // 判断是否在增长周期内
    if (dayNumber >= CONFIG.START_DAY && dayNumber <= CONFIG.MAX_DAYS) {
        // 计算增长比例
        let progressDays = dayNumber - CONFIG.START_DAY;
        let totalGrowthDays = CONFIG.MAX_DAYS - CONFIG.START_DAY;
        
        // 线性插值计算太阳大小
        SunSize = CONFIG.MIN_SUN_SIZE + 
                 (CONFIG.MAX_SUN_SIZE - CONFIG.MIN_SUN_SIZE) * 
                 (progressDays / totalGrowthDays);
        
        // 确保在第MAX_DAYS天时正好是最大值
        if (dayNumber === CONFIG.MAX_DAYS) {
            SunSize = CONFIG.MAX_SUN_SIZE;
        }
    } 
    // 如果超过最大天数，则保持最大值
    else if (dayNumber > CONFIG.MAX_DAYS) {
        SunSize = CONFIG.MAX_SUN_SIZE;
    }
    // 如果小于开始天数，则保持最小值
    else {
        SunSize = CONFIG.MIN_SUN_SIZE;
    }

    SunSize = Math.max(CONFIG.MIN_SUN_SIZE, Math.min(SunSize, CONFIG.MAX_SUN_SIZE));
    
    CelesteConfig.sunHeight = SunSize;
    CelesteConfig.sunWidth = SunSize;
    if (CONFIG.ENABLE_DEBUG) {
        console.log(`[太阳大小系统]`);
        console.log(`  当前天数: ${dayNumber}`);
        console.log(`  太阳大小: ${SunSize.toFixed(2)}`);
        console.log(`  配置: 最小=${CONFIG.MIN_SUN_SIZE}, 最大=${CONFIG.MAX_SUN_SIZE}, 增长天数=${CONFIG.MAX_DAYS}`);
    }
});