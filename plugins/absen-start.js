let Iqbal = async (m, { conn, command, prefix, text }) => {
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        return m.reply(`_*Masih ada absen di chat ini!*_\n\n*${prefix}hapusabsen* - untuk menghapus absen`)
    }
    conn.absen[id] = [
        m.reply(`Berhasil memulai absen!\n\n*${prefix}absen* - untuk absen\n*${prefix}cekabsen* - untuk mengecek absen\n*${prefix}hapusabsen* - untuk menghapus data absen`),
        [],
        text
    ]
}
Iqbal.command = /^(start|mulai)absen$/i
Iqbal.group = true
Iqbal.admin = true
module.exports = Iqbal