let { WAConnection: _WAConnection, MessageType, Presence, Mimetype, GroupSettingChange, ReconnectMode } = require("@adiwajshing/baileys");
let fs = require('fs')
let bal = { "key": {"fromMe": false, "participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6281333782061-1617740713@g.us", "inviteCode": "https://chat.whatsapp.com/K1eU4aZZ8k7BO6eNndwvY1", "groupName": "𝐹𝑎𝑗𝑎𝑟𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖x𝑀𝑒𝑔𝑢𝑚𝑖𝑛𝐵𝑂𝑇", "caption": `Created By 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖`, "jpegThumbnail": fs.readFileSync('./media/BaseIqbalzz.jpg')}}}

module.exports = async(iqbl, ane) => {
metdata = await iqbl.groupMetadata(ane.jid)
if(ane.announce == 'false'){
teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
iqbl.sendMessage(metdata.id, teks, MessageType.text, {quoted: bal, sendEphemeral: true})
console.log(`- [ Group Opened ] - In ${metdata.subject}`)
}
else if(ane.announce == 'true'){
teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
iqbl.sendMessage(metdata.id, teks, MessageType.text, {quoted: bal, sendEphemeral: true})
console.log(`- [ Group Closed ] - In ${metdata.subject}`)
}
else if(!ane.desc == ''){
tag = ane.descOwner.split('@')[0] + '@s.whatsapp.net'
teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${ane.descOwner.split('@')[0]}\nâ€¢ Deskripsi Baru : ${ane.desc}`
iqbl.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: bal, sendEphemeral: true})
console.log(`- [ Group Description Change ] - In ${metdata.subject}`)
}
else if(ane.restrict == 'false'){
teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
iqbl.sendMessage(metdata.id, teks, MessageType.text, {quoted: bal, sendEphemeral: true})
console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
}
else if(ane.restrict == 'true'){
teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
iqbl.sendMessage(metdata.id, teks, MessageType.text, {quoted: bal, sendEphemeral: true})
console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
}
}