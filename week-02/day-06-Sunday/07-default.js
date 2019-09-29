function drink(milk = false, sugar = false) {
    let withsugar = sugar ? 'with sugar' : ''
    let withmilke = milk ? 'with milk' : ''

    return `coffee ${withsugar} ${withmilke}`
}
console.log(drink(true, false));