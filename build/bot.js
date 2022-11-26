"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const bot = new grammy_1.Bot(`${process.env.TOKEN}`);
bot.command("setalarm", (ctx) => {
    const arr = ctx.match.split(",");
    const intervalTime = Math.floor(Number(arr[0]) * 60 * 1000);
    var i = 0;
    function doSomething() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("ping");
            yield ctx.reply("ping", {
                reply_to_message_id: ctx.msg.message_id,
            });
            if (++i < Number(arr[1])) {
                setTimeout(doSomething, intervalTime);
            }
        });
    }
    setTimeout(doSomething, intervalTime);
});
bot.start();
