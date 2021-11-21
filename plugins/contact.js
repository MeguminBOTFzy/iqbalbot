let Iqbal = async (m, { conn, command, text }) => {
  if (!text) return
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) return m.reply('Tag salah satu lah')
  txt = text.replace('@' + who.split`@`[0], '').trimStart()
  return conn.sendContact(m.chat, who, txt || conn.getName(who), m)
}

Iqbal.command = /^save$/

module.exports = Iqbal
