const { error } = require("console");
const fs = require("fs");

let texto = "Estou aprendendo regerenciar aquivos com o node.JS"

fs.writeFile("./lucas.txt", texto, (error) => {

    if(error){

        console.log("Erro durante o salvamento do arquivo")

    }else{

        fs.readFile("./lucas.txt", {encoding: "utf-8"}, (error, lendoTexto) => {

            if(error){

                console.log("Erro na leitura do texto");

            }else{

                console.log(lendoTexto);

            }

        })

    }

})



function modificando(nome, curso){

    fs.readFile("./usuario.json", {encoding: "utf-8"}, (erro, dados) => {

    if(erro){
        console.log("Um erro ocorreu na leitura");
    }else{
        var conteudo = JSON.parse(dados); // texto para objeto
        
        conteudo.nome = nome
        conteudo.curso = curso

        fs.writeFile("./usuario.json", JSON.stringify(conteudo), (erro) => {//objeto para texto

            if(erro){
                console.log("Um erro ocorreu durante o processo de escrita");
            }
        }) 

    }

    })

}

modificando("Lucas", "node e excel")