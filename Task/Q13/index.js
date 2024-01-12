var result=document.getElementById('result');
function generate(){
    var num=Math.floor(Math.random()* 100);
    result.innerHTML=`<h1>${num}</h1>`
}