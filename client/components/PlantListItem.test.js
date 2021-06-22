import React from 'react';
import PlantListItem from './PlantListItem';
import { render } from '@testing-library/react-native';
// eslint-disable-next-line no-unused-vars
import { useHistory } from 'react-router-native';

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

jest.mock('react-router-native', () => {
  return {
    useHistory: jest.fn(),
  };
});

describe('<PlantListItem', () => {
  it('should render PlantListItem with the provided data', () => {
    const { getByText, getByTestId } = render(<PlantListItem plant={plant} />);

    expect(getByTestId('image')).toBeDefined();
    expect(getByText('Rubber Plant')).toBeDefined();
    expect(getByText('Ficus elastica')).toBeDefined();
  });
});
