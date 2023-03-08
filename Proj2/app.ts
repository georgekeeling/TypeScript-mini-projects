// experimenting with unload event at
// https://www.w3schools.com/jsref/event_onbeforeunload.asp
// list at https://www.w3schools.com/jsref/dom_obj_event.asp

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

window.onload = () => {
  const el = document.getElementById("content");
  const greeter = new Greeter(el);
  const elemRlt = document.getElementById("rlTime");
  elemRlt.innerHTML = new Date().toUTCString();
  let hideToken = setInterval(hideFunc, 2000);
  greeter.start();
  setCloseAction();

  function hideFunc() {
    const elemRlt = document.getElementById("rltArea");
    elemRlt.hidden = true;
    clearTimeout(hideToken);
  }
};

function unloadFunc(event) {
  event.returnValue = "Write something clever here..";
}

function setCloseAction() {
  let elem = document.getElementById("setClose") as HTMLInputElement;
  if (elem.checked) {
    addEventListener("beforeunload", unloadFunc);
  } else {
    removeEventListener("beforeunload", unloadFunc);
  }
}