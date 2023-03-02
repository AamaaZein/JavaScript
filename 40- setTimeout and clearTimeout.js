//setTimeout(function () {
//    console.log(`Msg`);
//} ,3000);

//setTimeout(sayMsg,3000);

//    function sayMsg(){
//        console.log(`Iam Message`);
//    }

//setTimeout(sayMsg,3000, "asom",20);

 //   function sayMsg(user,age){
 //       console.log(`Iam Message For ${user} His Age Is ${age}`);
//    }


let counter = setTimeout(sayMsg, 3000,);

    function sayMsg(){
        console.log(`Iam Message`);
    }

    console.log (counter);

    let btn = document.querySelector("batton");

btn.onclick = function () {
clearTimeout(counter);
    }