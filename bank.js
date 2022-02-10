document.getElementById("deposit-btn").addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText)

    const depositTotal = document.getElementById('deposited-amount')
    const previusDepositText = depositTotal.innerText;
    const previusDepositAmount = parseFloat(previusDepositText)
    const newDepositTotal = previusDepositAmount + newDepositAmount
    // const  

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previusBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previusBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal
    depositTotal.innerText = newDepositTotal
    depositInput.value = ''
})

// handle withdraw event handler
document.getElementById("withdraw-btn").addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount)

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    withdrawInput.value = '';
})
