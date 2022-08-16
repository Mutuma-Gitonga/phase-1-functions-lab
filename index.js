// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
  const hqBlockNumber = 42;
  if(blockNumber < hqBlockNumber) {
    return hqBlockNumber - blockNumber;
  } else {
    return blockNumber - hqBlockNumber;
  }
}

function distanceFromHqInFeet(blockNumber) {
  const blockCount = distanceFromHqInBlocks(blockNumber);
  return (blockCount * 264);
}

function distanceTravelledInFeet(start, destination) {
  if(destination > start) {
    return ((destination - start) * 264);
  } else {
    return((start - destination) * 264);
  }
}

function calculatesFarePrice(start, destination) {
  const totalDistanceTravelled = distanceTravelledInFeet(start, destination);
  if(totalDistanceTravelled <= 400) {
      return 0;
  } else if (totalDistanceTravelled > 400 && totalDistanceTravelled <= 2000) {
      return (((totalDistanceTravelled - 400) * 2)/100);
  } else if (totalDistanceTravelled > 2000 && totalDistanceTravelled <= 2500) {
      return 25;
  } else {
    return `cannot travel that far`;
  }
}