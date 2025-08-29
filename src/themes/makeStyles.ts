import { Theme } from "./themeStyles";
import useTheme from "./useTheme";

type Handler<T = Theme> = (theme: T, props?: any) => any;

const makeStyles =
  <S extends Handler>(styleCb: S) =>
  <P>(props?: P): ReturnType<S> => {
    const theme = useTheme();

    if (typeof styleCb !== "function") {
      throw new TypeError("Expects a callback that takes theme and optional props");
    }

    return props ? styleCb(theme, props) : styleCb(theme);
  };

export default makeStyles;
