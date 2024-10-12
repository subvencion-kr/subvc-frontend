import SubsidyBox from "../components/subsidy/SubsidyBox";
import styled from "styled-components";

// 스타일 정의
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  gap: 20px; /* 박스들 간의 간격 */
`;

function Main() {
  const welfareData = [
    {
      title: "취약계층 무료 법률서비스 제공",
      institution: "법무부 · 행정안전부",
      target: "기초생활수급자, 장애인, 범죄피해자 등 취약계층",
      method: "기타 온라인 신청",
      deadline: "접수기간 별도 달라요",
      eligible: true,
    },
    {
      title: "취약계층 무료 법률서비스 제공",
      institution: "법무부 · 행정안전부",
      target: "기초생활수급자, 장애인, 범죄피해자 등 취약계층",
      method: "기타 온라인 신청",
      deadline: "접수기간 별도 달라요",
      eligible: false,
    },
    // 추가 데이터...
  ];

  return (
    <MainContainer>
      <BoxContainer>
        {welfareData.map((welfare, index) => (
          <SubsidyBox key={index} {...welfare} />
        ))}
        {welfareData.map((welfare, index) => (
          <SubsidyBox key={index} {...welfare} />
        ))}
        {welfareData.map((welfare, index) => (
          <SubsidyBox key={index} {...welfare} />
        ))}
      </BoxContainer>
    </MainContainer>
  );
}

export default Main;
