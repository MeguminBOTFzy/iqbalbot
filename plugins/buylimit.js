const xpperlimit = 350
let Iqbal = async (m, { conn, command, args }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (isNaN(count)) return m.reply(`hanya angka!\n\ncontoh: .buy5`)
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    conn.reply(m.chat, `-${xpperlimit * count} XP\n+ ${count} Limit`, m)
  } else conn.reply(m.chat, `XP tidak mencukupi untuk membeli ${count} limit`, m)
}
Iqbal.command = /^buy([0-9]+)|buy|buyall$/i
Iqbal.owner = false
Iqbal.mods = false
Iqbal.premium = false
Iqbal.group = false
Iqbal.private = false

Iqbal.admin = false
Iqbal.botAdmin = false

Iqbal.fail = null
Iqbal.exp = 0

module.exports = Iqbal

