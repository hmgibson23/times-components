import { colours, fontFactory, spacing } from "@times-components/ts-styleguide";

const sharedStyles = {
  caption: {
    ...fontFactory({
      font: "supporting",
      fontSize: "caption"
    }),
    color: "#696969",
    marginBottom: 0
  },
  captionContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    height: 20,
    marginTop: spacing(2)
  },
  container: {
    marginBottom: spacing(6),
    marginTop: 0
  },
  content: {
    ...fontFactory({
      font: "headlineRegular",
      fontSize: "pageComponentHeadline"
    }),
    color: colours.functional.primary
  },
  link: {
    ...fontFactory({
      font: "supporting",
      fontSize: "link"
    }),
    color: colours.functional.action,
    marginLeft: 4,
    textDecorationLine: "none"
  },
  text: {
    ...fontFactory({
      font: "supporting",
      fontSize: "caption"
    }),
    color: colours.functional.secondary,
    marginBottom: 0
  },
  twitterContainer: {
    alignItems: "center",
    borderLeftColor: colours.functional.keyline,
    borderLeftWidth: 1,
    display: "flex",
    flexDirection: "row",
    height: 13,
    marginLeft: 7,
    paddingLeft: 7
  }
};

export default sharedStyles;
