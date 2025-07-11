export function mostrarDescontos() {
  const main = document.querySelector("main");

  main.innerHTML = `
    <h2>Tabelas de Descontos</h2>

    <div class="tabelas-lado-a-lado">
      <div class="tabela">
        <h3>Tabela INSS (2025)</h3>
        <table>
          <thead>
            <tr>
              <th>Faixa Salarial (R$)</th>
              <th>Alíquota (%)</th>
              <th>Parcela a Deduzir (R$)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Até 1.518,00</td><td>7,5%</td><td>-</td></tr>
            <tr><td>1.518,01 até 2.793,88</td><td>9%</td><td>22,77</td></tr>
            <tr><td>2.793,89 até 4.190,83</td><td>12%</td><td>106,59</td></tr>
            <tr><td>4.190,84 até 8.157,41</td><td>14%</td><td>190,40</td></tr>
          </tbody>
        </table>
      </div>

      <div class="tabela">
        <h3>Tabela IRRF (2025)</h3>
        <table>
          <thead>
            <tr>
              <th>Base de Cálculo (R$)</th>
              <th>Alíquota (%)</th>
              <th>Parcela a Deduzir (R$)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Até 2.428,80</td><td>0%</td><td>0,00</td></tr>
            <tr><td>2.428,81 até 2.826,65</td><td>7,5%</td><td>182,16</td></tr>
            <tr><td>2.826,66 até 3.751,05</td><td>15%</td><td>394,16</td></tr>
            <tr><td>3.751,06 até 4.664,68</td><td>22,5%</td><td>675,49</td></tr>
            <tr><td>Acima de 4.664,68</td><td>27,5%</td><td>908,73</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <h3>Calcular Descontos</h3>
    <form id="form-descontos">
      <div class="linha">
        <div class="campo">
          <label for="salario">Salário bruto:</label>
          <input type="text" id="salario" required placeholder="Ex: 2500,75">
        </div>

        <div class="campo">
          <label for="quantidade-filhos">Quantidade de filhos:</label>
          <input type="number" id="quantidade-filhos" min="0" value="0">
        </div>
      </div>

      <button type="submit">Calcular</button>
    </form>

    <div id="resultado-final" style="margin-top: 20px;"></div>
  `;

  const deducaoDependente = 189.59;
  const descontoSimplificado = 607.20;

  document.getElementById("form-descontos").addEventListener("submit", (e) => {
    e.preventDefault();

    // Corrige vírgula para ponto
    const salarioBruto = document.getElementById("salario").value.replace(",", ".");
    const salario = parseFloat(salarioBruto);
    const qtdFilhos = parseInt(document.getElementById("quantidade-filhos").value || 0);

    // INSS
    let inss = 0;
    if (salario <= 1518.00) {
      inss = salario * 0.075;
    } else if (salario <= 2793.88) {
      inss = salario * 0.09 - 22.77;
    } else if (salario <= 4190.83) {
      inss = salario * 0.12 - 106.59;
    } else if (salario <= 8157.41) {
      inss = salario * 0.14 - 190.40;
    } else {
      inss = 908.85;
    }

    const deducaoLegal = inss + (qtdFilhos * deducaoDependente);

    let descontoIR, tipoDescontoIR;
    if (deducaoLegal > descontoSimplificado) {
      descontoIR = deducaoLegal;
      tipoDescontoIR = `Deduções legais: INSS + filhos (R$ ${inss.toFixed(2)} + ${qtdFilhos} x R$ ${deducaoDependente.toFixed(2)})`;
    } else {
      descontoIR = descontoSimplificado;
      tipoDescontoIR = "Desconto simplificado (R$ 607,20)";
    }

    const baseIR = salario - descontoIR;

    let aliquota = 0, parcela = 0;
    if (baseIR <= 2428.80) {
      aliquota = 0; parcela = 0;
    } else if (baseIR <= 2826.65) {
      aliquota = 0.075; parcela = 182.16;
    } else if (baseIR <= 3751.05) {
      aliquota = 0.15; parcela = 394.16;
    } else if (baseIR <= 4664.68) {
      aliquota = 0.225; parcela = 675.49;
    } else {
      aliquota = 0.275; parcela = 908.73;
    }

    const irrf = Math.max(0, baseIR * aliquota - parcela);
    const fgts = salario * 0.08;
    const salarioLiquido = salario - inss - irrf;

    document.getElementById("resultado-final").innerHTML = `
      <p><strong>INSS:</strong> R$ ${inss.toFixed(2)}</p>
      <p><strong>Tipo de desconto usado no IRRF:</strong><br> ${tipoDescontoIR}</p>
      <p><strong>Base de cálculo IRRF:</strong> R$ ${baseIR.toFixed(2)}</p>
      <p><strong>IRRF:</strong> ${
        irrf <= 0
          ? "Isento de IRRF"
          : `R$ ${irrf.toFixed(2)} (${(aliquota * 100).toFixed(1)}%)`
      }</p>
      <p><strong>FGTS:</strong> R$ ${fgts.toFixed(2)}</p>
      <p><strong>Salário líquido estimado:</strong> R$ ${salarioLiquido.toFixed(2)}</p>
    `;
  });
}
