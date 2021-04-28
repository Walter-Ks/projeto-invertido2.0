


const calcular = document.getElementById('calcular');



function calculando() {
    const input1 = document.getElementById('inp1').value;
    const input2 = document.getElementById('inp2').value;
    const input3 = document.getElementById('inp3').value;
    const resultado = document.getElementById('resultado')

    if(input1 !== '' && input2 !== '' && input3 !== ''){
    const conta = (((input2 - input1) / input3) / 0.01747).toFixed(2);

    resultado.textContent = conta;
    }else{
        resultado.textContent = "Opsss, faltou informação :| "
    }

}

calcular.addEventListener('click',calculando);

