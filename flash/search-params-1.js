const queryString = window.location.search;
console.log(queryString);
// ?product=shirt&color=blue&newuser&size=m
const urlParams = new URLSearchParams(queryString);

if (console.log(urlParams.has('product'));) {

const product = urlParams.get('product')
console.log(product);
// shirt
  
} else {
alert("error-file not detected");
}



