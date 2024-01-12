var email=document.getElementById('email');
var arr=JSON.parse(localStorage.getItem('Email'))||[];
var result=document.getElementById('result');
showdata();
var c=0;
// console.log(arr);
function add()
{
    if(email.value!=='')
    {
        arr.map((ele)=>{
            if(ele==email.value)
                // console.log("same email!!!");
                c=1;
        })
        if(c==0)
        {
            arr.push(email.value);
            localStorage.setItem('Email',JSON.stringify(arr));
            email.value='';
            showdata();
        }
        else
        {
            alert('Given email is alredy registered!!!!');
            email.value='';
        }
    }
}
function showdata()
{
    if(arr.length==0)
    {
        result.innerHTML='<h1>No Email is Registered ! ! !</h1>';
    }
    else
    {
        result.innerHTML='<h1>Registered Emails : </h1>';
        arr.map((ele)=>{
            var p=document.createElement('p');
            p.innerText=ele;
            result.appendChild(p);
        })
    }
}