const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

/* FIRST CLICK e music play (mobile fix) */
document.body.addEventListener("click", () => {
  if (!localStorage.getItem("musicStarted")) {
    music.play();
    localStorage.setItem("musicStarted", "true");
  }
}, { once: true });

/* Music toggle */
btn.onclick = () => {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
};

/* Navigation */
function nextPage(){
  window.location.href="page2.html";
}

function go(page){
  window.location.href=page;
}

function back(){
  window.history.back();
}

/* Letters */
function openLetter(n){
  let img=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"];
  let text=[
    "Tumi amar sobcheye special 💖",
    "Miss korle amar kache chole asho 🥺",
    "Tomar smile amar duniya 😍",
    "Rag korle amake bolo 😘",
    "Ami sobsomoy tomar sathe 💕"
  ];

  document.getElementById("popup").style.display="block";
  document.getElementById("photo").src=img[n-1];
  document.getElementById("line").innerText=text[n-1];
}

/* CLOSE popup (IMPORTANT FIX) */
function closePopup(){
  document.getElementById("popup").style.display="none";
}
