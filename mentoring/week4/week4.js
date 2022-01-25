// 자바스크립트에는 함수를 선언하는 방법이 총 세 가지입니다.
// 1. 선언식 2. 함수표현식 3. 화살표함수


// 선언식 -> 잘 안쓰는 방법
function 함수이름1() {
  // 함수내용
}

// 함수표현식 -> 많이 써
const 함수를담을변수 = function () {
  // 함수내용
}

// 화살표함수(제한적임) 함수 내부에서 다른 함수를 부르는 경우에만 쓸 수 있음 (콜백함수)
const btn
btn.addEventListener('click', () => {
  // 콜백함수 내용
})


// 자바스크립트의 객체와 배열
const arr = [1,2,3] // 배열
const obj = { name : "배성흥", age : 25, school : "명지대학교" } // 객체 key-value 형태 자바스크립트 객체 표현 Javascript Object Notation JSON
arr[0] // -> 1
obj.name // -> 배성흥

