const money = 899076;
const list = [1, 3, 5, 7, 0];
const final = [];
let amount = 0;
let remainingAmount = money;
list.sort((a, b) => a - b);
for (i = list.length - 1; i >= 0; i--) {
    const denomination = list[i];
    if (remainingAmount >= denomination) {
        const mod = remainingAmount > denomination ? remainingAmount % denomination : denomination % remainingAmount;
        const divide = mod === 0 ? remainingAmount : remainingAmount - mod;
        const num = divide / denomination;
        const temp = num * denomination;
        if (temp <= remainingAmount) {
            amount = amount + temp;
            remainingAmount = money - amount;
            final.push({ count: num, denomination: denomination });
        }
    }
}
console.log(final.reduce((sum,ele) => sum + ele.count ,0), `${final.map(ele => `${ele.count} x ${ele.denomination}`)}`)