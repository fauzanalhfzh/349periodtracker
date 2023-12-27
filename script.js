document.getElementById("calculateButton").addEventListener("click", function () {
  const lastPeriodDate = new Date(document.getElementById("lastPeriod").value);
  const cycleLength = parseInt(document.getElementById("cycleLength").value);

  const nextPeriodDate = new Date(lastPeriodDate);
  nextPeriodDate.setDate(lastPeriodDate.getDate() + cycleLength);

  const resultElement = document.getElementById("result");
  resultElement.textContent = "Haid berikutnya diperkirakan pada: " + nextPeriodDate.toDateString();
});
