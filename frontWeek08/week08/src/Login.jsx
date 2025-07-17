import React from "react";
import KakaoImg from "./assets/kakao_login.png";
import GoogleImg from "./assets/google_login.png";

/* Login.jsx는 Authorization Code(인가 코드)를 발급 받기 위한 과정을 담은 코드이다.
Authorization Code 는 Access Token을 받기 위한 중간 과정이라고 이해하면 됨!
  */
const Login = () => {
  /*1. https://kauth.kakao.com/oauth/authorize : 인가 서버의 엔드포인트 URL 
    2. response_type=code : Authorization Code를 요청
    3. client_id=${import.meta.env.VITE_REST_API_KEY} : 우리의 앱을 인식하는 REST API 키
    4. &redirect_uri=${import.meta.env.VITE_REDIRECT_URI}: 인가 완료 후, Authorization code가 전달될 URI.
      (URI는 우리가 카카오 페이지에서 등록했음) */
  const authServerLink = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
    import.meta.env.VITE_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}`;

  /* 카카오 로그인 버튼 누르면 인가 요청*/
  const handleKakao = () => {
    window.location.href = authServerLink;
  };

  return (
    <div>
      <h2>로그인</h2>
      <div className="login-box">
        <button onClick={handleKakao}>
          {" "}
          <img src={KakaoImg} alt="kakao_button" />
        </button>
        <button>
          {" "}
          <img src={GoogleImg} alt="google_button" />
        </button>
      </div>
    </div>
  );
};

export default Login;
