function relogio() {
    var img = document.getElementById("imagem")

    const espacoRelogio = document.querySelector(".relogio");
    const horaAgora = new Date();

    const horas = horaAgora.getHours();
    const minutos = horaAgora.getMinutes();
    const segundos = horaAgora.getSeconds();

    const formatoHora = horas.toString().padStart(2, "0");
    const formatoMinutos = minutos.toString().padStart(2, "0");
    const formatoSegundos = segundos.toString().padStart(2, "0");

    espacoRelogio.textContent = `${formatoHora}: ${formatoMinutos}: ${formatoSegundos}`;


    const frase = document.querySelector('.frase')
    //Array é um arranjo, ou estrutura de dados onde armazenamos uma coleção de elementos.
    dia = new Array('Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado');

    mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

    hoje = new Date()

    frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2, 0)} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`

    if (formatoHora >= 00 && formatoHora < 12) {
        document.body.style.backgroundImage = 'url(https://static01.nyt.com/images/2015/03/08/arts/08DOWNTOWN1/08DOWNTOWN1-superJumbo.jpg)'

        img.src = "https://images.pexels.com/photos/533935/pexels-photo-533935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }

    else if (formatoHora >= 12 && formatoHora < 18) {
        document.body.style.backgroundImage = 'url(https://img.elo7.com.br/product/original/448370A/painel-cinderela-filme-01-2-00x1-50-filme.jpg)'
       
        img.src = "https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }

    else {
        document.body.style.backgroundImage = 'url(https://blogamelhorescolha.com/wp-content/uploads/2015/03/CInderella-2.jpg)'

        img.src = "https://images.pexels.com/photos/239107/pexels-photo-239107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }

}

setInterval(relogio, 1000);