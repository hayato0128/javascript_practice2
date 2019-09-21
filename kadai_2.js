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
const td3 = document.createElement("td");
const td4 = document.createElement("td");

// ID番号の設定
const idnum = length++;
td1.innerHTML = idnum;
tbody.appendChild(td1);

// commentformのID取得
const commentform = (document.getElementById("commentform").value);
td2.innerHTML = commentform;
tbody.appendChild(td2);

// 状態ボタンの作成
const allbtn = document.createElement("button");
td3.innerHTML = allbtn;
tbody.appendChild(allbtn);

// 削除ボタンの作成
const delbtn = document.createElement("button");
td4.innerHTML = delbtn;
tbody.appendChild(delbtn);

delbtn.addEventListener("click" , function(){
tbody.removeChild(td);
});
tbody.appendChild(tr);
});
}