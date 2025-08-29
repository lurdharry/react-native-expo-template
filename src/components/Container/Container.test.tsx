import React from "react";
import { Text } from "react-native";
import { testRender } from "testUtils/AllTheProviders";

import Container from "./Container";

describe("Container Component", () => {
  it("renders correctly with default props", () => {
    const { getByTestId } = testRender(<Container testID="test-container" />);
    const container = getByTestId("test-container");

    expect(container).toBeTruthy();
  });

  it("renders children correctly", () => {
    const { getByTestId } = testRender(
      <Container testID="test-container">
        <Text testID="test-child">Hello, World!</Text>
      </Container>
    );

    expect(getByTestId("test-child")).toBeTruthy();
    expect(getByTestId("test-child").props.children).toBe("Hello, World!");
  });

  it("renders statusBar with custom color", () => {
    const { getByTestId } = testRender(<Container testID="test-container" customColor="blue" />);

    expect(getByTestId("test-container")).toBeTruthy();
    expect(getByTestId("test-container").props.children).toBeUndefined();
  });

  it("renders top inset by default", () => {
    const { getByTestId } = testRender(<Container testID="test-container" />);

    expect(getByTestId("topInset_id")).toBeTruthy();
  });

  it("does not render top inset when noTopInset prop is true", () => {
    const { queryByTestId } = testRender(<Container testID="test-container" noTopInset />);

    expect(queryByTestId("topInset_id")).toBeNull();
  });

  it("renders bottom inset when bottomInset prop is true", () => {
    const { getByTestId } = testRender(<Container testID="test-container" bottomInset />);

    expect(getByTestId("bottomInset_id")).toBeTruthy();
  });

  it("renders correctly with custom background color for bottom inset", () => {
    const { getByTestId } = testRender(
      <Container testID="test-container" bottomInset bottomInsetColor="secondary" />
    );

    expect(getByTestId("bottomInset_id")).toBeTruthy();
  });
});
