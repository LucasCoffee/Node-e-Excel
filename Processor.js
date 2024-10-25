class Processor{
    static Process(data){
        var lido = data.split("\r\n"); //splite separa as linhas uma das outra com base em uma caracter 
        let linhas = [];

        lido.forEach(row => {
            var arr = row.split(";");
            linhas.push(arr)
        });

        return linhas;

    }
}

module.exports = Processor;

