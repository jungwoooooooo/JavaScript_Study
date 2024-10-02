/**
 * Naming Conventions
 * 이름 지을 때
 * 
 * 1) 일반적으로 영어 (라틴문자)를 사용하며 문자와 숫자를 모두 사용 할 수 있음.
 * 2) 특수기호는 언더스코어와 달러를 사용 할 수 있음
 * 3) 숫자로 이름을 시작 할 수 없음.
 *  ex) 1Name, 2Hello
 * 4) 키워드는 변수명으로 사용 할 수 없음.
 *  ex) var var = 'var';
 */

//가능한 것들
let joJungWoo = '조정우';
var $ive = '아이브';
const _yuJin = '안유진';

//확인해보면 값의 할당이 잘 된 것을 볼 수 있음.
console.log(joJungWoo);
console.log($ive);
console.log(_yuJin);

//안되는 것들
//let 1name = 'no';//숫자로 시작하면 안됨
//let const = 'attention';//키워드로 변수를 사용했기 때문에 안됨

/**
 * Naming Convention 2
 * 
 * 1) camelCase -> 대부분의 언어에서 많이 사용하는 건데 
 * 첫번째 글자는 소문자 그리고 띄워쓰기 할떄의 글자는 대문자를 사용한다. 
 * 그것이 낙타같다고 해서 camelCase 라네요
 * 
 * 2) snake_case -> 파이썬같은 언어에서 사용하는건데 _ 쓰는거다 걍
 * 
 * 3) PascalCase -> C# 마이크로소프트 계열의 언어에서 사용하는데
 * camelCase와 같으나 얘는 첫번째 글자도 대문자로 써버림 ㅋㅋ
 * 
 * 결론 1번 camelCase를 제일 추천하고 많이 쓴다.
 */
