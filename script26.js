function ordenarValores() {
    // Lendo os três valores
    let valor1 = parseFloat(prompt("Digite o primeiro valor:"))
    let valor2 = parseFloat(prompt("Digite o segundo valor:"))
    let valor3 = parseFloat(prompt("Digite o terceiro valor:"))

    // Armazenando os valores em um array
    let valores = [valor1, valor2, valor3]

    // Ordenando os valores em ordem crescente
    valores.sort((a, b) => a - b)

    // Exibindo os valores em ordem crescente
    console.log(`Os valores em ordem crescente são: ${valores.join(", ")}`)
}

// Chamando a função
ordenarValores()