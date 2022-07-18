const consult = document.querySelector('#consult');
const street = document.querySelector('.inputStreet');
const district = document.querySelector('.inputDistrict');
const number = document.querySelector('.inputNumber');
const complement = document.querySelector('.inputComplement');
const state = document.querySelector('.inputStates')
const city = document.querySelector('.inputCity')

function apiQuery(cep) {

    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url)
        .then(response => response.json())
        .then(dataApi => {
            insertData(dataApi)
        })
        .catch(erro => alert(`Deu erro!!! \n por favor informe um cep valído \n ${erro}`))

}

function insertData(data) {
    street.value = data.logradouro;
    district.value = data.bairro;
    number.value = data.complemento;
    city.value = data.localidade;

    const insertState = () => {
        var option = document.createElement('option');
        option.innerHTML = data.uf;
        state.appendChild(option);
    }

    insertState();
}

consult.addEventListener('click', (event) => {

    event.preventDefault();
    const cepValue = document.querySelector('.inputCep').value;
    apiQuery(cepValue)
})





