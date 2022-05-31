const numberInput = document.querySelector("input");

class Conversion {
  constructor(value) {
    this.value = value;
  }

  convert() {
    document.getElementById("length").textContent = `${this.value} meters = ${(
      this.value * 3.28084
    ).toFixed(3)} feet | ${this.value} feet = ${(this.value * 0.3048).toFixed(
      3
    )} meters`;

    document.getElementById("volume").textContent = `${this.value} liters = ${(
      this.value * 0.264172
    ).toFixed(3)} gallons | ${this.value} gallons = ${(
      this.value * 3.78541
    ).toFixed(3)} liters`;

    document.getElementById("mass").textContent = `${this.value} kilos = ${(
      this.value * 2.20462
    ).toFixed(3)} pounds | ${this.value} pounds = ${(
      this.value * 0.453592
    ).toFixed(3)} kilos`;
  }
}

numberInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    userChoice = new Conversion(numberInput.value);
    userChoice.convert();
  }
});

let userChoice = new Conversion(0);
userChoice.convert();
