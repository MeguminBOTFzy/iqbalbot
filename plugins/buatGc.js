let MessageType = require('@adiwajshing/baileys');
let chalk = require("chalk");
let Iqbal = async(m, { conn, command, text }) => {
   
   if (!text) return m.reply('_Masukkan Nama Grup!_')
   try{
    await m.reply('Bentar Coeq Aku Sedang Membuat Group Nih Okey')
    let group = await conn.groupCreate(text, [m.sender])
    let link = await conn.groupInviteCode(group.gid)
    let url = 'https://chat.whatsapp.com/' + link;
    console.log(chalk.bold.red('Membuat Grup: ' + group.gid + '\nNama Grup: ' + text + '\n\nBOT'))
    //conn.sendMessage(group.gid, "Success to group create!", MessageType.extendedText)
     m.reply('_Berhasil Membuat Grup *' + text + '*_\n\n*Nama:* ' + text + '\n*ID:* ' + group.gid + '\n*Link:* ' + url + '\n\n*©Iqbalzz*')
       } catch (e) {
    m.reply('```Error```')
    console.log(e)
  }
}
Iqbal.command = /^((create|buat)(gc|grup|group))$/
Iqbal.group = false
Iqbal.private = false

Iqbal.fail = null
Iqbal.limit = false

module.exports = Iqbal
///////////////////////
/// MUHAMMAD AFDHAN ///
///////////////////////
