let btn = document.querySelector("#button") // html 상에 존재하는 버튼 이미지 연결
let count = 0 // const : 상수(변하지 않는 값), let : 변수(변하는 값)

// 버튼이 눌렀을 때 실행될 함수 붙이기
btn.addEventListener("click", responseEvent)

// 버튼에다가 함수를 직접 달아버리기
btn.addEventListener("click", function () {
  let message = document.querySelector("#message")
  let response = document.querySelector("#response")
  response.innerHTML = `${message.value}를 입력했습니다.`
})

// 경고창을 띄우는 함수 alert()
function warning() {
  alert("경고입니다.")
}

// 버튼이 눌러졌을 때 수행할 함수를 정의
function responseEvent() {
  let response = document.querySelector("#response")
  response.innerHTML = "버튼이 눌러졌습니다."
  response.style.color = "red"
  response.style.fontSize = "20px" // css에는 font-size이지만 js에서는 fontSize임
}

function counter() {
  let response = document.querySelector("#response")
  response.innerHTML = `${count++}번 눌렀습니다.` // ` <- 백틱 이라고 읽음
  if (count >= 10) {
    response.style.color = "red"
    response.style.backgroundColor = "blue" // background-color -> backgroundColor
  }
}

function removeText() {
  let response = document.querySelector("#response")
  response.innerHTML = ""
}

function getMessageAndResponse() {
  let message = document.querySelector("#message")
  let response = document.querySelector("#response")
  response.innerHTML = `${message.value}를 입력했습니다.`
}
