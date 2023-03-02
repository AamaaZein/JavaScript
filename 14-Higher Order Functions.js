let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

allLis.forEach(function (ele){
    ele.onclick =function (){
        //Remove Active Class TO this Element
        allLis.forEach(function (ele){
            ele.classList.remove("active");
        })
        // Add Active Class To this Element
        this.classList.add("active");
        //Hide All Divs
        allDivs.forEach(function (ele){
            ele.style.display ="none";
        });
    };
});

