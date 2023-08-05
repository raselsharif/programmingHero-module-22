

function woodCalculation(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const totalChairWood = chairQuantity * perChairWood;
    const totalTableWood = tableQuantity * perTableWood;
    const totalBedWood = bedQuantity * perBedWood;

    const totalWood = totalChairWood + totalTableWood + totalBedWood;

    return totalWood;

}

const result = woodCalculation(6,1,2);
console.log("Total wood required: ",result,"cft");