import styled from "@emotion/styled";

// 큰 단위를 styled.div로 만들고 내부의 요소들은 css 선택자로 관리해주시면 좋을 것 같습니다.
// 필요에 따라 여러개의 css-in-js 요소를 선언하여 사용하셔도 좋을 것 같습니다.

export const ExampleWrapper = styled.div`
  & > div {
    height: 100px;
  }
  & > .count_holder {
    border: 1px solid black;
    text-align: center;
    vertical-align: middle;
  }
`;
