import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
        *{
            padding:0;
            margin:0;
            box-sizing:border-box;
        }
        body{
            width:100vw;
            height:100vh;
            background:lightgray;
        }
`

export default GlobalStyle