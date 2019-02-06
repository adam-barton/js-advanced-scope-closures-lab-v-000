function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {

    const findDifference = function(startBlock, endBlock) {
      if (parseInt(startBlock) > parseInt(endBlock)) {
        return parseInt(startBlock) - parseInt(endBlock)
      } else {
        return parseInt(endBlock) - parseInt(startBlock)
      }
    }
    
    if (findDifference(startBlock, endBlock) > blockRange) {
      return `${(findDifference - blockRange)} blocks out of range`
    }
  }
}
