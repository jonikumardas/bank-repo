document.getElementById("balabcebtn").addEventListener("click", function () {
    const adderDipo = document.getElementById('depositeadder');
    const defogitValue = adderDipo.value;
    const newDeposite = parseFloat(defogitValue);
    const addOldDeposit = document.getElementById("depositdepo");
    const peviousDepo = addOldDeposit.innerText;
    const currentValue = parseFloat(peviousDepo);
    const total = currentValue + newDeposite;
    addOldDeposit.innerText = total;
    adderDipo.value = "";
    
    // total add valance 
    const balance = document.getElementById("netbalance")
    const innarValue=balance.innerText
    const natBalance = parseFloat(innarValue);
    const totalBalance = natBalance + newDeposite;
    balance.innerText = totalBalance;

    // deposit section is done 
    
})
// withdraw section start 
document.getElementById("withdrawbtn").addEventListener("click", function () {
    const withdrawdipo = document.getElementById("withdrawladder");
    const withdrawMinus = withdrawdipo.value;
    const newWithdraw = parseFloat(withdrawMinus);
    const changeWithdraw = document.getElementById("withdrawdipo");
    const changeBalance = changeWithdraw.innerText;
    const changeBalane = parseFloat(changeWithdraw.innerText);
    const totalwithdraw = changeBalane + newWithdraw;
    changeWithdraw.innerText = totalwithdraw;
    withdrawdipo.value = "";
    
    // minus from total balace
    const balance = document.getElementById("netbalance")
    const innarValue=balance.innerText
    const natBalance = parseFloat(innarValue);
    const totalBalance = natBalance - newWithdraw;
    balance.innerText = totalBalance;

})
