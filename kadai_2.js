window.onload = function() {
// addbtnのID取得
const addbtn = document.getElementById("addbtn");

// addbtnの動作設定
addbtn.addEventListener("click" , function(){

// tbodyのID取得
const tbody = document.getElementById("tbodyinsert");
// trエレメント新規作成
const tr = document.createElement("tr");
// tdエレメント新規作成
const td1 = document.createElement("td");
const td2 = document.createElement("td");

// ID番号の設定
const idnum = length++;
td1.innerHTML = idnum;
tbody.appendChild(td1);

// commentformのID取得
const commentform = (document.getElementById("commentform").value);
td2.innerHTML = commentform;
tbody.appendChild(td2);

// 状態ボタンの作成
const stbtn = document.createElement("button");
stbtn.innerHTML = stbtn;
stbtn.textContent = "すべて";
tbody.appendChild(stbtn);

// 状態ボタンの切り替え
stbtn.addEventListener("click" , function(){
switch(stbtn.textContent){
    case "すべて":
        stbtn.textContent = "作業中";
        break;
    case "作業中":
        stbtn.textContent = "完了";
        break;
    case "完了":
        stbtn.textContent = "すべて";
}
});

// 削除ボタンの作成
const delbtn = document.createElement("button");
delbtn.innerHTML = delbtn;
delbtn.textContent = "削除";
tbody.appendChild(delbtn);

// 行を削除
delbtn.addEventListener("click" , function(){
tbody.removeChild(td1);
tbody.removeChild(td2);
tbody.removeChild(stbtn);
tbody.removeChild(delbtn);
});

tbody.appendChild(tr);
});








}