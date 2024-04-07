"use strict";
console.log("😱");

const quota: HTMLInputElement = document.getElementById("quotaInput") as HTMLInputElement;
const totalSold: HTMLInputElement = document.getElementById("totalSoldInput") as HTMLInputElement;
const deadlineDays: HTMLInputElement = document.getElementById("deadlineDaysInput") as HTMLInputElement;
const overtime: HTMLDivElement = document.getElementById("overtime") as HTMLDivElement;

quota.addEventListener("input", checkValue);
totalSold.addEventListener("input", checkValue);
deadlineDays.addEventListener("input", checkValue);

checkValue();
totalSold.focus();

function checkValue(): void {
    quota.value = quota.value.replace(/[^0-9]/g, "");
    totalSold.value = totalSold.value.replace(/[^0-9]/g, "");

    quota.setAttribute("size", Math.max(1, quota.value.length).toString());
    totalSold.setAttribute("size", Math.max(1, totalSold.value.length).toString());

    deadlineDays.value = Math.min(Math.max(parseInt(deadlineDays.value), 0), 3).toString();

    calculateQuota();
}

function calculateQuota(): void {
    let soldInt: number = parseInt(totalSold.value);
    let quotaInt: number = parseInt(quota.value);

    let deadlineDaysVal: number = parseInt(deadlineDays.value);
    if (deadlineDaysVal === 0) deadlineDaysVal = -1;

    let overtimeBonus: number = Math.max(0, Math.floor((soldInt - quotaInt) / 5 + 15 * deadlineDaysVal));
    overtime.textContent = "$" + overtimeBonus;
}