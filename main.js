const gender = document.querySelectorAll("input[name=gender]");
const age = document.querySelector(".age");
const height = document.querySelector(".height");
const weight = document.querySelector(".weight");
const buttonSubmit = document.querySelector(".btn-submit");
const buttonReset = document.querySelector(".btn-reset");
const tdeeBox = document.getElementById("tdee-box");
let genderNum = 0;
let tdeeRate = [1.2, 1.375, 1.55, 1.725, 1.9];

buttonSubmit.addEventListener("click", BMRTotal);

//check user has selected which radio button for gender
function choiceOfGender() {
  let selectedGender;
  for (const genderChoice of gender) {
    if (genderChoice.checked) {
      selectedGender = genderChoice.value;
    }
  }
  return selectedGender;
}

//change selectoed gender to number for BMR calculation
function genderValue() {
  let genderValue = choiceOfGender();
  if (genderValue == "male") {
    genderNum += 5;
  } else {
    genderNum -= 161;
  }
}

//validation of input, to check if user entered all elements
//result of BMR
function BMRTotal() {
  genderValue();
  if (
    weight.value !== "" &&
    age.value !== "" &&
    height.value !== "" &&
    genderNum !== 0
  ) {
    let total =
      10 * parseInt(weight.value) +
      6.25 * parseInt(height.value) -
      5 * parseInt(age.value) +
      genderNum;
    document.querySelector(".result").textContent = Math.round(total);
    assignTdeeValueToEachId(total);
    buttonSubmit.disabled = true;
  }
}

//assign 5 span to 5 different id and put the tdee result
function assignTdeeValueToEachId(sum) {
  let prefix = "tdee-formula-";

  for (let k = 1; k < 6; k++) {
    const parent = document.getElementById(prefix + k);
    const span = document.createElement("span");
    span.className = "tdee-result-span";
    span.innerText = Math.round(tdeeRate[k - 1] * sum);
    parent.appendChild(span);
  }
}

buttonReset.addEventListener("click", reset);

//reset to blank input field and uncheck radio button
function reset() {
  weight.value = "";
  age.value = "";
  height.value = "";
  for (const genderChoice of gender) {
    genderChoice.checked = false;
  }
  genderNum = 0;
  buttonSubmit.disabled = false;
  document.querySelector(".result").textContent = "";
  removeElementsByClass();
}

//remove tdee element function
function removeElementsByClass() {
  const elements = document.getElementsByClassName("tdee-result-span");
  while (elements.length > 0) elements[0].remove();
}
