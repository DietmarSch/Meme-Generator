const inputUrl=document.querySelector('#url');
const inputTopText=document.querySelector('#inputTextTop');
const inputBottomText=document.querySelector('#inputTextBottom');



const imgSet=document.querySelector('#innerBox');
const topText=document.querySelector('#textTop');
const bottomText=document.querySelector('#textBottom');


const submitBtn=document.querySelector('#create');
// console.log(submitBtn);
console.log(imgSet);

document.querySelector('#create').addEventListener('click',function(e) {
    e.preventDefault;
    // alert("gedrückt");
    console.log(inputUrl.value);
    
    if (inputUrl.value)  {
        console.log(imgSet);
        topText.innerText = inputTopText.value;
        bottomText.innerText=inputBottomText.value;
        console.log(inputUrl.value);
        
        console.log(imgSet.style);
        let strUrl= "url("+"'"+inputUrl.value+"'"+")";
        console.log(strUrl);
        imgSet.style.backgroundImage=strUrl;
    } 
});