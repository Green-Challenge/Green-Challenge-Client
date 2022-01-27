import {CSSProp} from 'styled-components/macro';

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
