RenderJSEvents.RegisterItemDecorations(event => {

    event.register("materialfactory:annulus", context => {

        let itemStack = context.itemStack
        let maxcount = 100

        let upcount = itemStack.nbt?.up ?? 0
        let upPrecent = Math.min(Math.max(upcount / maxcount, 0), 1)
        let leftcount = itemStack.nbt?.left ?? 0
        let leftPrecent = Math.min(Math.max(leftcount / maxcount, 0), 1)
        let rightcount = itemStack.nbt?.right ?? 0
        let rightPrecent = Math.min(Math.max(rightcount / maxcount, 0), 1)
        let downcount = itemStack.nbt?.down ?? 0
        let downPrecent = Math.min(Math.max(downcount / maxcount, 0), 1)

        let guiGraphics = context.guiGraphics

        let maxName = 'air';
        let maxVal = 0;

        if (upcount > maxVal) { maxVal = upcount; maxName = 'materialfactory:arrow_up'; }
        if (leftcount > maxVal) { maxVal = leftcount; maxName = 'materialfactory:arrow_left'; }
        if (rightcount > maxVal) { maxVal = rightcount; maxName = 'materialfactory:arrow_right'; }
        if (downcount > maxVal) { maxVal = downcount; maxName = 'materialfactory:arrow_down'; }
        
        guiGraphics.pose().pushPose()
        guiGraphics.pose().translate(context.xOffset, context.yOffset, 200)

        guiGraphics.pose().scale(0.5, 0.5, 0.5)
        guiGraphics.renderItem(Item.of(maxName), 8, 8, 0)
        guiGraphics.pose().popPose()

        RenderJSUtils.fill(guiGraphics, context.xOffset + 2, context.yOffset, context.xOffset + 15, context.yOffset + 1, 0, 0, 0, 255)
        RenderJSUtils.fill(guiGraphics, context.xOffset, context.yOffset + 2, context.xOffset + 1, context.yOffset + 15, 0, 0, 0, 255)
        RenderJSUtils.fill(guiGraphics, context.xOffset + 15, context.yOffset + 2, context.xOffset + 16, context.yOffset + 15, 0, 0, 0, 255)
        RenderJSUtils.fill(guiGraphics, context.xOffset + 2, context.yOffset + 15, context.xOffset + 15, context.yOffset + 16, 0, 0, 0, 255)

        RenderJSUtils.fill(guiGraphics, context.xOffset + 2, context.yOffset, context.xOffset + 2 + 13 * upPrecent, context.yOffset + 1, 247, 97, 94, 255)
        RenderJSUtils.fill(guiGraphics, context.xOffset, context.yOffset + 15, context.xOffset + 1, context.yOffset + 15 - 13 * leftPrecent, 255, 215, 0, 255)
        RenderJSUtils.fill(guiGraphics, context.xOffset + 15, context.yOffset + 2, context.xOffset + 16, context.yOffset + 2 + 13 * rightPrecent, 144, 238, 144, 255)
        RenderJSUtils.fill(guiGraphics, context.xOffset + 15, context.yOffset + 15, context.xOffset + 15 - 13 * downPrecent, context.yOffset + 16, 0, 245, 255, 255)
    })

})