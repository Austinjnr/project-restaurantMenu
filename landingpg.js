const signinbtn = document.querySelector('.signinbtn');
const signupbtn = document.querySelector('.signupbtn');
const formbx = document.querySelector('.formbx'); 
const body = document.querySelector('body')

signupbtn.onclick = function(){
    formbx.classList.add('active')
    body.classList.add('active')
}
signinbtn.onclick = function(){
    formbx.classList.remove('active')
    body.classList.remove('active')
}