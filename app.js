//listen for submit
// document.getElementById('loan-form').addEventListener('submit',function(){
    
//     //hide result
//     document.getElementById('results').style.display = 'none';

//     //show result
//     document.getElementById('loading').style.display = 'block';
//     settimeout(calculteResults,2000);
//     e.preventDefault();
// });

document.getElementById('loan-form').addEventListener('submit',calculteResults);
//calculte Results
function calculteResults(e){
    console.log('calculating');
    //Ui vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const princpal = parseFloat(amount.value)
    const calcultedInterest = parseFloat(interest.value)/100/12;
    const calcultedPayments = parseFloat(years.value)*12;
//compute monthly payment
const x = Math.pow(1+calcultedInterest,calcultedPayments);
const monthly = (princpal*x*calcultedInterest)/(x-1);
    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly*calcultedPayments).toFixed(2);
        totalInterest.value = ((monthly*calcultedPayments)- princpal).toFixed(2);
    
        document.getElementById('results').style.display = 'block';
        document.getElementById('loading').style.display = 'none';

    }
    else{
       // console.log('please check your no');
       showError('please check your numbers');   
    }

    e.preventDefault();
}

//show Error
function showError(error){

document.getElementById('results').style.display = 'none';
document.getElementById('loading').style.display = 'none';

//create a div
const errorDiv = document.createElement('div');

//get elements
const card = document.querySelector('.card');
const heading = document.querySelector('.heading');

//Add class
errorDiv.className = 'alert alert-danger';
//create text node and append to div 

errorDiv.appendChild(document.createTextNode(error));

//inert error above heading
card.insertBefore(errorDiv,heading);

//clear error after 3 second
setTimeout(clearError,3000);
}

//clear error
function clearError(){
    document.querySelector('.alert').remove();
}