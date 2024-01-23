function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const pessoas = [
        
    ];

    
   
    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>Seu nome e sobrenome são: ${nome.value} ${sobrenome.value}</p>`
        resultado.innerHTML += `<p>E seu peso e altura são: ${peso.value}KGs com ${altura.value} de altura</p>`

    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();