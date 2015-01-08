document.addEventListener('deviceready', function() {

    window.revmob = new RevMob();

	revmob.enableTestMode(true);

    revmob.init(cordova.platformId === 'ios' ? '54ab082b897252bf0917ff3f' : '54ab083cecec2af9584b2759');

    var actionList = document.getElementById('actions');

    actionList.addEventListener('click', function(e) {

        switch(e.target.id) {
            case 'showTopBanner':
                revmob.showBannerAd(true);
                break;
            case 'showBottomBanner':
                revmob.showBannerAd();
                break;
            case 'hideBanner':
                revmob.hideBannerAd();
                break;
            case 'showInterstitial':
                revmob.showInterstitialAd();
                break;
            case 'showPopup':
                revmob.showPopupAd();
                break;
        }

    }, false);

}, false);