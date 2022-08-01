import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function respostaTeste() {
    let lista = []
    var listaOrdenada = function() {
        lista.sort()
    }    
    rl.question(`Quais as propriedades você deseja ordenar? \n`, (resposta) => {
        if (resposta.trim() == 'sair') {
            rl.close();
        } else {
    lista.push(resposta)
    console.log(`Estas são as propriedades: ${resposta}`)
    console.log(listaOrdenada())
}
    }
        )
            }

            rl.on('close', ()=>{
                console.log('Ok')
            })

    respostaTeste()



