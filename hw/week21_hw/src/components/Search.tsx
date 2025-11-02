import styled from "styled-components";
import type { ChangeEvent } from "react";

interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
const Search = ({ search, setSearch }: SearchProps) => {
  const onChangeSearch = (e: ChangeEvent<HTMLSelectElement>) => {
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

const SearchContainer = styled.div`
  font-family: "Pretendard-Semibold";
  display: flex;
  width: 100%;
  height: 6.25rem;

  justify-content: center;
  align-items: center;
  align-self: center;
`;

const Text = styled.p`
  text-align: center;
`;

const Form = styled.form`
  margin-left: 0.625rem;
`;

const Select = styled.select`
  font-size: 0.9375rem;
  text-align: center;
  width: 31.25rem;
  border-radius: 3.125rem;
  padding: 0.625rem 0.3125rem;
  cursor: pointer;
`;

const Option = styled.option``;
