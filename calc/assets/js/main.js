function createCalculator() {
  return {
    display: document.querySelector(".display"),

    clearDisplay() {
      this.display.value = "";
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    start() {
      this.clickButtons();
    },

    clickButtons() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        console.log(el.classList.contains("btn-clear"));

        if (el.classList.contains("btn-num")) {
          this.btnFromDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.deleteOne();
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
