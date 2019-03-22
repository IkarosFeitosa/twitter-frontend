import styled,{createGlobalStyle} from 'styled-components';

export const GlobalStyles  = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;
    }
    body{
        font-family: 'Open Sans', sans-serif;
        text-rendering:optimizeLegibility;
        -webkit-font-smoothing:antialiased;
        
    }
    html,border-style,#root{
        height:100%;
    }
    
`;

export const App = styled.div`
  margin:0;
  padding:0;
  width:100%;
`;
export const AppBody=styled.div`
    margin:0;
    .containerTweets{
        display:flex;
        flex-direction:column;
        margin-left:350px;

    }
    
`;
