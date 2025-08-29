import { AppNavigationProps } from "@/navigation/AppNavigator";
import {
  NavigationProp,
  RouteProp,
  useNavigation as useNav,
  useRoute,
} from "@react-navigation/native";

export const useNavigation = () => useNav<NavigationProp<AppNavigationProps>>();

export const useRouteParams = <
  RouteName extends keyof AppNavigationProps = keyof AppNavigationProps
>(): Readonly<AppNavigationProps[RouteName]> => {
  const route = useRoute<RouteProp<AppNavigationProps, RouteName>>();

  if (route.params === undefined) {
    throw new Error("Route params is undefined");
  }

  return route.params;
};
