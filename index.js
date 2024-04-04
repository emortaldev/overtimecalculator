calculateQuota()
function calculateQuota() {
    let quota = document.getElementById("quotaInput").value;
    let totalSold = document.getElementById("totalSoldInput").value;
    let deadlineDays = document.getElementById("deadlineDaysInput").value;
    if (deadlineDays === 0) deadlineDays = -1;

    let overtimeBonus = Math.round((totalSold - quota) / 5 + 15 * deadlineDays);

    if (overtimeBonus <= 0) {
        document.getElementById("overtime").innerHTML = "You get no overtime bonus!"
    } else {
        document.getElementById("overtime").innerHTML = overtimeBonus;
    }


}