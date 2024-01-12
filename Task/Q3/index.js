var box=document.getElementsByClassName('box');
var arr=[...box];


arr.map( (ele,index)=>{
    var c=0;
    ele.addEventListener("click",()=>{
        if(c==0)
        {
            ele.style.backgroundColor='orange';
            c=1
        }
        else if(c==1)
        {
            ele.style.backgroundColor='white';
            c=2;
        }
        else if(c==2)
        {
            ele.style.backgroundColor='green';
            c=0;
        }
    })
})