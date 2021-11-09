import React from "react";
import {
  ArticleFlags,
  LiveArticleFlag,
  NewArticleFlag,
  UpdatedArticleFlag,
  ExclusiveArticleFlag,
  SponsoredArticleFlag,
  LongReadArticleFlag
} from "./src/article-flag";

export default {
  children: [
    {
      component: () => <LiveArticleFlag />,
      name: "Article Flag (Live)",
      type: "story"
    },
    {
      component: () => <NewArticleFlag />,
      name: "Article Flag (New)",
      type: "story"
    },
    {
      component: () => <UpdatedArticleFlag />,
      name: "Article Flag (Updated)",
      type: "story"
    },
    {
      component: () => <ExclusiveArticleFlag />,
      name: "Article Flag (Exclusive)",
      type: "story"
    },
    {
      component: () => <SponsoredArticleFlag />,
      name: "Article Flag (Sponsored)",
      type: "story"
    },
    {
      component: () => <LongReadArticleFlag />,
      name: "Article Flag (Long Read)",
      type: "story"
    },
    {
      component: () => <NewArticleFlag color="blue" />,
      name: "Article Flag with text colour",
      type: "story"
    },
    {
      component: () => (
        <ArticleFlags
          flags={[
            { expiryTime: "2030-03-13T12:00:00.000Z", type: "UPDATED" },
            { expiryTime: "2030-03-14T12:00:00.000Z", type: "EXCLUSIVE" },
            { expiryTime: "2030-03-14T12:00:00.000Z", type: "NEW" },
            { expiryTime: "2030-03-14T12:00:00.000Z", type: "SPONSORED" }
          ]}
          longRead
        />
      ),
      name: "Article Flags",
      type: "story"
    },
    {
      component: () => (
        <ArticleFlags
          flags={[
            { expiryTime: "2030-03-13T12:00:00.000Z", type: "UPDATED" },
            { expiryTime: "2030-03-14T12:00:00.000Z", type: "EXCLUSIVE" },
            { expiryTime: "2030-03-14T12:00:00.000Z", type: "NEW" },
            { expiryTime: "2030-03-14T12:00:00.000Z", type: "SPONSORED" }
          ]}
          longRead
          withContainer
        />
      ),
      name: "Article Flags with container",
      type: "story"
    }
  ],
  name: "Primitives/Article Flag"
};
