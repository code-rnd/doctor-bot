require('dotenv').config()

const { Bot, Keyboard } = require('grammy');
const bot = new Bot(process.env.ACCESS_TOKEN);

bot.start();

bot.command('start', async (ctx) => {
    await ctx.reply(
        'Привет! Я - Frontend Bot 🤖 \nЯ помогу тебе с чем нибудь...',
    );
});