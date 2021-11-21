let Iqbal = async (m, { conn, text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
}
Iqbal.command = /^(afk|off|offline|of)$/i
module.exports = Iqbal
