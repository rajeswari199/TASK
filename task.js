const money = 899076;
const list = [1, 3, 5, 7, 0];
const final = [];
let amount = 0;
let remainingAmount = money;
const count = [];
list.sort((a, b) => a - b);
for (i = 0; i < list.length; i++) {
    const mod = list[i] > money ? list[i] % money : money % list[i];
    if (list[i] !== 0 && mod >= 0 && mod < money && amount <= amount) {
        const divide = mod === 0 ? money : money - mod;
        const num = divide / list[i];
        count.push({ count: num, denomination: list[i] });
    }
}
for (i = count.length - 1; i >= 0; i--) {
    const denomination = count[i].denomination;
    if (remainingAmount >= denomination) {
        const mod = remainingAmount > denomination ? remainingAmount % denomination : denomination % remainingAmount;
        const divide = mod === 0 ? remainingAmount : remainingAmount - mod;
        const num = divide / count[i].denomination;
        const temp = num * count[i].denomination;
        if (temp <= remainingAmount) {
            amount = amount + temp;
            console.log(amount);
            remainingAmount = money - amount;
            final.push({ count: num, denomination: count[i].denomination });
        }
    }
}
console.log(final.length, `${final.map(ele => `${ele.count} x ${ele.denomination}`)}`)