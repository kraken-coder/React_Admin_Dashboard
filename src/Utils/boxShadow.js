//  box shadow Funtion
export const boxShadow = (sideX, sideY, sideN, color) => {
  if (
    typeof sideX !== 'string' &&
    typeof sideY !== 'string' &&
    typeof sideN !== 'string' &&
    typeof color === 'string'
  ) {
    return `${sideN}px ${sideY}px ${sideX}px ${color} `;
  } else {
    return undefined;
  }
};
