const { Alice, Scene, Reply, Markup } = require('yandex-dialogs-sdk');

const alice = new Alice();
const M = Markup;

alice.command('', async (ctx) => {
  return Reply.text('Привет! Поговорим о твоих планах?', {
    buttons: [M.button('Давай попробуем!'), M.button('Не хочу')],
  })
})
/*alice.command(welcomeMatcher, ctx =>
  Reply.text('Привет! Я загадала число от 1 до 100. Сможешь отгадать его?', {
    buttons: [M.button('Давай попробуем!'), M.button('Не хочу')],
  }),
);
*/
const startGame = ctx => {  
  return ctx.reply('Хорошо! Назовите месяц, например Июнь')
};

alice.command(['давай попробуем', 'запомни еще'], startGame);
alice.command('Не хочу', async (ctx) => {return ctx.reply('Эх! а как хотелось')});

const startMonth = ctx => {
  /*ctx.session.set('current',123)*/
  return ctx.reply(`Хорошо! Я запомню ваши планы на ${ctx.message}. Скажите, что мне запомнить? Начните с фразы "Мои планы."`)
};

alice.command(/.*январ.*/, startMonth);
alice.command(/.*феврал.*/, startMonth);
alice.command(/.*мар.*/, startMonth);
alice.command(/.*апрел.*/, startMonth);
alice.command(/.*ма.*/, startMonth);
alice.command(/.*июн.*/, startMonth);
alice.command(/.*июл.*/, startMonth);
alice.command(/.*август.*/, startMonth);
alice.command(/.*сентябр.*/, startMonth);
alice.command(/.*октябр.*/, startMonth);
alice.command(/.*ноябр.*/, startMonth);
alice.command(/.*декабр.*/, startMonth);


const tif = ctx => {
 return ctx.reply(`${ctx.message}.Верно? Или я что-то напутала?`)
};

alice.command(/.*Мои планы.*/, tif);
alice.command(/.*мои планы.*/, tif);

const fit = ctx => {  
  return ctx.reply('Тогда до встречи :3')
};
alice.command(['да', 'всё', 'все', 'верно'], fit);

const not = ctx => {  
  return ctx.reply('Tогда повторите ваши планы, пожалуйста')
  };
alice.command(['нет', 'не всё', 'не все', 'неверно'], not);

 
alice.any(async (ctx) => {
  return ctx.reply('О чём это вы?')
})
 
alice.listen('/', 80)