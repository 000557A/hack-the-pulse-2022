window.onload = () => {
    let button = document.querySelector("#btn");

    button.addEventListener("click", calculateSleep);

};

function calculateSleep() {
  
    let age = parseInt(document
            .querySelector("#age").value);
  
    let result = document.querySelector("#result");
  

    if (age >= 1 || age <= 2) 
        result.innerHTML = "You need 12-16 hours of sleep every day.";
  
        else if (age >= 3 || age <= 5) 
        result.innerHTML = "You need 11-14 hours of sleep every day.";
    
        else if (age >= 6 || age <= 12) 
        result.innerHTML = "You need 9-12 hours of sleep every day.";
        else if (age >= 13 || age <= 18) 
        result.innerHTML = "You need 8-10 hours of sleep every day.";
        else if (age >= 19 || age <= 60) 
        result.innerHTML = "You need 7 or more hours of sleep every day.";
        else if (age >= 61 || age <= 64) 
        result.innerHTML = "You need 7-9 hours of sleep every day.";
        else if (age >= 65) 
        result.innerHTML = "You need 7-9 hours of sleep every day.";
        else {
  
       result.innerHTML = "You need to input a proper value for age."
    }
}
