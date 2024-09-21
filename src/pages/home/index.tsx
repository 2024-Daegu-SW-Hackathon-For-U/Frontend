import { SearchButtonL, SearchButtonM } from '@/components/Home/Buttons';
import Search from '@/components/Home/Search';

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Search />
      <SearchButtonM label='내 주변 장소 찾기' />
      <SearchButtonL label='내 주변 장소 찾기' />
    </>
  );
};

export default HomePage;
