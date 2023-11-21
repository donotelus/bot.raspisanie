import {Telegraf, session} from 'telegraf'
import {message} from 'telegraf/filters'
import {config} from './config.js'
import { getCurrentWeek, evenWeek} from './getDate.js';
import  getMainMenu  from './keyboards.js';

const bot = new Telegraf(config.get('TELEGRAM_TOKEN'));
bot.command('start', async(ctx) => {
    await ctx.reply('Приветствую студент Hexlet. Бот создан для облегчения поиска ссылок на Zoom.')
});
const INITIAL_SESSION = {
    message:[0] 
};

bot.on 