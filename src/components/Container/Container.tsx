import makeStyles from "@/themes/makeStyles";
import { useIsFocused } from "@react-navigation/native";
import React, { PropsWithChildren } from "react";
import { StatusBar, StyleProp, View, ViewStyle } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export type StatusBarColor = "secondary" | "background" | "success" | "fail" | "default" | "white";

type BarStyle = "light-content" | "dark-content";

export interface ContainerProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
  noTopInset?: boolean;
  topInsetColor?: StatusBarColor;
  bottomInset?: boolean;
  bottomInsetColor?: StatusBarColor;
  testID?: string;
  barIconColor?: BarStyle;
  customColor?: string;
}

export default function Container({
  children,
  style,
  noTopInset = false,
  topInsetColor = "default",
  bottomInset = false,
  bottomInsetColor = "default",
  testID = "",
  barIconColor = "light-content",
  customColor,
}: ContainerProps) {
  const isFocused = useIsFocused();
  const insets = useSafeAreaInsets();
  const styles = useStyles({
    bottomInset: insets.bottom,
    topInset: insets.top,
  });

  return (
    <>
      {isFocused && (
        <StatusBar
          barStyle={barIconColor}
          backgroundColor={customColor || styles.colors[topInsetColor]}
        />
      )}
      <View style={styles.coreLayer}>
        <View
          style={[
            styles.upperPart,
            { backgroundColor: customColor || styles.colors[topInsetColor] },
          ]}
        />
        <View
          style={[
            styles.lowerPart,
            { backgroundColor: customColor || styles.colors[bottomInsetColor] },
          ]}
        />
      </View>
      {/* Using View with a top inset instead of SafeAreaView allows to avoid jumping header on iOS */}
      {!noTopInset && <View style={styles.topInset} testID="topInset_id" />}
      <SafeAreaView
        style={[styles.container, style]}
        testID={testID}
        edges={["left", "right"]}
        mode="margin"
      >
        {children}
      </SafeAreaView>
      {bottomInset && <View style={styles.bottomInset} testID="bottomInset_id" />}
    </>
  );
}

const useStyles = makeStyles(
  (theme, { topInset, bottomInset }) =>
    ({
      bottomInset: {
        height: bottomInset,
      } as ViewStyle,
      colors: {
        background: theme.colors.white,
        default: theme.colors.primary,
        fail: theme.colors.red,
        secondary: theme.colors.white100,
        success: theme.colors.green,
        white: theme.colors.white,
      },
      container: {
        backgroundColor: "white",
        flex: 1,
      } as ViewStyle,
      coreLayer: {
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        width: "100%",
      } as ViewStyle,
      lowerPart: {
        flex: 1,
      } as ViewStyle,
      topInset: {
        height: topInset,
      } as ViewStyle,
      upperPart: {
        flex: 1,
      } as ViewStyle,
    } as const)
);
