export function mostrarFerias() {
  const main = document.querySelector("main");

  main.innerHTML = `
    <h2>Cálculo de Férias</h2>

    <form id="form-ferias">
      <div class="linha">
        <div class="campo">
          <label for="salario">Salário bruto:</label>
          <input type="text" id="salario" required placeholder="Ex: 2500,75">
        </div>

        <div class="campo">
          <label for="faltas">Faltas injustificadas:</label>
          <input type="number" id="faltas" min="0" value="0">
        </div>

        <div class="campo">
          <label for="dias-gozados">Dias de férias a gozar:</label>
          <input type="number" id="dias-gozados" min="5" max="30" value="30">
        </div>

        <div class="campo">
          <label for="dias-vendidos">Dias vendidos:</label>
          <input type="number" id="dias-vendidos" min="0" max="10" value="0">
        </div>
      </div>

      <button type="submit">Calcular</button>
    </form>

    <div id="resultado-ferias" class="resultado-linha"></div>
  `;

  function calcularDiasDeDireito(faltas) {
    if (faltas <= 5) return 30;
    if (faltas <= 14) return 24;
    if (faltas <= 23) return 18;
    if (faltas <= 32) return 12;
    return 0;
  }

  document.getElementById("form-ferias").addEventListener("submit", function (e) {
    e.preventDefault();

    const salarioBruto = document.getElementById("salario").value.replace(",", ".");
    const salario = parseFloat(salarioBruto);
    const faltas = parseInt(document.getElementById("faltas").value);
    const diasGozados = parseInt(document.getElementById("dias-gozados").value);
    const diasVendidos = parseInt(document.getElementById("dias-vendidos").value);

    if (
      isNaN(salario) || isNaN(faltas) ||
      isNaN(diasGozados) || isNaN(diasVendidos)
    ) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    const diasDeDireito = calcularDiasDeDireito(faltas);
    const limiteVenda = Math.floor(diasDeDireito / 3); // 1/3 legal

    if (diasGozados < 5 || diasGozados > 30) {
      alert("Você só pode gozar entre 5 e 30 dias de férias.");
      return;
    }

    if (diasVendidos > limiteVenda) {
      alert(`Você só pode vender até ${limiteVenda} dias com base no seu direito de ${diasDeDireito} dias.`);
      return;
    }

    if (diasGozados + diasVendidos > diasDeDireito) {
      alert(
        `Você tem direito a ${diasDeDireito} dias de férias. A soma de gozo + venda não pode ultrapassar esse valor.`
      );
      return;
    }

    const valorDia = salario / 30;

    const valorFerias = valorDia * diasGozados;
    const adicionalUmTercoFerias = valorFerias / 3;
    const totalFerias = valorFerias + adicionalUmTercoFerias;

    const valorVenda = valorDia * diasVendidos;
    const adicionalUmTercoVenda = valorVenda / 3;
    const totalVenda = valorVenda + adicionalUmTercoVenda;

    const totalReceber = totalFerias + totalVenda;

    document.getElementById("resultado-ferias").innerHTML = `
      <div class="resumo-box">
        <h4>💼 Férias</h4>
        <p><strong>Faltas injustificadas:</strong> ${faltas}</p>
        <p><strong>Dias de direito:</strong> ${diasDeDireito}</p>
        <p><strong>Dias gozados:</strong> ${diasGozados}</p>
        <p><strong>Valor base:</strong> R$ ${valorFerias.toFixed(2)}</p>
        <p><strong>Adicional 1/3:</strong> R$ ${adicionalUmTercoFerias.toFixed(2)}</p>
        <p><strong>Total férias:</strong> R$ ${totalFerias.toFixed(2)}</p>
      </div>

      <div class="resumo-box">
        <h4>💵 Venda de Férias</h4>
        <p><strong>Dias vendidos:</strong> ${diasVendidos} (máximo legal: ${limiteVenda})</p>
        <p><strong>Valor base:</strong> R$ ${valorVenda.toFixed(2)}</p>
        <p><strong>Adicional 1/3:</strong> R$ ${adicionalUmTercoVenda.toFixed(2)}</p>
        <p><strong>Total venda:</strong> R$ ${totalVenda.toFixed(2)}</p>
      </div>

      <div class="resumo-box destaque">
        <h4>📌 Total a Receber</h4>
        <p><strong>Férias + Venda:</strong><br> R$ ${totalReceber.toFixed(2)}</p>
      </div>
    `;
  });
}
