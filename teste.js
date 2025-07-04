// 1. Pega referências aos elementos
const btnCertidoes = document.getElementById('certidoes');
const extras = document.getElementById('extrasCertidoes');

// 2. Função que alterna a presença do botão
function toggleBotaoCPF() {
  const existente = document.getElementById('btnCPF');

  if (existente) {
    // Se já existe, remove-o
    extras.removeChild(existente);
  } else {
    // Se não existe, cria-o
    const btn = document.createElement('button');
    btn.id = 'btnCPF';
    btn.textContent = 'Consultar CPF';
    btn.addEventListener('click', () => {
      window.open(
        'https://servicos.receita.fazenda.gov.br/servicos/cpf/consultasituacao/consultapublica.asp',
        '_blank'
      );
    });
    extras.appendChild(btn);
  }
}

// 3. Associa o toggle ao clique de “Certidões”
btnCertidoes.addEventListener('click', toggleBotaoCPF);
