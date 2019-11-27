import { StyleSheet } from "react-native";
import { spacing } from "@times-components/styleguide";
import sharedStyles from "./shared";

const styles = StyleSheet.create({
  ...sharedStyles,
  title: {
    ...sharedStyles.title,
    lineHeight: 12,
    paddingTop: 0,
    marginTop: 0,
    marginBottom: spacing(1)
  }
});

export default styles;
