import  styled from 'styled-components';

export const NavBar = styled.nav`
   display:${props => !props.view?"none":"" };
   width:100%;
   max-width:90vw;
   justify-content: space-around;
   padding-left: 2rem;
   padding-right: 2rem;
   margin-left:calc((100% - 90vw)/2);
   font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   margin-top:15px;
   border-radius:50px;
   height:50px;

`;

export const Logo = styled.div`
      flex: 1;
      text-align: center;
      font-size: 24px;
      color: #1da1f2;
      margin-left: 15px;
      margin-right: 15px;
`;
export const AreaRight = styled.div`
    display: flex;
    align-items:center;
    justify-content:flex-end;
    flex: 2;
    height: 40px;
    
`;
export const TwettarBtn = styled.button`
   
   border: solid 1px transparent;
   background-color:#4AB3F4;
   padding:3px 5px;
   color:#fff;
   border-radius:15px;
   font-weight:bold;
`;
export const NavBrand = styled.div`
   flex:2;
`;
