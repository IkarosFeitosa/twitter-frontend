import styled from 'styled-components';

export const ImageCover = styled.div`
  width:100%;
  background-color:#1DA1F2;
  background-image:url(${props => props.src});
  background-position:center;
  background-size:cover;
  background-repeat:no-repeat;
  height:300px;
  box-shadow:0px -40px 30px #0000007d inset;
  transition:height linear 0.2s;
  @media screen and (max-width: 764px){
    height:200px;
  }
  display:flex;
  flex-direction:row;
  align-items:flex-end;
  
`;
export const HeaderList = styled.div`
  height:fit-content;
  margin-left:350px;
  font-family: 'Roboto', sans-serif;
  ul,li{
    background:transparent;
    color:white;
  }
  ul li {
    border-top:none;
    border-bottom:none;
    text-align:center;
    border-color:#ffffff12;
    
    :first-child{
      border-left:none;
    }
    :last-child {
      border-right:none;
    }
    h5{
      margin-bottom:0;
    }
    span{
      font-style:italic;
    }
  }
`;
