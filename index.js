import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function ordenarPropriedades() {
    let lista = [];
    const pergunta = `Quais as propriedades você deseja ordenar? \n` 
    rl.question(pergunta, (resposta) => {
        if (resposta.trim().toUpperCase() == 'SAIR') {
            rl.close();
        } else {
            lista.push(resposta.toUpperCase())
            rl.setPrompt(pergunta);
            rl.prompt();
            rl.on('line', (resposta) => {
                if (resposta.trim().toUpperCase() == 'SAIR') {
                    rl.close();
                } else {
                    lista.push(resposta.toUpperCase())
                    rl.setPrompt(pergunta);
                    rl.prompt();
                }})}})
                rl.on('close', ()=>{
                    const listaOrdenada = lista.sort()
                    console.log(listaOrdenada)
                })
            }
           

        ordenarPropriedades()



