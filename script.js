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
  
  const produto = new Produto("corta vento palmeiras", "2023", "cor verde e branco", "346");
  console.log(produto.mostrarProduto());
  
  class ProdutoDestaque extends Produto {
    constructor(nome, dataCadastro, descricao, preco, imagemDestaque) {
      super(nome, dataCadastro, descricao, preco);
      this.imagemDestaque = imagemDestaque;
    }
  
    mostrarProdutoDestaque() {
      return `
        <div>${this.nome}</div><h4><br>
        <img src="${this.imagemDestaque}">
        <div>${this.dataCadastro}</div>
        <div>${this.descricao}</div>
        <div>${this.preco}</div><br>`;
    }
  }
  
  const produto2 = new Produto("Capinha Celular do palmeras<h2>",  "Capinha de Xiaomi", "100R$");
  const produto3 = new Produto("Moletom com Simbolo do palmeiras<br>", "2023-06-10", "Moletom do palmeiras", "200R$");
  
  const produtoDestaque = new ProdutoDestaque("Corta vento palmeiras", "2023-06-10", "Lindo corta vento", "346R$", "https://d3ugyf2ht6aenh.cloudfront.net/stores/002/044/094/products/022763541-38bd6da7d097e9e2eb16468838991966-640-0.jpg");
  console.log(produto.mostrarProduto());
  console.log(produto2.mostrarProduto());
  console.log(produtoDestaque.mostrarProdutoDestaque());
  
  const produto1 = document.getElementById("lista-produtos");
  produto1.insertAdjacentHTML("afterbegin", produto.mostrarProduto());
  
  const produto3Elemento = document.getElementById("lista-produtos");
  produto3Elemento.insertAdjacentHTML("afterbegin", produto3.mostrarProduto());
  
  const produtoDestaqueElemento = document.getElementById("lista-produtos");
  const produtoDestaqueHTML = produtoDestaque.mostrarProdutoDestaque();
  produtoDestaqueElemento.insertAdjacentHTML("afterbegin", produtoDestaqueHTML);
  