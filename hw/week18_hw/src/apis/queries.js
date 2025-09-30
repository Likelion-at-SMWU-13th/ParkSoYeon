import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { createUser, updateUser, readUser, deleteUser } from "../axios";

// 회원가입 (POST)
export const useCreateUser = () => {
  return useMutation({
    mutationFn: ({ username, password }) => {
      return createUser({ username, password });
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
    gcTime: 10 * 60 * 1000, // delete 요청 있더라도 10분 캐시에 유지시킴
    retry: 3,
  });
};

// 개인정보 수정 (PUT)
export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId, username) => {
      return updateUser(userId, { username });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

// 회원 정보 삭제 (DELETE)
export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userId) => {
      return deleteUser(userId);
    },
    onSuccess: () => {
      alert("회원 정보가 삭제 되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
