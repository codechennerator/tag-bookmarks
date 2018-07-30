
document.addEventListener("DOMContentLoaded", function(){
    let titleIn = document.querySelector('#title');
    let urlHere = document.querySelector('#url');
    chrome.tabs.getSelected(function(tab){
        titleIn.value = tab.title;
        urlHere.innerHTML = `URL: ${tab.url}`;
    });

});