
function diezSiguientes(num){
    
    console.log("Ejercicio 1");
    for(let i=1; i<=10;i++){
        console.log(num+i);
    }
}

diezSiguientes(1);


function saltosTresenTres(){
    console.log("Ejercicio 2");
    for(let i=5;i<=20;i+=3){
        console.log(i);
    }
}

saltosTresenTres();

function sumatoria(){
    let sum = 0;
    console.log("Ejercicio 3");
    for(let i=0; i<=100; i++){
        sum+= i;
        console.log(sum)
    }   
}

sumatoria();

function factorial(num){
    fact= 1 ;
    console.log("Ejercicio 4");
    for(let i=1; i<=num; i++){
        fact*= i;
    }
    console.log(fact);
}

factorial(2);
factorial(3);
factorial(4);


function fibonacci(num){
    console.log("Ejercicio 5");
    const fibonacciSerie = [0,1]
    for(let i =2; i<= num; i++){
        fibonacciSerie[i] = fibonacciSerie[i-1] + fibonacciSerie[i-2] 
    }
    console.log(fibonacciSerie);
}

fibonacci(10);