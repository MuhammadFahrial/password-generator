let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let save = document.getElementById("save");
let error_msg = document.querySelector(".error");

const generatePassword = (len) => {
  const lowerAlphbet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";
  const symbol = '`~!@#$%^&*()_-+={}[]:;"|<>,.?/';

  const data = lowerAlphbet + upperAlphabet + numeric + symbol;
  let generator = "";
  for (let index = 0; index < len; index++) {
    generator += data[Math.floor(Math.random() * data.length)];
  }
  return generator;
};

const getPassword = () => {
  const newPassword = generatePassword(passwordLength.value);
  if (passwordLength.value > 0) {
    password.value = newPassword;
    error_msg.innerHTML = "";
    alert("Password has been generated");
  } else {
    error_msg.style.color = "red";
    error_msg.innerHTML = "Error! Password length is less than 1 ";
  }
};

const copyPassword = () => {
  navigator.clipboard
    .writeText(password.value)
    .then(() => {
      alert("Success copied to the clipboard: " + password.value);
    })
    .catch((err) => {
      alert.error("Failed to copy text: ", err);
    });
};

const savePassword = () => {
  save.setAttribute(
    "href",
    "data:text/plain;charset-utf-8," +
      encodeURIComponent("saya: " + password.value)
  );
  save.setAttribute("download", "MyPasswordGenerator.txt");
};
