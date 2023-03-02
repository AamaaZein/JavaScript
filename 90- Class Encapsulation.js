class User {
    // Private Property
    #e;
    constructor(id, username, eSalary) {
        this.i = id;
        this.u = username;
        this.#e = eSalary;
    }
    getSalary() {
        return parseInt(this.#e);
    }
    }
    
    let userOne = new User(100, "Elzero", "5000 Gneh");
    
    console.log(userOne.u);
  console.log(userOne.getSalary() * 0.3);
