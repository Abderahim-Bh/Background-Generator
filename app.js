
let myArr = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
let myContainer = document.getElementById("containerId");
let myContent = document.getElementById("contentId");
let myParagraph = document.getElementById("paragraphId");




myContent.addEventListener("click",function(){
    let res="";

    for(let i=0 ; i<6 ;i++){
        
    let num = myArr[Math.floor(Math.random()*myArr.length)];
    res += num;
    }
    
    myContainer.style.backgroundColor="#"+res;
    myContent.style.backgroundColor="#"+res;
    myParagraph.textContent="#"+res;
    
})

              
