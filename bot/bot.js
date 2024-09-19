require('dotenv').config()

const {Bot} = require("grammy");

const bot = new Bot(process.env.ACCESS_TOKEN);

module.exports.bot = bot;