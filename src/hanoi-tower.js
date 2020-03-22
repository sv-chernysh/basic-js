module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let objHanoi = {
        turns: 0,
        seconds: 0
    };
    objHanoi.turns = Math.pow(2, disksNumber) - 1;
    objHanoi.seconds = objHanoi.turns / (turnsSpeed / 3600);
    return objHanoi;
};