{
    const calculateResult = (amount, currency) => {
        const EUR = 4.69;
        const USD = 4.46;
        const GBP = 5.45;

        switch (currency) {
            case "EUR":
                return amount / EUR;

            case "USD":
                return amount / USD;

            case "GBP":
                return amount / GBP;
        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencytElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencytElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);
    };

    const onFormReset = () => {
        const amountElement = document.querySelector(".js-amount");
        const resultElement = document.querySelector(".js-result");

        amountElement.innerText = "";
        resultElement.innerText = "";
    }



    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
        formElement.addEventListener("reset", onFormReset);
    };

    init();
}
