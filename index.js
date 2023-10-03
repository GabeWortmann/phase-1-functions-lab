function distanceFromHqInBlocks(distance) {
    const disDif = distance - 42
    if (disDif < 0) {
        return disDif*-1
    } else return disDif
}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) *264
}

function distanceTravelledInFeet(start, destination) {
    let dist
    if (start >= destination) {
        dist = start - destination
    } else dist = destination - start
    return dist * 264
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0
    } else if (distance > 400, distance < 2000) {
        return (distance - 400) * 0.02
    } else if (distance > 2000, distance < 2500) {
        return 25
    } else return `cannot travel that far`
}
