const count = document.body.querySelector(".count");

const minusButton = document.body.querySelector(".minus");
const plusButton = document.body.querySelector(".plus");
const Input = document.body.querySelector('.input input');
const reset = document.body.querySelector('.reset');
let currentCount = 0;

// Addition logic
plusButton.addEventListener('click', function(){ 
    let value = Input.value;
    if(value === ""){
        value = 1;
    }else{
        value = Number(value);
    }
    currentCount += value;
    count.innerHTML = currentCount
    // currentCount+=1;
})

// subtraction logic
minusButton.addEventListener('click', function(){
    let value = Input.value;
    if(value === ""){
        value = 1;
    }else{
        value = Number(value);
    }
    currentCount -= value;
    if(currentCount < 0){
        
        currentCount = 0;
    }

    count.innerHTML = currentCount 
    
})

//Reset the values
reset.addEventListener('click', function(){
    let value = Input.value

    value = 0;
    currentCount = 0

    count.innerHTML = currentCount
    Input.value = "";
})
