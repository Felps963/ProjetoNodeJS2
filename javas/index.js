let heroi = {
    nome: 'PaoFrances7',
    exp: 9412
}

let nivel 

if (heroi.exp <= 1000) {
    nivel = 'Ferro';
}else if (heroi.exp >= 1001 && heroi.exp <= 2000) {
    nivel = 'Bronze';
}
else if (heroi.exp >= 2001 && heroi.exp <= 5000) {
    nivel = 'Prata';
}
else if (heroi.exp >= 5001 && heroi.exp <= 7000) {
    nivel = 'Ouro';
}
else if (heroi.exp >= 7001 && heroi.exp <= 8000) {
    nivel = 'Platina';
}
else if (heroi.exp >= 8001 && heroi.exp <= 9000) {
    nivel = 'Ascendente';
}
else if (heroi.exp >= 9000 && heroi.exp <= 10000) {
    nivel = 'Imortal';
}
else { nivel = 'Radiante' ;   
}

console.log("O heroi de nome: " + heroi.nome + " está no nivel de: " + nivel );