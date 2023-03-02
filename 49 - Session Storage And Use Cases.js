
// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

document.querySelector(".name").onblur = function () {
    // console.log(this.value);
    window.localStorage.setItem("input-name", this.value);
    };