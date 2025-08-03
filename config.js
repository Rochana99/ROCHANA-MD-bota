const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || "https://mega.nz/file/v5I1TTAK#me9SMkkOcIGj3HZ3eStWmXCKAD4TDkcklI4s6rIN0QA",
ALIVE_IMG: process.env.ALIVE_IMG || "https://res.cloudinary.com/df2rnoijw/image/upload/v1752740024/bankl0exnr8remsz8t32.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "┏━━━━━━━━━━━➤◍◉➤\n│ *🔰𝐇𝐞𝐲 𝐈'𝐦 𝐑𝐎𝐂𝐇𝐀𝐍𝐀-𝐌𝐃 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭⚡*\n┗━━━━━━━━━━━━━━━━━━━━\n━➤◍◉➤\n┏━━━━━━━━━━━➤◍◉➤\n│ *🔔𝐈'm 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰❤️*\n┗━━━━━━━━━━\n━➤◍◉➤\n┏━━━━━━━━━━━➤◍◉➤\n│ *⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : 𝐑𝐎𝐂𝐇𝐀𝐍𝐀 𝐌𝐃|*\n┗━━━━━━━━━━━━━━━━━━━━\n*2024🤍*\n\n┏━━━━━━━━━━━➤◍◉➤\n*This bot is made by ʀᴏᴄʜᴀɴᴀ ᴊᴀɴᴀᴅᴇᴇᴘᴀ updates will coming*\n┗━━━━━━━━━━━━━━━━━━━━",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
BOT_NUMBER: process.env.BOT_NUMBER || "94766443560",
OWNER_REACT: process.env.OWNER_REACT || "👨‍💻",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
READ_CMD: process.env.READ_CMD || "true",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
ALWAYS_RECORDING: process.env.ALWAYS_RECORDING || "true",
BOT_NAME: process.env.BOT_NAME || "➺ROCHANA-MD࿐",
OWNER_NAME: process.env.OWNER_NAME || "➺ROCHANA-MD࿐",
OWNER_NUMBER: process.env.OWNER_NUMBER || "94729012605",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
AUTO_REACT: process.env.AUTO_REACT || "true",
ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "true",
ANTI_LINK:process.env.ANTI_LINK || "true",
ANTI_BAD:process.env.ANTI_BAD || "true",
ANTI_BOT:process.env.ANTI_BOT || " true"
};
