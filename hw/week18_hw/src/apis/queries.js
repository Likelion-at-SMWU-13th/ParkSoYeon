import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { createUser, updateUser, readUser } from "../axios";

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

// 마이페이지 조회 (GET)
export const useReadUser = (userId) => {
  return useQuery({
    queryKey: ["users", userId],
    queryFn: () => readUser(userId),
    staleTime: 30 * 1000,
    retry: 3,
  });
};

// 개인정보 수정 (PUT)
export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ userId, username }) => {
      updateUser(userId, { username });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

// 회원 정보 수정 (DELETE)
