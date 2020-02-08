const loginBtn = document.getElementById("submitBtn");
const userId = document.querySelector("#userId");
const password = document.querySelector("#password");
const warningMsg = document.querySelector(".warning_Container");

function isValidInput() {
  if (
    (userId.value.trim().length === 0) |
    (password.value.trim().length === 0)
  ) {
    return false;
  }
  return true;
}

function showWaringMsg() {
  warningMsg.classList.remove("hidden");
  setTimeout(function() {
    warningMsg.classList.add("hidden");
  }, 2000);
}

function handleClickLogin(event) {
  console.log("호옹이");
  event.preventDefault();
  if (!isValidInput()) {
    showWaringMsg();
  } else {
  }
}

if (loginBtn) {
  loginBtn.addEventListener("click", handleClickLogin);
}
