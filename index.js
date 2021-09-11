const calcircumference = (radius) => {
    return (2*3.1416*radius)
}

const calArea = (radius) => {
    return (3.1416*(radius)**2)
}

const circumference = calcircumference(4);
const area = calArea(3);

console.log(`The circumference is ${circumference}`);
console.log(`The area is ${area}`);


/*const calculateDogAge = 7
    for (let i = 2 ; i <= 10; i++) {
        console.log(`Your dog is ${i*calculateDogAge} years old`);
    }
    queria hacerlo como un bucle pero no me salio como esperaba sale un bucle inifinito 
    */
    const calculateDogAge = (age, convertor = 7) =>{
        return age * convertor;
    }
    
    const valueDogAge1 = calculateDogAge(2);
    const valueDogAge2 = calculateDogAge(5);
    const valueDogAge3 = calculateDogAge(7);
    
    console.log(`Your dog is ${valueDogAge1} years old`)
    console.log(`Your dog is ${valueDogAge2} years old`)
    console.log(`Your dog is ${valueDogAge3} years old`)