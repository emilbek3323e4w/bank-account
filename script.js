const balanceDisplay = document.getElementById('balance-display')
const inputSpace = document.getElementById('input-space')
const depositBtn = document.getElementById('deposit-btn')
const withdrawBtn = document.getElementById('withdraw-btn')
const clearBtn = document.getElementById('clear-btn')
const itemDetails = document.getElementById('item-details')
const emptyState = document.getElementById('empty-state')

let balance = 0
let history = []