# For U - Hot in Daegu


Frontend: https://github.com/2024-Daegu-SW-Hackathon-For-U/Frontend

Backend : https://github.com/2024-Daegu-SW-Hackathon-For-U/Backend

FE 배포 : http://hot-in-daegu.s3-website.ap-northeast-2.amazonaws.com/

BE 배포 : http://35.209.121.241:8080

BE API Docs: http://35.209.121.241:8080/api-docs

## 서비스 요약

관광특구로 지정된 '대구시'의 관광지, 맛집 등 여러 장소를 서로 공유할 수 있는
서비스

## 주제 구분

- C타입 대구 지역 상권을 살리는데 도움을 주는 서비스

## 팀원 소개

|                                             백엔드                                             |                                         백엔드                                         |                                        프론트엔드                                        |                                        프론트엔드                                        |
| :--------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------: |
| [<img src="https://github.com/Koo-EunSung.png" width="100px">](https://github.com/Koo-EunSung) | [<img src="https://github.com/SungHHo.png" width="100px">](https://github.com/SungHHo) | [<img src="https://github.com/seung365.png" width="100px">](https://github.com/seung365) | [<img src="https://github.com/Dobbymin.png" width="100px">](https://github.com/Dobbymin) |
|                            [구은성](https://github.com/Koo-EunSung)                            |                         [SungHHo](https://github.com/SungHHo)                          |                         [seung365](https://github.com/seung365)                          |                         [Dobbymin](https://github.com/Dobbymin)                          |

## 시연 영상

(필수) Youtube 링크 (선택) Github Repository 페이지에서 바로 볼 수 있도록
넣어주셔도 좋습니다.

## 서비스 소개

### 서비스 개요

인스타그램이나 유튜브, 블로그 등에 존재하는 맛집이나 관광지들은 쉽게 찾아볼 수
있습니다. 하지만 이렇게 찾은 정보를 통해 해당 장소를 방문했을 때는 웨이팅이
존재하거나, 소개된 것 만큼 높은 만족도를 주지 못하는 경우가 많습니다.

그래서 저희는 직접 지도에 본인이 맛집이나 관광지를 등록하여 다른 사용자와 내
지도를 공유함으로써 나만 아는 숨겨진 장소를 공유하는 서비스를 제작해보았습니다.
주변에 잘 알려지지 않은 나만의 장소를 공유하게 될 경우 앞서 설명했던 웨이팅이나
낮은 만족도 부분을 어느정도 개선할 수 있다고 생각하여 이러한 서비스를 만들게
되었습니다.

### 타서비스와의 차별점

서울 / 경기권 도시들은 이러한 관광 및 맛집 관련 서비스가 다수 있으나, 대구와
같은 지방에는 서비스가 많이 없는 것 같다. 대구시가 이번에 관광 특구로 지정된
만큼 관광지와 맛집, 카페 등등 여러가지 정보를 얻을 수 있고, 사용자가 서로 정보를
공유할 수 있는 기능도 추가하였다.

### 구현 내용 및 결과물

1. 지도를 활용한 맛집 및 관광지 찾기

지도를 펼쳐 찾고싶은 내 주변 맛집과 관광지를 알아볼 수 있다.

2. 지도를 활용한 내 맛집 및 관광지 공유

지도를 통해 내가 알고있는 맛집 및 관광지를 내 지도에 등록하여 다른 사용자와
공유할 수 있다.

### 구현 방식

**FE**

React+vite, Typescript, Chakra UI, Tanstack Query v5, @emotion, kakao-map,
swiper, kakao-login, zustand

배포 : AWS - S3 bucket, Git Action

**BE**

Spring Boot, JPA, Spring, My SQL

배포 : GCP - vm 인스턴스, Git Action, Docker

## 향후 개선 혹은 발전 방안

저희 서비스의 경우 실 사용자가 많아질수록 더 발전할 가능성이 높습니다. 기존에
존재하지 않는 정보들을 많은 사용자가 직접 본인의 지도에 등록하게 된다면 다른
사용자들이 추가적인 정보를 풍부하게 얻을 수 있을 것 같습니다.

이를 바탕으로 대구에 방문하는 관광객 유치에 조금이나마 기여할 수 있다고
생각합니다.
