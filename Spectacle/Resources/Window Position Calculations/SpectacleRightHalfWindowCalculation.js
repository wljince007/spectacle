windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(function (windowRect, visibleFrameOfSourceScreen, visibleFrameOfDestinationScreen) {
    var oneHalfRect = SpectacleCalculationHelpers.copyRect(visibleFrameOfDestinationScreen);
    oneHalfRect.width = Math.floor(oneHalfRect.width / 2.0);
    oneHalfRect.x += oneHalfRect.width;

    var twoThirdRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
    twoThirdRect.width = Math.floor(visibleFrameOfDestinationScreen.width * 2 / 3.0);
    twoThirdRect.x = visibleFrameOfDestinationScreen.x + visibleFrameOfDestinationScreen.width - twoThirdRect.width;

    var oneThirdsRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
    oneThirdsRect.width = Math.floor(visibleFrameOfDestinationScreen.width / 3.0);
    oneThirdsRect.x = visibleFrameOfDestinationScreen.x + visibleFrameOfDestinationScreen.width - oneThirdsRect.width;

    if (Math.abs(CGRectGetMidY(windowRect) - CGRectGetMidY(twoThirdRect)) <= 1.0) {
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(twoThirdRect, windowRect)) {
            return oneHalfRect;
        }
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(oneHalfRect, windowRect)) {
            return oneThirdsRect;
        }
    }
    return twoThirdRect;
}, "SpectacleWindowActionRightHalf");
