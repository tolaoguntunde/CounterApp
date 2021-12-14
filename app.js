const value = document.querySelector('#counter-value');
const btn = document.querySelectorAll('.btn');
let count = 0;

btn.forEach(element => { element.addEventListener('click',check)});


function check (event) {
    const checkTarget=event.currentTarget.classList;
   if(checkTarget.contains('decrease')){
       count-- ; 
   } 
   else if(checkTarget.contains('increase')){
       count++ ; 
   }
else if(checkTarget.contains('reset')){
   count = 0;
   }
   value.innerText = count;
   if (count > 0){
    value.style.color = 'green';
}
    else if (count < 0){
        value.style.color = 'red';
    }else{
        value.style.color = '';
    }


}


   
