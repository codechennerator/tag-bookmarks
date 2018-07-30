
document.addEventListener("DOMContentLoaded", function(){
    let titleIn = document.querySelector('#title');

    chrome.tabs.getSelected(function(tab){
        titleIn.value = tab.title;
    });

});