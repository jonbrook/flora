export const soilHelper = (soilMoisture: string) => {
  switch (soilMoisture) {
    case 'dry':
      return '20%';
    case 'slightly dry':
      return '40%';
    case 'nearly dry':
      return '60%';
    case 'never dry':
      return '90%';
    default:
      return '100%';
  }
};

export const waterHelper = (lastWatered: number) => {
  const currentWaterStatus = (Date.now() - lastWatered) / lastWatered;
  // always returns 50%, need logic for how to calculate this...
  return `${(currentWaterStatus / currentWaterStatus) * 50}%`;
};

export const sunlightHelper = (sunlight: string) => {
  switch (sunlight) {
    case 'part shade to full shade':
      return '30%';
    case 'part shade':
      return '50%';
    case 'part sun to part shade':
      return '70%';
    case 'full sun to part shade':
      return '90%';
    default:
      return '100%';
  }
};
