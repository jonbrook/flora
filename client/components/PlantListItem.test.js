import React from 'react';
import { Provider, useSelector } from 'react-redux';
import renderer from 'react-test-renderer';
import PlantListItem from './PlantListItem';
import { FlatList } from 'react-native';
import { render } from '@testing-library/react-native';
import PlantListScreen from '../screens/PlantListScreen';
import store from '../store/store';

const plant = [
  {
    id: 1,
    scientificName: 'Ficus elastica',
    commonName: 'Rubber Plant',
    sunlightAmount: 'part shade',
    waterAmount: 200,
    waterFrequency: 14,
    airPurifying: true,
    humidity: 'high',
    soilMoisture: 'dry',
  },
  {
    id: 1,
    scientificName: 'Ficus elastica',
    commonName: 'Rubber Plant',
    sunlightAmount: 'part shade',
    waterAmount: 200,
    waterFrequency: 14,
    airPurifying: true,
    humidity: 'high',
    soilMoisture: 'dry',
  },
];

const plantsByUser = {
  pictureURL: 'rubber.jpg',
  lastWatered: 0,
  PlantId: 1,
  UserId: 1,
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('<PlantListItem', () => {
  beforeEach(() => {
    useSelector.mockImplementation((callback) => {
      return callback(plantsByUser);
    });
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  it('should have 1 children', () => {
    const container = renderer
      .create(
        <Provider store={store}>
          <PlantListScreen PlantsByUser={plantsByUser} />
        </Provider>,
      )
      .toJSON();
    expect(container.children.length).toBe(1);
  });

  it('PlantListScreen should contain 1 item', () => {
    const container = renderer
      .create(
        <Provider store={store}>
          <PlantListScreen PlantsByUser={plantsByUser}>
            <FlatList
              data={plantsByUser}
              renderItem={({ item }) => <PlantListItem plant={plant} />}
              keyExtractor={(item) => item.id.toString()}
            />
          </PlantListScreen>
        </Provider>,
      )
      .toJSON();

    // const { getAllByText } = render(container);

    // expect(getAllByText('item').length).toBe(1);

    console.log(container.children[0].children[1]);
    expect(container.children[0].children[1].children.length).toBe(1);
  });
});
