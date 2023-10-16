import { createGlobalStyle } from "styled-components";
import 'modern-normalize';

// key for api: 39172985-9aae9b27665de10b1c143dbd8
export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  font-family: inherit;
  color: currentColor;
  text-decoration: none;
}

button {
  display: block;
  padding: 0;

  font-family: inherit;
  cursor: pointer;
  border: none;
  outline: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

textarea {
  resize: none;
}
`