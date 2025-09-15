async function unmuteCommand(sock, chatId) {
    await sock.groupSettingUpdate(chatId, 'not_announcement'); // Unmute the group
    await sock.sendMessage(chatId, { text: 'The group has been unmuted.' });
}

module.exports = unmuteCommand;
/*─────────────────────────────────────────────────────────────
 🌟 OWNER     : NIMESHA MADHUSHAN  
 🌐 Supported : GITHUB  
 🔒 CODE PROTECT  
 📺 YT        : https://youtube.com/@NIMESHA_editz  
 💬 TG        : https://t.me/nimabotsnew  
 💻 GITHUB    : https://github.com/Nimeshamadhushan/NimaMusic  
─────────────────────────────────────────────────────────────*/
