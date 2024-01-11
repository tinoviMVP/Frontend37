import React, { useState } from 'react';

const ExchangeRate = 12388.98; // Пример фиксированного курса обмена для узбекских сумов

export const CurrencyConverter = () => {
  const [amountInUzbekSum, setAmountInUzbekSum] = useState(0);

  const handleAmountChange = (event) => {
    setAmountInUzbekSum(event.target.value);
  };

  const convertToDollars = () => {
    const amountInDollars = amountInUzbekSum / ExchangeRate;
    return amountInDollars.toFixed(2); // Округляем до двух знаков после запятой
  };

  return (
    <div>
      <h2>Конвертер валют</h2>
      <label>
        Введите сумму в узбекских сумах:
        <input type="number" value={amountInUzbekSum} onChange={handleAmountChange} />
      </label>
      <p>Сумма в долларах: ${convertToDollars()}</p>
    </div>
  );
}
