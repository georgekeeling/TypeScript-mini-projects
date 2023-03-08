// experimenting with unload event at
// https://www.w3schools.com/jsref/event_onbeforeunload.asp
// list at https://www.w3schools.com/jsref/dom_obj_event.asp
var Greeter = /** @class */ (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement("span");
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = window.setInterval(function () {
            _this.span.innerHTML = new Date().toUTCString();
        }, 500);
    };
    Greeter.prototype.stop = function () {
        // rather silly change to master
        var x = this.timerToken;
        clearTimeout(x);
    };
    return Greeter;
}());
window.onload = function () {
    var el = document.getElementById("content");
    var greeter = new Greeter(el);
    var elemRlt = document.getElementById("rlTime");
    elemRlt.innerHTML = new Date().toUTCString();
    var hideToken = setInterval(hideFunc, 2000);
    greeter.start();
    setCloseAction();
    function hideFunc() {
        var elemRlt = document.getElementById("rltArea");
        elemRlt.hidden = true;
        clearTimeout(hideToken);
    }
};
function unloadFunc(event) {
    event.returnValue = "Write something clever here..";
}
function setCloseAction() {
    var elem = document.getElementById("setClose");
    if (elem.checked) {
        addEventListener("beforeunload", unloadFunc);
    }
    else {
        removeEventListener("beforeunload", unloadFunc);
    }
}
//# sourceMappingURL=app.js.map