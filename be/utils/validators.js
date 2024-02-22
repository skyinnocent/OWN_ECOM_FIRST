function isValidEmail(email) {
  // Regular expression for a basic email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email matches the regex
  return emailRegex.test(email);
}
function isValidPassword(password) {
  // Regular expression for a basic passwor format
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Check if the password matches the regex
  return passwordRegex.test(password);
}

module.exports = { isValidEmail, isValidPassword };
