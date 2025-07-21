import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

// Authorization Code로 토큰 받기
const Redirection = () => {
  // Login.jsx를 통해 받은 Authorization Code를 URI에서 추출하는 과정
  const [params] = useSearchParams();

  // authCode에 Authorization Code 담기게 됨
  const authCode = params.get("code");
  const grant_type = "authorization_code";
  const navigate = useNavigate();

  /* 1. &client_id=${import.meta.env.VITE_REST_API_KEY} : 카카오 REST API 키, 
     2. &redirect_uri=${import.meta.env.VITE_REDIRECT_URI} : 인가 완료 후, Authorization code가 전달될 URI
     3. &code=${authCode}` : URI에서 추출한 Authorization Code
     3가지 담아 Access Token 요청
   */
  useEffect(() => {
    fetch(
      `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}
      &client_id=${import.meta.env.VITE_REST_API_KEY}
      &redirect_uri=${import.meta.env.VITE_REDIRECT_URI}
      &code=${authCode}`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    ).then((res) => {
      // 응답 제대로 오면, json으로 파싱
      const data = res.json();
      // 받은 Access Code를 로컬 스토리지에 저장
      data.then((data) => {
        localStorage.setItem("accessToken", data.access_token);
        navigate("/greeting");
      });
    });
  }, [authCode, grant_type, navigate]);

  return <div>Redirection Page: 카카오 로그인 중...</div>;
};

export default Redirection;
