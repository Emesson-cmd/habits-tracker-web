import dayjs from 'dayjs';

export function generateDatesFromYearBeggining() {
  const firstDayOfTheYear = dayjs().startOf('year'); 
  const today = new Date();

  const dates = []; 
  let comapreDate = firstDayOfTheYear;

  while (comapreDate.isBefore(today)) {
    dates.push(comapreDate.toDate()); 
    comapreDate = comapreDate.add(1, 'day'); 
  }

  return dates;
}
