
console.log('start')
// ページ読み込み後処理
window.onload = function() {
    tab();
    selectlist(data);
    search_click();
    console.log('haiyo!!');
}

function tab(){
    /* タブ切り替え */
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
//テストデータ
data = {
    '栃木':["那須支店","宇都宮支店","真岡支店","小山支店"],
    '千葉':["千葉支店","船橋支店","船橋支店","船橋支店","船橋支店","船橋支店"],
    '埼玉':["千葉支店","船橋支店","船橋支店","船橋支店","船橋支店","船橋支店"],
    '群馬':["千葉支店","船橋支店","船橋支店","船橋支店","船橋支店","船橋支店"]
}
//テストデータ
function selectlist(data){
    /* 電話帳データ表示 */
    prefecture = Object.keys(data)
    new_element = ''
    //pre_element = ''
    let all_content = document.getElementById("all_content_area")
    for(let i of prefecture){
        new_element += `<details id="${i}"> <summary>${i}</summary>`
        //console.log(new_element)
        for(let j of data[i]){
            new_element += `<li class="selectlist_contents">${j}</li>`
        }
        new_element += '</details>'
    }
    all_content.insertAdjacentHTML('beforeend',new_element)
    //console.log(all_content)
    //all_content.appendChild(new_element)
}



function search_click(){
    let input_keyword = document.getElementById("input_keyword");
    let search_button = document.getElementById("search");
    
    search_button.addEventListener('click',() => {
        if(input_keyword.value){
            _search_call(input_keyword.value,data)
        }
    })
}
function _search_call(pattern,data){
    let result = []
    for(let i in data){
        for(let j of data[i]){
            if(j.indexOf(pattern) > -1){
                result.push(j)
              }
        }
    }
    console.log(result)
}


