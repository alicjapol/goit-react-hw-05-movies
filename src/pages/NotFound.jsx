import styled from 'styled-components';

const PageContainer = styled.div`
  color: #ffc0cb;
  background-color: #000;
  padding: 20px;
  text-align: center;
`;

export default function NotFound() {
  return <PageContainer>error 404 - not found!</PageContainer>;
}
