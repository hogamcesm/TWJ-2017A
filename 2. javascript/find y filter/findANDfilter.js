//find y filter
let arreglo = [1,2,9,8,9,6]

let resultado = arreglo.
    map((valor,indice)=>{
        return valor/5;
})
.filter((valor)=>{
    return valor<=1;
})
.find((valor)=>{
    return valor == 0.2;
});

console.log(resultado)
