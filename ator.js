let xAtor = 85;
let yAtor = 365;
let alturaAtor = 30;
let comprimentoAtor = 30;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, comprimentoAtor, alturaAtor);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)) {
    if(podeDescer()){
    yAtor += 3;
    }
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectRect(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, comprimentoAtor, alturaAtor)
    if(colisao){
    voltaPosicaoInicial();
    somDaColisao.play();
      if(meusPontos > 0){
      meusPontos -= 1;
      }
    }
  }
}

function voltaPosicaoInicial(){
  yAtor = 365;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,280,0));
  text(meusPontos, width /5, 26);
}

function marcaPonto(){
  if (yAtor < 15){
  meusPontos += 1;
    somDoPonto.play();
  voltaPosicaoInicial();
  }
}

function podeDescer(){
  return yAtor < 366;
}