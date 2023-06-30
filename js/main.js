const btnNewQuotes = document.getElementById("btn-add-quotes");
btnNewQuotesOrig = btnNewQuotes.innerText;

const ChangeBtnTxt1 = () => {
  if (btnNewQuotesOrig == btnNewQuotes.innerText) {
    btnNewQuotes.innerText = `Generated`;
  }
  setTimeout(() => {
    btnNewQuotes.innerText = btnNewQuotesOrig;
  }, 2000);
};
btnNewQuotes.addEventListener("click", ChangeBtnTxt1);

  const btnClearQuotes = document.getElementById('btn-clear-quotes');
  btnClearQuotesOrig = btnClearQuotes.innerText;

  const ChangeBtnTxt2 = () => {

    if (btnClearQuotesOrig == btnClearQuotes.innerText) {
        btnClearQuotes.innerText = "Quotes Cleared";
      }
      setTimeout(() => {
        btnClearQuotes.innerText = btnClearQuotesOrig;
      }, 2000);

 }
 btnClearQuotes.addEventListener("click", ChangeBtnTxt2);

const divResult = document.getElementById("result");
const authorSpan = document.getElementById("author");
const Ttitle = document.getElementById("title");
const url = 'https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes?limit=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '049d4bbd4cmshe58d50264dc6f08p136bc9jsn1e530e73660b',
		'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com'
	}
};


const GetRandomQuotes = async () => {
  const apiResponseQuotes = await fetch(url, options);
  const randomQuotesData = await apiResponseQuotes.json();
  const rqd = randomQuotesData;
  showData(rqd);
};


const showData = (data) => {
  const authorName = data[0].author;
  const Quotes = data[0].quote;
  const quotesTitle = data[0].category;
  
  divResult.innerHTML = `${Quotes}`;
  authorSpan.innerHTML = `Author : ${authorName}`;
  Ttitle.innerHTML = `${quotesTitle}`;

  if (quotesTitle == undefined) {
    Ttitle.innerHTML = "";
  }
};
btnNewQuotes.addEventListener("click", GetRandomQuotes);

const ClearResultQuotes = () => {

    divResult.innerHTML = `Quotes Cleared`;
    authorSpan.innerHTML = ``;
    Ttitle.innerHTML = ``;
    setTimeout(() => {
        divResult.innerHTML = `Its not my first love but it will be last`;
        authorSpan.innerHTML = `Author : Jeje`;
        Ttitle.innerHTML = `First Love`;
     }, 2000);
}
btnClearQuotes.addEventListener('click' , ClearResultQuotes);