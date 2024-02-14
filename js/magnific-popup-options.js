$(document).ready(function() {
  // MagnificPopup
  var magnifPopup = function() {
    $('.popup-image').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery:{
        enabled:true
      },
      zoom: {
        enabled: true, // Por padrão é falso, então não se esqueça de habilitá-lo

        duration: 300, // duração do efeito, em milissegundos
        easing: 'ease-in-out', // Função de facilitação de transição CSS

        // A função "opener" deve retornar o elemento a partir do qual o pop-up será ampliado
        // e para qual pop-up será reduzido
        // Por padrão, ele procura uma tag de imagem:
        opener: function(openerElement) {
        // openerElement é o elemento no qual o popup foi inicializado, neste caso sua tag <a>
        // você não precisa adicionar a opção "abridor" se este código corresponder às suas necessidades, é o padrão.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  };
  
  // Chama as funções.
  magnifPopup();

});