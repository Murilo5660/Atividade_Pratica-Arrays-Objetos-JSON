///Trabalhando com Arrays
let inventario = ["Espada","Escudo","Poção de Vida"];

console.log(inventario[1]);

inventario.push("Arco e Flecha");

inventario.pop();

inventario.unshift("Mapa");

if (inventario.includes("Poção de Vida")) {
    console.log("Murilo possui Poção de Vida em seu Inventário!");
} else {
    console.log("Murilo NÃO possui Poção de Vida em seu Inventário.");
}

for (let i = 0; i < inventario.length; i++){
    console.log(inventario[i]);
};

///Trabalhando com Objetos
let personagem = {
    nome:"Murilo",
    nivel:16,
    classe:"Mago"
};

personagem.nivel += 1;

console.log('Novo nível:',personagem['nivel']);

console.log(personagem['nome'],'pertence classe',personagem['classe']);

personagem.status_vivo = true;

delete personagem.classe;

///Unindo Arrays, Objetos e JSON
personagem.habilidades = ["Bola de Fogo","Relâmpago Teleguiado","Imã de Ouro"];

let inimigos = [
    {
    nome:"Slime",
    nivel:1
    },
    {
    nome:"Morcego",
    nivel:5
    }
];

let dados_personagem = JSON.stringify(personagem);

console.log(dados_personagem);

let personagemSalvo = JSON.parse(dados_personagem);

console.log(personagemSalvo.habilidades[0]);
