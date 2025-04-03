document.getElementById("quiz").addEventListener("click", function() {
    // 퀴즈 항목
    var quizzes = [
      { question: "박소연님의 나이는 ?", answer: "23" },
      { question: "박소연님의 mbti는 ?", answer: "infj" },
      { question: "박소연님이 좋아하는 색깔은 ? (예 : 빨, 주, 노, 초, 파, 남, 보)", answer: "노" },
      { question: "박소연님이 좋아하는 요일은 ? (예 : 월, 화, 수, 목, 금, 토, 일)", answer: "목" },
      { question: "박소연님이 좋아하는 숫자는 ? (힌트 : 1~10 사이)", answer: "1" }
    ];
  
    // 랜덤 인덱스를 생성
    var randomIndex = Math.floor(Math.random() * quizzes.length);
    var selectedQuiz = quizzes[randomIndex];
  
    // prompt 창을 통해 사용자로부터 답변 입력 받기
    var userAnswer = prompt(selectedQuiz.question);
  
    // 사용자 입력이 null이 아니고, 정답과 일치하는지 확인 (공백 제거)
    if (userAnswer !== null && userAnswer.trim() === selectedQuiz.answer) {
      alert("당신은 천재만재 ! 박소연님에 대해 잘 아시군요!");
    } else {
      alert("땡! 앞으로 더 알아가세요...");
    }
  });
  