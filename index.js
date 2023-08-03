const bmiDisplay = document.querySelector(".bmiDisplay");
const landingPage = document.querySelector(".landingPage");
const submit = document.querySelector(".fill");
const modal = document.querySelector(".modal");
const calculate = document. querySelector(".cal");
const statusBar = document.querySelector(".statusBar");
const result = document.getElementById("result");
const body = document.body
const bmiStatus = document.getElementById("bmiStatus");
const details = document.getElementById("details");
const writeUp = document.querySelector(".writeup");


// creating a function to calculate bmi
function calc() {
calculate.addEventListener("click", ()=>{
    const weight = document.getElementById("weight").value
    const height = document.getElementById("height").value
    const bmi = weight / (height * height)
    result.innerHTML = bmi.toFixed(2)+ "  " + "kg/m2"

//    conditional statement validate user input and to categorize bmi status
    if ((weight === "") && (height ==="")) {
    result.innerHTML = "Enter weight and height value"
    bmiStatus.innerHTML = "Invalid"
   } 
   else if (weight === "") {
    result.innerHTML = "Enter weight value"
    bmiStatus.innerHTML = "Invalid"
   }
   else if (height === "") {
    result.innerHTML = "Enter height value"
    bmiStatus.innerHTML = "Invalid"
   }
   else{
    switch (true) {
        case bmi < 18.5:
            bmiStatus.innerHTML = "UNDERWEIGHT"
            bmiStatus.style.color = "yellow"
            details.innerHTML = `Cause of being underweight may include physical illness,
             inadequate intake of balanced diet.`
            break;
        case bmi < 25 :
            bmiStatus.innerHTML = "NORMAL WEIGHT"
            bmiStatus.style.color = "blue"
            details.innerHTML = `You can maintain a healthy weight with adequate intake of food
            and exercise, stay healthy!.`
            break;
        case (bmi > 25) && (bmi <30):
            bmiStatus.innerHTML = "OVERWEIGHT"
            bmiStatus.style.color = "orange" 
            details.innerHTML = `The risk factor of being overweight may include unhealthy eating behaviour, lack of physical activity, genetics etc.`
            break;
        case bmi > 30 :
            bmiStatus.innerHTML = "OBESITY"
            bmiStatus.style.color = "red" 
            details.innerHTML = `Being overweight may increase your risk of certain non communicable diseases such as type II 
            diabetes melitus, heart disease, cancer etc.`          
        default:
            break;
       }
   } 
})
}calc()