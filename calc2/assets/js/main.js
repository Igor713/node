function Calculator() {
  this.display = document.querySelector(".display");

  this.start = () => {
    this.cactchClicks();
    this.catchEnter();
  };

  this.catchEnter = () => {
    this.display.addEventListener("keypress", (e) => {
      if (e.keyCode === 13) {
        this.equals();
      }
    });
  };

  this.cactchClicks = () => {
    document.addEventListener("click", (event) => {
      const el = event.target;

      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains("btn-clear")) this.clear();
      if (el.classList.contains("btn-del")) this.delete();
      if (el.classList.contains("btn-eq")) this.equals(el);
    });
  };

  this.equals = () => {
    try {
      const result = eval(this.display.value);

      if (!result) {
        alert("Conta inválida");
        return;
      }

      this.display.value = result;
    } catch (err) {
      alert("Conta inválida");
    }
  };

  this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus();
  };

  this.clear = () => {
    this.display.value = "";
  };

  this.delete = () => {
    this.display.value = this.display.value.slice(0, -1);
  };
}

const calculator = new Calculator();
calculator.start();
