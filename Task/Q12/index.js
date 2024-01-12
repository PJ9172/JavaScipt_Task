var day=document.getElementById('day');
var date=document.getElementById('date');
var time=document.getElementById('time');
var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
setInterval(()=>{
    var d=new Date();
    day.innerHTML=`<p>${weekday[d.getDay()]}</p>`;
    date.innerHTML=`<p>${d.toLocaleDateString()}</p>`;
    time.innerHTML=`<p>${d.toLocaleTimeString()}</p>`;
})