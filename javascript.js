const sub = document.querySelector('.sub');
const password = document.querySelector('.password');
const confirmpassword = document.querySelector('.cpassword');



sub.addEventListener('click',function(){
    if(password.value != confirmpassword.value) {
        confirmpassword.setCustomValidity("Passwords Don't Match");
      } else {
        confirmpassword.setCustomValidity('');
      }

})
