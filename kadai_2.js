window.onload = function() {

const addbtn = document.getElementById("addbtn");

addbtn.addEventListener("click" , function (){
const table = document.getElementById("table");

const line = table.insertRow(-1);
const row1 = line.insertCell(0);
const row2 = line.insertCell(1);
const row3 = line.insertCell(2);
const row4 = line.insertCell(3);

const commentform = (document.getElementById("commentform").value);

const delbtn = '<input type = "button" value = "削除" onclick = table.deleteRow(-1) />';
const allbtn = '<input type = "button" value = "すべて" />';

row1.innerHTML = (table.rows.length - 2);
row2.innerHTML += commentform;
row3.innerHTML += delbtn;
row3.innerHTML = allbtn;
row4.innerHTML = delbtn;
});
}
