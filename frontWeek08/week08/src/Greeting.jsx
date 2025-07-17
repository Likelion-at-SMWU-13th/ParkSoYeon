import React, { useEffect, useState } from "react";

// Redirection.jsx에서 받은 Access Token 으로 리소스 서버의 자원 요청하기
const Greeting = () => {
  // 사용자 이름
  const [name, setName] = useState();
  //사용자 프로필
  const [profileImg, setProfileImg] = useState();

  useEffect(() => {
    // Redirection.jsx에서 로컬 스토리지에 저장해놓은 access token 가져오기
    const accessToken = localStorage.getItem("accessToken");

    // access token 바탕으로 카카오 서버에 사용자 정보 요청
    fetch("https://kapi.kakao.com/v2/user/me", {
      method: "GET",
      headers: {
        // 헤더에 access token 포함해서 전송
        Authorization: `Bearer ${accessToken}`,
        "Content-type": "application/x-www-form-urlencoded",
      },
    }).then((res) => {
      const userData = res.json();
      /* 우리는 카카오 페이지에서 1.이름 2.프로필 이미지 받아온다고 설정했으므로
      두 가지를 받아와서 상태 변경하기*/
      userData.then((user) => {
        setName(user.properties.nickname);
        setProfileImg(user.properties.profile_image);
      });
    });
  }, []);

  // 응답값(사용자 이름, 프로필)을 화면에 띄우기
  return (
    <div>
      <div
        className="profile-image-div"
        style={{ backgroundImage: `url(${profileImg})` }}
      ></div>
      <h2>{name}</h2>
    </div>
  );
};

export default Greeting;
