var timer=document.getElementById('timer');
var body=document.getElementById('body');
var css=document.getElementById('css');
setInterval(()=>{
    var date=new Date();
    var time=date.toLocaleTimeString();
    timer.innerHTML=`<h2>${time}</h2>`
    if(time=="00:00:00")
    {
        css.style.display="block";
    }        
},1000);