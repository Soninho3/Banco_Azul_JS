/* Ações comuns*/
/*  Deposito */
/* aceitar valores positivos */
 /* 
 Os depositos devem aparecer no extrato

 Saque
 permitir no maximo 3 saques
 cada saque deve possuir o valor maximo de 500
 
 */

 let deposito = 0;
 let saque = 0;
 let extrato = "";
 let saldo = 0;
 let numeroSaques = 0;
 const saquesPossiveis = 3;
 const limiteValor = 500;

/*  perguntaAOperacao = () => {
    console.log(`
        Escolha uma das opções abaixo 
        1(saque), 2(deposito), 3(extrato), 4(sair)
    `);
    let opcao = prompt(">")
    if((opcao != 1) || (opcao != 2) || (opcao != 3) || (opcao != 4)){
        console.log("opcao invalida tente novamente >");
        perguntaAOperacao();
    }else{
        if(opcao == 1){
            return 1;
        }else if(opcao == 2){
            return 2;
        }else if(opcao == 3){
            return 3;
        }else{
            return 4;
        }
    }
 } */


 while(True){
    let menu = prompt(`
    ==========================
      Selecione a opcao 
      [d] - Deposito
      [s] - Saque
      [e] - Extrato
      [q] - Sair
    ==========================
    `)

    if(menu == 'd'){
        let valor = parseFloat(prompt("insira o valor do deposito >"));
        if (valor > 0){
            saldo += valor;
            extrato += `valor recebido -> ${valor} \n`;
        }else{
            alert("@@@ Operacao falhou! Valor invalido @@@");
        }
    }else if(menu == 's'){
        let valor = parseFloat(prompt("insira o valor do saque > "));
        let excedeuSaque = numeroSaques > saquesPossiveis;
        let excedeulimiteValor = valor > 500; 
        let excedeuSaldo = valor > saldo;
        if(excedeuSaldo){
            alert("@@@ Operação falhou! Voce não tem saldo suficiente @@@")

        }else if(excedeuSaque){
            alert("Operação falhou! Voce exedeu saques possiveis")

        }else if(excedeulimiteValor){
            alert(`Operação falhou! Voce excedeu o limite de ${limiteValor}`)

        }else if(valor > 0){
            extrato = extrato + `Saque de R$ ${valor}`;
            saldo -= valor;
            numeroSaques++;
            alert(`saque de ${valor} realizado com sucesso`)
        }else{
            alert("@@@  O valor informado é invalido @@@")
        }
    }

 }


