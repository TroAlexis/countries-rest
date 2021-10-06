const axes = {
  y: 'Height',
  x: 'Width',
};

export default function checkOverflow(el, axis) {
  const property = axes[axis];

  return el[`client${property}`] < el[`scroll${property}`];
}
