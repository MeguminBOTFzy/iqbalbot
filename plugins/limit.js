let Iqbal = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    m.reply(`*${user.limit}* Limit\n*${user.exp}* XP\nLevel *${user.level}*\nRole *${user.role}*`)
}
Iqbal.command = /^(my|limit)$/i
module.exports = Iqbal