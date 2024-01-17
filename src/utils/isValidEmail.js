function isValidEmail(emailValue) {
  if (!emailValue.includes("@")) {
    console.log("Email is not valid!");
    return false;
  }

  return true;
}

export default isValidEmail;
