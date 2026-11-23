// Quiz Goal quiz engine: one question at a time, instant feedback, final score.
(function () {
  var data = window.QUIZ_DATA;
  if (!data) return;
  var idx = 0, score = 0, answered = false;
  var qText = document.getElementById("qText"), qNum = document.getElementById("qNum"),
      scoreEl = document.getElementById("score"), bestEl = document.getElementById("best"),
      statusEl = document.getElementById("status"), answersEl = document.getElementById("answers"),
      nextBtn = document.getElementById("nextBtn"), restartBtn = document.getElementById("restartBtn"),
      quizBox = document.getElementById("quizBox"), resultBox = document.getElementById("resultBox");
  var bestKey = "qg-best-" + data.slug;
  var best = parseInt(localStorage.getItem(bestKey) || "0", 10);
  function showBest() { if (bestEl) bestEl.textContent = best + " / " + data.questions.length; }
  showBest();
  function render() {
    answered = false;
    var q = data.questions[idx];
    qText.textContent = q.q;
    qNum.textContent = (idx + 1) + " / " + data.questions.length;
    scoreEl.textContent = score;
    statusEl.textContent = "Pick an answer.";
    answersEl.innerHTML = "";
    q.a.forEach(function (opt, i) {
      var b = document.createElement("button");
      b.type = "button"; b.className = "answer-btn"; b.textContent = opt;
      b.addEventListener("click", function () { answer(i, b); });
      answersEl.appendChild(b);
    });
    nextBtn.disabled = true;
    nextBtn.textContent = idx === data.questions.length - 1 ? "See my score" : "Next question";
  }
  function answer(i, btn) {
    if (answered) return;
    answered = true;
    var q = data.questions[idx];
    var buttons = answersEl.querySelectorAll(".answer-btn");
    buttons.forEach(function (b, j) {
      b.disabled = true;
      if (j === q.c) b.classList.add("correct");
      else if (j === i) b.classList.add("wrong");
      else b.classList.add("dim");
    });
    if (i === q.c) { score++; scoreEl.textContent = score; statusEl.textContent = "Correct! " + q.fact; }
    else { statusEl.textContent = "Not quite. " + q.fact; }
    nextBtn.disabled = false;
  }
  nextBtn.addEventListener("click", function () {
    if (!answered) return;
    idx++;
    if (idx < data.questions.length) render();
    else finish();
  });
  restartBtn.addEventListener("click", function () { idx = 0; score = 0; quizBox.classList.remove("hidden"); resultBox.classList.add("hidden"); render(); });
  function finish() {
    if (score > best) { best = score; localStorage.setItem(bestKey, String(best)); }
    showBest();
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    document.getElementById("finalScore").textContent = score + " / " + data.questions.length;
    var msg = score === data.questions.length ? "Perfect score! You are a true football expert."
      : score >= 8 ? "Excellent! You know your football."
      : score >= 5 ? "Good effort. Try another quiz and beat your score."
      : "A tough one. Try again and see how much you can improve.";
    document.getElementById("finalMsg").textContent = msg;
  }
  document.getElementById("shareBtn").addEventListener("click", function () {
    var text = "I scored " + score + " / " + data.questions.length + " on the " + data.title + " - Quiz Goal";
    var url = window.location.href;
    if (navigator.share) { navigator.share({ title: data.title, text: text, url: url }).catch(function () {}); }
    else if (navigator.clipboard) { navigator.clipboard.writeText(text + " " + url); this.textContent = "Score copied - paste it anywhere!"; }
  });
  document.addEventListener("keydown", function (e) {
    if (answered || quizBox.classList.contains("hidden")) return;
    var n = parseInt(e.key, 10);
    if (n >= 1 && n <= 4) { var b = answersEl.querySelectorAll(".answer-btn")[n - 1]; if (b) b.click(); }
  });
  render();
})();
