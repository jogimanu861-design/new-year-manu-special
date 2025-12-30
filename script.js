function playVoice() {
  const name = document.getElementById("nameInput").value.toLowerCase().trim();
  const reply = document.getElementById("reply");

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

  // ✅ TODAY 8:50 PM
  
  const target = new Date("Jan 1, 2026 00:00:00");

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const diff = target.getTime() - now;

    if (diff <= 0) {
      clearInterval(timer);
      window.location.href = "surprise.html";
      return;
    }

    const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    countdown.innerText = `⏳ ${hrs}h ${mins}m ${secs}s left`;
  }, 1000);
}




