function generate(){
    var input = document.getElementById('input').value;
    if(input==="")
        alert("Invalid Link ! ! !");
    else
    {
        console.log(input)
        var qr = document.getElementById('qr');
        qr.style.display= "block";
        var url=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
        qr.style.backgroundImage = `url(${url})`;
    }
}