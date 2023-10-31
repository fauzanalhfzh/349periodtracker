document.getElementById("calculateButton").addEventListener("click", function () {
  const lastPeriodDate = new Date(document.getElementById("lastPeriod").value);
  // const cycleLength = parseInt(document.getElementById("cycleLength").value);

  const nextPeriodDate = new Date(lastPeriodDate);
  const nextOvulationDate = new Date(lastPeriodDate);

  nextPeriodDate.setDate(lastPeriodDate.getDate() + 27);
  nextOvulationDate.setDate(lastPeriodDate.getDate() + 14);

  const resultPeriodDate = document.getElementById("resultPeriodeDate");
  const resultOvulationDate = document.getElementById("resultOvulationDate");
  
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const periodDate = "Haid berikutnya pada: " + nextPeriodDate.toLocaleDateString('id-ID', options);
  const ovulationDate = "Ovulasi pada: " + nextOvulationDate.toLocaleDateString('id-ID', options);

  resultPeriodDate.textContent = periodDate;
  resultOvulationDate.textContent = ovulationDate;

  const resultMessage = periodDate + "\n" + ovulationDate;

  Swal.fire({
    icon: 'success',
    title: "Hasil Perkiraan: ",
    html: resultMessage,
    showConfirmButton: true,
    timer: 10000
  });
});


// 
window.onscroll= function () {
  const header = document.querySelector('header')
  const fixnav = header.offsetTop
  

  if(window.pageYOffset > fixnav){
    header.classList.add('navbar-fixed')
  }else{
    header.classList.remove('navbar-fixed')
  }
}
