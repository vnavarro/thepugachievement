function loadClock()
{
  var currentDate = new Date();
  var futureDate  = new Date(currentDate.getFullYear(), 8, 31);
  var diffFutureCurrent = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
  var clock = $('.clock').FlipClock(diffFutureCurrent, {
    clockFace: 'DailyCounter',
    countdown: true
  });
}

$(document).ready(function() {
  loadClock();
});
