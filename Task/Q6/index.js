var from=document.getElementById('from');
var to=document.getElementById('to');
var box=document.getElementsByClassName('box');
var err=document.getElementById('err');
var db=document.getElementById('db');
var h1=document.getElementById('h1');
var arr=[...box];

function dele()
{
    let a=parseInt(from.value)-1;
    let b=parseInt(to.value)-1;
    console.log(a);
    console.log(b);
    if(a<0||b>arr.length)
    {
        err.style.display="block";
        h1.style.display="none";
    }
    else
    {
        db.style.display="flex";
        for(i=a;i<=b;i++)
        {
            arr[i].style.display="none";
        }
        var del=arr.slice(a,b+1);
        var c=a+1;
        for(i=0;i<del.length;i++)
        {
            var div=document.createElement("div");
            div.style.width = "100px";
            div.style.height = "100px";
            div.style.background = "black";
            div.style.color = "white";
            div.style.textAlign="center";
            div.style.marginTop="30px";
            div.innerHTML = `<h1>${c}</h1>`;
            c++;
            document.getElementById('db').appendChild(div);
        }
    }
}