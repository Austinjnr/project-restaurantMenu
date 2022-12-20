const signinbtn = document.querySelector('.signinbtn');
const formbx = document.querySelector('.formbx'); 
const body = document.querySelector('body')

signinbtn.onclick = function(){
    formbx.classList.remove('active')
    body.classList.remove('active')
}