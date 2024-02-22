const CountValue = document.querySelector('#counter');

const increment = () => {
    //get value from user
    let value = parseInt(CountValue.innerText);
    //update value
    value = value + 1;
    //set the value into ui
    CountValue.innerText = value;
};

function decrement () {
     //get value from user
     let value = parseInt(CountValue.innerText);
     //update value
     value = value - 1;
     //set the value into ui
     CountValue.innerText = value;
};