cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-revmob/www/revmob.js",
        "id": "cordova-plugin-revmob.RevMobPlugin",
        "pluginId": "cordova-plugin-revmob",
        "clobbers": [
            "RevMob",
            "RevMobAds",
            "smoothieServices.revmob"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.google.playservices": "21.0.0",
    "cordova-plugin-revmob": "1.1.1"
}
// BOTTOM OF METADATA
});