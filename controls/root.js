const { Menu, MenuRange } = require('@grammyjs/menu');

const {meetings} = require("../dictionries/dictionries");

const menuRoot = new Menu("root")

menuRoot.dynamic(() => {
    const range = new MenuRange();

    meetings.forEach(meeting => {
        range.text(meeting.name, (ctx) => ctx.reply(meeting.description)).row();
    })

    return range;
})


module.exports.menuRoot = menuRoot
