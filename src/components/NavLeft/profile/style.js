import styled from 'styled-components';

export const ImageProfile = styled.div`
  width:210px;
  height:210px;
  border:solid 10px #fff;
  border-radius:100px;
  box-shadow:5px 0px 8px #2d2c2c78;
  background-color:white;
  background-image:url(${props=> props.src});
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
  transition:all linear 0.2s;
  @media screen and (max-width: 764px){
    width:100px;
    height:100px;
  }
  
  
`;
