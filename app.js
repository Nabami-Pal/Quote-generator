Aurl = "https://api.quotable.io/random";
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");


async function getqoute(url){
    try{
        let res = await fetch(url);
       let data = await res.json();
       author.innerHTML = data.author;
        quote.innerHTML = data.content;
        
    }catch(e){
        console.log("Error -", e);
    }
   
}
getqoute(Aurl);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML +
    "---- by" + author.innerHTML, "Tweet window", "width=600, height=300");
}