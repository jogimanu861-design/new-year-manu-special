function playVoice() {
  const name = document.getElementById("nameInput").value.toLowerCase().trim();
  const reply = document.getElementById("reply");

  // SAVE NAME FOR NEXT PAGE (IMPORTANT)
  localStorage.setItem("visitorName", name);

  const messages = {
    swathi: "oye best one inka time undhi wait cheyu 😌",
    meghana: "sugar agadhu kadha ra neeku 😄 12 avvaledhu inka",
    janu: "Janu Ji inka time undhi koncham sepu 🕰️",
    bhavya: "bokka garu wait cheyandi 😜 India lo inka time avvaledhu",
    manasa: "rabbit 🐰 time inka avvaledhu ga aggu"
  };

  if (messages[name]) {
    reply.innerText = messages[name];
    startCountdown();
  } else {
    reply.innerText = "Ee page neeku kadhu bhaya 😅";
  }
}

function startCountdown() {
  const countdown = document.getElementById("countdown");

  const target = new Date("Dec 30, 2025 20:55:00").getTime();

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


