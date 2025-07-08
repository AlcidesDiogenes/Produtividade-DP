import { openLink, creatbtn, selectById, limparBotoes} from './utils.js';

const btnCertidoes = selectById('certidoes');
const btnSindicatos = selectById('sindicatos');
const btnAtv1 = selectById('btnAtv1');

let grupoAtivo = null;

function mostrarCertidoes() {
  limparBotoes(btnAtv1);
  grupoAtivo = 'certidoes';

  const novobtnCPF = creatbtn('btnCPF', 'CPF');
  const novobtnCNPJ = creatbtn('btnCNPJ', 'CNPJ');

  openLink(novobtnCPF, 'https://servicos.receita.fazenda.gov.br/servicos/cpf/consultasituacao/consultapublica.asp');
  openLink(novobtnCNPJ, 'https://solucoes.receita.fazenda.gov.br/servicos/cnpjreva/cnpjreva_solicitacao.asp');

  btnAtv1.appendChild(novobtnCPF);
  btnAtv1.appendChild(novobtnCNPJ);
  }


function mostrarSindicatos() {
  limparBotoes(btnAtv1);
  grupoAtivo = 'sindicatos';

    const novobtncomerciof = creatbtn('btncomerciof', 'Comércio Fortaleza');
    const novobtnsindicam = creatbtn('btnsindicam', 'Sindicato dos Caminhoneiros');

    openLink(novobtncomerciof, 'https://comerciofortaleza.exemplo.com');
    openLink(novobtnsindicam, 'https://sindicam.exemplo.com');

    btnAtv1.appendChild(novobtncomerciof);
    btnAtv1.appendChild(novobtnsindicam);
  }

btnCertidoes.addEventListener('click', () => {
  if (grupoAtivo === 'certidoes') {
    limparBotoes(btnAtv1);
    grupoAtivo = null;
  } else {
    mostrarCertidoes();
  }
});

btnSindicatos.addEventListener('click', () => {
  if (grupoAtivo === 'sindicatos') {
    limparBotoes(btnAtv1);
    grupoAtivo = null;
  } else {
    mostrarSindicatos();
  }
});
