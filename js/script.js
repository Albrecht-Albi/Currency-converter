{
    const calculateResult = (amount, currency) => {
        const EUR = 4.69;
        const GBP = 5.45;
        const USD = 4.46;

        switch (currency) {
            case "EUR":
                return amount / EUR;

            case "GBP":
                return amount / GBP;

            case "USD":
                return amount / USD;

        }

    };


    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.value = `${result.toFixed(2)} ${currency}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();


        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currencyUnit");

        const amount = amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);


        updateResultText(amount, result, currency);

    };


    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();

}