let precoTotal = 0;
limpar()

function adicionar() {
  
  // Recuperar valores nome do produto, quantidade e valor
  let produto = document.getElementById('produto').value;
  let nomeProduto = produto.split("-")[0].trim();
  let quantidade = Number(document.getElementById('quantidade').value)
    if (quantidade == 0) {
      alert(`Por favor, insira a quantidade do ${nomeProduto.toLowerCase()}`);
      return;
    }
  let valorUnitario = produto.split("R$")[1].trim();
  let preco = quantidade * valorUnitario;
let adcCar = document.getElementById("lista-produtos");
let produtosAdicionado = adcCar.querySelectorAll(".carrinho__produtos__produto")
let getPrecoProdutoAdc;
precoTotal += preco;

if(adcCar.textContent.includes(nomeProduto)) {
  for (let i = 0; i < produtosAdicionado.length; i++) {
    if(produtosAdicionado[i].textContent.includes(`${nomeProduto} R$`)) {
      quantidade = Number(produtosAdicionado[i].textContent.split("x")[0].trim()) + quantidade;
      getPrecoProdutoAdc = quantidade * valorUnitario
      produtosAdicionado[i].innerHTML = `<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${formatNumber(getPrecoProdutoAdc)}</span>`
    }
  }

} else {
  adcCar.innerHTML += `<section class="carrinho__produtos__produto">
  <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${formatNumber(preco)}</span>
  </section>`
}

// atualizar no valor total
  document.getElementById("valor-total").textContent = `R$${formatNumber(precoTotal)}`;
  document.getElementById('quantidade').value = 0;
}

function limpar() {
  precoTotal = 0;
  document.getElementById("valor-total").textContent = "R$ 0";
  document.getElementById("lista-produtos").innerHTML = "";
  document.getElementById('quantidade').value = "";
  document.querySelector('select option[value="Celular - R$1400"]').removeAttribute("selected");
  document.querySelector('select option[value="Celular - R$1400"]').setAttribute("selected", "true");
}

function formatNumber(number) {
  let format = !isNaN(number) ? Intl.NumberFormat("pt-Br").format(number) : ""
  return format;
}

console.log(formatNumber(2000))