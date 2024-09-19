/** Импорт инстанса бота */
const {bot} = require('./bot/bot');

/** Обработка ошибок */
require('./errors/errors');
/** Мидлвари */
require('./middleware/middleware');
/** Слушатели и обработчики */
require('./listeners/listeners');

/** Старт бота */
bot.start();
