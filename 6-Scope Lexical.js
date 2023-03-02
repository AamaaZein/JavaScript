//function parent(){
  //  let a = 10;

  //  function child(){
   //     let a = 20;
  //      console.log(a);
   // }
 //   child()
//}
//parent();

function parent(){
    let a = 10;

    function child(){
        let a = 10;
        console.log(a);

        function grand (){
            console.log(`from Grand ${a}`); 
        }
        grand();

    }
    child()
}
parent();

