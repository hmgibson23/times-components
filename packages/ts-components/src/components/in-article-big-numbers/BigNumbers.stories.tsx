import React from 'react';
import { storiesOf } from '@storybook/react';
import { ArticleHarness } from '../../fixtures/article-harness/ArticleHarness';
import { FetchProvider } from '../../helpers/fetch/FetchProvider';
import { BigNumbers } from './BigNumbers';
import { TrackingContextProvider } from '../../helpers/tracking/TrackingContextProvider';
import analyticsStream from '../../fixtures/analytics-actions/analytics-actions';

storiesOf('Typescript Component/In Article/Big Numbers', module)
  .addDecorator((storyFn: () => React.ReactNode) => (
    <TrackingContextProvider
      context={{
        component: 'ArticleSkeleton',
        attrs: {
          article_name: 'articleHeadline',
          section_details: 'section'
        }
      }}
      analyticsStream={analyticsStream}
    >
      <ArticleHarness>{storyFn()}</ArticleHarness>
    </TrackingContextProvider>
  ))
  .add('Standard without a headline', () => (
    <FetchProvider url="https://gobble.timesdev.tools/deck/api/deck-post-action/44335">
      <BigNumbers sectionColour="#636C17" />
    </FetchProvider>
  ))
  .add('Standard with One Card', () => (
    <FetchProvider url="https://gobble.timesdev.tools/deck/api/deck-post-action/44336">
      <BigNumbers sectionColour="#636C17" />
    </FetchProvider>
  ))
  .add('Wide with a headline', () => (
    <FetchProvider url="https://gobble.timesdev.tools/deck/api/deck-post-action/44334">
      <BigNumbers sectionColour="#636C17" />
    </FetchProvider>
  ));
