import { useEffect, useRef, useState } from "react";
import axios from "axios";
import * as S from "./styled";

// 카카오 REST API 키 불러오기
const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;

const KakaoMap = ({ locationInput }) => {
  const mapRef = useRef(null); // 지도 DOM 참조
  const map = useRef(null); // 지도 객체
  // API에서 받은 경로 정보 저장
  const [routeInfo, setRouteInfo] = useState(null);

  // 지도 생성
  useEffect(() => {
    map.current = new window.kakao.maps.Map(mapRef.current, {
      center: new window.kakao.maps.LatLng(37.5665, 126.978),
      level: 5,
    });
  }, []);

  // 주소 → 좌표 변환
  const getCoords = async (address) => {
    // 카카오 로컬 API 사용
    const res = await axios.get(
      "https://dapi.kakao.com/v2/local/search/keyword.json",
      {
        headers: { Authorization: `KakaoAK ${KAKAO_REST_API_KEY}` },
        params: { query: address },
      }
    );

    // 최상단 검색 결과 사용
    const place = res.data.documents[0];
    if (!place) {
      console.log(`장소를 찾을 수 없습니다: "${address}"`);
    }

    // 위도, 경도 값 반환
    return { x: place.x, y: place.y };
  };

  // 경로 데이터 요청
  const getRoute = async (start, stopover, end) => {
    const res = await axios.post(
      "https://apis-navi.kakaomobility.com/v1/waypoints/directions",
      {
        origin: start, // 출발
        destination: end, // 도착
        waypoints: [stopover], // 경유지
        priority: "RECOMMEND", // 추천 경로
        car_fuel: "GASOLINE",
        car_hipass: false,
        alternatives: false,
        road_details: true,
        summary: false,
      },
      {
        headers: {
          Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  };

  // 마커 생성 함수
  const addMarker = (coords, title) => {
    const pos = new window.kakao.maps.LatLng(coords.y, coords.x);
    new window.kakao.maps.Marker({ position: pos, title }).setMap(map.current);
  };

  useEffect(() => {
    const { origin, waypoint, destination } = locationInput || {};
    if (!origin || !waypoint || !destination) return;

    (async () => {
      const [sp, wp, ep] = await Promise.all([
        getCoords(origin),
        getCoords(waypoint),
        getCoords(destination),
      ]);

      addMarker(sp, "출발지");
      addMarker(wp, "경유지");
      addMarker(ep, "도착지");

      const route = await getRoute(
        { x: sp.x, y: sp.y, angle: 0 },
        { name: "w1", x: wp.x, y: wp.y },
        { x: ep.x, y: ep.y }
      );
      setRouteInfo(route);
    })();
  }, [locationInput]);

  // 좌표 변환 + 경로 데이터 요청
  useEffect(() => {
    const { origin, waypoint, destination } = locationInput || {};
    if (!origin?.trim() || !waypoint?.trim() || !destination?.trim()) return;

    const fetchAndDraw = async () => {
      try {
        const [startPoint, stopPoint, endPoint] = await Promise.all([
          getCoords(origin),
          getCoords(waypoint),
          getCoords(destination),
        ]);

        const startData = { x: startPoint.x, y: startPoint.y, angle: 0 };
        const stopData = {
          name: "waypoint1",
          x: parseFloat(stopPoint.x),
          y: parseFloat(stopPoint.y),
        };
        const endData = { x: endPoint.x, y: endPoint.y };

        const route = await getRoute(startData, stopData, endData);
        setRouteInfo(route);
      } catch (err) {
        console.error("경로 요청 실패:", err.message);
      }
    };

    fetchAndDraw();
  }, [locationInput]);

  // 지도에 경로 polyline 표시
  useEffect(() => {
    if (!routeInfo || !map.current) return;

    const pathPoints = [];

    routeInfo.routes[0].sections.forEach((section) => {
      section.roads.forEach((road) => {
        const coords = road.vertexes;
        for (let i = 0; i < coords.length; i += 2) {
          pathPoints.push(
            new window.kakao.maps.LatLng(coords[i + 1], coords[i])
          );
        }
      });
    });

    // polyline 모양 설정
    const polyline = new window.kakao.maps.Polyline({
      path: pathPoints,
      strokeWeight: 5,
      strokeColor: "#ff86b7",
      strokeOpacity: 0.8,
      strokeStyle: "solid",
    });

    // 지도 위에 polyline 표시
    polyline.setMap(map.current);

    // routeInfon 바뀌면 기존 선 제거
    if (pathPoints.length > 0) {
      map.current.setCenter(pathPoints[0]);
    }
  }, [routeInfo]);

  return <S.Map ref={mapRef} />; //지도 렌더링
};

export default KakaoMap;
