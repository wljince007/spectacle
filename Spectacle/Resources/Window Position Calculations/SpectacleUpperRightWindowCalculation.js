windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(function (windowRect, visibleFrameOfSourceScreen, visibleFrameOfDestinationScreen) {
    var oneQuarterRect = SpectacleCalculationHelpers.copyRect(visibleFrameOfDestinationScreen);
    oneQuarterRect.width = Math.floor(visibleFrameOfDestinationScreen.width / 2.0);
    oneQuarterRect.height = Math.floor(visibleFrameOfDestinationScreen.height / 2.0);
    oneQuarterRect.x += oneQuarterRect.width;
    oneQuarterRect.y = visibleFrameOfDestinationScreen.y + Math.floor(visibleFrameOfDestinationScreen.height / 2.0) + (visibleFrameOfDestinationScreen.height % 2.0);

    var twoThirdRect = SpectacleCalculationHelpers.copyRect(oneQuarterRect);
    twoThirdRect.width = Math.floor(visibleFrameOfDestinationScreen.width * 2 / 3.0);
    twoThirdRect.x = visibleFrameOfDestinationScreen.x + visibleFrameOfDestinationScreen.width - twoThirdRect.width;


    var oneThirdsRect = SpectacleCalculationHelpers.copyRect(oneQuarterRect);
    oneThirdsRect.width = Math.floor(visibleFrameOfDestinationScreen.width / 3.0);
    oneThirdsRect.x = visibleFrameOfDestinationScreen.x + visibleFrameOfDestinationScreen.width - oneThirdsRect.width;

    if (Math.abs(CGRectGetMidY(windowRect) - CGRectGetMidY(oneThirdsRect)) <= 1.0) {
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(oneThirdsRect, windowRect)) {
            return oneQuarterRect;
        }
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(oneQuarterRect, windowRect)) {
            return twoThirdRect;
        }
    }
    return oneThirdsRect;
}, "SpectacleWindowActionUpperRight");
