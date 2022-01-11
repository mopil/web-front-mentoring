// 버튼을 HTML <-> 자바스크립트
const btn = document.querySelector("#button")
let count = 0

btn.addEventListener("click", getRadioAndResponse) // 파라미터가 2개 첫번째는 행위, 두번째는 함수이름

function responseText() {
  const message = document.querySelector("#message")
  message.innerHTML = "눌렀으니까 난 화를 낸다!!!"
  message.style.color = "red"
  message.style.fontSize = "30px" // font-size

  setTimeout(function() {
    const message = document.querySelector("#message")
    message.innerHTML = ""
  }, 3000)

}

function counter() {
  const message = document.querySelector("#message")
  message.innerHTML = `현재 카운트 수는 ${count++}입니다.` // 빽틱
  if (count >= 5) {
    message.style.color = "red"
  } 
}

function getMessageAndResponse() {
  const cin = document.querySelector("#cin")
  const message = document.querySelector("#message")
  message.innerHTML = `당신이 입력한건 "${cin.value}"군요!`
}

function getRadioAndResponse() {
  // const rdo = document.querySelector("#rdo")
  // //const message = document.querySelector("#message")
  // if (rdo.checked) {
  //   alert("이거는 체크하면 안되요!")
  //   rdo.checked = false
  // }
  const rdoBtns = document.querySelectorAll("#rdo") // 배열로 들어가
  for (let rdoBtn of rdoBtns) {
    if (rdoBtn.checked && rdoBtn.value == "bad") {
      alert("나빠요!")
      rdoBtn.checked = false
    }
  }
}

