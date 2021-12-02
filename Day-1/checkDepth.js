const fs = require('fs')

function countDepthIncrease(list) {
    let count = 0
    for(let item=0; item < list.length; item++) {
        if(list[item] < list[item+1]) {
            count = count + 1
        }
    }

    return count;
}

function countSlidingWindowIncrease(list) {
    let count = 0
    for(let item=0; item < list.length; item++) {
        if(list[item]+list[item+1]+list[item+2] < list[item+1]+list[item+2]+list[item+3]) {
            count = count + 1
        }
    }

    return count;
}

function multiplyInstructionSet() {
    new Promise((resolve, reject) => {
        fs.readFile('./sample_data.txt', 'utf8', (err, data) => {
        if(err) throw reject(err);
        resolve(data.toString().replace(/\r\n/g,'\n').split('\n'))
    })
}).then(data => {
    var aim = 0
    var totalAim = 0
    var totalDown = 0
    var totalUp = 0
    var totalForward = 0

    data.forEach(element => {
        let splitter = element.split(" ")
        if(splitter[0] == 'up') {
            totalUp = totalUp + parseInt(splitter[1])
            totalAim = totalAim - parseInt(splitter[1])
        }

        if(splitter[0] == 'down') {
            totalAim = totalAim + parseInt(splitter[1])
        }

        if(splitter[0] == 'forward') {
            totalForward = totalForward + parseInt(splitter[1])
            totalDown = totalDown + (parseInt(splitter[1]) * totalAim)
        }
    });

    console.log("result", totalForward * totalDown)
    
})
}


module.exports = {
    countDepthIncrease,
    countSlidingWindowIncrease,
    multiplyInstructionSet    
}