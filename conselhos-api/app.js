const resCons = document.querySelector('#conselho');
const adRes = document.querySelector('#ad-id');
const btnCons = document.querySelector('#obterConselho');



btnCons.addEventListener('click', () => {
  obConselho();
});

window.onload = () => {
  obConselho();
};



function obConselho() {

  fetch('	https://api.adviceslip.com/advice').then(response => {
    return response.json();
  }).then(dados => {
    const dadosSlip =dados.slip;
    adRes.innerHTML = `<p>ADVICE #${dadosSlip.id}</p>`;
    resCons.innerHTML = `<p>"${dadosSlip.advice}"</p>`;
  }).catch(error => {
    console.log(error);
  });

}