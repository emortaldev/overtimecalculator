"use strict";
console.log("😱");
const quota = document.getElementById("quotaInput");
const totalSold = document.getElementById("totalSoldInput");
const deadlineDays = document.getElementById("deadlineDaysInput");
const overtime = document.getElementById("overtime");
quota.addEventListener("input", checkValue);
totalSold.addEventListener("input", checkValue);
deadlineDays.addEventListener("input", checkValue);
checkValue();
totalSold.focus();
function checkValue() {
    quota.value = quota.value.replace(/[^0-9]/g, "");
    totalSold.value = totalSold.value.replace(/[^0-9]/g, "");
    quota.setAttribute("size", Math.max(1, quota.value.length).toString());
    totalSold.setAttribute("size", Math.max(1, totalSold.value.length).toString());
    deadlineDays.value = Math.min(Math.max(parseInt(deadlineDays.value), 0), 3).toString();
    calculateQuota();
}
function calculateQuota() {
    let soldInt = parseInt(totalSold.value);
    let quotaInt = parseInt(quota.value);
    let deadlineDaysVal = parseInt(deadlineDays.value);
    if (deadlineDaysVal === 0)
        deadlineDaysVal = -1;
    let overtimeBonus = Math.max(0, Math.floor((soldInt - quotaInt) / 5 + 15 * deadlineDaysVal));
    overtime.textContent = "$" + overtimeBonus;
}
