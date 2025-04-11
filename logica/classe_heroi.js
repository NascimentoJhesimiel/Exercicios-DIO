class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  Ataque() {
    return `O ${this.type} atacou usando ${arma}`;
  }
}

let arma = "";

const aventureiro = new Hero("Jhesimiel", 20, "ninja");

if (aventureiro.type == "guerreiro") arma = "espada";
else if (aventureiro.type == "mago") arma = "magia";
else if (aventureiro.type == "monge") arma = "artes marciais";
else if (aventureiro.type == "ninja") arma = "shuriken";
else console.log("Classe inválida");

console.log(aventureiro.Ataque());
