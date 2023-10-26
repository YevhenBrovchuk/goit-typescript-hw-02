/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum dayOfWeek {
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
  SUN,
}
function isWeekend(day: dayOfWeek): boolean {
  return day === dayOfWeek.SAT || day === dayOfWeek.SUN;
}
