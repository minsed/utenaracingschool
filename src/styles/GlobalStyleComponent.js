import { createGlobalStyle } from '@nfront/global-styles';
import globalStyle from '!css-loader!sass-loader!./index.scss';

const GlobalStyleComponent = createGlobalStyle`
  ${globalStyle[0][1]}
`;

export default GlobalStyleComponent;