var box=document.getElementsByClassName('box')[0];
var color=['blue','black','yellow','red','orange','green','aqua']
function change()
{
    var bg=color[Math.floor(Math.random()*color.length)];
    box.style.backgroundColor=bg;
}