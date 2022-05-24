document.addEventListener('DOMContentLoaded', function(){

    function valorProdutoDiaTrabalhado() {
        // média de dias úteis no mês: 20;
        salarioDia = document.getElementById('salario').value / 20;
        valorProduto = document.getElementById('preco').value;
        valor = (valorProduto / salarioDia);

        if (valor < 1) { // transformando dia em horas
            valorHoras = valor * 24;
            if (valorHoras < 1) { // transformando horas em minutos
                valorMinutos = valorHoras * 60;
                return `R$ ${valorMinutos.toFixed(0)} minutos do seu trabalho`;    
            }
            return `R$ ${valorHoras.toFixed(1)} horas do seu trabalho`;
        }
        else return `R$ ${valor.toFixed(1)} dias do seu trabalho`;
    };

    document.getElementById('btn').addEventListener('click', function() {
        document.getElementById('result').innerHTML = valorProdutoDiaTrabalhado();
    })
    
    regexParaPegarValor = /[R][$]\s?[0-9]+[,]?[.]?[0-9]+?/;
   

   }    )

