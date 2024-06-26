
const meuslide = document.querySelectorAll('.meuslide')

if (meuslide.length >0) {

    bola = document.querySelectorAll('.bola')
     var contador = 1
     slidefun(contador)
    
     var tempo = setInterval(autoslide, 8000)
     function autoslide() {
        contador += 1
        slidefun(contador)
     }
    
     function maisSlides(n) {
        contador += n
        slidefun(contador)
    
     }
    
    function atualSlides(n) {
        contador = n
        slidefun(contador)
    
     }
    
     function reiniciarTempo() {
        clearInterval(tempo)
        tempo = setInterval (autoslide, 8000)
     }
    
     function slidefun(n) {
        var i 
        for(i = 0;i<meuslide.length;i++) {
            meuslide[i].style.display = "none"
        }
    
        for (i = 0;i<bola.length;i++) {
        bola[i].classList.remove('mais')
        }
    
        if (n > meuslide.length) {
            contador = 1
        }
    
        if (n < 1) {
            contador = meuslide.length
        }
        
        
        meuslide[contador - 1].style.display = "block" 
        bola[contador - 1].classList.add('active')
    
    }
    
    /* formulario */
    
    
    function lettersOnly(e) {   
      var keyCode = (e.keyCode ? e.keyCode : e.which); // Variar a chamada do keyCode de acordo com o ambiente.
      if (keyCode > 47 && keyCode < 58) {
     e.preventDefault();
      }
    
    }
    
}


// $("#txtnome").on("input", function(){
//     var regexp = /[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/g;
//     if(this.value.match(regexp)){
//       $(this).val(this.value.replace(regexp,''));
//     }
//   });

// Contato
 $("[data-contato]").mask("(99) 99999-9999");
 $("[data-contato]").on('change', function(){
  if($(this).val().length <= 14){
  $(this).mask("(99) 9999-99999");
  }else{
  $(this).mask("(99) 99999-9999");
}
 })
