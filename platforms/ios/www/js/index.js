document.addEventListener('deviceready', function() {

    window.revmob = new RevMob(cordova.platformId === 'ios' ? '54ab082b897252bf0917ff3f' : '54ab083cecec2af9584b2759');

	//revmob.setTestingMode(true);

    revmob.startSession();

    var actionList = document.getElementById('actions');

    actionList.addEventListener('click', function(e) {

        switch(e.target.id) {
            case 'showTopBanner':
                revmob.showBanner(true);
                break;
            case 'showBottomBanner':
                revmob.showBanner();
                break;
            case 'hideBanner':
                revmob.hideBanner();
                break;
            case 'showInterstitial':
                revmob.showFullscreen();
                break;
            case 'showPopup':
                revmob.showPopup();
                break;
        }

    }, false);

}, false);