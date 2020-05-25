document.addEventListener('DOMContentLoaded', function() {
    const profit = document.querySelector('.profit');
    const loss = document.querySelector('.loss');
    let getProfit = JSON.parse(localStorage.getItem('profit'));
    profit.innerHTML = `${getProfit}`;
    let getLoss = JSON.parse(localStorage.getItem('loss'));
    loss.innerHTML = `${getLoss}`;
    
    
})

