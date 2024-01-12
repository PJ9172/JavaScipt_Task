var input=document.getElementById('input');
var button=document.getElementById('button');
var inbox=document.getElementsByClassName('inbox');
var outbox=document.getElementsByClassName('outbox');
var win=document.getElementById('win');

function confirm(){
    if(input.value!='')
    {
        if(input.value<=0)
            alert('Please enter valid amount ! ! !');
        else{
            document.getElementsByClassName('input')[0].innerHTML=`<h1>Amount : ${input.value}</h1>`;
            document.getElementsByClassName('inputboxes')[0].style.display='flex';
        }
    }
    else
        alert('Please enter amount ! ! !')
}
function generate(){
    if(inbox[0].value!=''&&inbox[1].value!=''&&inbox[2].value!=''&&inbox[3].value!=''){
        if(inbox[0].value<0||inbox[1].value<0||inbox[2].value<0||inbox[3].value<0)
            alert('Please enter valid number ! ! !');
        else
        {
            document.getElementsByClassName('outputboxes')[0].style.display='flex';
            document.getElementById('img').style.display='block';
            win.style.display='block';

            var c=0;
            var wa=input.value;
            var si=setInterval(()=>{
                var r=Math.floor(Math.random()*9);
                outbox[c].value=r;

                if(inbox[c].value===outbox[c].value)
                {
                    wa=wa*10;
                    win.innerHTML=`<span>Winning Amount : ${wa}</span>`
                }
                c++;
                if(c>3)
                    clearInterval(si);
            },1000)
        }
    }
    else
        alert('Please enter number ! ! !');
}