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
      <img src="Image/tien 🥰.jpeg" alt="yay" style="width:180px;"
      />
      <h1 style="color:#ff4d88;">YAYYY!! 💖💖💖</h1>
      <p style="font-size: 70px; font-weight: 1400;">
      You just made me the happiest person 🥰 </p>


    </div>
  `;
});