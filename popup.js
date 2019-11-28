fetch(
  "https://cn.buddymojo.com/api/v1/quiz/18?userQuizId=1228288&type=friend&stats=1"
)
  .then(res => res.json())
  .then(console.log);
