import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  font-family: "Pretendard-Semibold";
  display: flex;
  width: 100%;
  height: 100px;

  justify-content: center;
  align-items: center;
  align-self: center;
`;

const Text = styled.p`
  text-align: center;
`;

const Form = styled.form`
  margin-left: 10px;
`;

const Select = styled.select`
  font-size: 15px;
  text-align: center;
  width: 500px;
  border-radius: 50px;
  padding: 10px 5px;
  cursor: pointer;
`;

const Option = styled.option``;

const Search = ({ search, setSearch }) => {
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <SearchContainer>
      <Text>카테고리 선택: </Text>
      <Form>
        <Select id="category" value={search} onChange={onChangeSearch}>
          <Option value="한식">한식</Option>
          <Option value="중식">중식</Option>
          <Option value="양식">양식</Option>
          <Option value="분식">분식</Option>
          <Option value="베트남 음식">베트남 음식</Option>
        </Select>
      </Form>
    </SearchContainer>
  );
};

export default Search;
