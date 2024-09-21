import styled from '@emotion/styled';

interface PlaceBoxMProps {
  title: string;
  des1?: string;
  des2?: string;
}

interface PlaceBoxLProps {
  icon: string;
  title: string;
  des1?: string;
  des2: string;
}

// 미디엄 사이즈 버튼
export const PlaceBoxM = ({ title, des1, des2 }: PlaceBoxMProps) => {
  return (
    <PlaceBox1>
      <h2 style={{ fontWeight: 'bold' }}>{title}</h2>
      <WrapperM>
        {des1 && <p>{des1}</p>}
        {des2 && <p>{des2}</p>}
      </WrapperM>
    </PlaceBox1>
  );
};

// 라지 사이즈 버튼
export const PlaceBoxL = ({ icon, title, des1, des2 }: PlaceBoxLProps) => {
  return (
    <PlaceBox2>
      <h2>{icon}</h2>
      <h2 style={{ fontWeight: 'bold' }}>{title}</h2>
      <p style={{ color: 'gray' }}>{des1 ? `${des1} | ${des2}` : des2}</p>
    </PlaceBox2>
  );
};

const PlaceBox1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  width: 90%;
  height: 100px;
  font-size: 14px;
  color: #606060;
  border-radius: 10px;
  border: 1px solid;
  cursor: pointer;
  font-weight: bold;

  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

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

const WrapperM = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  width: 90%;
`;
