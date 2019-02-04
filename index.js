function countdown() {
  let date = "March, 7, 2019";

  let d1 = new Date(date);
  let d2 = new Date();

  let div = document.getElementById("count");
  div.innerHTML +=  parseInt( ( d1.getTime() - d2.getTime() ) / ( 24 * 3600 * 1000 ) ) + ' days until snugs!';
}

countdown();
