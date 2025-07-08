import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 15vh;
  font-family: "Pretendard-Bold";
`;

const CategoryBox = styled.div`
  padding: 0.3125rem;
  cursor: pointer;
`;

const Form = styled.form``;

const Select = styled.select`
  width: 7rem;
  height: 2.3rem;
  text-align: center;
  border-width: 0.125rem;
  border-radius: 2rem;
  font-size: 0.9375rem;
`;

const Option = styled.option``;

const SearchBox = styled.div`
  padding: 0.3125rem;
  cursor: pointer;
`;

const Input = styled.input`
  width: 16.875rem;
  height: 2.5rem;
  border-radius: 2rem;
  text-align: center;
  margin: 0.3125rem;
  font-size: 1rem;
`;

const Search = ({ category, setCategory, search, setSearch }) => {
  const inputRef = useRef();
  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <SearchContainer>
        {/* 카테고리 선택 */}
        <CategoryBox>
          <Form>
            <Select id="category" value={category} onChange={onChangeCategory}>
              <Option value="한식">한식</Option>
              <Option value="중식">중식</Option>
              <Option value="양식">양식</Option>
              <Option value="분식">분식</Option>
              <Option value="베트남 음식">베트남 음식</Option>
            </Select>
          </Form>
        </CategoryBox>

        {/* 검색창 */}
        <SearchBox>
          <Input
            ref={inputRef}
            placeholder="검색할 가게명을 입력하세요."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchBox>
      </SearchContainer>
    </>
  );
};

export default Search;
