import React from 'react';
import mockDate from 'mockdate';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { Timelines } from '../Timelines';
import { useFetch } from '../../../helpers/fetch/FetchProvider';
import '@testing-library/jest-dom';
import 'regenerator-runtime';

jest.mock('@times-components/image', () => ({
  Placeholder: () => <div>Placeholder</div>
}));

jest.mock('../../../helpers/fetch/FetchProvider', () => ({
  useFetch: jest.fn()
}));

const deckApiPayloadWrapper = () => ({
  data: testDataWide
});

const deckApiPayloadWrapperStandard = () => ({
  data: testDataStandard
});

const testDataStandard = {
  deck_id: 44572,
  deck_name: '[TEST] Timeline with Bullet Points - 25/08/2021 11:04:10',
  deck_type: 'Timeline with Bullet Points',
  version: 2,
  updated_at: {
    date: '2021-08-16 12:48:43.000000',
    timezone_type: 3,
    timezone: 'UTC'
  },
  fields: {
    label: 'Venezuelan Politics',
    headline: 'A history of injury troubles'
  },
  body: {
    data: [
      {
        type: 'event',
        data: {
          date: '9 June 2018',
          eventHeading: 'Bullet point title 1',
          copy:
            'Parturient mi dictumst suspendisse torquent primis potenti donec in parturient aliquam adipiscing bibendum bibendum magna nisi bibendum dignissim in dis a. Scelerisque a ullamcorper id maecenas tempor convallis ac cras. 1'
        }
      },
      {
        type: 'event',
        data: {
          date: '9 June 2018',
          eventHeading: 'Bullet point title 1',
          copy:
            'Parturient mi dictumst suspendisse torquent primis potenti donec in parturient aliquam adipiscing bibendum bibendum magna nisi bibendum dignissim in dis a. Scelerisque a ullamcorper id maecenas tempor convallis ac cras. 1'
        }
      },
      {
        type: 'event',
        data: {
          date: '9 June 2018',
          eventHeading: 'Bullet point title 1',
          copy:
            'Parturient mi dictumst suspendisse torquent primis potenti donec in parturient aliquam adipiscing bibendum bibendum magna nisi bibendum dignissim in dis a. Scelerisque a ullamcorper id maecenas tempor convallis ac cras. 1'
        }
      }
    ]
  },
  html:
    '<!DOCTYPE html><html><head><title>The Times - In Article Timeline with Bullet Points</title></head><body></body></html>'
};

const testDataWide = {
  deck_id: 44574,
  deck_name: '[TEST] Timeline with Images - 25/08/2021 11:11:38',
  deck_type: 'Timeline with Circle Images',
  version: 2,
  updated_at: {
    date: '2021-08-16 12:48:43.000000',
    timezone_type: 3,
    timezone: 'UTC'
  },
  fields: {
    label: 'Venezuelan Politics',
    headline: 'A history of injury troubles'
  },
  body: {
    data: [
      {
        type: 'event',
        data: {
          date: '9 June 2018',
          eventHeading: 'Bullet point title 1',
          copy:
            'Parturient mi dictumst suspendisse torquent primis potenti donec in parturient aliquam adipiscing bibendum bibendum magna nisi bibendum dignissim in dis a. Scelerisque a ullamcorper id maecenas tempor convallis ac cras. 1'
        }
      },
      {
        type: 'event',
        data: {
          date: '9 June 2018',
          eventHeading: 'Bullet point title 1',
          copy:
            'Parturient mi dictumst suspendisse torquent primis potenti donec in parturient aliquam adipiscing bibendum bibendum magna nisi bibendum dignissim in dis a. Scelerisque a ullamcorper id maecenas tempor convallis ac cras. 1'
        }
      },
      {
        type: 'event',
        data: {
          date: '9 June 2018',
          eventHeading: 'Bullet point title 1',
          copy:
            'Parturient mi dictumst suspendisse torquent primis potenti donec in parturient aliquam adipiscing bibendum bibendum magna nisi bibendum dignissim in dis a. Scelerisque a ullamcorper id maecenas tempor convallis ac cras. 1'
        }
      }
    ]
  },
  html:
    '<!DOCTYPE html><html><head><title>The Times - In Article Timeline with Circle Images</title></head><body></body></html>'
};

const renderTimelines = () => render(<Timelines sectionColour="#636C17" />);

describe('Timelines', () => {
  beforeEach(() => {
    mockDate.set(1620000000000);
  });

  afterEach(() => {
    mockDate.reset();
    jest.clearAllMocks();
    cleanup();
  });

  it('should render the initial loading state correctly', async () => {
    (useFetch as jest.Mock).mockReturnValue({ loading: true });
    const { asFragment, findByText } = render(
      <Timelines sectionColour="#636C17" />
    );
    await findByText('Placeholder');
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the bullet points component', () => {
    (useFetch as jest.Mock).mockReturnValue(deckApiPayloadWrapper());
    const { asFragment } = renderTimelines();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the circle images component', () => {
    (useFetch as jest.Mock).mockReturnValue(deckApiPayloadWrapperStandard());
    const { asFragment } = renderTimelines();
    expect(asFragment()).toMatchSnapshot();
  });

  it('click show all', async () => {
    const { asFragment, getByText, findByText } = render(
      <Timelines sectionColour="#636C17" />
    );
    fireEvent.click(getByText('Show all'));
    await findByText('Collapse');
    expect(asFragment()).toMatchSnapshot();
  });
});
