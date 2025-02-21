function verificaridade(idade) {
    if (idade < 12) {
        console.log("criança");
    } else if (idade < 18) {
        console.log("adolecente");
    } else if (idade < 60) {
        console.log("adulto");
    } else if (idade > 60) {
        console.log("idoso");
    } else if (idade < 0) {
        console.log("idade invalida");
    }

}
verificaridade(18) 