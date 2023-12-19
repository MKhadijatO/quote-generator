const btn = document.querySelector("#next")
const quote = document.querySelector('.quote');
const person = document.querySelector('.author');

const quotes = [
    {
        quote: '"Ask not what your country can do for you; ask what you can do for your country."',
        person: "John Kennedy"
    },
    {
        quote: '"Genius is one percent inspiration and ninety-nine percent perspiration."',
        person: "Thomas Edison"
    },
    {
        quote: '"I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character."',
        person: "Martin Luther King"
    },
    {
        quote: '"I have always depended on the kindness of strangers."',
        person: "Blanche Dubois"
    },
    {
        quote: '"Life is like riding a bicycle. To keep your balance, you must keep moving."',
        person: "Albert Einstein"
    },
]

btn.addEventListener('click', function (){
    const random = Math.floor(Math.random() * quotes.length)
    
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})