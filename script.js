function gerarNotaFiscal() {
    const valorVenda = parseFloat(document.getElementById('valorVenda').value);
    const itens = document.getElementById('itens').value;
    const irpf = parseFloat(document.getElementById('irpf').value) / 100;
    const pis = parseFloat(document.getElementById('pis').value) / 100;
    const cofins = parseFloat(document.getElementById('cofins').value) / 100;
    const inss = parseFloat(document.getElementById('inss').value) / 100;
    const issqn = parseFloat(document.getElementById('issqn').value) / 100;

    // Validação de entradas
    if (valorVenda <= 0 || irpf < 0 || pis < 0 || cofins < 0 || inss < 0 || issqn < 0 || itens.trim() === "") {
        alert("Por favor, insira valores positivos e válidos para todos os campos.");
        return;
    }

    const valorIRPF = valorVenda * irpf;
    const valorPIS = valorVenda * pis;
    const valorCOFINS = valorVenda * cofins;
    const valorINSS = valorVenda * inss;
    const valorISSQN = valorVenda * issqn;

    const notaFiscal = `
        <h2>Nota Fiscal de Serviço</h2>
        <p><strong>Valor da Venda:</strong> R$ ${valorVenda.toFixed(2)}</p>
        <p><strong>Itens Vendidos:</strong> ${itens}</p>
        <p><strong>Imposto IRPF:</strong> R$ ${valorIRPF.toFixed(2)}</p>
        <p><strong>Imposto PIS:</strong> R$ ${valorPIS.toFixed(2)}</p>
        <p><strong>Imposto COFINS:</strong> R$ ${valorCOFINS.toFixed(2)}</p>
        <p><strong>Imposto INSS:</strong> R$ ${valorINSS.toFixed(2)}</p>
        <p><strong>Imposto ISSQN:</strong> R$ ${valorISSQN.toFixed(2)}</p>
    `;

    document.getElementById('notaFiscal').innerHTML = notaFiscal;
}