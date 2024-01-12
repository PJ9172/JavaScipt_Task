var box=document.getElementsByClassName('box');
var arr=[...box];
arr.map( (ele) =>{
    ele.addEventListener("click",()=>{
        if(ele.style.backgroundColor==="black")
        {
            ele.style.background='white';
        }
        else
        {
            ele.style.backgroundColor="black";
        }
    });
});