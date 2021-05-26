import React, { useContext, useState } from 'react';
import merge from 'lodash.merge';

import { useIntersectionObserver } from '../../utils/intersectObserverHook';

export type TrackingAttributes = { [key: string]: string };
export type TrackingContext = {
  object?: string;
  component?: string;
  action?: string;
  attrs?: TrackingAttributes;
};

export type TrackingContextProps = {
  analyticsStream?: (analyticsEvent: any) => void;
  context?: TrackingContext;
  scrolledEvent?: TrackingContext;
};

export type TrackingContextType = TrackingContextProps & {
  fireAnalyticsEvent?: (analyticsEvent: any) => void;
};

const TrackingContext = React.createContext<TrackingContextType>({
  context: {}
});

type TrackingContextChildren = {
  children:
    | ((
        props: {
          fireAnalyticsEvent: (evt: TrackingContext) => void;
          intersectObserverRef: (ref: HTMLElement | null) => void;
        }
      ) => JSX.Element | JSX.Element[])
    | JSX.Element
    | JSX.Element[];
};

export const useTrackingContext = () => useContext(TrackingContext);

export const TrackingContextProvider = ({
  children,
  analyticsStream,
  context,
  scrolledEvent
}: TrackingContextProps & TrackingContextChildren) => {
  const parentTrackingContext = useContext(TrackingContext);
  const stream =
    analyticsStream !== undefined
      ? analyticsStream
      : parentTrackingContext.analyticsStream;

  const fireAnalyticsEvent = (event: any) => {
    const aggregatedEvent = merge(
      parentTrackingContext.context,
      context,
      event
    );

    stream
      ? stream(aggregatedEvent)
      : // tslint:disable-next-line:no-console
        console.error('no analytics stream to send to', aggregatedEvent);
  };

  const [ref, setRef] = useState<HTMLElement | null>(null);

  if (scrolledEvent) {
    useIntersectionObserver(
      ref,
      () => fireAnalyticsEvent && fireAnalyticsEvent(scrolledEvent),
      {
        threshold: 0.5
      }
    );
  }

  return (
    <TrackingContext.Provider
      value={{ fireAnalyticsEvent, context, analyticsStream: stream }}
    >
      {typeof children === 'function'
        ? children({ fireAnalyticsEvent, intersectObserverRef: setRef })
        : children}
    </TrackingContext.Provider>
  );
};
