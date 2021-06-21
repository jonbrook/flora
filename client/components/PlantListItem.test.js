import React from 'react';
import { useSelector } from 'react-redux';
import renderer from 'react-test-renderer';
import PlantListItem from './PlantListItem';
import { FlatList } from 'react-native';
import { render } from '@testing-library/react-native';
import PlantListScreen from '../screens/PlantListScreen';
import store from '../store/store';

const plant = {
  Plant: {
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
};

const plantsByUser = {
  pictureURL:
    'https://firebasestorage.googleapis.com/v0/b/flora-legacy-project.appspot.com/o/zz.jpg?alt=media&token=f5f458a5-55a1-4920-9444-9ff056c6802c',
  lastWatered: 0,
  PlantId: 5,
  UserId: 2,
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
      .create(<PlantListScreen PlantsByUser={plantsByUser} />)
      .toJSON();
    expect(container.children.length).toBe(1);
  });

  it('PlantListScreen should contain 1 item', () => {
    const container = renderer.create(<PlantListItem plant={plant} />).toJSON();

    const { getAllByText } = render(<PlantListItem plant={plant} />);

    expect(getAllByText('Ficus elastica').length).toEqual(1);

    console.log(Array.isArray(container.children));
    // expect(container.children[0].children[1].children.length).toBe(1);
  });
});
