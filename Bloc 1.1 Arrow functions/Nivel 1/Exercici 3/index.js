
//Exercici3
class Person {
    constructor(name) {
      this.name = name;
    }
  
    greet = () => {
      console.log(`Hola, ${this.name}`);
    };
  }
  
  let person = new Person("Mira");
  person.greet(); 


