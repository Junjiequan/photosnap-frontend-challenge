import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
        *{
            padding:0;
            margin:0;
            box-sizing:border-box;
        }
        html{
            font-size:62.5%;
        }
        body{
            min-height:100vh;
            font-family:'DM Sans','arial';
        }
        a{
            text-decoration:none;
        }
        li{
            list-style: none;
        }
`

export default GlobalStyle