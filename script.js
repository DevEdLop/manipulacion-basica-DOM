const h1 = document.querySelector('h1');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btnCalcular = document.getElementById('btn-calcular');
const form = document.getElementById('form');
const div = document.getElementById('resultado')
const h2 = document.createElement('h2');



const sumValuesInput = (e) => {
    e.preventDefault();
    console.log(e)
    if ((input1.value == 0 || input1.value == "") || (input2.value == 0 || input2.value == "")) {
        alert("mmgvo no lo dejes vacio o en cero")
    } else {
        h2.innerHTML = `<p>El Resultado es:</p>${parseInt(input1.value) + parseInt(input2.value)}`
        div.append(h2)
    }
}



form.addEventListener('submit', sumValuesInput)

//btnCalcular.addEventListener('click', btnOnclick)



























// console.log('value:',input.value);
// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// })


// h1.innerHTML = "zzz :'0<br /> eteshect <hr/>"

// // console.log(h1.getAttribute('class'))
// // h1.setAttribute('class','rojo')

// h1.classList.add('rojo')
// h1.classList.remove('verde')
// // h1.classList.toggle('')
// // h1.classList.contains('')

// input.value = "456"

// const img = document.createElement("img");

// img.setAttribute('src', "https://www.fayerwayer.com/resizer/5FEuJbmm2z8d4_N4Z6gyCTytKkY=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/4CC34NEJ2JGDVKFT6UKOPABAPE.jpg")
// console.log(img);

// pid.innerHTML = "";
// pid.appendChild(img);