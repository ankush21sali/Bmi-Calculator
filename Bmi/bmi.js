let weightInput = document.querySelector(".main #weight");
let heightInput = document.querySelector(".main #height");
let btn = document.querySelector("button");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");



btn.addEventListener("click", function () {
    
    let weight = parseFloat(weightInput.value);
    let height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        h3.innerText = "Please enter valid numbers!";
        return;
    }

    let finalValue = bmiCalculate(weight, height);
    h3.innerText = `Your BMI: ${finalValue.toFixed(2)}`;




    if (finalValue < 18.5){
        p.innerText = `You are UnderWeight`;
        p.style.color = 'red';
    }

    else if (finalValue >= 18.5 && finalValue <= 24.5 ){
        p.innerText = `Normal Weight`
        p.style.color = 'green';
    }

    else if (finalValue > 24.5 ){
        p.innerText = `You are  OverWeight`;
        p.style.color = 'yellow';
    }

    else{
        p.innerText = `System Error`;
    }



});

function bmiCalculate(weight, height) {
    return weight / (height * height);
}
