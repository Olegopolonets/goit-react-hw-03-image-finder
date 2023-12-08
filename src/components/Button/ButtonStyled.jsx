import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  width: 20%;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 5px solid white;
  margin: 0 auto;
  border-radius: 20px;
  font-size: 25px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;
