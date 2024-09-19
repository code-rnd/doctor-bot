const { bot } = require('../bot/bot');

const {menuRoot} = require('../controls/root')
const {menuMedication} = require('../controls/medication')
const {menuUsefulTips} = require("../controls/useful-tips");

bot.use(menuRoot);
bot.use(menuMedication);
bot.use(menuUsefulTips);