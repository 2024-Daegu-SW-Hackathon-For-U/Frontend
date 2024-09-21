import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <Wrapper>
      <Input placeholder='찾고 싶은 장소를 입력해주세요' />
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 220px;
  height: 40px;
  &::placeholder {
    color: #a3a3a3;
  }
  background-color: #fff;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
`;
