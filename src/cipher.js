window.cipher = {

 
  encode: (offset,text) => {
    /* Acá va tu código */
    let cipMath;
    let result='';
    for(let i = 0; i< text.length; i++){
    let number = text.charCodeAt(i);
     
if(number >=65 && number<=90){//letras mayusculas
cipMath = (number-65+offset)%26+65;
result+=String.fromCharCode(cipMath);

}else if (number === 32){//espacios
result += " ";

}else if (number >= 97 && number <=122){//letras minusculas
cipMath = (number-97+offset)%26+97;
result+=String.fromCharCode(cipMath);
}
else if(number >=48 && number<=57){//numeros
cipMath = (number-48+offset)%10+48;
result+=String.fromCharCode(cipMath);
}
else if (number === 209){//ñ mayuscula
result+='Ñ';
}
else if (number === 241){//ñ minuscula
  result+='ñ';
}
  else if (number === 46 ){//punto
    result+='.';
}

}

return result;
},
  decode: (offset,text) => {
    /* Acá va tu código */
    let cipMath;
    let result='';
    for(let i = 0; i< text.length; i++){
    let number = text.charCodeAt(i);
     
if(number >=65 && number<=90){//letras mayusculas
cipMath = (number+65-offset)%26+65;
result+=String.fromCharCode(cipMath);

}else if (number === 32){//espacios
result += " ";

}else if (number >= 97 && number <=122){//letras minusculas
cipMath = (number-122-offset)%26+122;
result+=String.fromCharCode(cipMath);

}else if(number >=48 && number<=57){//numeros
  cipMath = (number-57-offset)%10+57;
  result+=String.fromCharCode(cipMath);
}

else if (number === 209){//ñ mayuscula
result+='Ñ';
}
else if (number === 241){//ñ minuscula
  result+='ñ';
}
  else if (number === 46 ){//punto
    result+='.';
}

}

return result;
  }

};
