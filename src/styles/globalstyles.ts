import { createGlobalStyle } from "styled-components";
import { fontInter } from './fonts';

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    min-height: 100%;
    background-image: linear-gradient(${({ theme }) => theme.COLORS.WHITE}, ${({ theme }) => theme.COLORS.GRAY_50});
    font-size: 62.5%; // 10px
  }
   body{
    background: ${({ theme }) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
   }
  *, button, input {
    border: 0;
    background: none;
    //font-family: fontInter, -apple-system, system-ui, sans-serif;
  }
  ul {
    list-style: none;
  }

  button{
      cursor: pointer;
  }

  @media (max-width: 1080px){
      html{
          //font-size: 63.75% // 15px
      }
  }

  @media (max-width: 720px){
    html{
        //font-size: 87.5% // 14px
    }
  }

`