var color;
(function (color) {
    color["heart"] = "\u2665";
    color["spade"] = "\u2660";
    color["club"] = "\u2663";
    color["diamond"] = "\u2666";
})(color || (color = {}));
var digit;
(function (digit) {
    digit["one"] = "A";
    digit["two"] = "2";
    digit["three"] = "3";
    digit["four"] = "4";
    digit["five"] = "5";
    digit["six"] = "6";
    digit["seven"] = "7";
    digit["eight"] = "8";
    digit["nine"] = "9";
    digit["ten"] = "10";
    digit["eleven"] = "J";
    digit["twelve"] = "Q";
    digit["kine"] = "K";
})(digit || (digit = {}));
function createPoker() {
    var poker = [];
    var cardNumber = Object.values(digit);
    var cardColor = Object.values(color);
    for (var _i = 0, cardNumber_1 = cardNumber; _i < cardNumber_1.length; _i++) { //for of 遍历的是数组的值
        var n = cardNumber_1[_i];
        for (var _a = 0, cardColor_1 = cardColor; _a < cardColor_1.length; _a++) {
            var c = cardColor_1[_a];
            poker.push({
                number: n,
                color: c
            });
        }
    }
    return poker;
}
function printPoker(poker) {
    for (var i = 0; i < 52; i++) {
        var str = poker[i].number + poker[i].color;
        console.log(str);
    }
}
var poker = createPoker();
printPoker(poker);
