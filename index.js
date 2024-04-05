console.log("😱")

const quota = document.getElementById("quotaInput");
const totalSold = document.getElementById("totalSoldInput");
const deadlineDays = document.getElementById("deadlineDaysInput")

quota.addEventListener("input", checkValue);
totalSold.addEventListener("input", checkValue);
deadlineDays.addEventListener("input", checkValue);

checkValue()
totalSold.focus()

function checkValue() {
    quota.value = quota.value.replace(/[^0-9]/g,"");
    totalSold.value = totalSold.value.replace(/[^0-9]/g,"");

    quota.size = Math.max(1, quota.value.toString().length);
    totalSold.size = Math.max(1, totalSold.value.length);

    deadlineDays.value = Math.min(Math.max(deadlineDays.value, 0), 3);

    calculateQuota();
}

function calculateQuota() {
    let deadlineDaysVal = deadlineDays.value;
    if (deadlineDaysVal === 0) deadlineDaysVal = -1;

    let overtimeBonus = Math.max(0, Math.round((totalSold.value - quota.value) / 5 + 15 * deadlineDaysVal));
    if (totalSold.value < quota) overtimeBonus = 0;
    if (isNaN(overtimeBonus)) return;
    document.getElementById("overtime").innerHTML = "$" + overtimeBonus;
}