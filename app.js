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
    const numberInputField=document.querySelector('#input-number'); 
    if(isNaN(number)){
    if(number === 'C'){
        numberInputField.value = " ";
    }
    else if (number === '<'){
      const inputFieldNumber= numberInputField.value;
      const stringArray=inputFieldNumber.split('');
      stringArray.pop();
      const makeString=stringArray.join('');
      numberInputField.value=makeString;
      console.log(stringArray);
    }
 }
   else{
    numberInputField.value += number;
   }

})

function pinMechlin (){
    const pinInputField=document.querySelector('#display-pin');
    const pinValue=pinInputField.value;
    const numberInputField=document.querySelector('#input-number');
    const numberValue=numberInputField.value;
    const pinSuccess=document.querySelector('#pin-success');
    const pinfille=document.querySelector('#pin-failure');
    
    if(pinValue === numberValue){
        pinSuccess.style.display='block';
        pinfille.style.display='none';

    }
    else{
       pinfille.style.display='block';
       pinSuccess.style.display='none';

    }
}


document.querySelector('#veify-pin').addEventListener('click',function(){
    pinMechlin ()

})