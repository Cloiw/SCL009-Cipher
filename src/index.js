
const textAE = document.getElementById('textAreaEncode');
const textAD = document.getElementById('textAreaDecode');
const welcText = document.getElementById('welcomeText');
const opt = document.getElementById('options');
const selectOffs = document.getElementById('selectOff');
const codeBut = document.getElementById('codeButton');
const decodeBut = document.getElementById('decodeButton');
const codeTextBut = document.getElementById('codeTextButton');
const decodeTextBut = document.getElementById('decodeTextButton');
const backBut = document.getElementById('backButton');
const backButB = document.getElementById('backButtonB');
textAE.style.display='none';
textAD.style.display='none';
selectOffs.style.display='none';


//OPCIONES CIFRAR-DESCIFRAR  
codeBut.addEventListener('click', () =>{
   opt.style.display='none';
   welcText.style.display='none';
   textAE.style.display='block';
   selectOffs.style.display='block';
   
})

decodeBut.addEventListener('click', () =>{
  opt.style.display='none';
  welcText.style.display='none';
  textAD.style.display='block';
  selectOffs.style.display='block';
  
})

// CIFRAR
codeTextBut.addEventListener('click', () =>{
  let offset=document.getElementById('userOffset').value;
  offset= parseInt(offset,10);
  let text=document.getElementById('textCode').value.toUpperCase();
  document.getElementById('textCodeResult').value= window.cipher.encode(offset,text);
}) 

 backBut.addEventListener('click', () =>{
  opt.style.display='block';
  textAE.style.display='none';
  selectOffs.style.display='none';
  welcText.style.display='block';
  document.getElementById('userOffset').value = 0;
  document.getElementById('textCodeResult').value = '';
  document.getElementById('textCode').value = ''

})
// DESCIFRAR
decodeTextBut.addEventListener('click', () =>{
  let offset=document.getElementById('userOffset').value;
  offset= parseInt(offset,10);
  let text=document.getElementById('textDecode').value.toUpperCase(); 
  document.getElementById('textDecodeResult').value= window.cipher.decode(offset,text);
}) 

backButB.addEventListener('click', () =>{
  opt.style.display='block';
  textAD.style.display='none';
  backBut.style.display='none';
  selectOffs.style.display='none';
  welcText.style.display='block';
  document.getElementById('userOffset').value = 0;
  document.getElementById('textDecodeResult').value = '';
  document.getElementById('textDecode').value = '';
})