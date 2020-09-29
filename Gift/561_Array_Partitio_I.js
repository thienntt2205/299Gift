/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    var len = nums.length,
        total = nums.sort((x, y) => x - y),
        sum = 0;

    do {
        sum += total[len - 2];
    } while (len -= 2);

    return sum;

};