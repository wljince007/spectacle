windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(function (windowRect, visibleFrameOfSourceScreen, visibleFrameOfDestinationScreen) {
    var oneQuarterRect = SpectacleCalculationHelpers.copyRect(visibleFrameOfDestinationScreen);
    oneQuarterRect.width = Math.floor(visibleFrameOfDestinationScreen.width / 2.0);
    oneQuarterRect.height = Math.floor(visibleFrameOfDestinationScreen.height / 2.0);

    var twoThirdRect = SpectacleCalculationHelpers.copyRect(oneQuarterRect);
    twoThirdRect.width = Math.floor(visibleFrameOfDestinationScreen.width * 2 / 3.0);

    var oneThirdsRect = SpectacleCalculationHelpers.copyRect(oneQuarterRect);
    oneThirdsRect.width = Math.floor(visibleFrameOfDestinationScreen.width / 3.0);

    if (Math.abs(CGRectGetMidY(windowRect) - CGRectGetMidY(oneThirdsRect)) <= 1.0) {
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(oneThirdsRect, windowRect)) {
            return oneQuarterRect;
        }
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(oneQuarterRect, windowRect)) {
            return twoThirdRect;
        }
    }
    return oneThirdsRect;
}, "SpectacleWindowActionLowerLeft");
