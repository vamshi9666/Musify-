var ourScript = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
ourScript.src = chrome.extension.getURL('./lib/p5.min.js');
ourScript.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(ourScript);


var ourScript2 = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
ourScript2.src = chrome.extension.getURL('./lib/p5.dom.min.js');
ourScript2.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(ourScript2);

var ourScript3 = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
ourScript3.src = chrome.extension.getURL('./lib/p5.sound.min.js');
ourScript3.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(ourScript3);


var actualScript = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
actualScript.src = chrome.extension.getURL('./main.js');
actualScript.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(actualScript);


