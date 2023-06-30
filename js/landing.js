
const pLoading = document.getElementById('loading');
const btnStart = document.getElementById('btn-start');
let loadText = 'Darling Quotes, is an online tool that provides a quick and easy way to find quotes.';
let loadZero = 0;

setInterval(() => {
  const newLoadingText = loadText.substring(0, loadZero);
  pLoading.textContent = newLoadingText;
  loadZero++;
  if (loadZero == loadText.length) {
  }
}, 100);
   



