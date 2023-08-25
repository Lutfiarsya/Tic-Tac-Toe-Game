//Code by lutpay

function kotak(){
let kotak1, kotak2, kotak3, kotak4, kotak5, kotak6, kotak7, kotak8, kotak9;
kotak1 = document.getElementById('kotak1').value;
kotak2 = document.getElementById('kotak2').value;
kotak3 = document.getElementById('kotak3').value;
kotak4 = document.getElementById('kotak4').value;
kotak5 = document.getElementById('kotak5').value;
kotak6 = document.getElementById('kotak6').value;
kotak7 = document.getElementById('kotak7').value;
kotak8 = document.getElementById('kotak8').value;
kotak9 = document.getElementById('kotak9').value;


let btn1, btn2, btn3 , btn4 , btn5 , btn6, btn7, btn8 ,btn9
btn1 = document.getElementById('kotak1');
btn2 = document.getElementById('kotak2');
btn3 = document.getElementById('kotak3');
btn4 = document.getElementById('kotak4');
btn5 = document.getElementById('kotak5');
btn6 = document.getElementById('kotak6');
btn7 = document.getElementById('kotak7');
btn8 = document.getElementById('kotak8');
btn9 = document.getElementById('kotak9');

if(score == 1){
    let print = document.getElementById('print');
    print.innerHTML = 'Player X turn'
    print.style.fontSize = '20px'
}else{
    let print = document.getElementById('print');
    print.innerHTML = 'player O turn'
    print.style.fontSize = '20px';
}


//Kondisi 1
if(kotak1 == 'X' && kotak2 == 'X' && kotak3 == 'X') 
  {
    let results = document.getElementById('print')
    results.innerText = ('Player X win');

    btn1.style.color = 'red';
    btn2.style.color = 'red';
    btn3.style.color = 'red';

    btn5.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;  
    btn8.disabled = true;
    btn9.disabled = true;

}else if((kotak1 == 'O' ) &&  ( kotak2 == 'O' ) && ( kotak3 == 'O'))
    {let result = document.getElementById('print')
     result.innerHTML = 'player O win'
    
     
     btn1.style.color = 'blue';
     btn2.style.color = 'blue';
     btn3.style.color = 'blue';

     btn4.disabled = true;
     btn5.disabled = true;
     btn6.disabled = true;
     btn7.disabled = true;  
     btn8.disabled = true;
     btn9.disabled = true;
    };

 
//Kondisi 2
if(kotak4 == 'X' &&  kotak5 == 'X' && kotak6 == 'X') 
  {
    let result = document.getElementById('print')
    result.innerHTML = 'player X win';

    btn4.style.color = 'red';
    btn5.style.color = 'red';
    btn6.style.color = 'red';

    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;

}else if(kotak4 == 'O' &&  kotak5 == 'O' && kotak6 == 'O')
    {let result = document.getElementById('print')
     result.innerHTML = 'player O win'
 
     btn4.style.color = 'blue';
     btn5.style.color = 'blue';
     btn6.style.color = 'blue';
 
     btn1.disabled = true;
     btn2.disabled = true;
     btn3.disabled = true;
     btn7.disabled = true;
     btn8.disabled = true;
     btn9.disabled = true;

    }

if(kotak7 == 'X' &&  kotak8 == 'X' && kotak9 == 'X') 
  {
    let result = document.getElementById('print')
    result.innerHTML = 'player X win';

    btn7.style.color = 'blue';
    btn8.style.color = 'blue';
    btn9.style.color = 'blue';


    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;


}else if(kotak7 == 'O' &&  kotak8 == 'O' && kotak9 == 'O') {
    let result = document.getElementById('print')
    result.innerHTML = 'player O win'

    btn7.style.color = 'blue';
    btn8.style.color = 'blue';
    btn9.style.color = 'blue';

    
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;

};

     if(kotak1 == 'X' &&  kotak4 == 'X' && kotak7 == 'X') 
     {
       let result = document.getElementById('print')
       result.innerHTML = 'player X win';
   
       btn1.style.color = 'blue';
       btn4.style.color = 'blue';
       btn7.style.color = 'blue';

       
       btn8.disabled = true;
       btn2.disabled = true;
       btn3.disabled = true;
       btn9.disabled = true;
       btn5.disabled = true;
       btn6.disabled = true;
   
   }else if(kotak1 == 'O' &&  kotak4 == 'O' && kotak7 == 'O')
       {let result = document.getElementById('print')
        result.innerHTML = 'player O win'

   
       btn1.style.color = 'blue';
       btn4.style.color = 'blue';
       btn7.style.color = 'blue';

       btn8.disabled = true;
       btn2.disabled = true;
       btn3.disabled = true;
       btn9.disabled = true;
       btn5.disabled = true;
       btn6.disabled = true;

};

   
   if(kotak2 == 'X' &&  kotak5 == 'X' && kotak8 == 'X') 
     {
       let result = document.getElementById('print')
       result.innerHTML = 'player X win';

       btn2.style.color = 'blue';
       btn5.style.color = 'blue';
       btn8.style.color = 'blue';

       btn1.disabled = true;
       btn4.disabled = true;
       btn3.disabled = true;
       btn9.disabled = true;
       btn7.disabled = true;
       btn6.disabled = true;
   
   }else if(kotak2 == 'O' &&  kotak5 == 'O' && kotak8 == 'O')
       {let result = document.getElementById('print')
        result.innerHTML = 'player O win'
   
       btn2.style.color = 'blue';
       btn5.style.color = 'blue';
       btn8.style.color = 'blue';
   
       btn1.disabled = true;
       btn4.disabled = true;
       btn3.disabled = true;
       btn9.disabled = true;
       btn7.disabled = true;
       btn6.disabled = true;
    };


   if(kotak3 == 'X' &&  kotak5 == 'X' && kotak9 == 'X') 
     {
       let result = document.getElementById('print')
       result.innerHTML = 'player X win';

       btn3.style.color = 'blue'; 
       btn5.style.color = 'blue';
       btn9.style.color = 'blue';

       btn1.disabled = true;
       btn2.disabled = true;
       btn4.disabled = true;
       btn7.disabled = true;
       btn6.disabled = true;
       btn8.disabled = true;
     }
    
    else if(kotak3 == 'O' &&  kotak5 == 'O' && kotak9 == 'O')
    {
      let result = document.getElementById('print')
      result.innerHTML = 'player O win' 
   
       btn3.style.color = 'blue';
       btn5.style.color = 'blue';
       btn9.style.color = 'blue';

       btn1.disabled = true;
       btn2.disabled = true;
       btn4.disabled = true;
       btn7.disabled = true;
       btn6.disabled = true;
       btn8.disabled = true;
    };

    if(kotak3 == 'X' &&  kotak5 == 'X' && kotak7 == 'X') 
     {
       let result = document.getElementById('print')
       result.innerHTML = 'player X win';
       btn3.style.color = 'blue'; 
       btn5.style.color = 'blue';
       btn7.style.color = 'blue';

       btn1.disabled = true;
       btn2.disabled = true;
       btn4.disabled = true;
       btn9.disabled = true;
       btn6.disabled = true;
       btn8.disabled = true;
     }
    
    else if(kotak3 == 'O' &&  kotak5 == 'O' && kotak7 == 'O')
    {
      let result = document.getElementById('print')
      result.innerHTML = 'player O win' 
   
       btn3.style.color = 'blue';
       btn5.style.color = 'blue';
       btn7.style.color = 'blue';

       btn1.disabled = true;
       btn2.disabled = true;
       btn4.disabled = true;
       btn9.disabled = true;
       btn6.disabled = true;
       btn8.disabled = true;
    };

    if(kotak3 == 'X' &&  kotak6 == 'X' && kotak9 == 'X') 
     {
       let result = document.getElementById('print')
       result.innerHTML = 'player X win';
       btn3.style.color = 'blue'; 
       btn6.style.color = 'blue';
       btn9.style.color = 'blue';

       btn1.disabled = true;
       btn2.disabled = true;
       btn4.disabled = true;
       btn7.disabled = true;
       btn5.disabled = true;
       btn8.disabled = true;
     }
    
    else if(kotak3 == 'O' &&  kotak6 == 'O' && kotak9 == 'O')
    {
      let result = document.getElementById('print')
      result.innerHTML = 'player O win' 
   
       btn3.style.color = 'blue';
       btn6.style.color = 'blue';
       btn9.style.color = 'blue';

       btn1.disabled = true;
       btn2.disabled = true;
       btn4.disabled = true;
       btn7.disabled = true;
       btn5.disabled = true;
       btn8.disabled = true;
    };
   
    if((kotak1 == kotak2 == kotak3 == "X")||
       (kotak1 == kotak2 == kotak3 == "O")){
        let result = document.getElementById('print');
        result.innerHTML = "match selesai"
       }
}


