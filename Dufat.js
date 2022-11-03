 
  function textoCod(texto) {
    texto = texto.replaceAll("e", "enter");
    texto = texto.replaceAll("i", "imes");
    texto = texto.replaceAll("a", "ai");
    texto = texto.replaceAll("o", "ober");
    texto = texto.replaceAll("u", "ufat");

    return texto; 
  }
  
  function textoDecod(texto) {
    texto = texto.replaceAll("enter", "e");
    texto = texto.replaceAll("imes", "i");
    texto = texto.replaceAll("ai", "a");
    texto = texto.replaceAll("ober", "o");
    texto = texto.replaceAll("ufat", "u");

    return texto;
  }
  
   
  console.log("ola tudo bem; ahora = " + textoCod("ola tudo bem")); 
  
  console.log("oberlai tufatdober benterm; ahora = " + textoDecod("oberlai tufatdober benterm")); 






