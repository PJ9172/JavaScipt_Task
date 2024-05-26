async function search() {

    var input = document.getElementById("input").value;
    // console.log(input);
    var response = await fetch(`https://api.github.com/users/${input}`);
    var json_response = await response.json();
    // console.log(json_response);

    if (json_response.message === 'Not Found') {
        alert("Invalid Username ! ! !");
    }
    else {

        var resultdiv = document.getElementById("resultdiv");
        resultdiv.style.display = "flex";
        var pic = document.getElementById("pic");
        pic.style.backgroundImage = `url(${json_response.avatar_url})`;

        var username = document.getElementById("username");
        var name = document.getElementById("name");
        var bio = document.getElementById("bio");
        var followers = document.getElementById("followers");
        var following = document.getElementById("following");
        var public_repo = document.getElementById("public_repo");
        var create_at = document.getElementById("create_at");

        username.innerText = `Username : ${json_response.login}`;
        name.innerText = `Name : ${json_response.name}`;
        bio.innerText = `Bio : ${json_response.bio}`;
        followers.innerText = `Followers : ${json_response.followers}`;
        following.innerText = `Following : ${json_response.following}`;
        public_repo.innerText = `Public_Repo : ${json_response.public_repos}`;
        create_at.innerText = `Create_At : ${json_response.created_at}`;

        var repos= await fetch(json_response.repos_url);
        var json_repos= await repos.json();
        console.log(json_repos);
        console.log(json_repos[0].name);

        var repo= document.getElementById("repo");
        json_repos.map((e,i)=>{
            var box=document.createElement("div");
            box.classList.add("box");
            repo.appendChild(box);
            box.innerHTML=`<div class="row1">Name : ${e.name}</div>
            <div class="row2">Description : ${e.description}</div>`
            box.addEventListener('click', function() {
                window.location.href =`${e.svn_url}`;
              });
        })
    }
}