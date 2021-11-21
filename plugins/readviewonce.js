let Iqbal = async (m, { conn, command, text }) => {
    if (!m.quoted) return conn.sendMessage(m.chat, 'where\'s message?', 'conversation')
    if (m.quoted.mtype !== 'viewOnceMessage') return m.reply('Itu bukan pesan viewOnce')
    await conn.copyNForward(m.chat, await conn.loadMessage(m.chat, m.quoted.id), false, { readViewOnce: true }).catch(_ => m.reply('Mungkin dah pernah dibuka bot'))
}

Iqbal.command = /^readviewonce/i

module.exports = Iqbal