var box=document.getElementsByClassName('box');
var array=[...box];
array.map((ele, index) => {
    console.log(index);
    ele.addEventListener("click", () => {
        ele.style.display="none";
    });
  });