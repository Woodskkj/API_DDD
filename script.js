const form = document.getElementById('dddForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita o envio do formulário

    const ddd = document.getElementById('ddd').value;


    try {
        const response = await fetch(`https://brasilapi.com.br/api/ddd/v1/${ddd}`);
        
        if (!response.ok) {
            throw new Error('DDD não encontrado');
        }
        
        const data = await response.json();
        resultDiv.innerHTML = `
            <h2>Resultados:</h2>
            <p><strong>Estado:</strong> ${data.state}</p>
            <p><strong>Cidades:</strong> ${data.cities}</p>`;

    } catch (error) {
        resultDiv.innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
});a