class Greeter {
  private element: HTMLElement;
  private span: HTMLElement;
  private timerToken: number;

  constructor(element: HTMLElement) {
    this.element = element;
    this.element.innerHTML += "The time is: ";
    this.span = document.createElement("span");
    this.element.appendChild(this.span);
    this.span.innerText = new Date().toUTCString();
  }

  public start() {
    this.timerToken = window.setInterval(() => {
      this.span.innerHTML = new Date().toUTCString();
    }, 500);
  }

  public stop() {
    clearTimeout(this.timerToken);
  }
}

function myStop() {
  greeter.stop();
};
var test2: number;
var greeter: Greeter;

window.onload = () => {
  const el = document.getElementById("content");
  greeter = new Greeter(el);
  greeter.start();
  test2 = 3;
};

