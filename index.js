class heroiDeAventura {
    constructor(nome,idade,tipo,ataque){  
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }
    atacar(){
        console.log(`o ${this.tipo} ${this.nome} atacou usando ${this.ataque}`)
        }
    verificarAtaque(){
        if(this.tipo === "mago"){
            console.log("usou magia")
        } else if(this.tipo === "guerreiro"){
            console.log("usou espada")
        }else if(this.tipo === "monge"){
            console.log("usou artes marciais")
        }else if(this.tipo === "ninja"){
            console.log("usou artes shuriken")
        }
    }
}
const heroi1 = new heroiDeAventura("Askeladd", 40, "guerreiro", "espadas");
//heroi1.verificarAtaque();
heroi1.atacar();

const heroi2 = new heroiDeAventura("Thors", 35, "monge", "artes marciais");
//heroi2.verificarAtaque();
heroi2.atacar();

