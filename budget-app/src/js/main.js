let btnRaschet = document.getElementById('start'),
    budget = document.querySelector('.budget-value'),
    level = document.querySelector('.level-value'),
    expenses = document.querySelector('.expenses-value'),
    income = document.querySelector('.income-value'),
    yearSavings = document.querySelector('.yearsavings-value'),
    monthsavings = document.querySelector('.monthsavings-value'),
    optionalexpenses = document.querySelector('.optionalexpenses-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value'),
    year = document.querySelector('.year-value'),
    expensesItem = document.getElementsByClassName('expenses-item'),
    button = document.getElementsByTagName('button'),
    daybudget = document.querySelector('.daybudget-value'),
    btnExpenes = button[0],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    checksavings = document.getElementById('savings'),
    chooseIncome = document.querySelector('.choose-income'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    btnOptional = button[1];

let money, time;
let appData = {
    money: money,
    timeData: time,
    income: [],
    sevings: false,
    expenses: {},
    optionalExpenses: {},
};


btnRaschet.addEventListener('click', function () {
    money = +prompt("You budget?", "");
    time = prompt("data", "2000/11/5");
    while (isNaN(money) || money == "" || money == null) {
        money = prompt("You budget?", "1000");
    }
    appData.money = money;
    appData.timeData = time;
    budget.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    day.value = new Date(Date.parse(time)).getDate();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
});

btnExpenes.addEventListener('click', function () {
    if (appData.money != undefined) {
        let sum = 0;
        for (let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;

            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
                a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
                sum += +b;
            } else {
                i = i - 1;
            }
        }
        expenses.textContent = sum;
    }
    else{
        expenses.textContent = 'error';
    }
});

btnOptional.addEventListener('click', function () {

    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalexpenses.textContent += appData.optionalExpenses[i] + ' ';
    }
});


button[2].addEventListener('click', function () {
    if (appData.money != undefined) {
        appData.moneyPerDey = ((appData.money / 30).toFixed());
        daybudget.textContent = appData.moneyPerDey;
        if (appData.money / 30 < 100) {
            console.log("minimal level");
        } else if (appData.money / 30 > 100 && appData.money / 30 < 2000) {
            level.textContent = "averedge level";
        } else if (appData.money / 30 > 2000) {
            level.textContent = "high level";
        } else {
            level.textContent = "error";
        }
    } else {
        budget.textContent = 'error';
    }
});


chooseIncome.addEventListener('input', function () {
    let item = chooseIncome.value;
    appData.income = item.split(', ');
    income.textContent = appData.income;
});

checksavings.addEventListener('click', function () {
    if (appData.sevings == true) {
        appData.sevings = false;
    } else {
        appData.sevings = true;
    }
});

chooseSum.addEventListener('input', function () {
    if (appData.sevings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
        appData.monthIncome = sum / 100 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavings.textContent = appData.monthIncome.toFixed(1);
        yearSavings.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function () {
    if (appData.sevings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum / 100 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavings.textContent = appData.monthIncome.toFixed(1);
        yearSavings.textContent = appData.yearIncome.toFixed(1);

    }
});