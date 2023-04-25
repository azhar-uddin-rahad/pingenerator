function createRandomNumber(){
    const randomNumber=Math.round(Math.random()*10000);
    const randomString= randomNumber + "";
    if(randomString.length === 4){
        return randomString;   
    }
    else{
       return createRandomNumber()
    }
}

 document.querySelector('#generatePin-btn').addEventListener('click',function(){
    const pinNumber=createRandomNumber();
    const pinInputField=document.querySelector('#display-pin');
    pinInputField.value=pinNumber;


 });


 ///event delegation in javascript

 document.querySelector('#calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const numberInputField=document.querySelector('#input-number')
    numberInputField.value=number;
})