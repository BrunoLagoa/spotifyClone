import { StyleSheet } from "react-native";
import { colors, metrics } from "../../../../styles";

const styles = StyleSheet.create({
  container: {
    marginTop: metrics.basePadding,
    marginHorizontal: metrics.basePadding,
    flexDirection: "row",
    alignItems: "center"
  },

  thumbnail: {
    width: 56,
    height: 56,
    borderRadius: 28
  },

  info: {
    marginLeft: metrics.baseMargin,
    flex: 1
  },

  title: {
    fontSize: 15,
    color: colors.white,
    fontWeight: "bold"
  },

  author: {
    fontSize: 14,
    color: colors.dark,
    marginTop: 3
  },

  more: {
    color: colors.regular
  }
});

export default styles;
