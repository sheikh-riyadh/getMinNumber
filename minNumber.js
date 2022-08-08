const jim = 84;
const dela = 97;
const chinku = 99;


function getMin(jim, dela, chinku) {
    if (jim < dela && jim < chinku) {
        return jim;
    }
    else if (dela < jim && dela < chinku) {
        return dela;
    }
    else {
        return chinku;
    }
}

const resultOfMin = getMin(jim, dela, chinku);
console.log(resultOfMin);