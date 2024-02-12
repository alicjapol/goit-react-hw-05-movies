import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
  color: #ffc0cb;
  background-color: #000;
  padding: 20px;
`;

export const StyledLink = styled(Link)`
  color: #ffc0cb;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const ContentList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ContentItem = styled.li`
  margin: 10px 0;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #ffc0cb;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const SearchForm = styled.form`
  margin: 20px 0;
`;

export const SearchInput = styled.input`
  padding: 5px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ffc0cb;
  color: #000;
  background-color: #ffc0cb;
`;

export const SearchButton = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  color: #000;
  background-color: #ffc0cb;
  cursor: pointer;
  &:hover {
    background-color: #ffb6c1;
  }
`;
