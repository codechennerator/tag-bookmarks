
document.addEventListener('DOMContentLoaded', function(){
    let divs = document.querySelector('div');
    for (let i = 0; i<divs.length; i++){
        divs[i].innerHTML = i;
    }
});