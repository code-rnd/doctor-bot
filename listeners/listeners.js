const {bot} = require("../bot/bot");
const {Keyboard} = require("grammy");
const {menuRoot} = require("../controls/root");
const {menuMedication} = require("../controls/medication");
const {menuUsefulTips} = require("../controls/useful-tips");

bot.hears(['/start', 'Домой'], async (ctx) => {
    const startKeyboard = new Keyboard()
        .text('Медикементы')
        .text('Запись на прием').row()
        .text('Полезные советы').row()
        .text('Домой')
        .placeholder('...')
        .resized()
        .persistent()


    const userName = ctx.message.from.first_name || ctx.message.from.username

    await ctx.reply(`Здравствуйте, ${userName}!\n` +
        "Врача нет на месте.\n" +
        "Если вас интересует интерпретация анализов - дождитесь ответа врача.",
        {
            reply_markup: startKeyboard
        }
    );
});

bot.hears(["Запись на прием"], async (ctx) => {
    await ctx.reply("Варианты записи на прием:👇\n", { reply_markup: menuRoot });
});

bot.hears(["Медикементы"], async (ctx) => {
    await ctx.reply("Препараты и инструкции:👇\n", { reply_markup: menuMedication });
});

bot.hears(["Полезные советы"], async (ctx) => {
    await ctx.reply("Полезные советы:👇\n", { reply_markup: menuUsefulTips });
});