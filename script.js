let current = 0;
let score = 0;
let saving = 0;

const quizBox = document.getElementById("quiz-box");
const nextBtn = document.getElementById("next-btn");

function loadQuiz(index) {
  const q = quizzes[index];
  quizBox.innerHTML = `
    <h2>${q.question}</h2>
    <div class="option-container">
      <div class="option-card" onmouseup="answer(this, ${q.optionA.isCorrect}, \`${q.explanation}\`, ${q.saving}, '${q.optionA.image}')">
        <p>${q.optionA.label}</p>
      </div>
      <div class="option-card" onmouseup="answer(this, ${q.optionB.isCorrect}, \`${q.explanation}\`, ${q.saving}, '${q.optionB.image}')">
        <p>${q.optionB.label}</p>
      </div>
    </div>
    <div class="result" id="result"></div>
  `;
  nextBtn.style.display = "none";
}

function answer(clickedElement, correct, explanation, savingValue, image) {
  // 선택 잠금
  const optionCards = document.querySelectorAll('.option-card');
  optionCards.forEach(card => {
    card.style.pointerEvents = 'none';
    card.classList.remove('selected');
  });
  clickedElement.classList.add('selected');

  if (correct) {
    score++;
    saving += savingValue;
  }

  const result = document.getElementById("result");
  result.innerHTML = (correct ? "✅ 정답입니다!" : "❌ 오답입니다!") + "<br><small>" + explanation.replace(/\n/g, "<br>") + "</small>";

  if (image) {
    result.innerHTML += `<div><img src="${image}" alt="해설 이미지" /></div>`;
  }

  nextBtn.style.display = "block";
  document.getElementById("correct-sound").play();
}

nextBtn.onclick = () => {
  current++;
  if (current < quizzes.length) {
    function startQuiz() {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('quiz-screen').style.display = 'block';
  document.getElementById("next-sound").play();
  loadQuiz(current);

function shareResult() {
  const url = window.location.href;
  const shareText = `나는 탄소발자국 퀴즈에서 ${score}/${quizzes.length} 문제를 맞히고 ${saving}kg CO₂를 절감했어요! 🌿`;
  if (navigator.share) {
    navigator.share({
      title: "탄소발자국 퀴즈 결과",
      text: shareText,
      url: url
    });
  } else {
    alert("이 브라우저는 공유 기능을 지원하지 않아요. 직접 링크를 복사해 주세요!\n" + url);
  }
}
}

document.getElementById("next-sound").play();
  loadQuiz(current);

function shareResult() {
  const url = window.location.href;
  const shareText = `나는 탄소발자국 퀴즈에서 ${score}/${quizzes.length} 문제를 맞히고 ${saving}kg CO₂를 절감했어요! 🌿`;
  if (navigator.share) {
    navigator.share({
      title: "탄소발자국 퀴즈 결과",
      text: shareText,
      url: url
    });
  } else {
    alert("이 브라우저는 공유 기능을 지원하지 않아요. 직접 링크를 복사해 주세요!\n" + url);
  }
}
  } else {
    quizBox.innerHTML = `
      <h2>🎉 퀴즈 완료!</h2>
      <p>총 ${quizzes.length}문제 중 <strong>${score}</strong>개 정답!</p>
      <p>🌿 예상 절감 탄소량: <strong>${saving} kg CO₂</strong></p>
      <div class="source">출처: 기후변화행동연구소 (내 모든 것의 탄소발자국, 2024. 12. 버전)</div>
      <button onclick="restart()">다시 시작하기</button>\n<button onclick="shareResult()">퀴즈 공유하기</button>
    `;
    nextBtn.style.display = "none";
  }
};

function restart() {
  current = 0;
  score = 0;
  saving = 0;

  // 화면 전환: 퀴즈 숨기고 시작 화면 보여줌
  document.getElementById('quiz-screen').style.display = 'none';
  document.getElementById('start-screen').style.display = 'block';
}


function shareResult() {
  const url = window.location.href;
  const shareText = `나는 탄소발자국 퀴즈에서 ${score}/${quizzes.length} 문제를 맞히고 ${saving}kg CO₂를 절감했어요! 🌿`;
  if (navigator.share) {
    navigator.share({
      title: "탄소발자국 퀴즈 결과",
      text: shareText,
      url: url
    });
  } else {
    alert("이 브라우저는 공유 기능을 지원하지 않아요. 직접 링크를 복사해 주세요!\n" + url);
  }
}
}

document.getElementById("next-sound").play();
  loadQuiz(current);

function shareResult() {
  const url = window.location.href;
  const shareText = `나는 탄소발자국 퀴즈에서 ${score}/${quizzes.length} 문제를 맞히고 ${saving}kg CO₂를 절감했어요! 🌿`;
  if (navigator.share) {
    navigator.share({
      title: "탄소발자국 퀴즈 결과",
      text: shareText,
      url: url
    });
  } else {
    alert("이 브라우저는 공유 기능을 지원하지 않아요. 직접 링크를 복사해 주세요!\n" + url);
  }
}
}

function startQuiz() {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('quiz-screen').style.display = 'block';
  document.getElementById("next-sound").play();
  loadQuiz(current);

function shareResult() {
  const url = window.location.href;
  const shareText = `나는 탄소발자국 퀴즈에서 ${score}/${quizzes.length} 문제를 맞히고 ${saving}kg CO₂를 절감했어요! 🌿`;
  if (navigator.share) {
    navigator.share({
      title: "탄소발자국 퀴즈 결과",
      text: shareText,
      url: url
    });
  } else {
    alert("이 브라우저는 공유 기능을 지원하지 않아요. 직접 링크를 복사해 주세요!\n" + url);
  }
}
}

document.getElementById("next-sound").play();
  loadQuiz(current);

function shareResult() {
  const url = window.location.href;
  const shareText = `나는 탄소발자국 퀴즈에서 ${score}/${quizzes.length} 문제를 맞히고 ${saving}kg CO₂를 절감했어요! 🌿`;
  if (navigator.share) {
    navigator.share({
      title: "탄소발자국 퀴즈 결과",
      text: shareText,
      url: url
    });
  } else {
    alert("이 브라우저는 공유 기능을 지원하지 않아요. 직접 링크를 복사해 주세요!\n" + url);
  }
}
