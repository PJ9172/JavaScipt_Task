var c=document.getElementsByClassName('circle');
var dc=document.getElementsByClassName('dc');
var arr=[...c];
arr.map( (ele,index)=>{
    ele.addEventListener("click",()=>{
        ele.style.display="none"; 
        console.log(arr.splice(index,1));
        var div=document.createElement("div");
        div.style.width="100px";
        div.style.height="100px";
        div.style.borderRadius="50px";
        div.style.textAlign="center";
        div.style.background="blue";
        div.style.color="white";
        div.innerHTML=`<h1>${index+1}</h1>`;
        document.getElementById('dc').appendChild(div);
    })
})