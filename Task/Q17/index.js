var data=[
    {
        rollNo: 5,       
        name: "Sanjana Hodbe",
        age: 19,
        gender: "Female",
        favItCompany: "Persistent Systems Limited",   
        githubUrl: "https://github.com/SH3422",   
        mailId: "sanjanahodbe@gmail.com",
        birthDate: "06-03-2004",
        avatar :"https://avatars.githubusercontent.com/u/147395950?v=4" 
    },

    {
        rollNo: 3,       
        name: "Prajwal Jagtap",
        age: 19,
        gender: "Male",
        favItCompany: "Wipro India",   
        githubUrl: "https://github.com/PJ9172",   
        mailId: "rohitjagtap5000@gmail.com",
        birthDate: "22-06-2004",
        avatar :"https://avatars.githubusercontent.com/u/147252354?v=4" 
    },

    {
        rollNo: 14,       
        name: "Mosin Balsing",
        age: 19,
        gender: "Male",
        favItCompany: "Wipro India",   
        githubUrl: "https://github.com/Mosin-M-B",   
        mailId: "mosinbalsing@gmail.com",
        birthDate: "13-03-2004",
        avatar :"https://avatars.githubusercontent.com/u/119176708?v=4"
    },
    
    {
        rollNo: 4,       
        name: "Ashwini Yadav",
        age: 21,
        gender: "Female",
        favItCompany: "Tech Mahindra India",   
        githubUrl: "https://github.com/ashwini6777",   
        mailId: "ashwiniyadav3703@gmail.com",
        birthDate: "29-01-2003",
        avatar :"https://avatars.githubusercontent.com/u/147252354?v=4" 
    },

    {
        rollNo: 2,       
        name: "Farzana Shaikh",
        age: 21,
        gender: "female",
        favItCompany: "Talentica software ",   
        githubUrl: "https://github.com/Fara776",   
        mailId: "farashaikh564@gmail.com",
        birthDate: "14-01-2003",
        avatar :"https://avatars.githubusercontent.com/u/145984007?v=4" 
    },
    {
        rollNo: 1,       
        name: "Sharifa Shaikh",
        age: 21,
        gender: "female",
        favItCompany: "Cognizant",   
        githubUrl: "https://github.com/shara762",   
        mailId: "shaikhsharifa762@gmail.com",
        birthDate: "14-01-2003",
        avatar :"https://avatars.githubusercontent.com/u/145984673?v=4" 
    }
]

// console.log(data[0].age);

const name=document.getElementsByClassName('name');
var email = document.getElementsByClassName('email');
var company = document.getElementsByClassName('company');
var age = document.getElementsByClassName('age');
var avt = document.getElementsByClassName('img');

data.map((e,i)=>{
    name[i].innerText=`Name : ${e.name}`;
    email[i].innerText=`Email-Id: ${e.mailId}`;
    company[i].innerText=`Favourite Company : ${e.favItCompany}`;
    age[i].innerText=`Age : ${e.age}`;
    avt[i].style.backgroundImage=`url(${e.avatar})`;
    avt[i].setAttribute('href',"yourlink.htm");
})

var arr=[...avt];
arr.map((e,i)=>{
    e.addEventListener("click",()=>{
        // console.log(i);
        window.location.href=data[i].githubUrl;
    })
})
