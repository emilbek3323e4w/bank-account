const balanceDisplay = document.getElementById('balance-display')
const inputSpace = document.getElementById('input-space')
const depositBtn = document.getElementById('deposit-btn')
const withdrawBtn = document.getElementById('withdraw-btn')
const clearBtn = document.getElementById('clear-btn')
const itemDetails = document.getElementById('item-details')
const emptyState = document.getElementById('empty-state')
const errorMessage = document.getElementById('error-message')

let balance = 0

function deposit(){
    let amount = parseFloat(inputSpace.value)
    balance += amount
    updateBalance()
    addToHistory('deposit', amount)
    clearInput()
}

function withdraw(){
    let amount = parseFloat(inputSpace.value)

     if(balance < amount){
        errorMessage.style.display = 'block'
        errorMessage.textContent = 'Not enough money!'
        return
    }
    balance -= amount
    updateBalance()
    addToHistory('withdrawal',amount)
    clearInput()
}

function clearInput(){
    inputSpace.value = "";
}

function updateBalance(){
    balanceDisplay.textContent = `${balance} $`
}

function addToHistory(type, amount){
    let newItem = document.createElement("div")
    if(type === 'deposit'){
    newItem.className = 'item-deposit'
    } else {
        newItem.className = 'item-withdrawal'
    }

    newItem.innerHTML = `<p>${type}</p><div>${amount} $</div>`
    itemDetails.appendChild(newItem)

    emptyState.style.display = 'none'
}

function clearHistory(){
    itemDetails.innerHTML = ''
    emptyState.style.display = 'block'
}

depositBtn.addEventListener('click', deposit)
withdrawBtn.addEventListener('click', withdraw)
clearBtn.addEventListener('click',clearHistory)


