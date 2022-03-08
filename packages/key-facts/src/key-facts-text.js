import React from "react";
import { renderTree } from "@times-components/markup-forest";
import coreRenderers from "@times-components/markup";
import props from "./key-facts-text-prop-types";
import { Text, KeyFactTextLink, BulletContainer, Bullet } from "./styles";

const KeyFactsText = ({ listIndex, keyFactItem, fireAnalyticsEvent }) => (
  <BulletContainer key={`key-facts-${listIndex}`}>
    <Bullet />
    <Text>
      {keyFactItem.children.map((data, listItemIndex) =>
        renderTree(
          data,
          {
            ...coreRenderers,
            link(key, attributes, renderedChildren) {
              const { href: url } = attributes;
              return (
                <KeyFactTextLink
                  key={key}
                  onClick={() => {
                    if (fireAnalyticsEvent) {
                      console.log("fireAnalyticsEvent");
                      fireAnalyticsEvent({
                        action: "Clicked",
                        attrs: {
                          event_navigation_name: `button : key moments`,
                          event_navigation_browsing_method: "click"
                        }
                      });
                    } else {
                      console.log("no fireAnalyticsEvent");
                    }
                  }}
                  href={url}
                >
                  {renderedChildren}
                </KeyFactTextLink>
              );
            }
          },
          `key-facts-${listIndex}-${listItemIndex}`
        )
      )}
    </Text>
  </BulletContainer>
);

KeyFactsText.propTypes = props;

export default KeyFactsText;
