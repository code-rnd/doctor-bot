const { Menu, MenuRange } = require('@grammyjs/menu');

const {usefulTips} = require("../dictionries/dictionries");

const menuUsefulTips = new Menu("usefulTips")

menuUsefulTips.dynamic(() => {
    const range = new MenuRange();

    usefulTips.forEach(meeting => {
        range.text(meeting.name, (ctx) => ctx.reply(meeting.description)).row();
    })

    return range;
})

module.exports.menuUsefulTips = menuUsefulTips
