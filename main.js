const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll ('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if (tamanhoSenha > 1){
        tamanhoSenha --;
    }
    numeroSenha.textContent = tamanhoSenha;
}

function aumentaTamanho(){
    if (tamanhoSenha < 20){
        tamanhoSenha ++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

const campoSenha = documen.querySelector('#campo-senha');

const Letrasmaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
geraSenha();

Function geraSenha() {
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroaleatorio = Math.random () * Letrasmaiuscula.length;
        numeroaleatorio = Math.floor (numeroaleatorio);

}
campoSenha.value = senha;
}