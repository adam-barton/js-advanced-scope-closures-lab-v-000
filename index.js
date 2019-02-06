function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {

    let start = parseInt(startBlock);
    let end = parseInt(endBlock);
    let distance = (end - start);

      if (distance > blockRange) {
        return `${distance - blockRange} blocks out of range`
      } else {
        return `within range by ${blockRange - distance}`
      };
    }
  }
