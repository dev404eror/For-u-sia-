
function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  if (input === "18sep2009") {
    document.getElementById("passwordPrompt").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  } else {
    alert("Wrong password!");
  }
}
