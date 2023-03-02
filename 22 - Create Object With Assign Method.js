let obj1 = { 
    prop1:1,
    meth1: function (){
        return this.prop1;
    },
};

let obj2 = {
    prop1:2,
    meth2: function (){
        return this.prop2;
    },
};

let targetobject = {
    prop1: 1,
        prop3: 3,
    
};

let finalObject = Object.assign(targetobject, obj1,obj2);
finalObject.prop1 = 200;
finalObject.prop4 = 4;

consolelog(finalObject);

let newObject = Object.assign({},obj1,{prop5: 5, prop6: 6});

console.log(newObject);