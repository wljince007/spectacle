windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(function (windowRect, visibleFrameOfSourceScreen, visibleFrameOfDestinationScreen) {
    var oneHalfRect = SpectacleCalculationHelpers.copyRect(visibleFrameOfDestinationScreen);
    oneHalfRect.width = Math.floor(oneHalfRect.width / 2.0);

    var twoThirdRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
    twoThirdRect.width = Math.floor(visibleFrameOfDestinationScreen.width * 2 / 3.0);

    var oneThirdsRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
    oneThirdsRect.width = Math.floor(visibleFrameOfDestinationScreen.width / 3.0);

    if (Math.abs(CGRectGetMidY(windowRect) - CGRectGetMidY(twoThirdRect)) <= 1.0) {
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(twoThirdRect, windowRect)) {
            return oneHalfRect;
        }
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(oneHalfRect, windowRect)) {
            return oneThirdsRect;
        }
    }
    return twoThirdRect;
}, "SpectacleWindowActionLeftHalf");
