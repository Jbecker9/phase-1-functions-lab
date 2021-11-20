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
    console.log(total)
        if (total <= 400){
            let price = 0
            return price
        } 
        else if (total > 400 && total <= 2000){
            let cost = charge * (total - 400)
            return cost
        }
        else if (total >= 2000 && total <= 2500){
            return 25
        }
        else {
            let greeting = 'cannot travel that far'
            return greeting
        }


            //return cost = (total - 400) * charge
    }