import React from "react";
import TestRenderer from "react-test-renderer";

import {
  addSerializers,
  compose,
  enzymeRenderedSerializer,
  minimaliseTransform,
  minimalWebTransform,
  print
} from "@times-components/jest-serializer";

import Head from "../../src/head";
import articleFixture, {
  testFixture,
  videoLeadAsset
} from "../../fixtures/full-article";

jest.mock("react-helmet-async", () => ({ Helmet: "Helmet" }));

const omitProps = new Set([
  "className",
  "data-testid",
  "responsiveLinkStyles",
  "style"
]);

addSerializers(
  expect,
  enzymeRenderedSerializer(),
  compose(
    print,
    minimalWebTransform,
    minimaliseTransform((value, key) => omitProps.has(key))
  )
);

const article = articleFixture({ ...testFixture });
const videoArticle = articleFixture({
  ...testFixture,
  hasVideo: true,
  leadAsset: videoLeadAsset()
});
const standardArticleWithInlineVideo = articleFixture({
  ...testFixture,
  hasVideo: true
});

const paidContentClassName = "class-name";
const logoUrl =
  "https://www.thetimes.co.uk/d/img/dual-masthead-placeholder-16x9-6a9822c61a.png";

describe("Head", () => {
  it("outputs correct metadata", () => {
    const testRenderer = TestRenderer.create(
      <Head
        article={article}
        logoUrl={logoUrl}
        paidContentClassName={paidContentClassName}
      />
    );

    expect(testRenderer).toMatchSnapshot();
  });

  it("outputs correct metadata when the swgProductId is passed as prop", () => {
    const testRenderer = TestRenderer.create(
      <Head
        article={article}
        logoUrl={logoUrl}
        paidContentClassName={paidContentClassName}
        swgProductId="uat-thetimes.co.uk:basic"
      />
    );

    expect(testRenderer).toMatchSnapshot();
  });

  it("outputs correct metadata for a video article", () => {
    const testRenderer = TestRenderer.create(
      <Head
        article={videoArticle}
        logoUrl={logoUrl}
        paidContentClassName={paidContentClassName}
      />
    );
    expect(testRenderer).toMatchSnapshot();
  });

  it("outputs array of author in context schema", () => {
    const testRenderer = TestRenderer.create(
      <Head
        article={{
          ...article,
          bylines: [
            {
              __typename: "AuthorByline",
              author: {
                image:
                  "https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprodp%2Fweb%2Fbin%2Fc341435d-5352-4952-afa5-a232f17c79c2.jpg?crop=600%2C600%2C0%2C0&resize=200",
                jobTitle: "Asia Editor",
                twitter: "dicklp",
                slug: "richard-lloyd-parry",
                name: "Richard Lloyd Parry"
              },
              byline: [
                {
                  name: "author",
                  children: [
                    {
                      name: "text",
                      children: [],
                      attributes: {
                        value: "Oliver Wright"
                      }
                    }
                  ],
                  attributes: {
                    slug: "oliver-wright"
                  }
                }
              ],
              image: null
            },
            {
              __typename: "TextByline",
              byline: [
                {
                  name: "inline",
                  children: [
                    {
                      name: "text",
                      children: [],
                      attributes: {
                        value: ", Policy Editor | "
                      }
                    }
                  ]
                }
              ],
              image: null
            },
            {
              __typename: "AuthorByline",
              author: {
                image:
                  "https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprodp%2Fweb%2Fbin%2Fc341435d-5352-4952-afa5-a232f17c79c2.jpg?crop=600%2C600%2C0%2C0&resize=200",
                jobTitle: "Asia Editor",
                twitter: "dicklp",
                slug: "richard-lloyd-parry",
                name: "Richard Lloyd Parry"
              },
              byline: [
                {
                  name: "author",
                  children: [
                    {
                      name: "text",
                      children: [],
                      attributes: {
                        value: "Tom Knowles"
                      }
                    }
                  ],
                  attributes: {
                    slug: "tom-knowles"
                  }
                }
              ],
              image: null
            },
            {
              __typename: "TextByline",
              byline: [
                {
                  name: "inline",
                  children: [
                    {
                      name: "text",
                      children: [],
                      attributes: {
                        value: ", Technology Correspondent"
                      }
                    }
                  ]
                }
              ],
              image: null
            }
          ]
        }}
        logoUrl={logoUrl}
        paidContentClassName={paidContentClassName}
      />
    );
    expect(testRenderer).toMatchSnapshot();
  });

  it("outputs array of sameAs if there are multiple urls", () => {
    const testRenderer = TestRenderer.create(
      <Head
        article={{
          ...article,
          bylines: [
            {
              __typename: "AuthorByline",
              author: {
                image:
                  "https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprodp%2Fweb%2Fbin%2Fc341435d-5352-4952-afa5-a232f17c79c2.jpg?crop=600%2C600%2C0%2C0&resize=200",
                jobTitle: "Asia Editor",
                twitter: "twitterusername",
                slug: "richard-lloyd-parry",
                name: "Richard Lloyd Parry"
              },
              byline: [
                {
                  name: "author",
                  children: [
                    {
                      name: "text",
                      children: [],
                      attributes: {
                        value: "Oliver Wright"
                      }
                    }
                  ],
                  attributes: {
                    slug: "oliver-wright"
                  }
                }
              ],
              image: null
            }
          ]
        }}
        logoUrl={logoUrl}
        paidContentClassName={paidContentClassName}
      />
    );
    expect(testRenderer).toMatchSnapshot();
  });

  it("outputs profile url in sameAs if there is no twitter", () => {
    const testRenderer = TestRenderer.create(
      <Head
        article={{
          ...article,
          bylines: [
            {
              __typename: "AuthorByline",
              author: {
                image:
                  "https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprodp%2Fweb%2Fbin%2Fc341435d-5352-4952-afa5-a232f17c79c2.jpg?crop=600%2C600%2C0%2C0&resize=200",
                jobTitle: "Asia Editor",
                twitter: "",
                slug: "richard-lloyd-parry",
                name: "Richard Lloyd Parry"
              },
              byline: [
                {
                  name: "author",
                  children: [
                    {
                      name: "text",
                      children: [],
                      attributes: {
                        value: "Oliver Wright"
                      }
                    }
                  ],
                  attributes: {
                    slug: "oliver-wright"
                  }
                }
              ],
              image: null
            }
          ]
        }}
        logoUrl={logoUrl}
        paidContentClassName={paidContentClassName}
      />
    );
    expect(testRenderer).toMatchSnapshot();
  });

  it("removes author from context schema if there is empty array of bylines or null bylines", () => {
    let testRenderer = TestRenderer.create(
      <Head
        article={{
          ...article,
          bylines: []
        }}
        logoUrl={logoUrl}
        paidContentClassName={paidContentClassName}
      />
    );
    expect(testRenderer).toMatchSnapshot();

    testRenderer = TestRenderer.create(
      <Head
        article={{
          ...article,
          bylines: null
        }}
        logoUrl={logoUrl}
        paidContentClassName={paidContentClassName}
      />
    );
    expect(testRenderer).toMatchSnapshot();
  });

  it("outputs correct metadata for seoDescription", () => {
    const testRenderer = TestRenderer.create(
      <Head
        article={{ ...article, seoDescription: "sample seoDescription" }}
        logoUrl={logoUrl}
        paidContentClassName={paidContentClassName}
      />
    );
    expect(testRenderer).toMatchSnapshot();
  });

  it("uses short headline if headline not available", () => {
    const testRenderer = TestRenderer.create(
      <Head
        article={{
          ...article,
          headline: null,
          shortHeadline: "short headline"
        }}
      />
    );

    const title = testRenderer.root.findByType("title");

    expect(title.children).toMatchSnapshot();
  });

  it("defaults to an empty string if both headline and shortHeadline are null", () => {
    const testRenderer = TestRenderer.create(
      <Head
        article={{
          ...article,
          headline: null,
          shortHeadline: null
        }}
      />
    );

    const title = testRenderer.root.findByType("title");

    expect(title.children).toMatchSnapshot();
  });

  it("uses the first non-news section in title", () => {
    const testRenderer = TestRenderer.create(
      <Head
        article={{
          ...article,
          tiles: [
            {
              slices: [
                {
                  sections: [
                    {
                      title: "News"
                    }
                  ]
                }
              ]
            },
            {
              slices: [
                {
                  sections: [
                    {
                      title: "Comment"
                    }
                  ]
                }
              ]
            },
            {
              slices: [
                {
                  sections: [
                    {
                      title: "Foreign"
                    }
                  ]
                }
              ]
            }
          ]
        }}
      />
    );

    const title = testRenderer.root.findByType("title");

    expect(title.children).toMatchSnapshot();
  });

  it("uses news in title if news is the only available section", () => {
    const testRenderer = TestRenderer.create(
      <Head
        article={{
          ...article,
          tiles: [
            {
              slices: [
                {
                  sections: [
                    {
                      title: "News"
                    }
                  ]
                }
              ]
            }
          ]
        }}
      />
    );

    const title = testRenderer.root.findByType("title");

    expect(title.children).toMatchSnapshot();
  });

  it("uses news in title if news is the only available section", () => {
    const testRenderer = TestRenderer.create(
      <Head
        article={{
          ...article,
          tiles: [
            {
              slices: [
                {
                  sections: [
                    {
                      title: "News"
                    }
                  ]
                }
              ]
            }
          ]
        }}
      />
    );

    const title = testRenderer.root.findByType("title");

    expect(title.children).toMatchSnapshot();
  });

  it("removes section from title if there are no tiles", () => {
    const testRenderer = TestRenderer.create(
      <Head
        article={{
          ...article,
          tiles: null
        }}
      />
    );

    const title = testRenderer.root.findByType("title");

    expect(title.children).toMatchSnapshot();
  });

  it("removes section from title if there are no tiles with sections", () => {
    const testRenderer = TestRenderer.create(
      <Head
        article={{
          ...article,
          tiles: [
            {
              slices: [
                {
                  sections: []
                }
              ]
            },
            {
              slices: [
                {
                  sections: []
                }
              ]
            }
          ]
        }}
      />
    );

    const title = testRenderer.root.findByType("title");

    expect(title.children).toMatchSnapshot();
  });

  it("shows Sunday Times in title if publication is SUNDAYTIMES", () => {
    const testRenderer = TestRenderer.create(
      <Head
        article={{
          ...article,
          publicationName: "SUNDAYTIMES"
        }}
      />
    );

    const title = testRenderer.root.findByType("title");

    expect(title.children).toMatchSnapshot();
  });

  it("shows Times in title if publication is TIMES", () => {
    const testRenderer = TestRenderer.create(
      <Head
        article={{
          ...article,
          publicationName: "TIMES"
        }}
      />
    );

    const title = testRenderer.root.findByType("title");

    expect(title.children).toMatchSnapshot();
  });

  it("removes author tags if bylines not available", () => {
    const testRenderer = TestRenderer.create(
      <Head
        article={{
          ...article,
          bylines: null
        }}
      />
    );

    expect(testRenderer.root.findAllByProps({ name: "author" })).toHaveLength(
      0
    );
  });

  it("shows author tags if bylines available", () => {
    const testRenderer = TestRenderer.create(<Head article={article} />);

    expect(testRenderer.root.findAllByProps({ name: "author" })).toHaveLength(
      1
    );
  });

  it("removes description tags if descriptionMarkup not available", () => {
    const testRenderer = TestRenderer.create(
      <Head
        article={{
          ...article,
          descriptionMarkup: null
        }}
      />
    );

    expect(
      testRenderer.root.findAllByProps({ name: "description" })
    ).toHaveLength(0);
    expect(
      testRenderer.root.findAllByProps({ property: "og:description" })
    ).toHaveLength(0);
    expect(
      testRenderer.root.findAllByProps({ name: "twitter:description" })
    ).toHaveLength(0);
  });

  it("removes description tags if descriptionMarkup is empty", () => {
    const testRenderer = TestRenderer.create(
      <Head
        article={{
          ...article,
          descriptionMarkup: []
        }}
      />
    );

    expect(
      testRenderer.root.findAllByProps({ name: "description" })
    ).toHaveLength(0);
    expect(
      testRenderer.root.findAllByProps({ property: "og:description" })
    ).toHaveLength(0);
    expect(
      testRenderer.root.findAllByProps({ name: "twitter:description" })
    ).toHaveLength(0);
  });

  it("shows description tags if descriptionMarkup available", () => {
    const testRenderer = TestRenderer.create(<Head article={article} />);

    expect(
      testRenderer.root.findAllByProps({ name: "description" })
    ).toHaveLength(1);
    expect(
      testRenderer.root.findAllByProps({ property: "og:description" })
    ).toHaveLength(1);
    expect(
      testRenderer.root.findAllByProps({ name: "twitter:description" })
    ).toHaveLength(1);
  });

  it("removes image tags if leadAsset not available", () => {
    const testRenderer = TestRenderer.create(
      <Head
        article={{
          ...article,
          leadAsset: null
        }}
      />
    );

    expect(
      testRenderer.root.findAllByProps({ property: "og:image" })
    ).toHaveLength(0);
    expect(
      testRenderer.root.findAllByProps({ name: "twitter:image" })
    ).toHaveLength(0);
  });

  it("shows image tags if leadAsset available", () => {
    const testRenderer = TestRenderer.create(<Head article={article} />);

    expect(
      testRenderer.root.findAllByProps({ property: "og:image" })
    ).toHaveLength(1);
    expect(
      testRenderer.root.findAllByProps({ name: "twitter:image" })
    ).toHaveLength(1);
  });

  it("shows image tags if leadAsset is an image, but there is a video elsewhere in the article", () => {
    const testRenderer = TestRenderer.create(
      <Head article={standardArticleWithInlineVideo} />
    );

    expect(
      testRenderer.root.findAllByProps({ property: "og:image" })
    ).toHaveLength(1);
    expect(
      testRenderer.root.findAllByProps({ name: "twitter:image" })
    ).toHaveLength(1);
  });

  it("outputs video schema for a video article", () => {
    const testRenderer = TestRenderer.create(
      <Head
        article={videoArticle}
        logoUrl={logoUrl}
        paidContentClassName={paidContentClassName}
      />
    );
    expect(testRenderer).toMatchSnapshot();
  });

  it("outputs video schema for a video article", () => {
    const testRenderer = TestRenderer.create(
      <Head
        article={videoArticle}
        logoUrl={logoUrl}
        paidContentClassName={paidContentClassName}
      />
    );
    expect(testRenderer).toMatchSnapshot();
  });

  const ratios = [
    { ratio: "1:1", crop: "crop11" },
    { ratio: "2:3", crop: "crop23" },
    { ratio: "3:2", crop: "crop32" },
    { ratio: "16:9", crop: "crop169" },
    { ratio: "4:5", crop: "crop45" },
    { ratio: "1.25:1", crop: "crop1251" }
  ];

  ratios.forEach(({ crop, ratio }) => {
    const leadAsset = {
      __typename: "Video",
      brightcoveAccountId: "5436121857001",
      brightcoveVideoId: "5831024132001",
      caption: "Some Caption",
      credits: "Some Credits",
      [crop]: {
        __typename: "Crop",
        ratio,
        url: `https://${crop}.io`
      },
      id: "id-123",
      title: "Some Title"
    };

    it(`outputs thumbnail urls for a article for ${ratio} ratio`, () => {
      const testRenderer = TestRenderer.create(
        <Head
          article={{ ...videoArticle, leadAsset }}
          logoUrl={logoUrl}
          paidContentClassName={paidContentClassName}
        />
      );
      expect(testRenderer).toMatchSnapshot();
    });
  });

  it("outputs title as video description for a video article when there is no summary and seoDescription", () => {
    const testRenderer = TestRenderer.create(
      <Head
        article={{ ...videoArticle, descriptionMarkup: null }}
        logoUrl={logoUrl}
        paidContentClassName={paidContentClassName}
      />
    );
    expect(testRenderer).toMatchSnapshot();
  });

  it("outputs seoDescription as video description for a video article when there is no summary", () => {
    const testRenderer = TestRenderer.create(
      <Head
        article={{
          ...videoArticle,
          descriptionMarkup: null,
          seoDescription: "some seoDescription"
        }}
        logoUrl={logoUrl}
        paidContentClassName={paidContentClassName}
      />
    );
    expect(testRenderer).toMatchSnapshot();
  });

  it("outputs a live blog schema", () => {
    const testRenderer = TestRenderer.create(
      <Head
        article={{
          ...article,
          expirableFlags: [{ type: "LIVE", expiryTime: null }],
          content: [
            {
              name: "interactive",
              attributes: {
                element: {
                  value: "article-header",
                  attributes: {
                    headline: "headline",
                    updated: "2022-04-20T20:30:00"
                  }
                }
              },
              children: []
            },
            {
              children: [
                {
                  attributes: {
                    value:
                      "Boris Johnson's sister an ex-BBC broadcaster and John Major's health secretary will stand for Change UK in next month's European elections."
                  },
                  children: [],
                  name: "text"
                }
              ],
              name: "paragraph"
            },
            {
              children: [
                {
                  attributes: {
                    value:
                      "The pro-Remain party announced its MEP hopefuls from almost 4"
                  },
                  children: [],
                  name: "text"
                }
              ],
              name: "paragraph"
            }
          ]
        }}
      />
    );
    expect(testRenderer).toMatchSnapshot();
  });
});
