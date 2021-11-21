let Iqbal = async (m, { conn, usedPrefix }) => {
  if (conn.user.jid == conn.user.jid) conn.reply(m.chat, 'Command ini hanya untuk yang jadi bot', m)
  else conn.reply(conn.user.jid, `${usedPrefix}jadibot ${Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64')}`, m)
}
Iqbal.command = /^(getcode)$/i

module.exports = Iqbal