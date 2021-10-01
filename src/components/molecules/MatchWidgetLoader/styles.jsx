import styled from "styled-components";

export const WidgetLoaderBody = styled.div`
  padding: 30px;
  width: 500px;
  height: 270px;
  background-color: #C9C9C9;
  border-radius: 25px;
  margin: 20px 0;
`;

export const ContentLoader = styled.div`
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
  background-color: darkgrey;
  border-radius: 5px;
  margin: 7px 0;
`

export const CommentsLoader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  font-size: 11px;
`;

export const WidgetHeaderLoader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ScoreLoader = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
`;
