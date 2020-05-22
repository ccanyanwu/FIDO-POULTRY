//select elements from the DOM
const UIprofit = document.querySelector('.profit'),
      UIloss = document.querySelector('.loss'),
      UIsalesInput = document.querySelector('#sales_input'),
      UIexpensesInput = document.querySelector('#expenses_input'),
      UIcalculate = document.querySelector('.calculate-btn');
      
      //listen for submit event 
      const eventListener = () =>{
        UIcalculate.addEventListener('click', function() {
          // show loader
          UIprofit.display = 'none';
          UIloss.display = 'none';
          document.querySelector('#loading').classList.remove('hide');
          
          setTimeout(calculate, 1500);
        });
      };
      
     //calculate profit or loss 
     const calculate = () =>{
       const salesInput = parseFloat(UIsalesInput.value);
       const expensesInput = parseFloat(UIexpensesInput.value);
       let addition = 0;
       let subtraction =0;
       
       //displays error message 
     const showError = (error) =>{
       const errorDiv = document.createElement('div');
       const accountHeading = document.querySelector('.section'),
             account = document.querySelector('#calculate');
       
       errorDiv.style.border = '1px solid #f07d7f';
       errorDiv.className = 'error';
       errorDiv.appendChild(document.createTextNode(error));
      
       
       accountHeading.insertBefore(errorDiv, account);
       
       setTimeout(clearError, 3000);
       
     }
     
     const clearError = () => {
       document.querySelector('.error').remove();
     }
       
       //validate input
       if(isNaN(salesInput) || isNaN(expensesInput)){
         showError('Please input your figures');
         document.querySelector('#loading').classList.add('hide');
          
       }else{
         if(salesInput > expensesInput){
           let difference = salesInput - expensesInput;
           addition += difference;
           UIprofit.textContent = `${(parseFloat(UIprofit.textContent) + addition).toFixed(2)}`;
         }else if(expensesInput > salesInput){
           let difference = expensesInput - salesInput;
           subtraction += difference;
           UIloss.textContent = `${(parseFloat(UIloss.textContent) + subtraction).toFixed(2)}`;
         }else if (salesInput === expensesInput){
           UIprofit.textContent = `${parseFloat(UIprofit.textContent) + 0}`;
           UIloss.textContent = `${parseFloat(UIloss.textContent) + 0}`;
         }document.querySelector('#loading').classList.add('hide');
          
       }
       
     };
     
     //call eventListener
     eventListener();