function numberToWords(num) {
  const units = [
    "",
    "одна",
    "дві",
    "три",
    "чотири",
    "п'ять",
    "шість",
    "сім",
    "вісім",
    "дев'ять",
  ];
  const teens = [
    "десять",
    "одинадцять",
    "дванадцять",
    "тринадцять",
    "чотирнадцять",
    "п'ятнадцять",
    "шістнадцять",
    "сімнадцять",
    "вісімнадцять",
    "дев'ятнадцять",
  ];
  const tens = [
    "",
    "десять",
    "двадцять",
    "тридцять",
    "сорок",
    "п'ятдесят",
    "шістдесят",
    "сімдесят",
    "вісімдесят",
    "дев'яносто",
  ];
  const hundreds = [
    "",
    "сто",
    "двісті",
    "триста",
    "чотириста",
    "п'ятсот",
    "шістсот",
    "сімсот",
    "вісімсот",
    "дев'ятсот",
  ];

  function convertToWordsFunction(num) {
    if (num === 0) return "";
    if (num < 10) return units[num];
    if (num < 20) return teens[num - 10];
    if (num < 100)
      return (
        tens[Math.floor(num / 10)] + " " + convertToWordsFunction(num % 10)
      );
    return (
      hundreds[Math.floor(num / 100)] + " " + convertToWordsFunction(num % 100)
    );
  }

  const thousands = ["тисяча", "тисячі", "тисяч"];
  const millions = ["мільйон", "мільйона", "мільйонів"];
  const billions = ["мільярд", "мільярда", "мільярдів"];

  function selectWord(number, wordsArray) {
    if (number % 100 > 4 && number % 100 < 21) {
      return wordsArray[2];
    } else {
      const lastDigit = number % 10;
      if (lastDigit === 1) {
        return wordsArray[0];
      } else if (lastDigit > 1 && lastDigit < 5) {
        return wordsArray[1];
      } else {
        return wordsArray[2];
      }
    }
  }

  function convertToWords(num) {
    if (num === 0) return "нуль гривень";
    let result = "";
    if (num < 0) {
      result = "мінус ";
      num = Math.abs(num);
    }

    const billionsPart = Math.floor(num / 1000000000);
    const millionsPart = Math.floor((num % 1000000000) / 1000000);
    const thousandsPart = Math.floor((num % 1000000) / 1000);
    const unitsPart = num % 1000;

    if (billionsPart > 0) {
      result +=
        convertToWordsFunction(billionsPart) +
        " " +
        selectWord(billionsPart, billions) +
        " ";
    }

    if (millionsPart > 0) {
      result +=
        convertToWordsFunction(millionsPart) +
        " " +
        selectWord(millionsPart, millions) +
        " ";
    }

    if (thousandsPart > 0) {
      result +=
        convertToWordsFunction(thousandsPart) +
        " " +
        selectWord(thousandsPart, thousands) +
        " ";
    }

    if (unitsPart > 0) {
      result += convertToWordsFunction(unitsPart) + " ";
    }
    if (unitsPart.toString().slice(-1) === "1") {
      result += "гривня";
    } else if (
      unitsPart.toString().slice(-1) === "2" ||
      unitsPart.toString().slice(-1) === "3" ||
      unitsPart.toString().slice(-1) === "4"
    ) {
      result += "гривні";
    } else {
      result += "гривень";
    }

    return result.trim();
  }

  return convertToWords(num);
}

/* -------------------------- Приклади використання ------------------------- */
console.log("100561 :>> ", numberToWords(100561));
console.log("654 :>> ", numberToWords(654));
console.log("1878 :>> ", numberToWords(1878));
console.log("235 :>> ", numberToWords(235));
console.log("98393 :>> ", numberToWords(98393));
console.log("1237 :>> ", numberToWords(1237));
console.log("476 :>> ", numberToWords(476));
console.log("1202 :>> ", numberToWords(1202));
console.log("9999 :>> ", numberToWords(9999));
console.log("1000 :>> ", numberToWords(1000));
