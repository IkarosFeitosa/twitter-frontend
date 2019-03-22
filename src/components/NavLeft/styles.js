import styled, { css } from 'styled-components';

export const ContainerNav = styled.div`
  position:fixed;
  top: 45px;
  margin-left:60px;
  
  @media screen and (max-width: 764px) {
    top: -55px;    
    }

`;
export const NavList = styled.ul`
    width:210px;
    padding-left:10px;
    margin-top:60px;
    header{
      margin-bottom:10px;
      display:flex;
      &:hover .btnEdit{
          display:inline-block;
      }
      .btnEdit {
        display:none;
        margin-left:10px;
      }
      
    }
    li{
      
      list-style:none;
      padding:3px 0px;
      
      &.description{
          margin-bottom:10px;
      }

      &.text-muted{
        svg{
          margin-right:5px;
        }
      }
      
    }
    

   
`;
export const NameUser = styled.input`
       
    width:100%;
    font-size:20px;
    font-weight:bold;
    border:0px;

    font-size:${props => props.length<=17?`20px`:(20 - (props.length * 4)/17)+`px`}

    ${props => !props.readOnly && css`
      border-bottom:solid 1px #ccc;
    `}
    
        
`;
