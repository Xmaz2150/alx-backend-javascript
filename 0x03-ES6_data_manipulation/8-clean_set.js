const cleanSet = (set, startString) => {
  const mathes = [];

  if (startString !== '') {
    set.forEach((value) => {
      if (value.startsWith(startString)) {
        mathes.push(value.slice(startString.length));
      }
    });

    return mathes.join('-');
  }
  return '';
};

export default cleanSet;
