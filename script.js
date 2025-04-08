function loadQuiz(index) {
  const q = quizzes[index];
  quizBox.innerHTML = `
    <h2>${q.question}</h2>
    <div class="option-container">
      <div class="option-card" onclick="answer(${q.optionA.isCorrect}, \`${q.explanation}\`)">
        <p>${q.optionA.label}</p>
        <!-- <img src="img/a.jpg" alt="A 이미지" /> 나중에 추가 가능 -->
      </div>
      <div class="option-card" onclick="answer(${q.optionB.isCorrect}, \`${q.explanation}\`)">
        <p>${q.optionB.label}</p>
        <!-- <img src="img/b.jpg" alt="B 이미지" /> -->
      </div>
    </div>
    <div class="result" id="result"></div>
  `;
  nextBtn.style.display = "none";
}
