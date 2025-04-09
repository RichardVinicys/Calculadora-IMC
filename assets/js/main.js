document.querySelector('#formIMC').addEventListener('submit', e => {
    e.preventDefault();

    const peso = parseFloat(document.querySelector('#inputPeso').value);
    const altura = parseFloat(document.querySelector('#inputAltura').value);

    const mostraResultado = document.querySelector('#resultado');
    const mensagem = document.querySelector('#mensagem');
    const status = document.querySelector('#status');
    const pIMC = document.querySelector('#valorIMC');

    if (!peso || !altura ){
        mostraResultado.classList.remove('hidden');
        pIMC.textContent = '--';
        status.textContent = 'Erro';
        status.style.backgroundColor = '#dc2626'
        mensagem.textContent = 'Dados digitados inválidos!'
        return;
    }
    

    const imc = peso / (altura ** 2)

    pIMC.textContent = `${imc.toFixed(2)}`

    mostraResultado.classList.remove('hidden');

    if (imc < 18.5){
        status.textContent = 'Abaixo do peso';
        status.style.backgroundColor = '#facc15';
        mensagem.textContent = 'Você está abaixo do peso. Procure orientação médica.';
    }else if (imc < 24.9){
        status.textContent = 'Peso Normal';
        status.style.backgroundColor = '#22c55e';
        mensagem.textContent = 'Atenção ao peso. Pratique exercícios e cuide da alimentação.';
    }else if (imc < 29.9){
        status.textContent = 'Sobre Peso';
        status.style.backgroundColor = '#f97316';
        mensagem.textContent = 'Atenção ao peso. Pratique exercícios e cuide da alimentação.';
    }else{
        status.textContent = 'Obesidade'
        status.style.backgroundColor = '#ef4444';
        mensagem.textContent = 'É importante buscar ajuda médica para alcançar um peso saudável.'
    }
});


    
