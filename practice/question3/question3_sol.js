// 3.1
function driverNumbers1(fz) {
    const drivers1 = fz.filter(f => f.number.startsWith('1'))
    return drivers1
}

// 3.2
function driveMonaco(fx) {
    const driversInMonaco = fx
    .filter(r => r.track.includes('Monaco'))
    .map(r => r.name);
    return (driversInMonaco)
}

// 3.3
function averagePosDri(fc) {
    const avgDriversPositions = fc.map(f => {
        let sumScore = f.finishPos.reduce((a, b) => a + b)
        let avgd = sumScore / f.finishPos.length
        return({name: f.name, avgPostition: avgd})
    })
    return avgDriversPositions
}