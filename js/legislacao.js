export function mostrarSumarioLegislacao() {
  const main = document.querySelector("main");

  main.innerHTML = `
    <h2>Sumário da Legislação Trabalhista</h2>

    <details>
      <summary><strong>Férias</strong></summary>
      <ul class="subitens-legislacao">
        <li><a href="legislacao/ferias-individual.html" target="_blank">Férias Individuais</a></li>
        <li><a href="legislacao/ferias-coletiva.html" target="_blank">Férias Coletivas</a></li>
        <li><a href="legislacao/ferias-especiais.html" target="_blank">Férias - Casos Especiais</a></li>
      </ul>
    </details>

    <details>
      <summary><strong>13º Salário</strong></summary>
      <ul class="subitens-legislacao">
        <li><a href="legislacao/decimo-regras.html" target="_blank">Regras Gerais</a></li>
        <li><a href="legislacao/decimo-prazo.html" target="_blank">Prazos de Pagamento</a></li>
      </ul>
    </details>

    <details>
      <summary><strong>FGTS</strong></summary>
      <ul class="subitens-legislacao">
        <li><a href="legislacao/fgts-obrigacao.html" target="_blank">Obrigatoriedade</a></li>
        <li><a href="legislacao/fgts-prazo.html" target="_blank">Prazos e Percentuais</a></li>
      </ul>
    </details>

    <details>
      <summary><strong>Horas Extras</strong></summary>
      <ul class="subitens-legislacao">
        <li><a href="legislacao/horas-limite.html" target="_blank">Limites Legais</a></li>
        <li><a href="legislacao/horas-adicional.html" target="_blank">Adicional de Hora Extra</a></li>
        <li><a href="legislacao/horas-compensacao.html" target="_blank">Banco de Horas e Compensação</a></li>
      </ul>
    </details>

    <details>
      <summary><strong>INSS e IRRF</strong></summary>
      <ul class="subitens-legislacao">
        <li><a href="legislacao/inss-tabela.html" target="_blank">Tabelas e Faixas</a></li>
        <li><a href="legislacao/irrf-dependentes.html" target="_blank">Deduções com Dependentes</a></li>
        <li><a href="legislacao/irrf-base.html" target="_blank">Base de Cálculo</a></li>
      </ul>
    </details>
  `;
}
