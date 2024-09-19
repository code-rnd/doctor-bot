const { Menu, MenuRange } = require('@grammyjs/menu');

const {medicines} = require("../dictionries/dictionries");

const menuMedication = new Menu("medication")

menuMedication.dynamic(() => {
    const range = new MenuRange();

    let count = 0;

    medicines.forEach(medication => {
        const isLong = medication.name?.length > 10;
        const isEven = count === 1

        if(isLong) {
            range.row();
        }

        range.text(medication.name, (ctx) => ctx.reply(medication.description))

        if(isLong) {
            count = 0;
            range.row();
        }

        if(!isLong && isEven) {
            count = count + 1;

            range.row();
        }

        if(!isLong && !isEven) {
            count = count + 1;
        }

    })

    return range;
})

module.exports.menuMedication = menuMedication
