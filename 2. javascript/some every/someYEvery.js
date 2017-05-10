//some, OR; every, AND
let arreglo = [1,5,10,8,9,6]

let resultado = arreglo.
    map((valor,indice)=>{
        return valor/5;
})
.every((valor)=>{
    return valor > 0
});

console.log(resultado)
