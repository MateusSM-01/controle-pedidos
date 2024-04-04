
let btnEnviar = document.querySelectorAll('#botoes button')[0];
let btnExcluir = document.querySelectorAll('#botoes button')[1];
let btnEditar = document.querySelectorAll('#botoes button')[2];

let solicitante = document.querySelectorAll('#wrap input')[0];
let data = document.querySelectorAll('#wrap input')[1];
let cliente = document.querySelectorAll('#wrap input')[2];

let cnpjcpf = document.querySelectorAll('#wrap input')[3];
let descricao = document.querySelectorAll('#wrap input')[4];
let transportadora = document.querySelectorAll('#wrap input')[5];

let dataentrega = document.querySelectorAll('#wrap input')[6];
let quantidade = document.querySelectorAll('#wrap input')[7];
let status = document.querySelectorAll('#wrap input')[8];

let tabela = document.querySelector('#saida table');
let BD = [];

//métodos
btnEnviar.onclick = function(){
    let produto = new Object();
    produto.solicitante = solicitante.value;
    produto.data = data.value;
    produto.cliente = cliente.value;
    produto.cnpjcpf = cnpjcpf.value;
    produto.descricao = descricao.value;
    produto.transportadora = transportadora.value;
    produto.dataentrega = dataentrega.value;
    produto.quantidade = quantidade.value;
    produto.status = status.value;
    produto.id = BD.length;
    BD.push(produto);
    tabela.innerHTML += `<tr><td><input type="checkbox" id="${produto.id}" onchange="verificar(this.id)"></td><td>${produto.solicitante}</td><td>${data.value}</td><td>${cliente.value}</td><td>${cnpjcpf.value}</td><td>${descricao.value}</td><td>${transportadora.value}</td><td>${dataentrega.value}</td><td>${quantidade.value}</td><td>${status.value}</td></tr>`;
}

btnExcluir.onclick = function(){
    for (let i = 0; i < BD.length; i++){
        let elemento = document.querySelectorAll('#saida table tr td input')[i];
        if (elemento.checked){
            BD.splice(elemento.id, 1);
            tabela.innerHTML = `<tr><td width="30px"></td><td>solicitante</td><td>data</td><td>cliente</td><td>cnpjcpf</td><td>descricao</td><td>transportadora</td><td>dataentrega</td><td>quantidade</td><td>status</td></tr>`;
            montarTabela();
        }
    }
}

function montarTabela(){
    for (let i = 0; i < BD.length; i++){
        tabela.innerHTML += `<tr><td width="30px"><input type="checkbox" id="${i}" onchange="verificar()"></td><td>${BD[i].solicitante}</td><td>${BD[i].data}</td><td>${BD[i].cliente}</td><td>${BD[i].cnpjcpf}</td><td>${BD[i].descricao}</td><td>${BD[i].transportadora}</td><td>${BD[i].dataentrega}</td><td>${BD[i].quantidade}</td><td>${BD[i].status}</td></tr>`;
    }
}

btnEditar.onclick = function(){
    for (let i = 0; i < BD.length; i++){
        let elemento = document.querySelectorAll('#saida table tr td input')[i];
        if (elemento.checked){
            BD[i].solicitante = solicitante.value;
            BD[i].data = data.value;
            BD[i].cliente = cliente.value;

            BD[i].cnpjcpf = cnpjcpf.value;
            BD[i].descricao = descricao.value;
            BD[i].transportadora = transportadora.value;

            BD[i].dataentrega = dataentrega.value;
            BD[i].quantidade = quantidade.value;
            BD[i].status = status.value;

            tabela.innerHTML = `<tr><td width="30px"></td><td>solicitante</td><td>data</td><td>cliente</td><td>cnpjcpf</td><td>descricao</td><td>transportadora</td><td>dataentrega</td><td>quantidade</td><td>status</td></tr>`;
            montarTabela();
        }
    }    
}

function verificar(id){
    let cont = 0;
    for (let i = 0; i < BD.length; i++){
        let elemento = document.querySelectorAll('#saida table tr td input')[i];
        if (elemento.checked){
            solicitante.value = BD[i].solicitante;
            data.value = BD[i].data;
            cliente.value = BD[i].cliente;
            cnpjcpf.value = BD[i].cnpjcpf;
            descricao.value = BD[i].descricao;
            transportadora.value = BD[i].transportadora;
            dataentrega.value = BD[i].dataentrega;
            quantidade.value = BD[i].quantidade;
            status.value = BD[i].status;

            cont++;
            if (cont > 1){
                alert('Não é possível selecionar mais de 1 elemento.');
                elemento.checked = false;
                break;
            }
        }
    }
}

