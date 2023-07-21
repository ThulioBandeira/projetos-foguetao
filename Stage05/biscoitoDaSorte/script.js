// Obtém o elemento com a classe "imgScreen1"
const imgScreen1 = document.querySelector('.imgScreen1');
// Obtém o elemento com a classe "screen1"
const screen1 = document.querySelector('.screen1');
// Obtém o elemento com a classe "screen2"
const screen2 = document.querySelector('.screen2');
// Obtém o elemento com a classe "fraseBiscoito"
const fraseBiscoito = document.querySelector('.fraseBiscoito');

// Adiciona o evento "mouseenter" ao elemento
imgScreen1.addEventListener('mouseenter', () => {
  // Adiciona a classe "tremer" ao elemento
  imgScreen1.classList.add('tremer');
});

// Adiciona o evento "mouseleave" ao elemento
imgScreen1.addEventListener('mouseleave', () => {
  // Remove a classe "tremer" do elemento
  imgScreen1.classList.remove('tremer');
});

// Leva para a segunda página
imgScreen1.addEventListener('click',() => {
    // Remove a classe "hide" do elemento
    screen2.classList.remove('hide');
    // Adiciona a classe "hide" no elemento
    screen1.classList.add('hide');
})