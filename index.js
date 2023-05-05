async function municipio_poruf(){

let uf = document.getElementById("uf").value
const  cidades = await pegar_dados(uf)

var cidade = document.getElementById("cidade")

cidade.innerHTML=""

for(var i=0; i < cidades.length; i++){
    console.log()
    let newoption = new Option(cidades[i].nome, cidades[i].nome)
    cidade.add(newoption,undefined)
}

console.log(cidades)
}

 function pegar_dados(uf) {
    const cidades = fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+ uf +'/municipios?orderBy=nome')
    .then(response =>{
        return response.json()
    })
    .catch(error => console.error(error));
    return cidades
}


async function bairro_pordistrito(){
    let cidade = document.getElementById("cidade").value
    const bairros = await pegar_dadosbairro(cidade)

    var bairro = document.getElementById("bairro")
    bairro.innerHTML=""

    for(var i=0; i < bairros.length; i++){
        console.log()
        let newoption = new Option(bairros[i].nome, bairros[i].nome)
        cidade.add(newoption,undefined)
    }
    
    console.log(cidades)

}

function pegar_dadosbairro(cidade) {
    const bairros = fetch('https://servicodados.ibge.gov.br/api/v1/localidades/subdistritos?orderBy=nome')
    .then(response =>{
        return response.json()
    })
    .catch(error => console.error(error));
    return bairros
}

