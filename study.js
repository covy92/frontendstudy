
////// 스트링 문법
// indexOf('찾는단어') 반환값=찾는 단어의 첫 글자 인덱스를 반환
console.log('hello world'.indexOf('e'))  //  1
console.log('hello world'.indexOf('x'))  // -1 >> 값이 없을때 -1을 반환

//length('') 스트링 길이를 반환(예시 생략)

////// 숫자와 수학

// toFixed(소수점자리) 소수점 몇 자리까지 반환될지 설정 (스트링으로 반환됨)
// parseInt() // parseFloat()  정수와 실수로 변환시켜줌
console.log('abs: ', Math.abs(-12))  // 절대값 12를 반환
console.log('min: ', Math.min(1, 2)) //  둘 사이의 최소값 반환
console.log('max: ', Math.max(1, 2)) //  둘 사이의 최댓값 반환
console.log('ceil: ', Math.ceil(1.2)) //  '올림'값 2을 반환
console.log('floor: ', Math.floor(1.2)) //  '내림'값 1을 반환
console.log('round: ', Math.round(3.14)) //  '반올림'값 3을 반환
console.log('random: ', Math.random()) //   0~1 사이의 랜덤 실수값을 반환

/////배열 문법


//find(element -> element >10 ;)  주어진 판별 함수를 만족하는 첫 요소의 값을 반환

// concat()  >> 앞배열.concat(뒷배열) >> 앞배열 뒤에 뒷배열이 병합 , 원본 데이터 손상이 없음

//forEach() >> forEach(function (element, index) {실행} )   >> 배열 요소만큼 각각 실행됨

//map() >> map(function (기존배열,index){각각 실행하여 새 배열을 만들어줌})

//filter() >> filter(함수) >> 각각의 요소를 함수 실행하여 만족하는 값들을 반환
const numbers = [1, 2, 3, 4]

const b = numbers.filter(number => {
  return number < 3
})
console.log(b)  // [1,2]

// .find() .findIndex()   >> 요소를 찾아줌 / 인덱스를 찾아줌
// .includes() >> 포함되어있는지 boolean 값을 반환

// .push()  뒤쪽에 요소 삽입 / .unshift() 앞쪽에 요소 삽입

// .reverse() 배열 순서 역순으로 배치

// .splice(인덱스값, 갯수) 인덱스 번호부터 갯수만큼 지움
// .splice(인덱스값, 갯수, 수정값) 인덱스값부터 갯수만큼 지우고 그 자리에 수정값을 넣음



//////오브젝트 문법

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

//Object.assign(A , B, C, D)  >> B, C, D 등등의 속성을 A로 복사 
//Object.keys(A) >> A의 키 값만 반환
console.log(Object.assign(target, source)) // {a: 1, b: 4, c: 5}
console.log(Object.keys(target)) //['a', 'b', 'c']