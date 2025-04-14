document.addEventListener("DOMContentLoaded", () => {

  let corMuda = document.querySelector('.cor');
  let direcoes = document.querySelector('select');
  let cores = document.querySelectorAll('input.inpus');
  let textoCSS = document.querySelector('.seraAcor');
  let refreshBtn = document.querySelector('#aleatorio');
  let copyBtn = document.querySelector('#cor');

  textoCSS.innerHTML = `background: linear-gradient(to top, #000000, #000000);`;
  copyBtn.innerText = "Copy CSS Code";

  function manualCor(){

    if (cores.length < 2) {
      console.error("Os inputs de cor não foram encontrados!");
      return;
    }

    if (direcoes.length === 0) {
      console.error("Erro: Select não encontrado.");
      return;
    }

    let cor1 = cores[0].value;
    let cor2 = cores[1].value;
    let dir = direcoes.value;

    let gradient = `linear-gradient(${dir}, ${cor1}, ${cor2})`;
    corMuda.style.background = gradient;
    if (textoCSS) {
      textoCSS.innerHTML = `background: ${gradient};`;
    }else {
      console.error("Erro: Elemento de texto não encontrado.");
    }
  }

  function gerarCor(){
    let muCor = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6,0);
    return `#${muCor}`;
  }

  function gerarGradient(isAleatorio){
    if(isAleatorio){
      cores[0].value = gerarCor();
      cores[1].value = gerarCor();
    }

    let cor1 = cores[0].value;
    let cor2 = cores[1].value;
    let dir = direcoes.value;

    let gradient = `linear-gradient(${dir}, ${cor1}, ${cor2})`;
    corMuda.style.background = gradient;
    if (textoCSS) {
      textoCSS.innerHTML = `background: ${gradient};`;
    }else {
      console.error("Erro: Elemento de texto não encontrado.");
    }
  }

  function copiarGradient(){
    navigator.clipboard.writeText(textoCSS.innerHTML);
    copyBtn.innerText = "Code Copied";
    setTimeout(() => copyBtn.innerHTML = "Copy CSS Code", 1600);
  }

  document.addEventListener("input", () => gerarGradient(false));
  refreshBtn.addEventListener("click", () => gerarGradient(true));
  copyBtn.addEventListener("click", copiarGradient);
});