function makeItRed(e) {
    e.target.style.color = "red";
    }
    
    let p = document.querySelector(".test");
    p.addEventListener("click", makeItRed);
    
    function iamACallback() {
    console.log("Iam A Callback Function");
    }
    
    setTimeout(iamACallback, 2000);
    
    setTimeout(() => {
    console.log("Download Photo From URL");
    setTimeout(() => {
        console.log("Resize Photo");
        setTimeout(() => {
        console.log("Add Logo To The Photo");
        setTimeout(() => {
            console.log("Show The Photo In Website");
        }, 1000);
        }, 1000);
    }, 1000);
    }, 1000);