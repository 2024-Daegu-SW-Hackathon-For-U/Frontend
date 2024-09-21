import styled from '@emotion/styled';

interface MapListBoxProps {
  title: string;
  address: string;
  des: string;
}

export const MapListBox = ({ title, address, des }: MapListBoxProps) => {
  return (
    <PlaceBox2>
      <h2>{title}</h2>
      <text style={{ fontWeight: 'bold' }}>{address}</text>
      <text style={{ color: 'gray' }}>{des}</text>
    </PlaceBox2>
  );
};

const PlaceBox2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #f5f5f5;
  width: 300px;
  height: 100px;
  font-size: 14px;
  color: #606060;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;

  padding: 10px;
  gap: 3px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
