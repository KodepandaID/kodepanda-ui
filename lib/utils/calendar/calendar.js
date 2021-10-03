import moment from "moment";

const GenerateYear = (yearNow) => {
  const lastYear = yearNow - 11;
  let years = [];
  for (let i = lastYear; i <= yearNow; i++) {
    years.push(i)
  }

  return years;
}

const GenerateMonth = (loc) => {
  const months = [];
  for (let i = 0; i < 12; i++) {
    const m = moment().locale(loc).month(i).format("MMM")
    months.push(m)
  }

  return months;
}

const GenerateDay = (loc) => {
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = moment().locale(loc).day(i).format("dd")
    days.push(d)
  }

  return days;
}

const loopDate = (start, end, month, year) => {
  const dates = [];
  for (let i = start; i <= end; i++) {
    dates.push({
      date: i,
      month: month,
      year: year,
      unix: moment().date(i).month(month).year(year).hour(0).minute(0).second(0).unix()
    })
  }

  return dates;
}

const GenerateDate = (month, year) => {
  let dates = [];

  const firstDay = moment().date(1).month(month).year(year).day();
  if (firstDay > 0) {
    const m = (month-1) >= 0 ? (month-1) : 12;
    const y = (month-1) >= 0 ? year : (year-1);

    const lastDate = moment().month(m).year(y).daysInMonth();
    const startDate = lastDate - (firstDay-1)

    let d = [];
    for (let i = startDate; i <= lastDate; i++) {
      d.push({
        date: 0,
        unix: moment().date(i).month(m).year(y).hour(0).minute(0).second(0).unix()
      })
    }
    dates = dates.concat(d)
  }

  const lastDate = moment().month(month).year(year).daysInMonth();
  const d = loopDate(1, lastDate, month, year);
  dates = dates.concat(d)

  const lastDay = moment().date(lastDate).month(month).year(year).days();
  if (lastDay < 6) {
    const m = (month+1) > 12 ? 1 : (month+1);
    const y = (month+1) > 12 ? (year+1) : year;

    let d = [];
    for (let i = 1; i <= (6 - lastDay); i++) {
      d.push({
        date: 0,
        unix: moment().date(i).month(m).year(y).hour(0).minute(0).second(0).unix()
      })
    }
    dates = dates.concat(d)
  }

  return dates
}

export { GenerateYear, GenerateMonth, GenerateDay, GenerateDate }