window.cipher = {

 
  encode: (offset,text) => {
    /* Acá va tu código */
    
    let result=''
     for(let i = 0; i < text.length; i++){
       let number = text[i].charCodeAt();
       let  cipMath = (number-65+offset)%26+65;
       result= result+=String.fromCharCode(cipMath);
     }
    return result;
    

    
  },
  decode: (offset,text) => {
    /* Acá va tu código */
     let result=''
     for(let i = 0; i < text.length; i++){
       let number = text[i].charCodeAt();
       let  cipMath = (number-offset+65)%26+65;
       result= result+=String.fromCharCode(cipMath);
     }
    return result;
  }
};
