
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
  
       result.innerHTML = "no worko"
    }
}