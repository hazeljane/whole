const calendarHeader = document.getElementById("calendar-header");
const calendarDatesContainer = document.querySelector(".calendar-grid");

const today = new Date();
const currentMonth = today.getMonth(); // 0-11
const currentYear = today.getFullYear();

function renderCalendar(month, year) {
  // Clear all date elements (but not the day-name headers)
  const existingDates = document.querySelectorAll(".calendar-grid .date");
  existingDates.forEach(el => el.remove());

  const monthStart = new Date(year, month, 1);
  const monthEnd = new Date(year, month + 1, 0);
  const daysInMonth = monthEnd.getDate();

  const monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];
  calendarHeader.textContent = `${monthNames[month]} ${year}`;

  let startDay = monthStart.getDay();
  if (startDay === 0) startDay = 7;

  for (let i = 1; i < startDay; i++) {
    const blank = document.createElement("div");
    blank.classList.add("date");
    calendarDatesContainer.appendChild(blank);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dateEl = document.createElement("div");
    dateEl.classList.add("date");

    if (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      dateEl.classList.add("today");
    }

    dateEl.textContent = day;
    calendarDatesContainer.appendChild(dateEl);
  }
}

renderCalendar(currentMonth, currentYear);