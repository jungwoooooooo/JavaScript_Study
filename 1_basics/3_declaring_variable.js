/**
 * Variable 선언하기
 * 
 * 1) var - 더 이상 안 씀
 * 2) let
 * 3) const
 */
var name = '조정우';
console.log(name);

var age = 25;
console.log(age);

let ive = '아이브';
console.log(ive);

/**
 * let과 var로 선언하면
 * 값을 추후에 변결 할 수 있음.
 * 꽤 좋은 기능처럼 보이지만 나중에 보면 별로 좋지 않은 기능이다. ㅋ
 */

//ive라는 변수의 값이 변경이 된 것
ive = '안유진';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

// newJeans = 'jungwoo jo';
// console.log(newJeans);

/**
 * 선언과 할당
 * 
 * 1) 변수를 선언하는 것.
 * 2) 할당
 * 
 */

var name = '조정우'
//name을 변수로 '선언' 한 것. , 조정우라는 값을 넣어 '할당'한 것
console.log(name);

let girlFriend;
console.log(girlFriend);
//선언만 한 것이기 떄문에 코드를 돌리면 undefined가 뜸 왜냐 값을 할당 하지 않았기 때문 

const girlFriend2;
//'const' declarations must be initialized. 라고 뜨는데 뜻은 값을 초기화하고서 선언을 해라 라는 뜻임
//const는 값을 무조건 초기화 하고 선언을 해야 함