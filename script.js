function playVoice() {
  const name = document.getElementById("nameInput").value.trim();
  const message = document.getElementById("message");
  const countdown = document.getElementById("countdown");

  let text = "";

  if (name === "Swathi") text = "oye best one inka time undhi wait cheyu";
  else if (name === "Meghana") text = "suger agadhu kadha neeku";
  else if (name === "Janu") text = "madam inka time undhi";
  else if (name === "Bhavya") text = "bokka garu wait for few minutes India lo Inka time avvaledhu";
  else if (name === "Manasa") text = "rabbit time inka avvaledhu ga aggu";
  else {
    message.innerText = "This surprise is not for you 😜";
    return;
  }

  message.innerText = text;
  countdown.style.display = "block";
}

// COUNTDOWN
const targetDate = new Date("January 1, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.body.innerHTML = "<h1 style='color:white'>🎉 Surprise Time 🎉</h1>";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerText =
    `${d}d ${h}h ${m}m ${s}s left`;
}, 1000);
