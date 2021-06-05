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
            background:lightgray;
            font-family:'DM Sans','Sans-Serif';
        }
        a{
            text-decoration:none;
        }
        li{
            list-style: none;
        }
`

export default GlobalStyle