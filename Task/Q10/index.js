var input=document.getElementById('input');
var arr=JSON.parse(localStorage.getItem('Data'))||[];
var result=document.getElementById('result');
showdata();
function adds()
{
    if(input.value!='')
    {
        arr.push(input.value);
        localStorage.setItem('Data',JSON.stringify(arr));
        input.value='';
        showdata();
    }
}
function showdata()
{
    if(arr.length==0)
        result.innerHTML='<h1>Local Storage is Empty ! ! !</h1>'
    else
    {
        result.innerHTML='<h1>Local Storage Data : </h1>'
        arr.map((ele)=>{
            var p=document.createElement('p');
            p.innerText=ele;
            result.appendChild(p);
        })
    }
}