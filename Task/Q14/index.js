var reunion = reunionparty();
reunion.then(function(result){
    console.log(result);
}).catch(err=>{
    console.log(err);
})

function reunionparty(){
    var pr=new Promise(function(resolve,reject){
        if(allfriendscome())
            resolve("Reunion celebration is done ! ! !");
        else{
            var e=new Error("Reunion not celebrated ! ! !")
            reject(e);
        }
    })
    return pr;
}

function allfriendscome(){
    return false;
}