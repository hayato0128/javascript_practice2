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
tr.appendChild(td1);

// commentformのID取得
const commentform = (document.getElementById("commentform").value);
document.getElementById("commentform").value = "";
td2.innerHTML = commentform;
tr.appendChild(td2);

// 状態ボタンの作成
const stbtn = document.createElement("button");
stbtn.innerHTML = stbtn;
stbtn.textContent = "作業中";
tr.appendChild(td3);
td3.appendChild(stbtn);

// 状態ボタンの切り替え
stbtn.addEventListener("click" , function(){
switch(stbtn.textContent){
    case "作業中":
        stbtn.textContent = "完了";
        break;
    case "完了":
        stbtn.textContent = "作業中";
}
});

// 削除ボタンの作成
const delbtn = document.createElement("button");
delbtn.innerHTML = delbtn;
delbtn.textContent = "削除";
tr.appendChild(td4);
td4.appendChild(delbtn);

// 行を削除
delbtn.addEventListener("click" , function(){
tbody.removeChild(tr);
});

tbody.appendChild(tr);

// ラジオボタンのID取得
const radio_all = document.getElementById("radio_all");
const radio_work = document.getElementById("radio_work");
const radio_comp = document.getElementById("radio_comp");

// ラジオボタンで表示切り替え
radio_work.addEventListener("click" , function(){
    if(stbtn.textContent === "完了"){
        tr.style.display = "none";
    } else(tr.style.display = "block");
});

radio_comp.addEventListener("click" , function(){
    if(stbtn.textContent === "作業中"){
        tr.style.display = "none";
    } else(tr.style.display = "block");
});

radio_all.addEventListener("click" , function(){
    if(stbtn.textContent === "作業中" || stbtn.textContent === "完了"){
        tr.style.display = "block";
    }
});

});