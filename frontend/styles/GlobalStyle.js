import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
  ${normalize}
  body {
    padding: 3rem 0 0;
    font-family: 'Roboto', sans-serif;
    background-color: black;
  }

  .container-w{
    padding: 0 calc(3.5vw + 24px);
    overflow: hidden;
  }
`

export default GlobalStyle