var car={                                                //1st
    make: "Ford",
    model: "SUV",
    year:2024
};
Object.freeze(car);
car.model="coupe";
console.log(car);  

console.log("-----------------------");

var user={                                                //2nd
    name:"bindu",
    age:20,
    email:"jhsidhewjd@gmail.com"
};
console.log(Object.isFrozen(user));
console.log(user);

console.log("-----------------------");

var product={                                                //3rd
    name:"Dress",
    category:"Ethnic",
    price: 2999
};
console.log(Object.isSealed(product));
console.log(product);

console.log("-----------------------");

var laptop={                                                //4th
    brand:"Lenovo",
    model:"bbbbbb",
    price: 68999
};
console.log(Object.keys(laptop));

console.log("-----------------------");

var house={                                                //5th
    location:"Hyderabad",
    size:"4000 sqft",
    price: 8000000
};
console.log(Object.values(house));

console.log("-----------------------");

var Smartpho={                                                //6th
    brand:"Samsung",
    model:"iphone",
    price: 80000
};
console.log(Smartpho);
Object.seal(Smartpho);
Smartpho.price=60000;
console.log(Object.isSealed(Smartpho));
console.log(Smartpho);

console.log("-----------------------");

var book={                                                //7th
    title:"Pride and Prejudice",
    author:"Jane",
    publishyear: 1813
};
console.log(book);
Object.freeze(book);
book.publishyear=1850;
console.log(Object.isFrozen(book));
console.log(book);

console.log("-----------------------");

let person={                                              //8th
    firstname:"hima",
    lastname:"bindu",
    age:100
};
let keys=Object.keys(person);
console.log(Object.keys(person));
let values=Object.values(person);
console.log(Object.values(person));

console.log("-----------------------");

var course={                                                  //9th
    title:"Full stack",
    instructor:"Vamsi Sir",
    duration: "6 mnths"
}
console.log(Object.entries(course));
delete course.duration;
console.log(course);

console.log("-----------------------");

var employee={                                          //10th
    name:"Vennela",
    position:"Doctor",
    salary:40000
};
Object.seal(employee);
employee.position="Civil Engineer";
console.log(employee);
console.log(Object.keys(employee));
console.log(Object.isSealed(employee));
