const upperset = "ABCDEFGHIJKLMPNOQRSTUVWXYZ"
const lowerset = "abcdefghijklmnopqrstuvwxyz"
const numberset = "1234567890"
const symbolset ="~@#$%^&*()_+"

const passbox = document.getElementById("pass-box")
const totalchar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("number-case")
const symbolInput = document.getElementById("symbol-case")

const getRandomData = (dataset) => {
    return dataset [Math.floor(Math.random() * dataset.length)]
} 

const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperset)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerset)
    }
    if (numberInput.checked) {
        password += getRandomData(numberset)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolset)
    }
    if (password.length < totalchar.value) {
        return generatePassword(password)
    }

    passbox.innerText = truncateString(password, totalchar.value);
}

generatePassword();

document.getElementById("btn").addEventListener(
    "click",
    function() {
        generatePassword();
    }

)

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}