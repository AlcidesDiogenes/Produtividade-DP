import { openLink, creatbtn } from './utils.js';

const btncertidoes = document.getElementById('certidoes');
const btnsindicatos = document.getElementById('sindicatos');
const btnAtv1 = document.getElementById('btnAtv1');

function ativarcertdioes() {
  const btnCPF = document.getElementById('btnCPF');
  const btnCNPJ = document.getElementById('btnCNPJ');

  if (btnCPF && btnCNPJ) {
    btnCPF.remove();
    btnCNPJ.remove();
  } else {
    const novobtnCPF = creatbtn('btnCPF', 'CPF');
    const novobtnCNPJ = creatbtn('btnCNPJ', 'CNPJ');

    openLink(novobtnCPF, 'https://servicos.receita.fazenda.gov.br/servicos/cpf/consultasituacao/consultapublica.asp');
    openLink(novobtnCNPJ, 'https://solucoes.receita.fazenda.gov.br/servicos/cnpjreva/cnpjreva_solicitacao.asp');

    btnAtv1.appendChild(novobtnCPF);
    btnAtv1.appendChild(novobtnCNPJ);
  }
}

function ativarsindicatos() {
  const btnsindicam = document.getElementById('btnsindicam');
  const btncomerciof = document.getElementById('btncomerciof');

  if (btnsindicam && btncomerciof) {
    btnsindicam.remove();
    btncomerciof.remove();
  } else {
    const novobtncomerciof = creatbtn('btncomerciof', 'Comércio Fortaleza');
    const novobtnsindicam = creatbtn('btnsindicam', 'Sindicato dos Caminhoneiros');

    openLink(novobtncomerciof, 'https://comerciofortaleza.exemplo.com');
    openLink(novobtnsindicam, 'https://sindicam.exemplo.com');

    btnAtv1.appendChild(novobtncomerciof);
    btnAtv1.appendChild(novobtnsindicam);
  }
}

btncertidoes.addEventListener('click', ativarcertdioes);
btnsindicatos.addEventListener('click', ativarsindicatos);
