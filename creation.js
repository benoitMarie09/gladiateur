function handleRadioClick(event) {
  var inputVie = document.querySelector("input[name = vie]");
  var inputStamina = document.querySelector("input[name = stamina]");
  var inputForce = document.querySelector("input[name = force]");
  var inputAgilite = document.querySelector("input[name = agilite]");
  var inputIntelligence = document.querySelector("input[name = intelligence]");
  var points = document.querySelector("input[name = points]");
  points.value = 5;
  switch (event.target.value) {
    case "guerrier":
      inputVie.value = 150;
      inputStamina.value = 120;
      inputForce.value = 15;
      inputAgilite.value = 10;
      inputIntelligence.value = 7;
      inputVie.min = 150;
      inputStamina.min = 120;
      inputForce.min = 15;
      inputAgilite.min = 10;
      inputIntelligence.min = 7;
      break;
    case "archer":
      inputVie.value = 100;
      inputStamina.value = 100;
      inputForce.value = 12;
      inputAgilite.value = 12;
      inputIntelligence.value = 12;
      inputVie.min = 100;
      inputStamina.min = 100;
      inputForce.min = 12;
      inputAgilite.min = 12;
      inputIntelligence.min = 12;
      break;
    case "mage":
      inputVie.value = 80;
      inputStamina.value = 80;
      inputForce.value = 12;
      inputAgilite.value = 12;
      inputIntelligence.value = 15;
      inputVie.min = 80;
      inputStamina.min = 80;
      inputForce.min = 12;
      inputAgilite.min = 12;
      inputIntelligence.min = 15;
      break;
    case "assassin":
      inputVie.value = 80;
      inputStamina.value = 80;
      inputForce.value = 12;
      inputAgilite.value = 15;
      inputIntelligence.value = 12;
      inputVie.min = 80;
      inputStamina.min = 80;
      inputForce.min = 12;
      inputAgilite.min = 15;
      inputIntelligence.min = 12;
      break;
  }
}

function increase(event) {
  var caract = event.target.parentNode.querySelector("input");
  var points = document.querySelector("input[name = points]");
  if (points.value > 0) {
    caract.stepUp();
    points.stepDown();
  }
}

function decrease(event) {
  var caract = event.target.parentNode.querySelector("input");
  var points = document.querySelector("input[name = points]");
  if (caract.value > caract.min) {
    points.stepUp();
    caract.stepDown();
  }
}

function handleChange(event) {
  console.log(event);
}
