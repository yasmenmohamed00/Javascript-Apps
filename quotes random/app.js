let qoutes =[
    {quote: 'Do not mind anything that anyone tells you about anyone else.', auther: 'Henry James'}, 
    {quote: 'Judge everyone and everything for yourself.', auther: 'Jane Austen'}, 
    {quote: 'There is no charm equal to tenderness of heart.', auther: 'Francis of Assisi'}, 
    {quote: 'Lord, make me an instrument of thy peace. Where there is hatred, let me sow love.',  auther: 'Leonardo da Vinci'}
]
let color = ["#226764", "#679B99", "#0D4D4B", "#2E4372", "#7788AA", "#AA8439", "#805B15", "#AA6B39"];


const button = document.querySelector('.btn');
const qoute = document.querySelector('.quote');
const au = document.querySelector('.blockquote-footer');

button.addEventListener('click', function(){

    let qoutesNumber = Math.floor(Math.random() * qoutes.length);
    let element = qoutes[qoutesNumber];
    qoute.innerHTML = element.quote;
    au.innerHTML = element.auther;

    getColor();
})
//get colors random
function getColor() {
    const body = document.getElementsByTagName("BODY")[0];
   
    let colorNumber = Math.floor(Math.random() * color.length);
    let eleColor = color[colorNumber];
    body.style.backgroundColor = eleColor;    
}