function Reset(){
    location.reload();
    btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9 = " ";
}

let score = 1;
function kotak1(){
    if(score == 1){
        document.getElementById('kotak1').value = 'X';
        document.getElementById('kotak1').disabled = true;
        score = 0;
    }else{
        document.getElementById('kotak1').value = 'O';
        document.getElementById('kotak1').disabled = true;
        score = 1;
    }
}


function kotak2(){
    if(score == 1){
        document.getElementById('kotak2').value = 'X';
        document.getElementById('kotak2').disabled = true;
        score = 0;
    }else{
        document.getElementById('kotak2').value = 'O';
        document.getElementById('kotak2').disabled = true;
        score = 1;
    }
}


function kotak3(){
    if(score == 1){
        document.getElementById('kotak3').value = 'X';
        document.getElementById('kotak3').disabled = true;
        score = 0;
    }else{
        document.getElementById('kotak3').value = 'O';
        document.getElementById('kotak3').disabled = true;
        score = 1;
    }
}


function kotak4(){
    if(score == 1){
        document.getElementById('kotak4').value = 'X';
        document.getElementById('kotak4').disabled = true;
        score = 0;
    }else{
        document.getElementById('kotak4').value = 'O';
        document.getElementById('kotak4').disabled = true;
        score = 1;
    }
}


