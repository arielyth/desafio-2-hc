const button1 = document.getElementById('confirmarCadastroProduto');
const produtos = [];
const buttonVoltarCliente = document.getElementById('voltarCadProduto');


class Produto {
    constructor(nome, codigoBarras, descricao, tipo, preco, qtdEstoque){
        this.nome = nome;
        this.codigoBarras = codigoBarras;
        this.descricao = descricao;
        this.tipo = tipo;
        this.preco = preco;
        this.qtdEstoque = qtdEstoque;
        
    }

}

function confirmaCadastro(e) {
    e.preventDefault();
    let nome = document.getElementById('nomeProduto').value;
    let codigoBarras = document.getElementById('codigoBarras').value;
    let descricao = document.getElementById('descricaoProduto').value;
    let tipo = document.getElementById('tipoProduto').value;
    let preco = document.getElementById('precoProduto').value;
    let qtdEstoque = document.getElementById('qtdProduto').value;
    
    if (nome != "" && codigoBarras != "" && descricao != "" && tipo != "" 
    && preco != "" && qtdEstoque != ""){
        let convertNome = JSON.stringify(nome);
        localStorage.setItem('nomeProduto', convertNome);
        
        let convertCodigoBarras = JSON.stringify(codigoBarras);
        localStorage.setItem('codigoBarras', convertCodigoBarras);

        let convertDescricao = JSON.stringify(descricao);
        localStorage.setItem('descricao', convertDescricao);
        
        let convertTipo = JSON.stringify(tipo);
        localStorage.setItem('tipo', convertTipo);

        let convertPreco = JSON.stringify(preco);
        localStorage.setItem('preco', convertPreco);

        let convertQtdEstoque = JSON.stringify(qtdEstoque);
        localStorage.setItem('qtdEstoque', convertQtdEstoque);


        let novoProduto = new Produto(convertNome, convertCodigoBarras, convertDescricao,
            convertTipo, convertPreco, convertQtdEstoque);
        produtos.push(novoProduto);
        
        localStorage.setItem('produtos', JSON.stringify(produtos));
        
        document.getElementById('formProduto').reset();

    }else{
        if(nome == ""){
            alert("Campo NOME PRODUTO n??o preenchido!")
        }else if(codigoBarras == ""){
            alert("Campo C??DIGO DE BARRAS n??o preenchido!")
        }else if(descricao == ""){
            alert("Campo DESCRI????O DO PRODUTO n??o preenchido!")
        }else if(tipo == ""){
            alert("Campo TIPO DO PRODUTO n??o preenchido!")
        }else if(preco == ""){
            alert("Campo PRE??O n??o preenchido!")
        }else if(qtdEstoque == ""){
            alert("Campo QUANTIDADE DO PRODUTO EM ESTOQUE n??o preenchido!")
        }
    }
}

button1.addEventListener('click', confirmaCadastro);

function voltarCliente(e){
    e.preventDefault();
    window.location.href = '../../index.html';
}

buttonVoltarCliente.addEventListener('click', voltarCliente);