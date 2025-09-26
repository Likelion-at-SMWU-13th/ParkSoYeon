import { useMutation } from "@tanstack/react-query";
import { createUser } from "../axios";

// 회원가입 (POST)
export const useCreateUser = () => {
  return useMutation({
    mutationFn: ({ username, password }) => {
      createUser({ username, password });
    },
    onSuccess: () => {
      alert("환영합니다.");
    },
  });
};

// 개인정보 수정 (PUT)

// 마이페이지 조회 (GET)

// 회원 정보 수정 (DELETE)
