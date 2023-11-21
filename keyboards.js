import Markup from 'telegraf/markup'

export function getMainMenu() {
    return Markup.keyboard([
        ['1105о']
    ]).resize().extra()
}