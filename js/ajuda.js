export function mostrarAjuda() {
  const main = document.querySelector("main");

  main.innerHTML = `
    <main class="home">
        <h2>Central de Ajuda</h2>

        <p>Esta página foi criada para ajudar você a entender e aproveitar ao máximo as funcionalidades do sistema <strong>Produtividade no DP</strong>.</p>

        <hr>

        <h3>📑 Certidões</h3>
        <p>A seção <strong>Certidões</strong> oferece acesso direto às páginas oficiais da Receita Federal para consulta de:</p>
        <ul>
            <li><strong>CPF:</strong> Permite verificar a situação cadastral do CPF de um trabalhador.</li>
            <li><strong>CNPJ:</strong> Consulta pública da situação do CNPJ de uma empresa.</li>
            <li><strong>Simples Nacional:</strong> Verifica se a empresa está ou não enquadrada no regime tributário do Simples Nacional.</li>
        </ul>
        <p>Ao clicar em cada link, o sistema abrirá o site oficial em nova guia.</p>

        <hr>

        <h3>🌐 Sites Governamentais</h3>
        <p>Os principais portais utilizados na rotina do Departamento Pessoal estão listados aqui:</p>
        <ul>
            <li><strong>eCAC:</strong> Portal da Receita Federal para acessar serviços fiscais, como certidões e declarações.</li>
            <li><strong>FGTS Digital:</strong> Sistema para geração de guias e gestão do FGTS em tempo real.</li>
            <li><strong>Conectividade Social V2:</strong> Canal eletrônico para envio de arquivos de FGTS e procurações à Caixa.</li>
            <li><strong>eSocial:</strong> Plataforma do governo para envio unificado de dados trabalhistas.</li>
            <li><strong>Empregador Web:</strong> Portal para envio de informações de seguro-desemprego e comunicação de desligamento.</li>
            <li><strong>Emprega Brasil:</strong> Consulta de vagas de emprego, qualificação e seguro-desemprego.</li>
            <li><strong>DET:</strong> Canal oficial de comunicação da fiscalização do trabalho.</li>
            <li><strong>Serviços do Gov:</strong> Portal gov.br com acesso centralizado a vários serviços públicos.</li>
            <li><strong>Mediador:</strong> Registro eletrônico de convenções e acordos coletivos trabalhistas.</li>
        </ul>

        <hr>

        <h3>📊 Cálculos</h3>
        <p>As ferramentas de cálculo são automáticas e baseadas na legislação atual. Basta preencher os campos solicitados para visualizar os valores correspondentes.</p>

        <h4>🧮 Cálculo de Férias</h4>
        <ul>
            <li><strong>Salário bruto:</strong> Valor total da remuneração mensal sem descontos.</li>
            <li><strong>Faltas injustificadas:</strong> Impactam no número de dias de férias a que o trabalhador tem direito.</li>
            <li><strong>Dias gozados:</strong> Quantos dias de férias o trabalhador vai tirar. Deve ser no mínimo 5 dias.</li>
            <li><strong>Dias vendidos:</strong> Quantidade de dias de férias convertidos em dinheiro (máximo 1/3 do direito).</li>
        </ul>
        <p>O sistema calcula automaticamente o adicional de 1/3 sobre os dias gozados e também sobre os dias vendidos, mostrando o total bruto a receber.</p>

        <h4>📉 Cálculo de Encargos</h4>
        <ul>
            <li><strong>Salário:</strong> Informe o salário do colaborador.</li>
            <li><strong>Número de dependentes:</strong> Usado para cálculo de IRRF com deduções legais.</li>
            <li><strong>Cálculo de INSS e IRRF:</strong> Com base nas tabelas atualizadas.</li>
            <li><strong>FGTS:</strong> Calculado com base em 8% do salário bruto.</li>
        </ul>

        <hr>

        <h3>📌 Dúvidas frequentes</h3>
        <ul>
            <li><strong>Posso usar centavos no salário?</strong> Sim. Use vírgula ou ponto, como preferir. O sistema entende ambos.</li>
            <li><strong>O sistema aplica desconto de INSS em férias?</strong> Não. O valor é bruto, sem descontos.</li>
            <li><strong>Como saber quantos dias de férias tenho direito?</strong> Informe o número de faltas injustificadas e o sistema calcula para você.</li>
            <li><strong>Por que não posso vender mais de 10 dias?</strong> A lei permite a venda de, no máximo, 1/3 do total de dias de férias (30 → até 10).</li>
        </ul>

        <hr>

        <h3>📫 Suporte</h3>
        <p>Se você tiver alguma dúvida, encontrou erro ou deseja sugerir melhorias, envie pelo formulário abaixo:</p>

        <form action="https://formsubmit.co/alcidesdiogenes@gmail.com" method="POST">
            <input type="hidden" name="_captcha" value="false">

            <label for="nome">Seu nome:</label>
            <input type="text" id="nome" name="nome" required>

            <label for="email">Seu e-mail:</label>
            <input type="email" id="email" name="email" required>

            <label for="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" rows="5" required></textarea>

            <button type="submit">Enviar</button>
        </form>


        <div class="home-footer">
            <p>Produtividade no DP &copy; 2025 — Todos os direitos reservados.</p>
        </div>
        </main>
  `;
}
