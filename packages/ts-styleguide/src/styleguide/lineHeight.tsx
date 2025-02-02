const mapping: Record<string, Record<string, {}>> = {
  body: {
    bodyMobile: 30,
    puffLink: 15,
    secondary: 27,
    teaser: 20,
    tertiary: 26
  },
  bodyRegular: {
    infoSubText: 23,
    infoTitle: 30,
    pageComponentHeadline: 25
  },
  bodyRegularSmallCaps: {
    cardMetaMobile: 12,
    meta: 14
  },
  cultureMagazine: {
    headline: 35,
    pageHeadline: 42
  },
  headline: {
    articleHeadline: 45,
    commentsHeadline: 29,
    headline: 33,
    infoTitle: 22,
    leadHeadline: 26,
    pageComponentHeadline: 27,
    pageHeadline: 40,
    smallHeadline: 27,
    tileLeadHeadline: 35,
    heading2Mobile: 26,
    heading3Mobile: 26,
    heading4Mobile: 26,
    heading5Mobile: 26
  },
  headlineRegular: {
    pageComponentHeadline: 30,
    smallestHeadline: 26,
    strapline: 24
  },
  stMagazine: {
    headline: 35,
    pageHeadline: 42
  },
  styleMagazine: {
    headline: 35,
    pageHeadline: 42
  },
  supporting: {
    button: 16,
    caption: 13,
    cardMeta: 15,
    cardMetaMobile: 14,
    keyFactsTitle: 18,
    link: 13,
    meta: 14,
    pagingMeta: 15,
    tertiary: 17
  }
};

type ValueOf<T> = T[keyof T];

export default ({
  font,
  fontSize
}: {
  font: keyof typeof mapping;
  fontSize: keyof ValueOf<typeof mapping>;
}) => {
  return mapping[font][fontSize];
};
