function createCalculator() {
  return {
    display: document.querySelector(".display"),

    start() {
      this.clickButtons();
      this.pressEnter();
    },

    pressEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.KeyCode === 13) {
          this.calculate();
        }
      });
    },

    calculate() {
      let result = this.display.value;

      try {
        result = eval(result);

        if (!result) {
          alert("Conta inválida");
          return;
        }
        this.display.value = String(result);
      } catch (e) {
        alert("Conta inválida");
        return;
      }
    },

    clearDisplay() {
      this.display.value = "";
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    clickButtons() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnFromDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.deleteOne();
        }

        if (el.classList.contains("btn-eq")) {
          this.calculate();
        }
      });
    },
    btnFromDisplay(numericValue) {
      this.display.value += numericValue;
    },
  };
}

const calculator = createCalculator();
calculator.start();
