let Iqbal = async (m, { conn, command, prefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) return m.reply(`_*Tidak ada absen berlangsung digrup ini!*_\n\n*${prefix}mulaiabsen* - untuk memulai absen`)

    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
    let list = absen.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join('\n')
    conn.reply(m.chat, `*「 ABSEN 」*

Tanggal: ${date}
${conn.absen[id][2]}

┌ *Yang sudah absen:*
│ 
│ Total: ${absen.length}
${list}
│ 
└────

_by Ariffb_`, m, { contextInfo: { mentionedJid: absen } })
}
Iqbal.command = /^cekabsen$/i
Iqbal.group = true
module.exports = Iqbal