function produceDrivingRange(range) {
  return function(start, end) {
    const startNum = start.slice(0, 2);
    const endNum = end.slice(0, 2);
    const distance = endNum - startNum;
    if (range >= distance) {
      return `within range by ${range - distance}`
    } else {
      return `${distance - range} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(total) {
    return total * percentage;
  };
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}
