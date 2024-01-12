var box=document.getElementsByClassName('box');
var arr=[...box];
arr.map( (ele,index)=>{
    ele.addEventListener("click",()=>{
        var pno=0;
        if(index==0)
            pno=parseInt(arr[arr.length-1].innerText);
        else
            pno=parseInt(arr[index-1].innerText);
        ele.innerHTML=`<h1>${parseInt(ele.innerText)+pno}</h1>`;
    })
})