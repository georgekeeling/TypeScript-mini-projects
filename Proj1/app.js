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
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
function myStop() {
    greeter.stop();
}
;
var test2;
var greeter;
window.onload = function () {
    var el = document.getElementById("content");
    greeter = new Greeter(el);
    greeter.start();
    test2 = 3;
};
//# sourceMappingURL=app.js.map