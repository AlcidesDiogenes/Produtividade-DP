import { openLink, creatbtn, selectById, limparBotoes} from './utils.js';

const btnCertidoes = selectById('certidoes');
const btnSindicatos = selectById('sindicatos');
const btnCalculos = selectById('calculos');
const btnAtv1 = selectById('btnAtv1');

let grupoAtivo = null;
let css = null;

function mostrarCertidoes() {
  limparBotoes(btnAtv1);
  grupoAtivo = 'certidoes';
  
  const btnCPF = creatbtn('btnCPF', 'CPF');
  const btnCNPJ = creatbtn('btnCNPJ', 'CNPJ');
  const btnsimples = creatbtn('btnsimples', 'Simples Nacional');

  openLink(btnCPF, 'https://servicos.receita.fazenda.gov.br/servicos/cpf/consultasituacao/consultapublica.asp');
  openLink(btnCNPJ, 'https://solucoes.receita.fazenda.gov.br/servicos/cnpjreva/cnpjreva_solicitacao.asp');
  openLink(btnsimples, 'https://www8.receita.fazenda.gov.br/simplesnacional/aplicacoes.aspx?id=21');

  btnAtv1.appendChild(btnCPF);
  btnAtv1.appendChild(btnCNPJ);
  btnAtv1.appendChild(btnsimples);
  }


function mostrarSindicatos() {
  limparBotoes(btnAtv1);
  grupoAtivo = 'sindicatos';
  

    const btncomerciof = creatbtn('btncomerciof', 'Comércio Fortaleza');
    const btnsindicam = creatbtn('btnsindicam', 'SINDICAM Ceará');

    openLink(btncomerciof, 'https://sindcomerciarios.org.br/');
    openLink(btnsindicam, 'https://sindicamceara.org.br/');

    btnAtv1.appendChild(btncomerciof);
    btnAtv1.appendChild(btnsindicam);
  }

function mostrarCalculos() {
  limparBotoes(btnAtv1);
  grupoAtivo = 'calculos';

  const btnFGTS = creatbtn('btnFGTS', 'FGTS');
  const btnINSS = creatbtn('btnINSS', 'INSS');
  const btnIRPF = creatbtn('btnIRPF', 'IRPF');

  openLink(btnFGTS, 'https://www.fgts.gov.br/fgts/calculo-fgts/');
  openLink(btnINSS, 'https://www.gov.br/pt-br/servicos/calcular-contribuicao-ao-inss');
  openLink(btnIRPF, 'https://www.gov.br/receitafederal/pt-br/assuntos/irpf');

  btnAtv1.appendChild(btnFGTS);
  btnAtv1.appendChild(btnINSS);
  btnAtv1.appendChild(btnIRPF);
}

btnCertidoes.addEventListener('click', () => {
  if (grupoAtivo === 'certidoes') {
    limparBotoes(btnAtv1);
    grupoAtivo = null;;
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

btnCalculos.addEventListener('click', () => {
  if (grupoAtivo === 'calculos') {
    limparBotoes(btnAtv1);
    grupoAtivo = null;
  } else {
    mostrarCalculos();
  }
});