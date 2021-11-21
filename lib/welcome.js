let { WAConnection: _WAConnection, MessageType, Presence, Mimetype, GroupSettingChange, ReconnectMode } = require("@adiwajshing/baileys");
let { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom } = require('./functions')
let { color } = require('./color')
let fs = require('fs')
let axios = require("axios")  
let moment = require('moment-timezone')
picdetec = true
shp = ''

module.exports = async(iqbl, anu) => {
const settings = JSON.parse(fs.readFileSync('./database/settings.json'))
const welkam = JSON.parse(fs.readFileSync('./database/welkam.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const left = JSON.parse(fs.readFileSync('./database/left.json'))	
const tleft = JSON.parse(fs.readFileSync('./database/tleft.json'))
try {
const mdata = await iqbl.groupMetadata(anu.jid)
mem = anu.participants[0];
ini_user = await iqbl.contacts[anu.participants[0]]
try{
if(!ini_user.notify == ''){
namaewa = ini_user.notify
}
else if(!ini_user.name == ''){
namaewa = ini_user.name
}
else{
namaewa = '+' + anu.participants[0].split('@')[0]
}}catch{
namaewa = '+' + anu.participants[0].split('@')[0]
}
if(settings.picdetec === true){
try {
ppimg = await iqbl.getProfilePicture(mem)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
try {
ppgc = await iqbl.getProfilePicture(anu.jid)
} catch {
ppgc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgc}`)
}
try {
ppimg = await iqbl.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
if(settings.picdetec == true){
buff1 = await getBuffer(ppimg)
}
if(settings.picdetec == true){
buff2 = await getBuffer(ppimg)
}
if (anu.action == "add" && mem.includes(iqbl.user.jid)) {
iqbl.sendMessage(anu.jid, "Assalamualaikum\nNama: Fajar\nUmur: 17\nTempat tinggal: Jatim Bojonegoro", "conversation");
}
if (anu.action == 'add') {
if (!welkom.includes(anu.jid)) return
num = anu.participants[0]
user = '@' + num.split('@')[0]
gcname = mdata.subject
desc = mdata.desc
cwelkam = await welkam.filter(bal => bal.idgc === anu.jid)
try{
if(cwelkam[0].idgc === anu.jid){
const Karina = await iqbl.prepareMessage("0@s.whatsapp.net", buff1, MessageType.location,{ thumbnail: buff1})
const Karina2 = Karina.message["ephemeralMessage"] ? Karina.message.ephemeralMessage : Karina
textwel1 = `${cwelkam[0].textwel.replace("@user",user)}`
textwel2 = `${textwel1.replace("@subject",gcname)}`
textwel3 = `${textwel2.replace("@desc", desc)}`
weBut = [{buttonId:`menu`,buttonText:{displayText:'Welcome'},type:1}]
weButt = { contentText: `${textwel3}`, footerText: `Created By  `, buttons: weBut, headerType: 6, locationMessage: Karina2.message.locationMessage}
return iqbl.sendMessage(mdata.id, weButt, MessageType.buttonsMessage, { caption: 'buff', "contextInfo": { "mentionedJid" : [num], },})
} else {
return iqbl.sendMessage(mdata.id, textwel3, MessageType.teks, {contextInfo: {"mentionedJid": [num]}})
}
} catch {
const Karina3 = await iqbl.prepareMessage("0@s.whatsapp.net", buff1, MessageType.location,{ thumbnail: buff1})
const Karina4 = Karina3.message["ephemeralMessage"] ? Karina3.message.ephemeralMessage : Karina3
teks = `Hi ${user}\nSelamat Datang Di Grup: *${mdata.subject}*\n\nNama : \nUmur :\nGender : \nAsal :\n\nSemoga Betah`;
wBut = [{buttonId:`menu`,buttonText:{displayText:'Welcome'},type:1}]
wButt = { contentText: `${teks}`, footerText: `Created By  `, buttons: wBut, headerType: 6, locationMessage: Karina4.message.locationMessage}
if(settings.picdetec == true ){
return iqbl.sendMessage(mdata.id, wButt, MessageType.buttonsMessage, { caption: 'buff1', "contextInfo": { "mentionedJid" : [num], },})
} else {
return iqbl.sendMessage(mdata.id, teks, MessageType.teks, {contextInfo: {"mentionedJid": [num]}})
}
}
}
if (anu.action == 'remove') {
if (!left.includes(anu.jid)) return
num = anu.participants[0]
user = '@' + num.split('@')[0]
gcname = mdata.subject
desc = mdata.desc
ctleft = await tleft.filter(bal => bal.idgc === anu.jid)
try{
if(ctleft[0].idgc === anu.jid){
const Karina5 = await iqbl.prepareMessage("0@s.whatsapp.net", buff1, MessageType.location,{ thumbnail: buff1})
const Karina6 = Karina5.message["ephemeralMessage"] ? Karina5.message.ephemeralMessage : Karina5
textleft1 = `${ctleft[0].textleft.replace("@user",user)}`
textleft2 = `${textleft1.replace("@gcname",gcname)}`
textleft3 = `${textleft2.replace("@desc", desc)}`
wB = [{buttonId:`menu`,buttonText:{displayText:'Sayonara'},type:1}]
wBu = { contentText: `${textleft3}`, footerText: `Created By  `, buttons: wB, headerType: 6, locationMessage: Karina6.message.locationMessage}
return iqbl.sendMessage(mdata.id, wBu, MessageType.buttonsMessage, { caption: 'buff1', "contextInfo": { "mentionedJid" : [num], },})
} else {
return iqbl.sendMessage(mdata.id, textleft3, MessageType.teks, {contextInfo: {"mentionedJid": [num]}})
}
} catch {
const Karina7 = await iqbl.prepareMessage("0@s.whatsapp.net", buff1, MessageType.location,{ thumbnail: buff1})
const Karina8 = Karina7.message["ephemeralMessage"] ? Karina7.message.ephemeralMessage : Karina7
teks2 = `Sayonaraa @${num.split('@')[0]}`
wBo = [{buttonId:`menu`,buttonText:{displayText:'Sayonara'},type:1}]
wBot = { contentText: `${teks2}`, footerText: `Created By  `, buttons: wBo, headerType: 6, locationMessage: Karina8.message.locationMessage}
if(settings.picdetec == true ){
return iqbl.sendMessage(mdata.id, wBot, MessageType.buttonsMessage, { caption: 'buff1', "contextInfo": { "mentionedJid" : [num], },})
} else {
return iqbl.sendMessage(mdata.id, teks2, MessageType.teks, {contextInfo: {"mentionedJid": [num]}})
}
}
} else if (anu.action == 'promote') {
const Karina9 = await iqbl.prepareMessage("0@s.whatsapp.net", buff1, MessageType.location,{ thumbnail: buff1})
const Karina10 = Karina9.message["ephemeralMessage"] ? Karina9.message.ephemeralMessage : Karina9
var thu = await iqbl.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
teks = `[ Promote Detected ]\n\n${shp} Username: @${num.split('@')[0]}\n${shp} Bio : ${thu.status}\n${shp} Time : ${moment.tz('Asia/Jakarta').format('mm:ss')}\n${shp} Group: ${mdata.subject}`
promotebut = [{buttonId:`h`,buttonText:{displayText:'Yey🗿'},type:1}]
promoteButt = { contentText: `${teks}`, footerText: `Created By  `, buttons: promotebut, headerType: 6, locationMessage: Karina10.message.locationMessage}
iqbl.sendMessage(mdata.id, promoteButt, MessageType.buttonsMessage, { caption: 'buff1', "contextInfo": { "mentionedJid" : [num], },})
} else if (anu.action == 'demote') {
const Karina11 = await iqbl.prepareMessage("0@s.whatsapp.net", buff1, MessageType.location,{ thumbnail: buff1})
const Karina12 = Karina11.message["ephemeralMessage"] ? Karina11.message.ephemeralMessage : Karina11
thu = await iqbl.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
teks = `[ Demote - Detected ]\n\n${shp} Username: @${num.split('@')[0]}\n${shp} Bio : ${thu.status}\n${shp} Time : ${moment.tz('Asia/Jakarta').format('mm:ss')}\n${shp} Group: ${mdata.subject}`
demotebut = [{buttonId:`h`,buttonText:{displayText:'Yah'},type:1}]
demoteButt = { contentText: `${teks}`, footerText: `Created By  `, buttons: demotebut, headerType: 6, locationMessage: Karina12.message.locationMessage}
iqbl.sendMessage(mdata.id, demoteButt, MessageType.buttonsMessage, { caption: 'buff1', "contextInfo": { "mentionedJid" : [num], },})
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
}