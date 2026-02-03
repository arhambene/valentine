const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
  const y = Math.random() * (window.innerHeight - noBtn.clientHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      background:#ffe6f0;
      text-align:center;">
      <img src="Image/tien 🥰.jpeg" alt="yay" style="width:360px;"
      />
      <h1 style="color:#ff4d88;font-size: 60px; font-weight: 600">
      YAYYY!! 💖💖💖</h1>
      <p style="font-size: 60px; font-weight: 600;">
      You just made me the happiest person 🥰 </p>


    </div>
  `;
});