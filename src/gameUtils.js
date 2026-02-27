/**
 * Функція для підрахунку фінального результату гри
 * Віднімає бали за кожен зайвий хід
 *
 * @param {number} moves - кількість зроблених ходів
 * @param {number} time - витрачений час у секундах
 * @returns {number} фінальний бал гравця
 */
function calculateFinalScore(moves, time) {
  return 10000 - moves * 10 - time;
}
