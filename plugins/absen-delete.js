let Iqbal = async (m, { conn, command, prefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) return m.reply(`_*Tidak ada absen berlangsung digrup ini!*_\n\n*${prefix}mulaiabsen* - untuk memulai absen`)
    delete conn.absen[id]
    m.reply(`Done!`)
}
Iqbal.command = /^(delete|hapus)absen$/i
Iqbal.group = true
Iqbal.admin = true
module.exports = Iqbal