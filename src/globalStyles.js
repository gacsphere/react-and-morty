import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
--primary: deepskyblue;
--secondary: #00a7df;
--tertiary: #4cd2ff;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
    font-family: "Poppins", sans-serif;
}

/* poppins-200 - latin */
@font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 200;
    src: url('./assets/fonts/poppins-v20-latin-200.eot'); /* IE9 Compat Modes */
    src: local(''),
         url('./assets/fonts/poppins-v20-latin-200.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('./assets/fonts/poppins-v20-latin-200.woff2') format('woff2'), /* Super Modern Browsers */
         url('./assets/fonts/poppins-v20-latin-200.woff') format('woff'), /* Modern Browsers */
         url('./assets/fonts/poppins-v20-latin-200.ttf') format('truetype'), /* Safari, Android, iOS */
         url('./assets/fonts/poppins-v20-latin-200.svg#Poppins') format('svg'); /* Legacy iOS */
  };
/* poppins-300 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    src: url('./assets/fonts/poppins-v20-latin-300.eot'); /* IE9 Compat Modes */
    src: local(''),
         url('./assets/fonts/poppins-v20-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('./assets/fonts/poppins-v20-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
         url('./assets/fonts/poppins-v20-latin-300.woff') format('woff'), /* Modern Browsers */
         url('./assets/fonts/poppins-v20-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
         url('./assets/fonts/poppins-v20-latin-300.svg#Poppins') format('svg'); /* Legacy iOS */
  };
/* poppins-regular - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: url('./assets/fonts/poppins-v20-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
         url('./assets/fonts/poppins-v20-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('./assets/fonts/poppins-v20-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
         url('./assets/fonts/poppins-v20-latin-regular.woff') format('woff'), /* Modern Browsers */
         url('./assets/fonts/poppins-v20-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
         url('./assets/fonts/poppins-v20-latin-regular.svg#Poppins') format('svg'); /* Legacy iOS */
  };
/* poppins-600 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    src: url('./assets/fonts/poppins-v20-latin-600.eot'); /* IE9 Compat Modes */
    src: local(''),
         url('./assets/fonts/poppins-v20-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('./assets/fonts/poppins-v20-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
         url('./assets/fonts/poppins-v20-latin-600.woff') format('woff'), /* Modern Browsers */
         url('./assets/fonts/poppins-v20-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
         url('./assets/fonts/poppins-v20-latin-600.svg#Poppins') format('svg'); /* Legacy iOS */
  };
/* poppins-900 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 900;
    src: url('./assets/fonts/poppins-v20-latin-900.eot'); /* IE9 Compat Modes */
    src: local(''),
         url('./assets/fonts/poppins-v20-latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('./assets/fonts/poppins-v20-latin-900.woff2') format('woff2'), /* Super Modern Browsers */
         url('./assets/fonts/poppins-v20-latin-900.woff') format('woff'), /* Modern Browsers */
         url('./assets/fonts/poppins-v20-latin-900.ttf') format('truetype'), /* Safari, Android, iOS */
         url('./assets/fonts/poppins-v20-latin-900.svg#Poppins') format('svg'); /* Legacy iOS */
  };
`;

export default GlobalStyle;
