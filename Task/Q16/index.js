var h1=document.getElementById('1');
var h2=document.getElementById('2');
var h3=document.getElementById('3');
var h4=document.getElementById('4');
var h5=document.getElementById('5');
var url="https://api.github.com/users/PJ9172";
async function fun()
{
    try{
        var res=await fetch(url);
        // console.log(res);
        var result=await res.json();
        h1.innerHTML=`<h1>name : ${result.name}</h1>`;
        h2.innerHTML=`<h1>login : ${result.login}</h1`;
        h3.innerHTML=`<h1>id : ${result.id}</h1>`;
        h4.innerHTML=`<h1>url : ${result.url}</h1>`;
        h5.innerHTML=`<h1>following : ${result.following}</h1>`;
    }
    catch(err){
        console.log(err);
    }
}
fun()