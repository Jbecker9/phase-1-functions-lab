function distanceFromHqInBlocks(block){
    const hq = 42
    let distance = Math.abs(block - hq)
        return distance 
}

function distanceFromHqInFeet(block){
    let distance = distanceFromHqInBlocks(block);
    const length = 264;
    let feet = distance * length;
    return feet;
}

function distanceTravelledInFeet(block, end){
    const length = 264;
    let travelled = Math.abs(block - end);
    let feet = travelled * length;
    return feet
}

function calculatesFarePrice(block, end){
    let total = distanceTravelledInFeet(block, end);
    let charge = .02
        if (total <= 400){
            let price = 0
            return price
        }
        if (total > 400 && total <= 200)
            return cost = (total - 400) * charge
    }
