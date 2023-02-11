

function check(){
    const pwd = document.getElementById('pass').value;
    const cpwd = document.getElementById('cpass').value;
    const frm = document.getElementById('passDiv');
   
    const passW = document.getElementById('passW');

if(pwd !== cpwd){
    passW.innerText = '*Passwords do not match';    
    passW.style.color = 'red' ;
    passW.style.fontSize = '10px';
}else{
    passW.innerText = 'All right boss!';
    passW.style.color = 'green';
    passW.style.fontSize = '10px' ;
}

}