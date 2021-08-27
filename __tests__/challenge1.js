//Determinar lo que vamos a poner a prueba

import { checkInteger, twoNumbers } from "../math";

//Escribir una función que revise si un valor pasado como argumento es un número entero.
// Debería regresar true al probar el valor 5
// Debería regresar false al probar el valor "javascript"
// Debería regresar false al probar el valor 5.8
// Debería regresar false al probar el valor { a: 1 }

test("Debería regresar true al probar el valor 5", () => {
    //AAA

    //Arrange (Odenar)
    let value = 5;
    // Act (Actuar)
    let result = checkInteger(value);
    //Assert (Afirmar)
    expect(result).toBe(true);
});

test("Debería regresar false al probar el valor 'javascript'", () => {
    //Arrange (Odenar)
    let value = "javascript";
    // Act (Actuar)
    let result = checkInteger(value);
    //Assert (Afirmar)
    expect(result).toBe(false);
});

test("Debería regresar false al probar el valor 5.8", () => {
        //Arrange (Odenar)
        let value = 5.8;
        // Act (Actuar)
        let result = checkInteger(value);
        //Assert (Afirmar)
        expect(result).toBe(false);
});

test("Debería regresar false al probar el valor { a: 1 }", () => {
            //Arrange (Odenar)
            let value = { a: 1 };
            // Act (Actuar)
            let result = checkInteger(value);
            //Assert (Afirmar)
            expect(result).toBe(false);
});

// Escribe una función que tome dos números a y b como argumentos
// Si a es menor a b entonces divide por b // De lo contrario multiplica ambos // Si los números son iguales, se multiplican
// Retorna el resultado

// Si a=4 y b=2 debería retornar 8
// Si a=10 y b=100 debería retornar 0.1
// Si a=1 y b=2 debería retornar 0.5
// Si a=3 y b= 3 debería retornar 9

test("Si a=4 y b=2 debería retornar 8", () => {
    //Arrange (Odenar)
    let a = 4;
    let b = 2;
    // Act (Actuar)
    let result = twoNumbers(a, b);
    //Assert (Afirmar)
    expect(result).toBe(8);
});

test("Si a=10 y b=100 debería retornar 0.1", () => {
    //Arrange (Odenar)
    let a = 10;
    let b = 100;
    // Act (Actuar)
    let result = twoNumbers(a, b);
    //Assert (Afirmar)
    expect(result).toBe(0.1);
});

test("Si a=1 y b=2 debería retornar 0.5", () => {
    //Arrange (Odenar)
    let a = 1;
    let b = 2;
    // Act (Actuar)
    let result = twoNumbers(a, b);
    //Assert (Afirmar)
    expect(result).toBe(0.5);
});

test("Si a=3 y b= 3 debería retornar 9", () => {
    //Arrange (Odenar)
    let a = 3;
    let b = 3;
    // Act (Actuar)
    let result = twoNumbers(a, b);
    //Assert (Afirmar)
    expect(result).toBe(9);
});