var url="https://api.github.com/users/PJ9172";
async function fun()
{
    try{
        var res=await fetch(url);
        // console.log(res);
        var result=await res.json();
        console.log(result.name);
        console.log(result.login);
        console.log(result.id);
        console.log(result.url);
        console.log(result.following);
    }
    catch(err){
        console.log(err);
    }
}
fun()