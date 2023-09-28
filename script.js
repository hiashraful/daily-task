function scheduleTask() {
  const members = ["আশরাফুল", "নাফিস", "নাহিন", "সাবিত", "রিফাত"];
  const day = new Date();
  var today = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var todayName = day.toLocaleDateString("bn-BN", today);
  const hours = day.getHours();
  const minutes = day.getMinutes();
  const seconds = day.getSeconds();
  const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

  const formattedTime = `
    ${bengaliDigits[Math.floor(hours / 10)]}${bengaliDigits[hours % 10]}:
    ${bengaliDigits[Math.floor(minutes / 10)]}${bengaliDigits[minutes % 10]}:
    ${bengaliDigits[Math.floor(seconds / 10)]}${bengaliDigits[seconds % 10]}
`;
  if ((currentHour) => 0 && currentMinute >= 1) {
    var presentMember;
    let counter = 0;
    const currentDay = day.getDay();
    if (counter > 4) {
      counter = 0;
    }
    switch (currentDay) {
      case 0:
        presentMember = members[2];
        break;
      case 1:
        presentMember = members[3];
        break;
      case 2:
        presentMember = members[4];
        break;
      case 3:
        presentMember = members[0];
        break;
      case 4:
        presentMember = members[counter];
        break;
      case 5:
        presentMember = members[counter];
        break;
      case 6:
        presentMember = members[0];
        break;
      default:
        presentMember = NaN;
    }

    var yesterdayIndex =
      members.indexOf(presentMember) == 0
        ? 4
        : members.indexOf(presentMember) - 1;
    var tomorrowIndex =
      members.indexOf(presentMember) == 4
        ? 0
        : members.indexOf(presentMember) + 1;
    var pastMember = members[yesterdayIndex];
    var tomorrowMember = members[tomorrowIndex];
    document.getElementById("today").textContent = todayName;
    document.getElementById("time").textContent = formattedTime;
    document.getElementById("past-member").textContent = pastMember;
    document.getElementById("present-member").textContent = presentMember;
    document.getElementById("tomorrow-member").textContent = tomorrowMember;
    counter++;
  }
}

setInterval(scheduleTask, 1000);
scheduleTask();