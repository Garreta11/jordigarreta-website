import { createGlobalStyle } from 'styled-components';

import FugueMono from './FugueMono.otf';
import HelveticaNeueBlackExt from './HelveticaNeueBlackExt.otf';


export default createGlobalStyle`
    @font-face {
        font-family: 'FugueMono';
        src: url(${FugueMono}) format('otf');
        font-weight: 300;
        font-style: normal;
    }
`;
