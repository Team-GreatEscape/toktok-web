import * as S from "./style";
import background from "../../assets/images/background.svg";

const Home = () => {
  return (
    <S.Container>
      <S.Title>TokTok</S.Title>
      <S.Description>19,000건의 매칭이 진행 중이에요</S.Description>
      <S.Button>비디오챗 시작하기</S.Button>
      <S.BackgroundImage src={background} alt="background" />
    </S.Container>
  );
};

export default Home;
