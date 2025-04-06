function age() {
    const day = parseInt(document.getElementById("date").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("Please enter valid numbers for day, month, and year.");
        return;
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    let result = document.getElementById("result");
    if (!result) {
        result = document.createElement("p");
        result.id = "result";
        result.style.color = "aqua";
        result.style.marginTop = "20px";
        result.style.fontSize = "18px";
        document.querySelector(".container").appendChild(result);
    }

    result.innerHTML = `You are <strong>${ageYears}</strong> years, <strong>${ageMonths}</strong> months, and <strong>${ageDays}</strong> days old.`;
}
