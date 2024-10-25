const Reader = require("./Reader")
const Writer = require("./Writer");
const Processor = require("./Processor");

let leitor = new Reader();
let escritor = new Writer();

let Table = require("./Table");
let HtmlParse = require("./htmlParse")
let PdfWriter = require("./PdfWriter");


async function main(){
    var excel = await leitor.read("./Implementação - Alinhamentos.csv")

    let dadosProcessados = await Processor.Process(excel)

    let arquivo = new Table(dadosProcessados)
    
    var linhasDados = []
    arquivo.rows.map(index => {
        linhasDados.push(index[0].split("\t"))
    })

    arquivo.rows = linhasDados
    var HTML = await HtmlParse.Parse(arquivo)

    escritor.Writers(Date.now() + ".html", HTML)
    PdfWriter.WritePdf(Date.now() + ".pdf", HTML)

}

main()