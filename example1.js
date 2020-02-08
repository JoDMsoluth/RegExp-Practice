// 선택자 g : 전 결과 지점 이후부터 계속 시작,
// 선택자 i : 대소문자 무시

// `#asdf #AdfeDFFG`
// 해시 태그만 추출
const exp = /#+[a-z]{1,}/i;

// /s는 공백 or 탭
const exp2 = /[a-z]+\s+#/g;

const testString = "#a #b #c";

while ((matchFind = exp2.exec(testString))) {
  console.log(matchFind);
}
