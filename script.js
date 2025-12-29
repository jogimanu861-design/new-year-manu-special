function checkName() {
  let name = document.getElementById("nameInput").value.toLowerCase();
  let msg = "";

  if (name === "swathi") {
    msg = "oye best one inka time undhi wait cheyu";
  } 
  else if (name === "meghana") {
    msg = "suger agadhu kadha neeku chudu inka time undhi";
  } 
  else if (name === "janu") {
    msg = "madam inka time undhi 12 avvaledhu";
  } 
  else if (name === "bhavya") {
    msg = "bokka garu wait cheyandi India lo inka time avvaledhu";
  } 
  else if (name === "manasa") {
    msg = "rabbit time inka avvaledhu ga aggu";
  } 
  else {
    msg = "❌ Neeku em pani ra ikkada nuvvu okka panicheyu nuvvu ....";
  }

  document.getElementById("message").innerText = msg;
}
