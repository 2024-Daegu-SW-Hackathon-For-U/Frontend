import SearchIcon from '@/assets/home/SearchIcon.svg';
import { Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

interface SearchProps {
  keyword: string;
  setKeyword: (keyword: string) => void;
}

const Search = ({ keyword, setKeyword }: SearchProps) => {
  return (
    <Wrapper>
      <Input
        placeholder='찾고 싶은 장소를 입력해주세요'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <IconWrapper>
        <Image src={SearchIcon} alt='Search icon' />
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
  width: 19.5rem;
  height: 3rem;

  &:placeholder {
    color: #a3a3a3;
    font-size: 14px;
  }

  &:focus {
    outline: none;
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
