const createInt8TypedArray = (length, position, value) => {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const bView = new DataView(buffer);

  bView.setInt8(position, value);

  return bView;
};

export default createInt8TypedArray;
