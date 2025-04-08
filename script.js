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
      <div class="option-card" onclick="answer(${q.optionA.isCorrect}, \`${q.explanation}\`, ${q.saving})">
        <p>${q.optionA.label}</p>
      </div>
      <div class="option-card" onclick="answer(${q.optionB.isCorrect}, \`${q.explanation}\`, ${q.saving})">
        <p>${q.optionB.label}</p>
      </div>
    </div>
    <div class="result" id="result"></div>
  `;
  nextBtn.style.display = "none";
}

function answer(correct, explanation, savingValue) {
  const result = document.getElementById("result");
  if (correct) {
    score++;
    saving += savingValue;
  }
  result.innerHTML = (correct ? "✅ 정답입니다!" : "❌ 오답입니다!") + `<br><small>${explanation}</small>`;
  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  current++;
  if (current < quizzes.length) {
    loadQuiz(current);
  } else {
    quizBox.innerHTML = `
      <h2>🎉 퀴즈 완료!</h2>
      <p>총 ${quizzes.length}문제 중 <strong>${score}</strong>개 정답!</p>
      <p>🌿 예상 절감 탄소량: <strong>${saving} kg CO₂</strong></p>
      <button onclick="restart()">다시 시작하기</button>
    `;
    nextBtn.style.display = "none";
  }
};

function restart() {
  current = 0;
  score = 0;
  saving = 0;
  loadQuiz(current);
}

loadQuiz(current);
