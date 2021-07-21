var menuItem = {
    "id": "Wikipro",
    "title":"Wikipro",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

function fixedEncodeURI (str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "Wikipro" && clickData.selectionText){ 
        if (clickData.menuItemId == "Wikipro" && clickData.selectionText){        
            chrome.tts.speak(clickData.selectionText,
                             {
                                 'rate': 0.7
                             });         
         }   
        var wikiUrl = "https://en.wikipedia.org/wiki/" + fixedEncodeURI(clickData.selectionText);
        var createData = {
            "url": wikiUrl,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": screen.availWidth/2,
            "height": screen.availHeight/2
        };              
        chrome.windows.create(createData, function(){});        
    }
});

