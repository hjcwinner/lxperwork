## 주요기능
----------
* Login후 토큰 발행 & 토큰을 통한 접근
* API 연동으로 받아온 정보(list) 뿌려주기
* API 연동으로 Detail, Post(수정), Delete 구현 

## 완성 화면
----------
<img src="https://user-images.githubusercontent.com/67583080/99089796-1b584000-2611-11eb-9196-3766703d8723.PNG" width="33%"><img src="https://user-images.githubusercontent.com/67583080/99090410-f4e6d480-2611-11eb-8bdf-e1dc0045bc17.PNG" width="33%"><img src="https://user-images.githubusercontent.com/67583080/99090411-f57f6b00-2611-11eb-8312-534e9e5f4298.PNG" width="33%">
<img src="https://user-images.githubusercontent.com/67583080/99090413-f6180180-2611-11eb-99ef-c12396b3b860.PNG" width="33%"><img src="https://user-images.githubusercontent.com/67583080/99090415-f6b09800-2611-11eb-9342-2f24006d6430.PNG" width="33%">

## 실행방법 & 배포
----------
* 로그인(id : 05c811c4-519f-44d9-9bbb-30665ae77738)후 문제 리스트 확인후 +버튼을 눌러서
  새글(create)작성을 하고 작성한 후에 list화면에서 연필모양을 눌러서 Detail, Post(수정), Delete을 확인
* 배포주소 : https://hjcwinner.github.io/

## 활용한 기술
----------
* react-router-dom{ HashRouter as Router, Route, Switch, Redirect, Link, useHistory }
* Hook(useState, useEffect)
* axios를 이용한 Api 연동
* styled-components, bootstrap, react-bootstrap 이용한 css

*프로젝트에서 routing을 위해서 react-router-dom을 사용

*DETAIL페이지, POST에서 api값을 받고 뿌려주기 위해서 hook이 꼭 필요

*비동기방식으로 json데이터를 쉽게 받고 보내기 위해 axios사용

*LOGIN후 토큰값을 담고,삭제 하기 위해 localStorage사용

## TO DO LIST
------------

✔︎ 코드 리펙토링

✔︎ react-redux를 이용한 상태관리

✔︎ 퍼블리셔, 벡엔드 관리자와 협업 및 조율

✔︎ react-native로 제작 및 배포
