document.getElementById('valor1').placeholder = "A pagar";
document.getElementById('valor2').placeholder = "Saldo";

function funcEnviar(){
    var select = document.getElementById('select');
    var value = select.options[select.selectedIndex].value;
    console.log(value);
    var num1 = document.getElementById('valor1').value;
    var num2 = document.getElementById('valor2').value;
    var calculo = num2 - num1;
    var kmpl = num1 / num2;
    if (value=="preco"){
        if (calculo<0){
            alert("saldo insuficiente! Compra não realizada.")
            document.getElementById('valorfinal').innerHTML = "Saldo insuficiente!";
        }else{
            alert("Compra realizada com sucesso!")
            document.getElementById('valorfinal').innerHTML = calculo;
        }
    }
    if (value=="autonomia"){
        document.getElementById('valorfinal').innerHTML = kmpl + " km/L";
    }
    if (value=="pares"){
        if (num2%2 == 0){
            document.getElementById('valorfinal').innerHTML = num2/2;
        }else{
            document.getElementById('valorfinal').innerHTML = (num2+1)/2;
        }
    }
    if (value=="primos"){
        var num = document.getElementById('valor2').value;
        var u = 1;
        var quantidade = 0;
        while (u<num){
            var divisores = 0;
            var i = 1;
            while (i<=u){
                if (u%i==0){
                    divisores++;
                }
                i++;
            }
            if (divisores==2){
                quantidade++;
            }
            u++;
        }
        document.getElementById('valorfinal').innerHTML = quantidade;
    }
}

function changeplaceholder(){
    var select = document.getElementById('select');
    var value = select.options[select.selectedIndex].value;
    var num1 = document.getElementById('valor1').value = "";
    var num2 = document.getElementById('valor2').value = "";
    if (value=="preco"){
        document.getElementById('valor1').placeholder = "A pagar";
        document.getElementById('valor2').placeholder = "Saldo";
        document.getElementById('valor1').disabled = false;
    }
    if (value=="autonomia"){
        document.getElementById('valor1').placeholder = "Distância";
        document.getElementById('valor2').placeholder = "Litros";
        document.getElementById('valor1').disabled = false;
    }
    if (value=="pares" || value=="primos"){
        document.getElementById('valor1').value = 0;
        document.getElementById('valor1').disabled = true;
        document.getElementById('valor2').placeholder = "Número";
    }
}