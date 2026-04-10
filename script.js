let money = 1000000;
let betAmount = 10000;
let spins = 0;

const symbols = ["7", "BAR", "★", "💀"];

function updateMoney() {
  document.getElementById("money").innerText = money.toLocaleString();
}

function bet() {
  betAmount += 10000;
  if (betAmount > 50000) betAmount = 10000;
  document.getElementById("msg").innerText = "BET: " + betAmount;
}

function spin() {
  if (money <= 0) {
    gameOver();
    return;
  }

  money -= betAmount;
  spins++;

  animateReel("r1");
  animateReel("r2");
  animateReel("r3");

  setTimeout(() => {
    // 거의 무조건 패배
    let result = [
      symbols[Math.floor(Math.random()*symbols.length)],
      symbols[Math.floor(Math.random()*symbols.length)],
      symbols[Math.floor(Math.random()*symbols.length)]
    ];

    document.getElementById("r1").innerText = result[0];
    document.getElementById("r2").innerText = result[1];
    document.getElementById("r3").innerText = result[2];

    // 일부러 아깝게 실패 연출
    if (spins % 3 === 0) {
      result[2] = result[1];
      document.getElementById("r3").innerText = result[2];
      document.getElementById("msg").innerText = "거의 당첨...!";
    } else {
      document.getElementById("msg").innerText = "LOSE";
    }

    updateMoney();
  }, 800);

  if (spins === 7) {
    setTimeout(showTruth, 1500);
  }
}

function animateReel(id) {
  let el = document.getElementById(id);
  let count = 0;

  let interval = setInterval(() => {
    el.innerText = symbols[Math.floor(Math.random()*symbols.length)];
    count++;
    if (count > 10) clearInterval(interval);
  }, 50);
}

function showTruth() {
  document.body.innerHTML = `
    <div style="color:white; text-align:center; margin-top:100px;">
      <h1>당신은 통제되고 있었습니다</h1>
      <p>거의 당첨되는 연출, 계속 도전하게 만드는 구조</p>
      <p>이건 우연이 아닙니다.</p>
      <h2 style="color:red;">현실에서도 같습니다.</h2>
    </div>
  `;
}

function gameOver() {
  document.body.innerHTML = `
    <div style="color:white; text-align:center; margin-top:100px;">
      <h1>모든 것을 잃었습니다</h1>
      <p>처음엔 장난처럼 시작했죠.</p>
      <p>하지만 끝은 같았습니다.</p>
    </div>
  `;
}
