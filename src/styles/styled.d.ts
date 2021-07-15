import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      danger:string,
      success: string,
      white:string,
      background: string,
      text: string
    };
  }
}
