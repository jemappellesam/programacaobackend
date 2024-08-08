const fs = require('fs');


const stream = fs.createReadStream('./a&w-LanaDelRey.txt', {
    encoding: 'utf8',
    highWaterMark: 4 * 1024 
});

const contarPalavras = (letra) => {
    const palavras = letra.match(/\w+('\w+)?/g);
    return palavras ? palavras.length : 0;
};

stream.on('data', (chunk) => {
    console.log("----------------------------");
    console.log("Chunk recebido:");
    console.log(chunk);


    const numeroDePalavras = contarPalavras(chunk);
    console.log(`Número de palavras: ${numeroDePalavras}`);

    stream.pause();

    setTimeout(() => {
        stream.resume();
    }, 5000);
});


stream.on('end', () => {
    console.log("Arquivo finalizado");
});
