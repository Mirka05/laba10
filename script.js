JavaScript файл (script.js):// Функция для вычитания дней из даты
function subtractDaysFromDate(dateString, daysToSubtract) {
  // Проверка на корректность ввода
  if (!dateString || !daysToSubtract) {
    return "Ошибка: Вы не ввели все необходимые данные.";
  }

  // Проверка на стоп-слова
  const stopWords = ["стоп", "exit", "выход"];
  if (stopWords.includes(dateString.toLowerCase()) || stopWords.includes(daysToSubtract.toLowerCase())) {
    return "Работа скрипта завершена.";
  }

  // Проверка на корректность формата даты и количества дней
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  const numberPattern = /^-?\d+$/;

  if (!datePattern.test(dateString)) {
    return "Ошибка: Некорректный формат даты. Используйте YYYY-MM-DD.";
  }
  if (!numberPattern.test(daysToSubtract)) {
    return "Ошибка: Некорректное количество дней. Введите целое число.";
  }

  // Вычисление новой даты
  const date = new Date(dateString);
  const newDate = new Date(date);
  newDate.setDate(date.getDate() - parseInt(daysToSubtract));
  return newDate.toLocaleDateString();
}

// Основной цикл работы скрипта
let result;
do {
  const dateString = prompt("Введите дату в формате YYYY-MM-DD:");
  const daysToSubtract = prompt("Введите количество дней для вычитания (или стоп-слово для завершения):");
  result = subtractDaysFromDate(dateString, daysToSubtract);
  if (result.startsWith("Ошибка") || result.startsWith("Работа")) {
    alert(result);
  } else if (result !== "Работа скрипта завершена.") {
    alert(`Результат: ${result}`); // Исправлено: добавлена строка
  }

} while (result !== "Работа скрипта завершена.");