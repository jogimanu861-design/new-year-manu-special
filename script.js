function playVoice() {
  const name = document.getElementById("nameInput").value.toLowerCase();
  const reply = document.getElementById("reply");

  const messages = {
    swathi: "oye best one inka time undhi wait cheyu",
    meghana: "sugar agadhu kadha neeku",
    janu: "madam inka time undhi",
    bhavya: "bokka garu wait for few minutes India lo inka time avvaledhu",
    manasa: "rabbit time inka avvaledhu ga aggu"
  };

  if (messages[name]) {
    reply.innerText = messages[name];
    startCountdown();
  } else {
    reply.innerText = "This surprise is only for special people 😌";
  }
}

function startCountdown() {
  const countdown = document.getElementById("countdown");

  const target = new Date("Jan 1, 2026 00:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
      window.location.href = "surprise.html";
      return;
    }

    const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    countdown.innerText =
      `⏳ ${hrs}h ${mins}m ${secs}s left`;
  }, 1000);
}
