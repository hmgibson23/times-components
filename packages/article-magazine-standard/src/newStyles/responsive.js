import { TcView, TcText } from "@times-components/utils";
import styled from "styled-components";
import {
  breakpoints,
  colours,
  fontSizes,
  lineHeight,
  spacing
} from "@times-components/ts-styleguide";
import ArticleLeadAsset from "@times-components/article-lead-asset";

export const DatePublicationContainer = styled(TcText)`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: ${spacing(3)};

  @media (min-width: ${breakpoints.medium}px) {
    margin-top: 0;
  }
`;

export const FlagsContainer = styled(TcView)`
  padding-top: ${spacing(1)};
  padding-bottom: ${spacing(3)};

  @media (min-width: ${breakpoints.medium}px) {
    padding-top: 0;
  }
`;

export const HeaderContainer = styled(TcView)`
  order: 2;

  @media (min-width: ${breakpoints.medium}px) {
    width: 80.8%;
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${spacing(6)};
  }

  @media (min-width: ${breakpoints.wide}px) {
    width: 56.2%;
  }
`;

export const HeadlineContainer = styled(TcText)`
  @media (min-width: ${breakpoints.medium}px) {
    font-size: ${fontSizes.articleHeadline}px;
    line-height: 50px;
    margin-bottom: ${spacing(1)};
  }
`;

export const LabelContainer = styled(TcView)`
  @media (min-width: ${breakpoints.wide}px) {
    margin-top: 0px;
  }
`;

export const Meta = styled(TcView)`
  max-width: 100%;
  justify-content: center;

  @media (min-width: ${breakpoints.medium}px) {
    margin-top: 0;
  }
`;

export const MetaContainer = styled(TcView)`
  align-items: center;
  justify-content: center;

  @media (min-width: ${breakpoints.medium}px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Separator = styled(TcView)`
  display: none;

  @media (min-width: ${breakpoints.medium}px) {
    background-color: ${colours.functional.keyline};
    display: flex;
    height: ${spacing(3)};
    margin: 0 ${spacing(2)};
    width: 1px;
  }
`;

export const StandfirstContainer = styled(TcText)`
  @media (min-width: ${breakpoints.medium}px) {
    font-size: ${fontSizes.infoTitle}px;
    line-height: ${lineHeight({
      font: "bodyRegular",
      fontSize: "infoTitle"
    })}px;
    margin-bottom: ${spacing(5)};
  }

  @media (min-width: ${breakpoints.wide}px) {
    margin-bottom: ${spacing(4)};
  }
`;

export const LeadAsset = styled(ArticleLeadAsset)`
  order: 2;

  @media (min-width: ${breakpoints.medium}px) {
    margin-bottom: ${spacing(6)};
  }

  @media (min-width: ${breakpoints.wide}px) {
    width: 56.2%;
    margin-left: auto;
    margin-right: auto;
  }
`;
