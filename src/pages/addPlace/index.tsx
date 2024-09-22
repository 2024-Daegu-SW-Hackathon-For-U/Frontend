/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { Map, MapMarker, useMap } from 'react-kakao-maps-sdk';

import { BackButtonWhite } from '@/components/Map/BackButton';
import styled from '@emotion/styled';

function KakaoKeywordMap() {
  const [map, setMap] = useState<any>();
  const [markers, setMarkers] = useState<any[]>([]);
  const [places, setPlaces] = useState<any[]>([]);

  const [searchInput, setSearchInput] = useState('이태원 맛집');
  const [keyword, setKeyword] = useState('이태원 맛집');
  // @ts-ignore
  const [selectedPlace, setSelectedPlace] = useState();

  const markerImageSrc =
    'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png';
  const imageSize = { width: 36, height: 37 };
  const spriteSize = { width: 36, height: 691 };

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setKeyword(searchInput);
  };

  useEffect(() => {
    if (!map) return;
    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(keyword, (data: any, status: any, _pagination: any) => {
      if (status === window.kakao.maps.services.Status.OK) {
        setPlaces(data);

        const bounds = new window.kakao.maps.LatLngBounds();
        let markers = [];

        for (var i = 0; i < data.length; i++) {
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          // @ts-ignore
          bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        map.setBounds(bounds);
      }
    });
  }, [map, keyword]);

  const EventMarkerContainer = ({ position, content, i }: any) => {
    const map = useMap();
    const [isVisible, setIsVisible] = useState(false);

    return (
      <MapMarker
        position={position}
        image={{
          src: markerImageSrc,
          size: imageSize,
          options: {
            spriteSize: spriteSize,
            spriteOrigin: new window.kakao.maps.Point(0, i * 46 + 10),
            offset: new window.kakao.maps.Point(13, 37),
          },
        }}
        onClick={(marker) => {
          map.panTo(marker.getPosition());
          setSelectedPlace(places[i]);
        }}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      >
        {isVisible && <div style={{ color: '#000' }}>{content}</div>}
      </MapMarker>
    );
  };

  return (
    <MapWrap>
      <Map
        center={{
          lat: 37.566826,
          lng: 126.9786567,
        }}
        style={{
          width: '100%',
          height: '100vh',
        }}
        level={3}
        onCreate={setMap}
      >
        {markers.map((marker, i) => (
          <EventMarkerContainer
            key={`EventMarkerContainer-${marker.position.lat}-${marker.position.lng}`}
            position={marker.position}
            content={marker.content}
            i={i}
          />
        ))}
      </Map>
      <BackButtonsWrapper>
        <BackButtonWhite label='공부하기 좋은 카페' />
      </BackButtonsWrapper>
      <MenuWrap className='bg_white'>
        <div className='option'>
          <div>
            <form onSubmit={handleSearchSubmit}>
              키워드 :{' '}
              <input
                type='text'
                value={searchInput}
                onChange={handleKeywordChange}
                id='keyword'
                size={20}
                style={{ border: '1px solid' }}
              />
              <button type='submit'>검색하기</button>
            </form>
          </div>
        </div>
        <hr />
        <PlacesList>
          {places.map((item, i) => (
            <li
              key={i}
              className='item'
              onClick={() => {
                map.panTo(
                  new kakao.maps.LatLng(
                    markers[i].position.lat,
                    markers[i].position.lng
                  )
                );
                setSelectedPlace(item);
              }}
            >
              <span className={`markerbg marker_${i + 1}`}></span>
              <div className='info'>
                <h5>{item.place_name}</h5>
                {item.road_address_name ? (
                  <>
                    <span>{item.road_address_name}</span>
                    <span className='jibun gray'>{item.address_name}</span>
                  </>
                ) : (
                  <span>{item.address_name}</span>
                )}
                <span className='tel'>{item.phone}</span>
              </div>
            </li>
          ))}
        </PlacesList>
        <Pagination />
      </MenuWrap>
    </MapWrap>
  );
}

export default KakaoKeywordMap;

const MapWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 16px;
`;

const BackButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  top: 6%;
  z-index: 100;
  position: absolute;
`;

const MenuWrap = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);

  &::-webkit-scrollbar {
    display: none;
  }

  width: 80%;
  max-height: 30%;
  margin: 10px 0 30px 10px;
  padding: 5px;
  overflow-y: auto;
  background: transparent;
  z-index: 1;
  font-size: 16px;
  border-radius: 10px;

  &.bg_white {
    background: #fff;
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 2px solid #5f5f5f;
    margin: 3px 0;
  }

  .option {
    text-align: center;
    height: 28px;
    p {
      margin: 10px 0;
    }

    button {
      margin-left: 5px;
    }
  }
`;

const PlacesList = styled.ul`
  li {
    list-style: none;
  }

  .item {
    position: relative;
    border-bottom: 1px solid #888;
    overflow: hidden;
    cursor: pointer;
    min-height: 65px;

    span {
      display: block;
      margin-top: 4px;
    }

    h5,
    .info {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .info {
      padding: 10px 0 10px 55px;

      .gray {
        color: #8a8a8a;
      }

      .jibun {
        padding-left: 26px;
        background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_jibun.png)
          no-repeat;
      }

      .tel {
        color: #009900;
      }
    }

    .markerbg {
      float: left;
      position: absolute;
      width: 36px;
      height: 37px;
      margin: 10px 0 0 10px;
      background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png)
        no-repeat;
    }

    ${[...Array(15)]
      .map(
        (_, i) => `
      .marker_${i + 1} {
        background-position: 0 ${-10 - i * 46}px;
      }
    `
      )
      .join('')}
  }
`;

const Pagination = styled.div`
  margin: 10px auto;
  text-align: center;

  a {
    display: inline-block;
    margin-right: 10px;
  }

  .on {
    font-weight: bold;
    cursor: default;
    color: #777;
  }
`;
