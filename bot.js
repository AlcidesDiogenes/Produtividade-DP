const puppeteer = require('puppeteer');

(async () => {
    // abre o nevagador
    const navegador = await puppeteer.launch({  headless: false, // precisa abrir a janela
    userDataDir: 'C:\\Users\\SeuUsuario\\AppData\\Local\\Google\\Chrome\\User Data'  });
    
    // cria uma nova aba
    //const pagina = await navegador.newPage();

    // aba ja existente
    const paginas = await navegador.pages();
    const pagina = paginas[0]; // pega a primeira aba aberta

    // acessa o site
    await pagina.goto('https://servicos.receita.fazenda.gov.br/servicos/cpf/consultasituacao/consultapublica.asp');


    // espera o campo cdf carregar
    await pagina.waitForSelector('input[id="txtCPF"]');
    // preenche o campo CPF
    await pagina.type('input[id="txtCPF"]', '04353341316'); // substitua pelo CPF desejado
    await pagina.type('input[id="txtDataNascimento"]', '24101999');
    
    

    // // espera os resultados carregarem
    // await pagina.waitForNavigation();
}) ();