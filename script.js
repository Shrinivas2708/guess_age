const year = new Date().getFullYear();
const add = document.getElementById('message')

const calcAge = function () {
  const birthYear = document.getElementById("yearInput").value;
  add.classList.add('style_op')
  document.getElementById("message").textContent =
    birthYear > year
      ? "You entered WRONG year ! This year is after  year" +
        " " +
        year +
        " " +
        "hence AGE can't be calculated !"
      : !birthYear
      ? "There is NO birthyear"
      : "You are " + (year - birthYear) + " " + "years old !";
};

document.getElementById("btn-check").addEventListener("click", calcAge);

document.body.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    calcAge();
  }
});
