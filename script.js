var audio =  document.getElementById('Forest')
audio.loop = true;

var flag = 0;

function Forest() {
  if (audio !=  document.getElementById('Forest')){
    flag = 0;
    audio.pause();
    audio.currentTime = 0;
  }
  if (flag == 0){
    flag = 1;
    audio =  document.getElementById('Forest');
    audio.loop = true;
    audio.play();
  }
  else{
    flag = 0;
    audio.pause();
  }
  
}

function Swamp() {
  if (audio !=  document.getElementById('Swamp')){
    flag = 0;
    audio.pause();
    audio.currentTime = 0;
  }
  if (flag == 0){
    flag = 1;
    audio =  document.getElementById('Swamp');
    audio.loop = true;
    audio.play();
  }
  else{
    flag = 0;
    audio.pause();
  }
  
}

function Cavern() {
  if (audio !=  document.getElementById('Cavern')){
    flag = 0;
    audio.pause();
    audio.currentTime = 0;
  }
  if (flag == 0){
    flag = 1;
    audio =  document.getElementById('Cavern');
    audio.loop = true;
    audio.play();
  }
  else{
    flag = 0;
    audio.pause();
  }
  
}

function Road() {
  if (audio !=  document.getElementById('Road')){
    flag = 0;
    audio.pause();
    audio.currentTime = 0;
  }
  if (flag == 0){
    flag = 1;
    audio =  document.getElementById('Road');
    audio.loop = true;
    audio.play();
  }
  else{
    flag = 0;
    audio.pause();
  }
  
}

function Evil() {
  if (audio !=  document.getElementById('Evil')){
    flag = 0;
    audio.pause();
    audio.currentTime = 0;
  }
  if (flag == 0){
    flag = 1;
    audio =  document.getElementById('Evil');
    audio.loop = true;
    audio.play();
  }
  else{
    flag = 0;
    audio.pause();
  }
  
}

function Battle() {
  if (audio !=  document.getElementById('Battle')){
    flag = 0;
    audio.pause();
    audio.currentTime = 0;
  }
  if (flag == 0){
    flag = 1;
    audio =  document.getElementById('Battle');
    audio.loop = true;
    audio.play();
  }
  else{
    flag = 0;
    audio.pause();
  }
  
}