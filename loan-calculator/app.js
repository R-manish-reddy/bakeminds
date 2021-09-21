

var cal_Btn = document.querySelector('.btn')

  //Result UI
  

//Events 
cal_Btn.addEventListener('click',calculate)

function calculate(e){
    var amount = document.getElementById('amount')
    var interest = document.getElementById('interest').value
    var years = document.getElementById('years').value

    var monthlyPayment = document.getElementById('monthly-payment')
    var totalPayment =  document.getElementById('total-payment')
    var totalInterest = document.getElementById('total-interest')


    var principal = parseFloat(amount.value) 
    var calculatedInterest = parseFloat(interest.value)/100/12;
    var calculatedPayments = parseFloat(years.value)*12;
    
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);
    e.preventDefault()
    if (isFinite(monthly)) {
        console.log("hu")
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
    }


 
}
   



