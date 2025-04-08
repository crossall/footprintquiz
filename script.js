let currentQuiz = 0;
const quizBox = document.getElementById('quiz-box');
const nextBtn = document.getElementById('next-btn');

function showQuiz(index) {
  const q = quizzes[index];
  quizBox.innerHTML = `
    <h2>${q.question}</h2>
    <button class="option-btn" onclick="selectAnswer(${q.optionA.isCorrect}, '${q.explanation}')">${q.optionA.label}</button>
    <button class="option-btn" onclick="selectAnswer(${q.optionB.isCorrect}, '${q.explanation}')">${q.optionB.label}</button>
    <div class="result" id="result"></div>
  `;
  nextBtn.style.display = 'none';
}

function selectAnswer(isCorrect, explanation) {
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = isCorrect ? "정답입니다! 🎉" : "아쉽네요! ❌";
  resultDiv.innerHTML += `<br><small>${explanation}</small>`;
  nextBtn.style.display = 'block';
}

nextBtn.addEventListener('click', () => {
  currentQuiz++;
  if (currentQuiz < quizzes.length) {
    showQuiz(currentQuiz);
  } else {
    quizBox.innerHTML = `<h2>퀴즈 완료!</h2><p>총 ${quizzes.length}문제를 풀었습니다.</p>`;
    nextBtn.style.display = 'none';
  }
});

// 첫 퀴즈 표시
showQuiz(currentQuiz);
