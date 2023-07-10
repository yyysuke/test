console.log('start')
// ページ読み込み後処理
window.onload = function() {
    tab()
    console.log('haiyo!!')
}
function tab(){
    var tabs = document.querySelectorAll("#tabarea li a");
    var tabs_contents = document.querySelectorAll("#tab_content_area li");
    for (let i=0; i < tabs.length; i++){
        tabs[i].addEventListener("click",function(){
            for(let j=0; j< tabs.length; j++){
                tabs[j].classList.remove('active');
                tabs_contents[j].classList.remove('active');
            }
            this.classList.add('active');
            tabs_contents[i].classList.add('active');
        })
    }
}