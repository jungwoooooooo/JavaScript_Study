/**
 * Data Types
 * 
 * 여섯개의  Primitive Type과
 * 한개의 오브젝트 타입이 있다.
 * 
 * //Primitive Type
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) Null (널)
 * 6) Symbol (심볼)
 * 
 * 7) Object (객체)
 *    Function
 *    Array
 *    Object
 */

//Number 타입
const age = 32;
const temperture = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof temperture);
console.log(typeof pi);
console.log('---------------');

const infinity = Infinity //무한대로 지정한다는 뜻
const ninfinity = -Infinity //마이너스 무한대 값을 지정한다는 뜻

console.log(typeof infinity);
console.log(typeof ninfinity);
console.log('---------------');

/**
 * String 타입
 */
const jo = 'Jo "Jung" Woo';
console.log(jo);
console.log(typeof jo);

const ive = "'아이브'의 안유진"; //문자열 안에 따옴표 넣는 법
console.log(ive);