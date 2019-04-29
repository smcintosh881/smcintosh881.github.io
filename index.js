function countdown() {
  let date = "May, 10, 2019";

  let d1 = new Date(date);
  let d2 = new Date();

  let div = document.getElementById("count");
  div.innerHTML =  parseInt( ( d1.getTime() - d2.getTime() ) / ( 24 * 3600 * 1000 ) ) + ' days until ' + temp();
}

function temp() {

  const stuff = ["snugs", "cuddles", "new adventures", "🔥💦", "🏕️", "🏍️💨", "🍻", "👨‍💻👩‍💻", "💏"];
  let i = Math.floor(Math.random() * stuff.length);
  return stuff[i]
}

setInterval(countdown, 2000);
