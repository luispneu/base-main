class MeuError extends Error{
  constructor(menssage){
  super(menssage);
  this.name = "Meu erro";
  }
}

class Produto {
    constructor(nome, dataCadastro, descricao, preco) {
      this.nome = nome;
      this.dataCadastro = dataCadastro;
      this.descricao = descricao;
      this.preco = preco;
    }
  
    mostrarProduto() {
      return this.nome + this.dataCadastro + this.descricao + this.preco;
    }
  }
  
  const produto = new Produto("<h1>Calça moletom palmeiras<br>", "2023<br>", "cor verde e branco<br>", "346R$");
  console.log(produto.mostrarProduto());
  
  class ProdutoDestaque extends Produto {
    constructor(nome, dataCadastro, descricao, preco, imagemDestaque) {
      super(nome, dataCadastro, descricao, preco);
      this.imagemDestaque = imagemDestaque;
    }

    mostrarAtributos(){
      try{
        return this.atri1butos();
      } catch(erro){
        console.log(erro.stack)
      }
    } 
  
    mostrarProdutoDestaque() {
      return `
        <h1><div>${this.nome}</div><br>
        <img src="${this.imagemDestaque}">
        <div>${this.dataCadastro}</div>
        <div>${this.descricao}</div>
        <div>${this.preco}</div>`;
    }

    atributos() {
      if (this.nome != "" && this.imagemDestaque != "" && this.dataCadastro!= ""  && this.descricao!= ""  && this.preco!= "")
      {return {
        nome:this.nome,
        imagemDestaque:this.imagemDestaque,
      dataCadastro:this.dataCadastro,
      descricao:this.descricao,
      preco:this.preco
      }; } else{ 
      throw  new MeuError("todos os atributos tem que estar completos")
    }
    }
  }
  
  const produto3 = new Produto("", "2023-06-10", "200R$");
  const produtoDestaque = new ProdutoDestaque("Corta vento palmeiras", "2023-06-10", "Verde e branco", "346R$", "https://d3ugyf2ht6aenh.cloudfront.net/stores/002/044/094/products/022763541-38bd6da7d097e9e2eb16468838991966-640-0.jpg");
  console.log(produto.mostrarProduto());
  console.log(produtoDestaque.mostrarProdutoDestaque());
  
  const produto1 = document.getElementById("lista-produtos");
  produto1.insertAdjacentHTML("afterbegin", produto.mostrarProduto());
  
  const produto3Elemento = document.getElementById("lista-produtos");
  produto3Elemento.insertAdjacentHTML("afterbegin", produto3.mostrarProduto());
  
  const produtoDestaqueElemento = document.getElementById("lista-produtos");
  const produtoDestaqueHTML = produtoDestaque.mostrarProdutoDestaque();
  produtoDestaqueElemento.insertAdjacentHTML("afterbegin", produtoDestaqueHTML);
  