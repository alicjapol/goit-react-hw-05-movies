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
padding: 20px;
display: flex;
text-align: center;
flex-direction: row;
flex-wrap: wrap;
font-size: 24px;
`;

export const ContentItem = styled.li`
padding: 10px;
margin: auto;
font-size: 24px;
font-weight: 300;
animation: lights 5s 750ms linear infinite;
@keyframes lights {
  0% {
    color: hsl(230, 40%, 80%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.2),
      0 0 0.125em hsla(320, 100%, 60%, 0.3),
      -1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
      1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
  }
  
  30% { 
    color: hsl(230, 80%, 90%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 60%, 0.5),
      -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
      0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }
  
  40% { 
    color: hsl(230, 100%, 95%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 90%, 0.5),
      -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
      0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);
  }
  
  70% {
    color: hsl(230, 80%, 90%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 60%, 0.5),
      0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
      -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }
  
  100% {
    color: hsl(230, 40%, 80%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.2),
      0 0 0.125em hsla(320, 100%, 60%, 0.3),
      1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
      -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
  }
  
}
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
