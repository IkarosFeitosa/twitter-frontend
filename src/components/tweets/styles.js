import styled from 'styled-components';

export const TweetContainer = styled.div`
  
  width:100%;
  max-width:500px;
  padding:15px 10px;
  border-bottom: solid 1px #eeeeee;
  border-radius:5px;
  display:flex;
  flex-direction:column;
  font-family: 'Source Sans Pro', sans-serif;
  header{
      font-family: 'Roboto', sans-serif;
      display:flex;
      flex-direction:row;
      align-items:center;
  }
  p{
      font-family: 'Roboto', sans-serif;
      margin-top:10px;
      font-size:20px;
  }
`;
export const ImageProfile = styled.div`
    background-image:url(${props => props.src});
    background-repeat:no-repeat;
    background-size:cover;
    width:38px;
    height:38px;
    border:solid 2px #eee;
    border-radius:100px;
    margin-right:10px;
    
`;
