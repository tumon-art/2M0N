import { Bot } from 'grammy'
import dotenv from 'dotenv'
dotenv.config()

const bot = new Bot(`${process.env.TOKEN}`);

bot.command("setalarm", (ctx) => {
  const arr: string[] = ctx.match.split(",")
  const intervalTime: number = Math.floor(Number(arr[0]) * 60 * 1000);

  var i: number = 0;

  async function doSomething() {
    await ctx.reply('ping', {
      reply_to_message_id: ctx.msg.message_id
    })

    if (++i < Number(arr[1])) {
      setTimeout(doSomething, intervalTime);
    }
  }
  setTimeout(doSomething, intervalTime);

});


bot.start();
