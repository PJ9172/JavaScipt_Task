var box=document.getElementsByClassName('box');
var arr=[...box];
var c=0;
function change(color)
{
    if(c==0)
    {
        arr[0].style.backgroundColor=color;
        c=1;
    }
    else if(c==1)
    {
        arr[1].style.backgroundColor=color;
        c=2;
    }
    else if(c==2)
    {
        arr[2].style.backgroundColor=color;
        c=3;
    }
    else if(c==3)
    {
        arr[3].style.backgroundColor=color;
        c=4;
    }
    else if(c==4)
    {
        arr[4].style.backgroundColor=color;
        c=0;
    }
}