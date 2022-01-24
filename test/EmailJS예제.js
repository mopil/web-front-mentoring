// 이 모든것은 버튼이 눌러졌을 경우에만 발동!
// emailJs 시작
const send_button = document.querySelector("#sendBtn")
send_button.addEventListener('click', () => {
  emailjs.init("user_PJBFDAAOKfaohrJ4cf5Zm")

  // HTML로 부터 보내는 사람이름, 메시지 가져오기
  const name_ = document.querySelector("#name").value
  const message_ = document.querySelector("#message").value
  const template_params = {
    name: name_,
    message: message_
  }

  // 이메일 보내기 send("이메일 종류", "emailJs 템플릿 id", 템플릿 객체)
  // then(전송에 성공했을때 실행할 함수이름, 전송에 실패했을때 실행할 함수이름)
  emailjs.send("gmail", "template_gbvy8wn", template_params).then(send_success, send_fail)

})

function send_success() {
  alert("메시지 전송에 성공했습니다.")
}

function send_fail() {
  alert("모종의 이유로 실패했어요")
}

