/** Импорт инстанса бота */
const {bot} = require('./bot/bot');

const { run } = require("@grammyjs/runner")
const { apiThrottler } =  require("@grammyjs/transformer-throttler");

const throttler = apiThrottler();
bot.api.config.use(throttler);

/** Обработка ошибок */
require('./errors/errors');
/** Мидлвари */
require('./middleware/middleware');
/** Слушатели и обработчики */
require('./listeners/listeners');

/** Старт бота */
run(bot)