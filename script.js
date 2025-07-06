function selectById(id){
  return document.getElementById(id); 
}

function creatbtn(id, texto) {
  const btn = document.createElement('button');
  btn.id = id;
  btn.textContent = texto;
  return btn;
}

function openLink(btn, url) {
  btn.addEventListener('click', () => {
    window.open(url, '_blank');
  });
  return btn;
}

// 2.1. Captura referências dos elementos já existenten na página

// Indentificação dos botões
const btnCertidoes = selectById('certidoes');
const btnSindicatos = selectById('sindicatos');
const btnCalculos = selectById('calculos');

// Indificação a parte a onde deve ser adicionado
const btnAtv = selectById('btnAtv1');

// 2.2. Função que “liga/desliga” o botão extra
function toggleBotaocertidoes() {
  // 2.2.1. Tenta achar, no DOM, um elemento com id="btnCPF"
  const tembtnCPF = selectById('btnCPF');
  const tembtnCNPJ = selectById('btnCNPJ');

  if (tembtnCPF) {
    // 2.2.2. Se já existe: remove do container
    btnAtv.removeChild(tembtnCPF) ;
    btnAtv.removeChild(tembtnCNPJ);

  } else {
    // 2.2.3. Se não existe: cria um novo botão

    const cpf = creatbtn('btnCPF', 'Consultar CPF');
    const cnpj = creatbtn('btnCNPJ', 'Consultar CNPJ');

    // 2.2.4. Define o clique desse botão recém-criado
    
    openLink(cpf, 'https://servicos.receita.fazenda.gov.br/servicos/cpf/consultasituacao/consultapublica.asp')
    openLink(cnpj, 'https://solucoes.receita.fazenda.gov.br/servicos/cnpjreva/cnpjreva_solicitacao.asp')
 
    // 2.2.5. Insere o botão criado dentro do <div id="extrasCertidoes">
    btnAtv.append(cpf, cnpj);
  }
}


// 2.3. Associa a ação de clique do “Certidões” ao toggleBotaocertidoes
btnCertidoes.addEventListener('click', toggleBotaocertidoes);

