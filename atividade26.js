/*Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5].*/
//enunciado errado, matrizes de 3x5 e 5x3
function preencher(linha,coluna) {
    let matriz=[];
    for (let i = 0; i < linha; i++) {
        matriz[i]=[];
        for (let u = 0; u < coluna; u++) {
            matriz[i][u]=Math.floor(Math.random()*4)+1//gerar valores aleatórios entre 1 e 4
        }
    }
    return matriz;
}
let ma=preencher(3,5);//matriz A e matriz B e a de resultado
let mb=preencher(5,3);
let mc=[];


for (let i = 0; i < 3; i++) {//cria as 3 linhas da matriz de resultado
    mc[i]=[];
    for (let u = 0; u < 3; u++) {//cria as 3 colunas da matriz de resultado e ja coloca um valor nela
        mc[i][u]=0;
        for (let y = 0; y < 5; y++) {//Realização das somas das multiplicações
            mc[i][u]+=ma[i][y]*mb[y][u];//mc[i][u] é a linha e coluna do resultado(informado cada um nos fores anteriores), ma[i][y] é a matriz A sendo I suas linhas e K suas colunas(formando assim o 3X5) e sobre o mb[y][u] é a matriz B sendo Y suas linhas(que mudam para cada soma) e U suas colunas(que mudam para cada posição em si) e formam assim o 5x3    
        }
    }
}

function exibir(matriz) {
for (let i = 0; i < matriz.length; i++) {//exibir os valores gerados
    console.log(...matriz[i])
}
}
console.log("Os valores gerados para a matriz A são: ")
exibir(ma);
console.log("Os valores gerados para a matriz B são: ")
exibir(mb);
console.log("O resultado da multiplicação entre elas é: ")
exibir(mc);