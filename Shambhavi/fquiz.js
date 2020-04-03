const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone= document.getElementById('phone');
const username= document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const nameValue= name.value.trim();
    const emailValue= email.value.trim();
    const phoneValue= phone.value.trim();
    const usernameValue=  username.value.trim();
    const passwordValue= password.value.trim();

    if(nameValue === ''){
        setErrorFor(name, 'Name cannot be blank');
    } else {
        setSuccessFor(name);
    }
    
    
    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    } else if(!isEmail(emailValue)) {
        setErrorFor (email, 'Email invalid!');
    } else {
        setSuccessFor(email);
    }

    if  (passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank');
    } else if (passwordValue.length < 5);
    {
        setErrorFor (password, 'Password is too weak');
    }else {
        setSuccessFor(passsword);
    }
    if(phoneValue === ''){
        setErrorFor(phone, 'Phone cannot be blank');
    } else if ( phoneValue= /^[7-9][0-9]{9}$/);
    {
        setSuccessFor(phone);
    } else{
        setErrorFor(phone);
    }
}
 function setErrorFor(input, message){
     const formFeature = input.parentElement;
     const small = formFeature.querySelector('small');
     small.innerText = message;
     formFeature.className = 'form-feature error';
 }

 function setSuccessFor(input) {
     const formFeature = input.parentElement;
     formControl.className = 'form-feature success';
 }
  function isEmail(email){
      return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)
  }