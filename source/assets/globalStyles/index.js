// Core
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// Fonts
import { fonts } from '../';

export default {
    GlobalReset: createGlobalStyle`
    ${reset}

    * {
      outline: none;
    }

    button {
      cursor:  pointer;
      border:  none;
      padding: 0px;

      &:hover      {
        opacity: 0.8;
      }

      &:disabled {
          opacity: 0.5;
          cursor:  not-allowed;
      }
    }
  `,

    GlobalFonts: createGlobalStyle`
      @font-face {
        font-family: PacificoRegular;
        src: url('${fonts.PacificoRegular}') format('opentype');
      }
      @font-face {
        font-family: CourgetteRegular;
        src: url('${fonts.CourgetteRegular}') format('opentype');
      }
  `,
};
