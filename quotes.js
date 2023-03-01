
// const expression 
const loadQuote = ()=> {
    const url = "https://api.quotable.io/random";

    fetch(url)
    .then(res => res.json())
    .then(data => {
        diplayQuote(data)
       // console.log(data);
    })
    .catch(err => {
        console.log(err);
    })
}

const diplayQuote = (data)=> {
    const quoteEl = document.getElementById("quote");
    const authorEl = document.getElementById("quote_author");
    const {author, content} = data;
   quoteEl.innerText = content;
   authorEl.innerText = author;

}


setInterval(() => {
    loadQuote()
}, 10000);

 loadQuote();



