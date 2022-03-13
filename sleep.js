
window.onload = () => {
    let button = document.querySelector("#btn");

    button.addEventListener("click", calculateSleep);

};

function calculateSleep() {
  
    let age = parseInt(document
            .querySelector("#age").value);
  
    let result = document.querySelector("#result");
  
    
    if (age === "1" || age === "2") 
        result.innerHTML = "You need 12-16 hours of sleep every day.";
  
    else if (age === "3" || age === "4" || age === "5") 
    result.innerHTML = "You need 11-14 hours of sleep every day.";
  
    else if (age === "3" || age === "4" || age === "5") 
    result.innerHTML = "You need 11-14 hours of sleep every day.";
    else if (age === "3" || age === "4" || age === "5") 
    result.innerHTML = "You need 11-14 hours of sleep every day.";
    else if (age === "3" || age === "4" || age === "5") 
    result.innerHTML = "You need 11-14 hours of sleep every day.";
    else {
  
        
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
  
        
        if (bmi < 18.6) result.innerHTML =
            `Under Weight : <span>${bmi}</span>`;
  
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `Normal : <span>${bmi}</span>`;
  
        else result.innerHTML =
            `Over Weight : <span>${bmi}</span>`;
    }
}