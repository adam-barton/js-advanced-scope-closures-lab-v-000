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

//     const findDifference = function(startBlock, endBlock) {
//       if (parseInt(startBlock) > parseInt(endBlock)) {
//         return parseInt(startBlock) - parseInt(endBlock)
//       } else {
//         return parseInt(endBlock) - parseInt(startBlock)
//       }
//     }
//
//     if (findDifference(startBlock, endBlock) > blockRange) {
//       return `${(findDifference - blockRange)} blocks out of range`
//     }
//   }
// }
