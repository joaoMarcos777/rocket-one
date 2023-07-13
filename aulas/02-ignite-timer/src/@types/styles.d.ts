import "styled-components";
import { defaultTheme } from "../styles/themes/default";

// It stores the values inside the defaultTheme
type ThemeType = typeof defaultTheme;

// Overwrites the types for styles-components
// Basically add a default theme to the project using the DefaultTheme Interface of styles-components
declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
