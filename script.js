let current = 0;
const quizBox = document.getElementById("quiz-box");
const nextBtn = document.getElementById("next-btn");

function loadQuiz(index) {
  const q = quizzes[index];
  quizBox.innerHTML = `
    <h2>${q.question}</h2>
    <div class="option-container">
      <div class="option-card" onclick="answer(${q.optionA.isCorrect}, \`${q.explanation}\`)">
        <p>${q.optionA.label}</p>
      </div>
      <div class="option-card" onclick="answer(${q.optionB.isCorrect}, \`${q.explanation}\`)">
        <p>${q.optionB.label}</p>
      </div>
    </div>
    <div class="result" id="result"></div>
  `;
  nextBtn.style.display = "none";
}

function answer(correct, explanation) {
  const result = document.getElementById("result");
  result.innerHTML = (correct ? "✅ 정답입니다!" : "❌ 오답입니다!") + `<br><small>${explanation}</small>`;
  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  current++;
  if (current < quizzes.length) {
    loadQuiz(current);
  } else {
    quizBox.innerHTML = `<h2>🎉 퀴즈를 모두 풀었습니다!</h2><p>총 ${quizzes.length}문제 중 ${quizzes.length}개 완료!</p>`;
    nextBtn.style.display = "none";
  }
};

loadQuiz(current);
