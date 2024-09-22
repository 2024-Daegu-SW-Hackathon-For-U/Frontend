import styled from '@emotion/styled';

export const AddPlaceBox = ({
  id,
  buttontype,
}: {
  id: string;
  buttontype: any;
}) => {
  return (
    <PlaceBox>
      <TitleWrapper>
        <h2>내 장소 등록/수정하기</h2>
      </TitleWrapper>
      <InputWrapper>
        <input placeholder='장소를 입력해주세요' id={id}></input>
        <SearchButton type={buttontype}>검색하기</SearchButton>
      </InputWrapper>
    </PlaceBox>
  );
};

const PlaceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  width: 300px;
  height: 120px;
  font-size: 14px;
  color: #606060;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;

  gap: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const TitleWrapper = styled.div`
  background-color: #59beeb;
  width: 100%;
  padding: 10px;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

const SearchButton = styled.button`
  background-color: #fff;
  font-size: 14px;
  color: #7b6fbd;
  border: 1px solid #7b6fbd;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;