function kotak5(){
    if(score == 1){
        document.getElementById('kotak5').value = 'X';
        document.getElementById('kotak5').disabled = true;
        score = 0;
    }else{
        document.getElementById('kotak5').value = 'O';
        document.getElementById('kotak5').disabled = true;
        score = 1;
    }
}



function kotak6(){
    if(score == 1){
        document.getElementById('kotak6').value = 'X';
        document.getElementById('kotak6').disabled = true;
        score = 0;
    }else{
        document.getElementById('kotak6').value = 'O';
        document.getElementById('kotak6').disabled = true;
        score = 1;
    }

}



function kotak7(){
    if(score == 1){
        document.getElementById('kotak7').value = 'X';
        document.getElementById('kotak7').disabled = true;
        score = 0;
    }else{
        document.getElementById('kotak7').value = 'O';
        document.getElementById('kotak7').disabled = true;
        score = 1;
    }
}


function kotak8(){
    if(score == 1){
        document.getElementById('kotak8').value = 'X';
        document.getElementById('kotak8').disabled = true;
        score = 0;
    }else{
        document.getElementById('kotak8').value = 'O';
        document.getElementById('kotak8').disabled = true;
        score = 1;
    }
}



function kotak9(){
    if(score == 1){
        document.getElementById('kotak9').value = 'X';
        document.getElementById('kotak9').disabled = true;
        score = 0;
    }else{
        document.getElementById('kotak9').value = 'O';
        document.getElementById('kotak9').disabled = true;
        score = 1;
    }

}