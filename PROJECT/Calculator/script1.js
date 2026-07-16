const button = document.querySelector(".buttons");
const display = document.querySelector(".display input");

const operators = ["+", "-", "x", "÷", "%"];
let result = false;

button.addEventListener("click" , (event)=>{

    const targets = event.target.innerText;

    if (event.target.tagName !== "BUTTON") {
    return;
}
       
    if(targets === "="){
        try{
        let expression = display.value;

        expression = expression.replaceAll("x","*");
        expression = expression.replaceAll("÷","/");

        display.value=eval(expression);
        result = true ;

        }        catch{
                  display.value = "Error";
                }
    }

    else if(targets === "AC"){
        display.value = " ";
        result = false;
    }
    else if(targets == "⌫"){
        display.value = display.value.slice(0,-1);

    }
    else {
        //  for number
        if(result){
             if(!isNaN(targets)){
                display.value = targets;
                 result = false;
                 return

            }
            result = false;
        }
        // for Operator
        let lastvalue = display.value.slice(-1);
        // double Operator 7×÷ ❌ Nahi hone diya.

        if(operators.includes(lastvalue) && operators.includes(targets)){
          return
        }
        display.value+=targets;
    }
})
