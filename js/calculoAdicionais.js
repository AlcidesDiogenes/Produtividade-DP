export function mostrarAdicionais() {
  const main = document.querySelector("main");

  main.innerHTML = `
    <h2>Cálculo de Adicionais</h2>

    <form id="form-adicionais">
      <div class="linha">
        <div class="campo">
          <label for="salario">Salário bruto:</label>
          <input type="number" id="salario" placeholder="Ex: 2500.75" required>
        </div>

        <div class="campo">
          <label for="cargaHoraria">Carga horária mensal (h):</label>
          <input type="number" id="cargaHoraria" value="220" required>
        </div>
      </div>

      <h3>🛡️ Insalubridade ou Periculosidade</h3>
      <div class="linha">
        <div class="campo">
          <label for="percentualAdicional">Percentual (%):</label>
          <input type="number" id="percentualAdicional" placeholder="Ex: 30">
        </div>
      </div>

      <h3>⏱️ Hora Extra</h3>
      <div class="linha">
        <div class="campo">
          <label for="horasExtra">Horas:</label>
          <input type="number" id="horasExtra" value="0" required>
        </div>
        <div class="campo">
          <label for="minutosExtra">Minutos:</label>
          <input type="number" id="minutosExtra" value="0" required>
        </div>
        <div class="campo">
          <label for="percentualExtra">% da hora extra:</label>
          <input type="number" id="percentualExtra" value="50" required>
        </div>
      </div>

      <h3>🌙 Adicional Noturno</h3>
      <div class="linha">
        <div class="campo">
          <label for="horasNoturno">Horas:</label>
          <input type="number" id="horasNoturno" value="0" required>
        </div>
        <div class="campo">
          <label for="minutosNoturno">Minutos:</label>
          <input type="number" id="minutosNoturno" value="0" required>
        </div>
        <div class="campo">
          <label for="percentualNoturno">% adicional:</label>
          <input type="number" id="percentualNoturno" value="20" required>
        </div>
      </div>

      <h3>🌙 Hora Extra Noturna</h3>
        <div class="linha extra-noturna">
            <div class="campo">
                <label for="horasExtraNot">Horas:</label>
                <input type="number" id="horasExtraNot" value="0" required>
            </div>

            <div class="campo">
                <label for="minutosExtraNot">Minutos:</label>
                <input type="number" id="minutosExtraNot" value="0" required>
            </div>

            <div class="campo">
                <label for="percentualExtraNot">% hora extra:</label>
                <input type="number" id="percentualExtraNot" value="50" required>
            </div>

            <div class="campo">
                <label for="percentualNotExtra">% adicional noturno:</label>
                <input type="number" id="percentualNotExtra" value="20" required>
            </div>
        </div>

      <button type="submit">Calcular</button>
    </form>

    <div id="resultado-adicionais" class="resultado-linha"></div>
  `;

  document.getElementById("form-adicionais").addEventListener("submit", function (e) {
    e.preventDefault();

    function valor(n) {
      return parseFloat(n.value.replace(",", ".")) || 0;
    }

    const salario = valor(document.getElementById("salario"));
    const cargaHoraria = valor(document.getElementById("cargaHoraria"));
    const valorHora = salario / cargaHoraria;

    const percentualAdicional = valor(document.getElementById("percentualAdicional"));
    const horasExtra = valor(document.getElementById("horasExtra"));
    const minutosExtra = valor(document.getElementById("minutosExtra"));
    const percentualExtra = valor(document.getElementById("percentualExtra"));

    const horasNoturno = valor(document.getElementById("horasNoturno"));
    const minutosNoturno = valor(document.getElementById("minutosNoturno"));
    const percentualNoturno = valor(document.getElementById("percentualNoturno"));

    const horasExtraNot = valor(document.getElementById("horasExtraNot"));
    const minutosExtraNot = valor(document.getElementById("minutosExtraNot"));
    const percentualExtraNot = valor(document.getElementById("percentualExtraNot"));
    const percentualNotExtra = valor(document.getElementById("percentualNotExtra"));

    // Verifica se os campos de hora estão preenchidos
    const camposObrigatorios = [
      "horasExtra", "minutosExtra",
      "horasNoturno", "minutosNoturno",
      "horasExtraNot", "minutosExtraNot"
    ];

    for (let id of camposObrigatorios) {
      if (document.getElementById(id).value === "") {
        alert("Preencha todos os campos de horas com ao menos 0.");
        return;
      }
    }

    // Cálculos
    const adicionalValor = salario * (percentualAdicional / 100);

    const totalExtra = horasExtra + (minutosExtra / 60);
    const valorHoraExtra = valorHora * (percentualExtra / 100);
    const valorExtra = totalExtra * (valorHora + valorHoraExtra);

    const totalNoturno = horasNoturno + (minutosNoturno / 60);
    const valorNot = totalNoturno * valorHora * (percentualNoturno / 100);

    const totalExtraNot = horasExtraNot + (minutosExtraNot / 60);
    const valorHoraExtraNot = valorHora * (percentualExtraNot / 100);
    const valorAdicionalNoturnoNot = valorHora * (percentualNotExtra / 100);
    const valorTotalExtraNot = totalExtraNot * (valorHora + valorHoraExtraNot + valorAdicionalNoturnoNot);

    const totalBruto = adicionalValor + valorExtra + valorNot + valorTotalExtraNot;

    document.getElementById("resultado-adicionais").innerHTML = `
      <div class="resumo-box">
        <h4>🛡️ Adicional Insalubridade/Periculosidade</h4>
        <p><strong>Valor:</strong> R$ ${adicionalValor.toFixed(2)}</p>
      </div>

      <div class="resumo-box">
        <h4>⏱️ Hora Extra</h4>
        <p><strong>Horas:</strong> ${totalExtra.toFixed(2)}</p>
        <p><strong>Valor hora base:</strong> R$ ${valorHora.toFixed(2)}</p>
        <p><strong>Adicional (%):</strong> R$ ${valorHoraExtra.toFixed(2)}</p>
        <p><strong>Total:</strong> R$ ${valorExtra.toFixed(2)}</p>
      </div>

      <div class="resumo-box">
        <h4>🌙 Adicional Noturno</h4>
        <p><strong>Horas:</strong> ${totalNoturno.toFixed(2)}</p>
        <p><strong>Adicional (%):</strong> R$ ${(valorHora * (percentualNoturno / 100)).toFixed(2)}</p>
        <p><strong>Total:</strong> R$ ${valorNot.toFixed(2)}</p>
      </div>

      <div class="resumo-box">
        <h4>🌙 Hora Extra Noturna</h4>
        <p><strong>Horas:</strong> ${totalExtraNot.toFixed(2)}</p>
        <p><strong>Hora base:</strong> R$ ${valorHora.toFixed(2)}</p>
        <p><strong>+ Extra (%):</strong> R$ ${valorHoraExtraNot.toFixed(2)}</p>
        <p><strong>+ Noturno (%):</strong> R$ ${valorAdicionalNoturnoNot.toFixed(2)}</p>
        <p><strong>Total:</strong> R$ ${valorTotalExtraNot.toFixed(2)}</p>
      </div>

      <div class="resumo-box destaque">
        <h4>📌 Total Bruto</h4>
        <p><strong>R$ ${totalBruto.toFixed(2)}</strong></p>
      </div>
    `;
  });
}
