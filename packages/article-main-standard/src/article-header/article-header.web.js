import React from "react";
import PropTypes from "prop-types";
import { View, ViewPropTypes } from "react-native";
import { ArticleFlags } from "@times-components/article-flag";

import HeaderLabel from "../article-header-label/article-header-label";
import HeaderStandfirst from "./article-header-standfirst";
import styles from "../styles/article-header";

import { HeadlineContainer } from "../styles/article-header/responsive";

const { style: ViewStylePropTypes } = ViewPropTypes;

const ArticleHeader = ({
  flags,
  hasVideo,
  headline,
  label,
  longRead,
  standfirst,
  style
}) => (
  <View style={style}>
    <HeaderLabel isVideo={hasVideo} label={label} />
    <HeadlineContainer
      accessibilityRole="header"
      aria-level="1"
      style={styles.articleHeadLineText}
    >
      {headline}
    </HeadlineContainer>
    <HeaderStandfirst standfirst={standfirst} />
    <View style={styles.flags}>
      <ArticleFlags flags={flags} longRead={longRead} />
    </View>
  </View>
);

ArticleHeader.propTypes = {
  flags: PropTypes.arrayOf(
    PropTypes.shape({
      expiryTime: PropTypes.string,
      type: PropTypes.string
    })
  ),
  hasVideo: PropTypes.bool,
  headline: PropTypes.string.isRequired,
  label: PropTypes.string,
  longRead: PropTypes.bool,
  standfirst: PropTypes.string,
  style: ViewStylePropTypes
};

ArticleHeader.defaultProps = {
  flags: [],
  hasVideo: false,
  label: null,
  longRead: false,
  standfirst: null,
  style: {}
};

export default ArticleHeader;
