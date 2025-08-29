import { StyleSheet, Text } from "react-native";

import Container from "@/components/Container/Container";

export default function HomeScreen() {
  return (
    <Container style={{ flex: 1 }}>
      <Text>Hello</Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
