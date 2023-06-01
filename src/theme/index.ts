import { LoadingSpinnerTheme } from "../components/LoadingSpinner/types";
import { ThemeColors } from "./types";
import { BlueCardTheme } from "../components/Card/BlueCard/types";
import { DarkGrayCardTheme } from "../components/Card/DarkGrayCard/types";
import { GrayCardTheme } from "../components/Card/GrayCard/types";
import { LightCardTheme } from "../components/Card/LightCard/types";
import { OutlineCardTheme } from "../components/Card/OutlineCard/types";
import { YellowCardTheme } from "../components/Card/YellowCard/types";
import { BreadcrumbsTheme } from "../components/Breadcrumbs/types";
import { TableTheme } from "../components/Table/types";
import { ButtonConfirmedTheme } from "../components/Button/ButtonConfirmed/types";
import { ButtonErrorTheme } from "../components/Button/ButtonError/types";
import { ButtonPrimaryTheme } from "../components/Button/ButtonPrimary/types";
import { ButtonGrayTheme } from "../components/Button/ButtonGray/types";
import { ButtonEmptyTheme } from "../components/Button/ButtonEmpty/types";
import { ButtonLightTheme } from "../components/Button/ButtonLight/types";
import { ButtonOutlinedTheme } from "../components/Button/ButtonOutlined/types";
import { ButtonRadioCheckedTheme } from "../components/Button/ButtonRadioChecked/types";
import { ButtonSecondaryTheme } from "../components/Button/ButtonSecondary/types";
import { BaseButtonTheme } from "../components/Button/BaseButton/types";
import { ThemeButtonTheme } from "../components/Button/ThemeButton/types";

export interface UIKitTheme {
  colors: ThemeColors;
  spinner: LoadingSpinnerTheme;
  breadcrumbs: BreadcrumbsTheme;
  table: TableTheme;
  //Cards
  blueCard: BlueCardTheme;
  darkGrayCard: DarkGrayCardTheme;
  grayCard: GrayCardTheme;
  lightCard: LightCardTheme;
  outlineCard: OutlineCardTheme;
  yellowCard: YellowCardTheme;
  //Buttons
  baseButton: BaseButtonTheme,
  buttonConfirmed: ButtonConfirmedTheme
  buttonError: ButtonErrorTheme,
  buttonPrimary: ButtonPrimaryTheme,
  buttonGray: ButtonGrayTheme,
  buttonEmpty: ButtonEmptyTheme,
  buttonLight: ButtonLightTheme
  buttonOutlined: ButtonOutlinedTheme,
  buttonRadioChecked: ButtonRadioCheckedTheme,
  buttonSecondary: ButtonSecondaryTheme,
  themeButton: ThemeButtonTheme
}

export { default as dark } from "./dark";
export { default as light } from "./light";
