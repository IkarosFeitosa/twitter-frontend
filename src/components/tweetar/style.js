import styled from 'styled-components';

export const TweetContainer = styled.div`
  margin-top:10px;
  max-width:500px;
  background-color:#E8F5FD;
  border-radius:10px;
  display:flex;
  flex-direction:column;
  padding:10px;
  margin-bottom:15px;
  & * {
    font-family: 'Roboto', sans-serif;
  }
  textarea{
      
      width:100%;
      height:60px;
      border-radius:10px;
      resize:none;
      border:solid 1px #b3d7ff;
      padding:7px 6px;
      &:focus{
        border:solid 1px rgba(0,123,255,0.5);
      }
  }
  button{
      background-color:#4AB3F4;
      border:solid 1.5px #4AB3F4;
      border-radius:50px;
      padding:3px 8px;
      color:#fff;
      width:fit-content;
      margin-top:8px;
      align-self:flex-end;
      font-size:14px;
      font-weight:bold;
      &:disabled {
        background-color:transparent;
        color:#4AB3F4;
      }
  }
`;
