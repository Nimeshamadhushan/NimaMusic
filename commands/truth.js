const fetch = require('node-fetch');

async function truthCommand(sock, chatId, message) {
    try {
        const shizokeys = 'shizo';
        const res = await fetch(`https://shizoapi.onrender.com/api/texts/truth?apikey=${shizokeys}`);
        
        if (!res.ok) {
            throw await res.text();
        }
        
        const json = await res.json();
        const truthMessage = json.result;

        // Send the truth message
        await sock.sendMessage(chatId, { text: truthMessage }, { quoted: message });
    } catch (error) {
        console.error('Error in truth command:', error);
        await sock.sendMessage(chatId, { text: '❌ Failed to get truth. Please try again later!' }, { quoted: message });
    }
}

module.exports = { truthCommand };
/*─────────────────────────────────────────────────────────────
 🌟 OWNER     : NIMESHA MADHUSHAN  
 🌐 Supported : GITHUB  
 🔒 CODE PROTECT  
 📺 YT        : https://youtube.com/@NIMESHA_editz  
 💬 TG        : https://t.me/nimabotsnew  
 💻 GITHUB    : https://github.com/Nimeshamadhushan/NimaMusic  
─────────────────────────────────────────────────────────────*/
