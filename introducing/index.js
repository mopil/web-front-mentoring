
function test() {
  const rdoBtns = document.querySelectorAll("#rdoBtn")
  for (let btn of rdoBtns) {
    if (btn.checked && btn.value <= 2) {
      alert(`땅이가 이렇게 귀여운데, ${btn.value}점은 너무 가혹한거 아니오?!`)
      btn.checked = false
    }
  }
}

function response() {
  const responseMessage = document.querySelector("#response")
  const message = document.querySelector("#message")
  const rdoBtns = document.querySelectorAll("#rdoBtn")
  let score = "무한대"
  for (let btn of rdoBtns) {
    if (btn.checked) {
      score = btn.value
    }
  }
  responseMessage.style.fontSize = "20px"
  responseMessage.style.color = "black"
  if (message.value == "") {
    responseMessage.innerHTML = `땅이에게 보낼 러브레터를 입력해주세요. 분명 좋아할 거에요`
  } else {
    responseMessage.innerHTML = `땅이에게 "${message.value}" 메시지와 매력점수 ${score}점을 보냈습니다.`
  }
}

function gaze() {
  const responseMessage = document.querySelector("#response")
  responseMessage.innerHTML = `땅이가 지켜보고 있어요. 상처받는 말하면 물지도..?`
  responseMessage.style.fontSize = "17px"
  responseMessage.style.color = "red"
}




