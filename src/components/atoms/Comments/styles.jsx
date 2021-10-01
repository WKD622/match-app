import styled from "styled-components";

export const PlayerNameContainer = styled.div`
  padding: 0 10px;
`
export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({justifyContent}) => justifyContent};
`;
