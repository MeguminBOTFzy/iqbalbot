let
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ChatModification,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")

//By 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖
let simple  = require('./plugins/simple.js');
let WAConnection = simple.WAConnection(_WAConnection);
let syntaxerror = require('syntax-error'); 
let figlet = require('figlet');
let fetch = require('node-fetch');
let request = require('request');
let moment = require('moment-timezone');
let ffmpeg = require('fluent-ffmpeg');
let yargs = require('yargs/yargs');
let ms = require('parse-ms')
let toMs = require('ms')
let speed = require('performance-now');
let axios = require('axios');
let path = require('path');
let ggit = require('google-it');
let util = require('util');
let yts = require('yt-search');
let gis = require('g-i-s');
let fs = require('fs');
let os = require('os');

//Badut
let { spawn, exec, execSync } = require("child_process")

//Conn
let conn = require("./server");

// stickwm
let Exif = require('./lib/exif')
let exif = new Exif()

let { EmojiAPI } = require("emoji-api");
let emoji = new EmojiAPI()
//let WSF = require('wa-sticker-formatter')

//Library
let { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
let { color, bgcolor } = require('./lib/color')
let { ucapanWaktu } = require('./lib/setting')
let { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
let _prem = require('./lib/premium')
let fakereply = require('./lib/fake')
let { speedz } = require('./lib/speedz')

//plugins
let { tiktok, tiktokmusic, ghstalk, yta, ytv, mediafire, covid, tahta, styleText, asmaul, fb, igstalk, twitter, playstore, tebakgambar, kodepos, gempa, kompasnews, tribunnews, igtv, igvideo, igfoto } = require('./plugins/scrape.js')
let { pShadow, pRomantic, pSmoke, pBurnPapper, pNaruto, pLoveMsg, pMsgGrass, pGlitch, pDoubleHeart, pCoffeCup, pLoveText, pButterfly, pNeons, pFlaming, pWanted, pGraffiti } = require('./plugins/photooxy')
let { addCommands, checkCommands, deleteCommands } = require('./plugins/commands')
let { jadibot, stopjadibot, listjadibot } = require('./plugins/jadibot')
let { pinterest } = require('./plugins/pinterest')
let { lirikLagu } = require('./plugins/lirik.js')
let { herolist } = require('./plugins/herolist.js')
let { herodetails } = require('./plugins/herodetail.js')
let { ytaa, ytvv } = require('./plugins/ytdl')
let { sleep, isAfk, cekafk, addafk } = require('./plugins/afk')

//database
let commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
let afk = JSON.parse(fs.readFileSync('./database/afk.json'))
let left = JSON.parse(fs.readFileSync('./database/left.json'))
let tleft = JSON.parse(fs.readFileSync('./database/tleft.json'))
let welkam = JSON.parse(fs.readFileSync('./database/welkam.json'))
let welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
let sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
let scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
let bancht = JSON.parse(fs.readFileSync('./database/banchat.json'))
let error = JSON.parse(fs.readFileSync('./database/error.json'))
let setting = JSON.parse(fs.readFileSync('./database/setting.json'))
let settings = JSON.parse(fs.readFileSync('./database/settings.json'))
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))

//foto
Fthumb = fs.readFileSync('./media/fake.jpeg')

//nuru
let iqbl = new WAConnection();
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.DATABASE = new (require('./lib/database'))(`${opts._[0] ? opts._[0] + '_' : ''}database.json`, null, 2)
if (!global.DATABASE.data.users) global.DATABASE.data = { 
users: {},
sticker: {},
}
global.db = global.DATABASE
global.db.user = global.db._data.users

//Untuk Menyambungkan ke plugins
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

//Rest Api
global.APIs = { 
  bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
}
global.APIKeys = { 
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': 'apikeymu',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
}

// Sticker WM
global.packname = 'Fajar Alfarizi'
global.author = 'mhmdfjralfarizi'

//Prefix
let multi = true
let nopref = false
let single  = false
let prefa  = '#'

//By 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖
let isPublic = false
let antitrol = true
let autojoin = false
let menusimpel = false
let bugc = true
let ngetik = false
let vn = false

//Afk
let offline = false
let waktuafk = '-'
let alasanafk = '-'
let reason = 'Turu'

//Fake
let u = ['', '📍','🔰','⎙'];
let shp = '🌹'
let create = "Created By @mhmdfjralfarizi_"

//CmdStick By 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖             
const addCmd = (id, command) => {
const obj = { id: id, chats: command }
scommand.push(obj)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
let position = null
Object.keys(scommand).forEach((i) => {
if (scommand[i].id === id) {
position = i
}
})
if (position !== null) {
return position
}
}

const getCmd = (id) => {
let position = null
Object.keys(scommand).forEach((i) => {
if (scommand[i].id === id) {
position = i
}
})
if (position !== null) {
return scommand[position].chats
}
}

const checkSCommand = (id) => {
let status = false
Object.keys(scommand).forEach((i) => {
if (scommand[i].id === id) {
status = true
}
})
return status
}

//module By 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖
module.exports = iqbl = async (iqbl, bal) => {
try {
if (!bal.hasNewMessage) return
bal = bal.messages.all()[0]
if (!bal.message) return
if (bal.key && bal.key.remoteJid == 'status@broadcast') return
if ((Object.keys(bal.message)[0] === 'ephemeralMessage' && JSON.stringify(bal.message).includes('EPHEMERAL_SETTING')) && bal.message.ephemeralMessage.message.protocolMessage.type === 3) {
if (bugc === false) return
if (bal.key.fromMe) return
nums = bal.participant
longkapnye = "\n".repeat(400)
tekuss = `© 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖 ${longkapnye}\`\`\`BUGGC TERDETEKSI\`\`\`\n@⁨${nums.split('@')[0]} Akan Di Kick!!\n\n_Clear Chat_`
iqbl.groupRemove(bal.key.remoteJid, [nums]).catch((e) => { reply(`*ERR:* ${e}`) })
iqbl.sendMessage(bal.key.remoteJid, 'WAH BUG NIH', MessageType.text)
iqbl.sendMessage(bal.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
}
bal.message = (Object.keys(bal.message)[0] === 'ephemeralMessage') ? bal.message.ephemeralMessage.message: bal.message
if (!isPublic) {
if (!bal.key.fromMe) return
}
me = iqbl.user
m = simple.smsg(iqbl, bal)
if (m.isBaileys === true) return
const content = JSON.stringify(bal.message)
const from = bal.key.remoteJid
const type = Object.keys(bal.message)[0]        
const battrey = m.battrey
const isGroup = m.isGroup
const isChat = m.isChat
const sender = m.sender
const user = iqbl.user.jid
const pushname = m.pushname

const {
    text,
    extendedText,
    location,
    image,
    video,
    sticker,
    document,
    audio
} = MessageType

const cmd = (type === 'conversation' && bal.message.conversation) ? bal.message.conversation : (type == 'imageMessage') && bal.message.imageMessage.caption ? bal.message.imageMessage.caption : (type == 'videoMessage') && bal.message.videoMessage.caption ? bal.message.videoMessage.caption : (type == 'extendedTextMessage') && bal.message.extendedTextMessage.text ? bal.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(bal.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(bal.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(bal.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()

if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
            	if(single){
                prefix = prefa
            }
        }
     }

body = (type === 'conversation' && bal.message.conversation.startsWith(prefix)) ? bal.message.conversation : (type == 'imageMessage') && bal.message[type].caption.startsWith(prefix) ? bal.message[type].caption : (type == 'videoMessage') && bal.message[type].caption.startsWith(prefix) ? bal.message[type].caption : (type == 'extendedTextMessage') && bal.message[type].text.startsWith(prefix) ? bal.message[type].text : (type == 'listResponseMessage') && bal.message[type].singleSelectReply.selectedRowId ? bal.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && bal.message[type].selectedButtonId ? bal.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(bal.message[type].fileSha256.toString('base64')) !== null && getCmd(bal.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(bal.message[type].fileSha256.toString('base64')) : ""
budy = (type === 'conversation') ? bal.message.conversation: (type === 'extendedTextMessage') ? bal.message.extendedTextMessage.text: ''
chats = (type === 'conversation') ? bal.message.conversation : (type === 'extendedTextMessage') ? bal.message.extendedTextMessage.text : ''

selectedButton = (type == 'buttonsResponseMessage') ? bal.message.buttonsResponseMessage.selectedButtonId : ''
responseButton = (type == 'listResponseMessage') ? bal.message.listResponseMessage.title : ''
button = (type == 'buttonsResponseMessage') ? bal.message.buttonsResponseMessage.selectedDisplayText : ''
isImage = (type === 'imageMessage')
listmes = (type == 'listResponseMessage') ? bal.message.listResponseMessage.title : ''
const isButton = (type == 'buttonsResponseMessage') ? bal.message.buttonsResponseMessage.selectedButtonId : ''        
        
const args = body.trim().split(/ +/).slice(1)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const q = args.join(' ')
const arg = budy.slice(command.length + 2, budy.length)
const isCmd = body.startsWith(prefix)
const Owner = ['6281333782061@s.whatsapp.net','994403792696@s.whatsapp.net','994407576115@s.whatsapp.net','6281259909513@s.whatsapp.net','6289512871985@s.whatsapp.net','447451215242@s.whatsapp.net','447441417460@s.whatsapp.net','380943043840@s.whatsapp.net','6289512871985@s.whatsapp.net','6287819948818@s.whatsapp.net','994406309372@s.whatsapp.net','48699527399@s.whatsapp.net','994405054360@s.whatsapp.net', iqbl.user.jid]
const ownerNumber = [`6281333782061@s.whatsapp.net`]
const botNumber = iqbl.user.jid

const groupMetadata = isGroup ? await iqbl.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false

const isWelkom = isGroup ? welkom.includes(from) : false
const isLeft = isGroup ? left.includes(from) : false
const isBanchat = isGroup ? bancht.includes(from) : false
const isPremium = isGroup ? _prem.checkPremiumUser(sender,premium) : false
const itsMe = bal.key.fromMe ? true : false
const isOwner = ownerNumber.includes(sender)

if (isBanchat){
if (!bal.key.fromMe) return
}

const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const wib = moment().tz('asia/jakarta').format("hh:mm:ss")
const wita = moment.tz('asia/makassar').format('hh:mm:ss')
const wit = moment.tz('asia/jayapura').format('hh:mm:ss')

const isNumber = x => typeof x === 'number' && !isNaN(x)
const users = global.DATABASE._data.users[m.sender]
if (typeof users !== 'object') global.DATABASE._data.users[m.sender] = {}
if (users) {
if (!isNumber(users.level)) users.level = 0
if (!isNumber(users.balance)) users.balance = 0 
if (!isNumber(users.exp)) users.exp = 0 
if (!isNumber(users.afk)) users.afk = -1
if (!('afkReason' in users)) users.afkReason = ''
if (!('banned' in users)) users.banned = false
} else global.DATABASE._data.users[m.sender] = {
   pushname: m.pushname,
   balance: 0,
   level: 0,
   exp: 0,
   afk: -1,
   afkReason: '',
   banned: false,
}
await global.DATABASE.save()

//plugins Loader
for (let name in global.plugins) {
let plugin = global.plugins[name]
if (!plugin) continue
if (plugin.disabled) continue
if (!plugin.all) continue
if (typeof plugin.all !== 'function') continue
try {
await plugin.all.call(iqbl, m, bal)
} catch (e) {
if (typeof e === 'string') continue
console.error(e)
}
}
for (let name in global.plugins) {
let plugin = global.plugins[name]
if (!plugin) continue
if (plugin.disabled) continue
if (typeof plugin.before === 'function')
await plugin.before.call(iqbl, m, {
conn: iqbl,
chatUpdate: bal,
})
if (typeof plugin !== 'function') continue
}
let noPrefix = body.replace(prefix, '')
let [_command] = noPrefix.trim().split` `.filter(v => v)
for (let name in global.plugins){
plugin = global.plugins[name]
let fail = plugin.fail || global.dfail // When failed
if (!plugin) continue
if (plugin.disabled) continue
let isAccept = plugin.command instanceof RegExp ? plugin.command.test(_command) : Array.isArray(plugin.command) ? plugin.command.some(cmd => cmd instanceof RegExp ? cmd.test(_command) : cmd === _command) : typeof plugin.command === 'string' ? plugin.command === _command : false
if (!isAccept) continue
if (plugin.owner && !isOwner) { // Number Owner
fail('owner', m, iqbl)
continue
}
if (plugin.grup && !isGroup) { //only group
fail('grup', m, iqbl)
continue
}
if (plugin.admin && !isGroupAdmins) { // only admin
fail('admin', m, iqbl)
continue
}
if (plugin.botAdmin && !botGroupAdmins) { // bot admin
fail('botAdmin', m, iqbl)
continue
}
let extra = {
conn: iqbl,
command,
usedPrefix: prefix,
args,
prefix,
text: q,
getBuffer,
}
await plugin.call(iqbl, m, extra)
}
global.dfail = (type, m, iqbl) => {
let msg = {
owner: 'owner only',
grup: 'grup only',
admin: 'admin grup only',
botAdmin: 'bot tidak menjadi admin',
}[type]
if (msg) return m.reply(msg)
}
//msg
msg = {
wait: '📩 𝑫𝒂𝒕𝒂 𝑰𝒏 𝑷𝒓𝒐𝒄𝒆𝒔𝒔, 𝑷𝒍𝒆𝒂𝒔𝒆 𝑾𝒂𝒊𝒕 𝑨 𝑴𝒊𝒏𝒖𝒕𝒆',
sukses: 'Berhasil!!',
error: 'Maaf terjadi kesalahan!',
group: 'Maaf, fitur ini hanya bisa di gunakan dalam group!!',
badmin: 'Maaf, Bot bukan admin..',
admin: 'Maaf, fitur ini hanya dapat digunakan oleh admin!!'
}
//Meta
//Group Metadata
//function
function groupCreate(nama, member){
anu = iqbl.groupCreate(nama, member)
return anu
.catch((err) => reply(err))
}
var reply = (teks) => {
iqbl.sendMessage(from, `${teks}`, text, {
quoted: bal, thumbnail: bal
})
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? iqbl.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : iqbl.sendMessage(from, teks.trim(), extendedText, {quoted: bal, contextInfo: {"mentionedJid": memberr}})
}
function monospace(string) {
return '```' + string + '```'
}   
const katalog = (teks) => {
res = iqbl.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 666, "message": teks, "footerText": "Created By 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖", "thumbnail": thumb, "surface": 'CATALOG' }}, {quoted:ftroli})
iqbl.relayWAMessage(res)
}
const grupinv = (teks) => {
grup = iqbl.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6281333782061-1617740713@g.us', "inviteCode": 'https://chat.whatsapp.com/K1eU4aZZ8k7BO6eNndwvY1', "groupName": `𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖`, "footerText": "Created By 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖", "jpegThumbnail": thumb, "caption": teks}}, {quoted:fgc})
iqbl.relayWAMessage(grup)
}
const fyt = (teks) => {
iqbl.sendMessage(from, teks, text, {quoted:bal, contextInfo:{"externalAdReply":{"title": create, "body": `${ucapanWaktu}`, mediaType: 2, "thumbnail": thumb, "mediaUrl": `https://youtu.be/Uyb599cQqfI`}}})
}
const fig = (teks) => {
iqbl.sendMessage(from, teks, text, {quoted:bal, contextInfo:{"externalAdReply":{"title": create, "body": `${ucapanWaktu}`, mediaType: 2, "thumbnail": thumb, "mediaUrl": `https://www.instagram.com/p/CDToaRvAcox/?utm_medium=copy_link`}}})
}
const ffb = (teks) => {
iqbl.sendMessage(from, teks, text, {quoted:bal, contextInfo:{"externalAdReply":{"title": create, "body": `${ucapanWaktu}`, mediaType: 2, "thumbnail": thumb, "mediaUrl": `https://www.facebook.com/100051946779848/posts/409881780753378/?app=fbl`}}})
}
const ffb2 = (teks) => {
iqbl.sendMessage(from, teks, text, {quoted:bal, contextInfo:{"externalAdReply":{"title": create, "body": `${ucapanWaktu}`, mediaType: 2, "thumbnail": thumb, "mediaUrl": `https://fb.watch/8f0gXPj5p0/`}}})
}
const freply = (teks) => {
iqbl.sendMessage(from, teks, text, {quoted:bal, contextInfo:{"externalAdReply":{"title": create,"body": `𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖`,"previewType": "PHOTO","thumbnailUrl": `https://i.ibb.co/4ZsD3Xn/62882000050077-status-5df9b7279fce4dcbbac3d65578d7effd.jpg`,"thumbnail": thumb,"sourceUrl": `https://wa.me/6281333782061?text=Assalamualaikum`}}})
}
const sendMessageWithFakeGc = (teks) => {
iqbl.sendMessage(from, teks, text, {quoted:bal, contextInfo:{"externalAdReply":{"title": "𝑭𝒂𝒋𝒂𝒓 𝑩𝒐𝒕 𝑾𝒉𝒂𝒕𝒔𝒂𝒑𝒑","description": "Created By 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖","previewType": 1,"mediaType": 1,"mediaUrl": "https://chat.whatsapp.com/K1eU4aZZ8k7BO6eNndwvY1","sourceUrl": "https://chat.whatsapp.com/K1eU4aZZ8k7BO6eNndwvY1","thumbnail": thumb}}})
}

//fake
const Sonce = { key:  {fromMe: false, remoteJid: "6281333782061-1617740713@g.us", participant: '0@s.whatsapp.net'}, message: { imageMessage: { "jpegThumbnail": Fthumb, "viewOnce": true}}}
const Sonce2 = { key:  {fromMe: false, remoteJid: "6281333782061@g.us", participant: '0@s.whatsapp.net'}, message: { videoMessage: { "jpegThumbnail": Fthumb, "viewOnce": true}}}
const Stoko = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281333782061@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./media/BaseIqbalzz.jpg`)},"title": create,"description": "𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖`", "currencyCode": "IDR","priceAmount1000": "9999999999","retailerId": "𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖`","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
const Skontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./media/BaseIqbalzz.jpg')}}}
const Skontak2 = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6281333782061-1617740713@g.us' } : {}) }, message: { "contactsArrayMessage": { "displayName": "100 contacts", "contacts": [{"displayName": "9", "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;9;;;\nFN:9\nEND:VCARD"},{"displayName": "Admin","vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Admin;;;\nFN:Admin\nitem1.TEL:+62 812-8276-5434\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]}}}
const Ssticker = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
const Svn = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281333782061@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
const Stext = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281333782061@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${create}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./media/BaseIqbalzz.jpg')}}}
const Sloc2 = { key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6281333782061-1617740713@g.us" },message: { "liveLocationMessage": { "caption": `Rusia`,"name":`Rusia`}}}
const Stroli = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281333782061@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 1,status: 1,surface : 1,message: `${create}`,orderTitle: 'Bang',thumbnail: fs.readFileSync('./media/BaseIqbalzz.jpg'), sellerJid: '0@s.whatsapp.net'}}}
const Svideo = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281333782061-1617740713@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999999999', 'caption': `${create}`,'jpegThumbnail': fs.readFileSync('./media/BaseIqbalzz.jpg')}}}
const Sgc = { key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6281333782061-1617740713@g.us","inviteCode": "https://chat.whatsapp.com/K1eU4aZZ8k7BO6eNndwvY1","groupName": "𝐹𝑎𝑗𝑎𝑟𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖x𝑀𝑒𝑔𝑢𝑚𝑖𝑛𝐵𝑂𝑇", "caption": `${create}`, 'jpegThumbnail': fs.readFileSync('./media/BaseIqbalzz.jpg')}}}
const Sgif = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281333782061-1617740713@g.us@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${create}`,'jpegThumbnail': fs.readFileSync('./media/BaseIqbalzz.jpg')}}} 
const Sloc = { key : { participant : '0@s.whatsapp.net' }, message: { locationMessage: { name: 'Russia', jpegThumbnail: fs.readFileSync('./media/BaseIqbalzz.jpg')}}}
const Sdoc = { key : { participant : '0@s.whatsapp.net' }, message: { documentMessage: { title: '𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖', jpegThumbnail: fs.readFileSync('./media/BaseIqbalzz.jpg')}}}

//Msg
const hideTag = async function(from, text){
let anu = await iqbl.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
iqbl.sendMessage(from, text, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
const kickMember = async(id, target = []) => {
let group = await iqbl.groupMetadata(id)
let owner = group.owner.replace("c.us", "s.whatsapp.net")
let me = iqbl.user.jid
for (i of target) {
if (!i.includes(me) && !i.includes(owner)) {
await iqbl.groupRemove(id, [i])
} else {
await iqbl.sendMessage(id, "Not Premited!", "conversation")
break
}
}
}
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
iqbl.sendMessage(to, media, type, { quoted: bal, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})  
fs.unlinkSync(filename)
});
}   
function Json(objectPromise) {
var objectString = JSON.stringify(objectPromise, null, 2)
var parse = util.format(objectString)
if (objectString == undefined) {
parse = util.format(objectPromise)
}
return reply(parse)
}
const sendFakeLink = (id, res, type, title, body, thumbnail, quoted, ptt = false) => {
iqbl.sendMessage(id, res, type,{quoted:quoted,contextInfo: {externalAdReply:{title:title,body:body,previewType:"PHOTO",thumbnail:thumbnail,sourceUrl:``}}})
}
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
pr = await iqbl.prepareMessage(id, gam1, MessageType.image,{thumbnail: Buffer.alloc(0)})
const buttonMessages = {
imageMessage: pr.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
iqbl.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButLoc = async(id, text1, desc1, gam1, but = [], options = {}) => {
pr = await iqbl.prepareMessage(id, gam1, MessageType.image,{thumbnail: foto})
loc = {
"degreesLatitude": '100000000000',
"degreesLongitude": '10000000000',
"jpegThumbnail": pr.message.imageMessage
}
iqbl.sendMessage(id, {"contentText": text1,"footerText": desc1, "buttons": buttons, "headerType":6, "locationMessage": loc}, MessageType.buttonsMessage, options)
}
const sendButText = (id, text, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
text: text,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "TEXT"
}
iqbl.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
const sendButVideo = async (id, text1, desc1, vid1, but = [], options = {}) => {kma = vid1; mhan = await iqbl.prepareMessage(from, kma, video);
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5,
};
iqbl.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options);
};
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
iqbl.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options);
};
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await iqbl.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
iqbl.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//Button Document
const sendButDocument = async(id, text1, desc1, doc1, but = [], options = {}) => {
kma = doc1
mhan = await iqbl.prepareMessage(from, thumb, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
iqbl.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

senderName = await iqbl.getName(sender)
senderBio = await iqbl.getStatus(sender)
var groupss = iqbl.chats.array.filter(v => v.jid.endsWith('g.us'))
var privatt = iqbl.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
timestamp = speed();
totalChatt = await iqbl.chats.all()
latensii = speed() - timestamp
const display = `🌹𝐈𝐍𝐅𝐎 𝐁𝐎𝐓
🔖 _Creator_ : @${user.split('@')[0]}
🔖 _Lib_ : 𝑩𝒂𝒊𝒍𝒆𝒚𝒔
🔖 _Type_ : 𝑵𝒐𝒅𝒆𝑱𝒔
🔖 _Mode_ : ${isPublic ? '𝑷𝑼𝑩𝑳𝑰𝑪' : '𝑺𝑬𝑳𝑭'}
🔖 _Prefix_ : ${multi ? '𝑴𝒖𝒍𝒕𝒊𝑷𝒓𝒆𝒇𝒊𝒙' : '𝑵𝒐𝑷𝒓𝒆𝒇𝒊𝒙'}
🔖 _Group Chats_ : ${groupss.length}
🔖 _Private Chats_ : ${privatt.length}
🔖 _Total Chats_ : ${totalChatt.length}
🔖 _Speed_ : ${latensii.toFixed(4)} 𝑺𝒆𝒄𝒐𝒏𝒅𝒔

🌹𝐈𝐍𝐅𝐎 𝐔𝐒𝐄𝐑
🔖 _Sender_ : @${sender.split('@')[0]}
🔖 _Name_ : ${senderName}
🔖 _Bio_ : ${senderBio.status}`

const menu = `͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏🌹𝐌𝐄𝐍𝐔 𝐆𝐑𝐎𝐔𝐏
🔖${prefix}kick
🔖${prefix}add
🔖${prefix}demote
🔖${prefix}promote
🔖${prefix}promoteall
🔖${prefix}demoteall
🔖${prefix}tag
🔖${prefix}pin
🔖${prefix}unpin
🔖${prefix}linkgc
🔖${prefix}mulaiabsen
🔖${prefix}cekabsen
🔖${prefix}deleteabsen
🔖${prefix}absen

🌹𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒 𝐂𝐇𝐀𝐓
🔖${prefix}start
🔖${prefix}next
🔖${prefix}leave

🌹𝐌𝐄𝐍𝐔 𝐆𝐀𝐌𝐄
🔖${prefix}ttt
🔖${prefix}math

🌹𝐌𝐄𝐍𝐔 𝐅𝐔𝐍
🔖${prefix}inspect 
🔖${prefix}setcmd
🔖${prefix}delcmd
🔖${prefix}listcmd
🔖${prefix}stats
🔖${prefix}tospam
🔖${prefix}suit
🔖${prefix}sc
🔖${prefix}sewa
🔖${prefix}readviewonce

🌹𝐌𝐄𝐍𝐔 𝐌𝐄𝐃𝐈𝐀
🔖${prefix}tiktok
🔖${prefix}play
🔖${prefix}kodepos
🔖${prefix}ghstalk
🔖${prefix}igstalk
🔖${prefix}gempa
🔖${prefix}styletext
🔖${prefix}pinterest
🔖${prefix}lirik
🔖${prefix}herolist
🔖${prefix}herodetail
🔖${prefix}tinyurl
🔖${prefix}asmaulhusna

🌹𝐌𝐄𝐍𝐔 𝐒𝐓𝐈𝐂𝐊𝐄𝐑
🔖${prefix}sticker
🔖${prefix}colong
🔖${prefix}attp
🔖${prefix}attp2

🌹𝐌𝐄𝐍𝐔 𝐂𝐎𝐍𝐕𝐄𝐑𝐓
🔖${prefix}detikvideo
🔖${prefix}detikvn
🔖${prefix}hackvn
🔖${prefix}hackvideo
🔖${prefix}balik
🔖${prefix}bass
🔖${prefix}volume
🔖${prefix}tovn

🌹𝐌𝐄𝐍𝐔 𝐀𝐍𝐈𝐌𝐄
🔖${prefix}neko
🔖${prefix}waifu
🔖${prefix}megumin
🔖${prefix}shinobu
🔖${prefix}loli
🔖${prefix}husbu
🔖${prefix}milf
🔖${prefix}cosplay
🔖${prefix}wallml
🔖${prefix}cuddle
🔖${prefix}cry
🔖${prefix}bully
🔖${prefix}hug
🔖${prefix}kiss
🔖${prefix}yeet
🔖${prefix}bonk
🔖${prefix}smug
🔖${prefix}pat
🔖${prefix}lick

🌹𝐌𝐄𝐍𝐔 𝐎𝐖𝐍𝐄𝐑
🔖${prefix}public
🔖${prefix}self
🔖${prefix}fetch
🔖${prefix}exif
🔖${prefix}setprefix
🔖${prefix}baileys
🔖${prefix}creategrup
🔖${prefix}creategc
🔖${prefix}jadibot
🔖${prefix}stopjadibot
🔖${prefix}listbot
🔖${prefix}addrespon
🔖${prefix}delrespon
🔖${prefix}listrespon
🔖${prefix}antitroli
🔖${prefix}antidelete
🔖${prefix}repeat
🔖${prefix}repeat2
🔖${prefix}kickall
🔖${prefix}kudet
🔖${prefix}sendbug
🔖${prefix}bug
🔖${prefix}debug
🔖${prefix}debug2
🔖${prefix}bc
🔖${prefix}bcgc
🔖${prefix}q
🔖${prefix}culik
🔖${prefix}colongsw
🔖${prefix}spamsw`

const suit = ``
//Afk
butafk = [
{buttonId: '!menu', buttonText: {displayText: 'MENU'}, type: 1},
{buttonId: 'y', buttonText: {displayText: 'OKE'}, type: 1}
]
//Private
if (!bal.key.fromMe && isAfk == true) {
sendButText(from,`Offline Mode💤`,`_Mohon Maaf @${user.split('@')[0]} Sedang Offline_`,
`*⃝* Alasan:*⃝ ${reason}
*⃝* Sejak:*⃝ ${count(process.uptime())}`, butafk, {
quoted: bal, contextInfo: {
mentionedJid: [creator]}})
}
// Eval Async
if (body.startsWith('>')) {
try {
if (!bal.key.fromMe) return
if (!q) return reply('Promise { 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖 }')
reply(util.format(eval(`(async () => { ${q} })()`)))
} catch(e) {
reply(e)
}
}
//Eval return
if (body.startsWith('<')) {
if (!bal.key.fromMe) return
if (!q) return reply('undefined')
try {
Json(eval(q))
} catch(e) {
reply(e)
}
}
//Exec
if (body.startsWith('$')) {
if (!bal.key.fromMe) return
exec(q, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

//Troli
if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
if (antitrol === false) return
if (bal.key.fromMe) return
reply('Njier jangan pake fake trolli _-\n\n' + require('util').format(m.key))
await iqbl.modifyChat(m.chat, 'delete', {
includeStarred: false
})
}
//Auto Join
if (isGroup && autojoin == true) {
if (budy.includes("://chat.whatsapp.com/")) {
console.log(color("[AutoJoin]", "blue"),color("Yahaha Wahyu", "white"));
iqbl.query({
json: ["action","invite",`${budy.replace("https://chat.whatsapp.com/", "")}`,
],
});
}
}

if (!bal.key.remoteJid.endsWith('@g.us') && offline){
if (!bal.key.fromMe){
if (isAfk(bal.key.remoteJid)) return
addafk(bal.key.remoteJid)
heheh = ms(Date.now() - waktuafk)
buttonst = [{buttonId: 'Iqbalzz', buttonText: {displayText: 'Oke'}, type: 1}]
buttonstMessage = {
contentText: `Hai ${pushname}, Maaf sepertinya saat ini 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖 sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan Hubungi Lagi Nanti`,
footerText: "Created By 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖",
buttons: buttonst,
headerType: 1
}
iqbl.sendMessage(from, buttonstMessage, MessageType.buttonsMessage, {quoted:ftroli, contextInfo: { forwardingScore: 508, isForwarded: true }})
}
}
if (bal.key.remoteJid.endsWith('@g.us') && offline) {
if (!bal.key.fromMe){
if (bal.message.extendedTextMessage != undefined){
if (bal.message.extendedTextMessage.contextInfo != undefined){
if (bal.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
for (let ment of bal.message.extendedTextMessage.contextInfo.mentionedJid) {
if (ment === iqbl.user.jid){
if (isAfk(bal.key.remoteJid)) return
addafk(bal.key.remoteJid)
heheh = ms(Date.now() - waktuafk)
buttonst = [{buttonId: 'Iqbalzz', buttonText: {displayText: 'Oke'}, type: 1}]
buttonstMessage = {
contentText: `Hai ${pushname}, Maaf sepertinya saat ini 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖 sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan Hubungi Lagi Nanti`,
footerText: "Created By 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖",
buttons: buttonst,
headerType: 1
}
iqbl.sendMessage(from, buttonstMessage, MessageType.buttonsMessage, {quoted:ftroli, contextInfo: { forwardingScore: 508, isForwarded: true }})
}
}
}
}
}
}
}

//Db Command
for (let i = 0; i < commandsDB.length ; i++) {
if (budy == commandsDB[i].pesan) {
iqbl.sendMessage(from, commandsDB[i].balasan, text, {quoted: bal})
}
}

//Sewa
const addSewaGroup = (gid, expired, _dir) => {
const obj = { id: gid, expired: Date.now() + toMs(expired), status: true }
_dir.push(obj)
fs.writeFileSync('./database/sewa.json', JSON.stringify(_dir))
}

// Get Sewa
const getSewaPosition = (gid, _dir) => {
let position = null
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === gid) {
position = i
}
})
if (position !== null) {
return position
}
}

// Get Sewa Expired
const getSewaExpired = (gid, _dir) => {
let position = null
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === gid) {
position = i
}
})
if (position !== null) {
return _dir[position].expired
}
}

// Check Sewa
const checkSewaGroup = (gid, _dir) => {
let status = false
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === gid) {
status = true
}
})
return status
}

// Expired Check
const expiredCheck = (iqbl, _dir) => {
setInterval(() => {
let position = null
Object.keys(_dir).forEach((i) => {
if (Date.now() >= _dir[i].expired) {
position = i
}
})
if (position !== null) {
console.log(`Sewa expired: ${_dir[position].id}`)
if (_dir[position].status === true){
iqbl.sendMessage(_dir[position].id, `Waktu sewa di grup ini sudah habis, bot akan keluar otomatis`, MessageType.text)
.then(() => {
iqbl.groupLeave(_dir[position].id)
.then(() => {
_dir.splice(position, 1)
fs.writeFileSync('./database/sewa.json', JSON.stringify(_dir))
})
})
}
}
}, 1000)
}
const isSewa = checkSewaGroup(from, sewa)
expiredCheck(iqbl, sewa)

//Private
const Iqbalzzz =`[ Message ]

_Sender_ : @${sender.split('@')[0]}
_Name_ : ${senderName}
_Bio_ : ${senderBio.status}`

//Privater
if (budy.startsWith(`Fajar`)){
sendButMessage("6281333782061@s.whatsapp.net", `${Iqbalzzz}`, "Created By 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖", [{buttonId: 'igb', buttonText: {displayText: 'Instagram'}, type: 1},{buttonId: 'ytb', buttonText: {displayText: 'YouTube'}, type: 1}], {quoted:bal, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [user,sender]}})
}
if(isButton == 'igb'){
reply('http://instagram.com/mhmdfjralfarizi_')
}
if(isButton == 'ytb'){
reply('https://m.youtube.com/channel/UCYw80__QHZxPwrbdSJ93Jvw')
}

if (budy.includes(`Fajar`,`Pajar`,`Jar`)){
let imute = fs.readFileSync('./tmp/imut.mp3')
iqbl.sendMessage(from, imute, MessageType.audio, {quoted: bal, mimetype: 'audio/mp4', ptt:true})
}

if(budy.includes('Cekprefix')){
cpref = `🌹 *Prefix Active :* 🌹

🔖 _Multiprefix :_ _${multi ? 'Yes':'No'}_
🔖 _Singleprefix :_ _${single ? `Yes , Prefix : ${prefa}`:'No'}_
🔖 _Noprefix :_ _${nopref ? 'Yes' : 'No'}_`
reply(cpref)
}

if(itsMe){
tag = iqbl.user.jid.split('@')[0]
mjid = iqbl.user.jid
}
else{
tag = sender.split('@')[0]
mjid = sender
}

//gabut
try {
pporang = await iqbl.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const ofrply = await getBuffer(pporang)

//Error
try{
if(error.includes(command)){
return reply('Fitur Tersebut sedang error\nKami akan segera memperbaikinya!')
}
}catch{
}

//Presence
if (vn) {
await iqbl.updatePresence(from, Presence.recording)
} else if (ngetik) {
await iqbl.updatePresence(from, Presence.composing)
}

//Set Fake
const fonce = await fakereply.fonce(from, bal)
const fonce2 = await fakereply.fonce2(from, bal)
const ftoko = await fakereply.ftoko(from, bal)
const fkontak = await fakereply.fkontak(from, bal)
const fkontak2 = await fakereply.fkontak2(from, bal)
const fsticker = await fakereply.fsticker(from, bal)
const fvn = await fakereply.fvn(from, bal)
const ftext =  await fakereply.ftext(from, bal)
const floc2 = await fakereply.floc2(from, bal)
const ftroli = await fakereply.ftroli(from, bal)
const fvideo = await fakereply.fvideo(from, bal)
const fgc = await fakereply.fgc(from, bal)
const fgif = await fakereply.fgif(from, bal)
const floc = await fakereply.floc(from, bal)
const fdoc = await fakereply.fdoc(from, bal)

fakerep = setting.fakerep

if(fakerep == "fonce"){
   var rep = fonce
}
else if(fakerep == "fonce2"){
   var rep = fonce2
}
else if(fakerep == "ftoko"){
   var rep = ftoko
}
else if(fakerep == "fkontak"){
   var rep = fkontak
}
else if(fakerep == "fkontak2"){
   var rep = fkontak2
}
else if(fakerep == "fsticker"){
   var rep = fsticker
}
else if(fakerep == "fvn"){
  var rep = fvn
}
else if(fakerep == "ftext"){
   var rep = ftext
}
else if(fakerep == "floc2"){
   var rep = floc2
}
else if(fakerep == "ftroli"){
   var rep = ftroli
}
else if(fakerep == "fvideo"){
   var rep = fvideo
}
else if(fakerep == "fgc"){
   var rep = fgc
}
else if(fakerep == 'fgif'){
	var rep = fgif
}
else if(fakerep == 'floc'){
	var rep = floc
}
else if(fakerep == 'fdoc'){
	var rep = fdoc
}
else if(fakerep == 'fdefault'){
	var rep = fdefault
}
const Fbal = (teks) => {
iqbl.sendMessage(from, teks, text, {quoted:rep})
}

//Func By Vean & TeamProviderXPloit
const bypasseph = async(ler) => {
ler.message = (Object.keys(ler.message)[0] === 'ephemeralMessage') ? ler.message.ephemeralMessage.message : ler.message
return ler.message
}

//#>>>> Auto Get Sw Versi Tpx <<<<#\\
if(settings.forwardSw == true){
if (m.chat.endsWith('broadcast')) {
console.log(m)
let sendke = `${settings.setId}`
orangeh = `@${m.sender.split(`@`)[0]}`
iqbl.sendMessage(sendke, `${orangeh} Telah Membuat Status Whatsapp!`, text, {contextInfo: {mentionedJid: [m.sender], quoted: rep}})
iqbl.copyNForward(sendke, m).catch(e => console.log(e, m))
}
}

//Func by Vean & TeamProviderXPloit 
async function sendStickerFakeSize(buffer) {
fsize = await iqbl.prepareMessage(from, buffer, sticker)
costick = await iqbl.prepareMessageFromContent(from,{
"stickerMessage": {
"url": fsize.message.stickerMessage.url,
"fileSha256": fsize.message.stickerMessage.fileSha256.toString('base64'),
"fileEncSha256": fsize.message.stickerMessage.fileEncSha256.toString('base64'),
"mediaKey": fsize.message.stickerMessage.mediaKey.toString('base64'),
"mimetype": fsize.message.stickerMessage.mimetype,
"height": fsize.message.stickerMessage.height,
"width": fsize.message.stickerMessage.width,
"directPath": fsize.message.stickerMessage.directPath,
"fileLength": `9999999999999`,
"mediaKeyTimestamp": fsize.message.stickerMessage.mediaKeyTimestamp.low,
"isAnimated": fsize.message.stickerMessage.isAnimated
}
}, {quoted:rep})
iqbl.relayWAMessage(costick)
}

_prem.expiredCheck(premium)
//Quoted
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
// Console.log Message in Terminal
if (!isCmd) console.log(color('\x1b[1;37m>', 'cyan'), color('[MSG]'), color(time, 'cyan'), color('Message', 'red'), 'Dari', color(pushname))
if (isCmd) console.log(color('\x1b[1;37m>', 'cyan'), color('[CMD]'), color(time, 'cyan'), color(command + ` [${[args.length]}]`), 'Dari', color(pushname))

//img
resimg = await iqbl.getProfilePicture(from)
foto = await getBuffer(resimg)
thumb = fs.readFileSync('./media/BaseIqbalzz.jpg')
Mthumb = fs.readFileSync('./media/suit.jpg')
// switchh command
switch (command) {
case 'menu3': case 'help': case 'h':
 buttons = [
{buttonId: 'allmenu', buttonText: {displayText: '📒 MENU'}, type: 1},
{buttonId: 'owner', buttonText: {displayText: '👤 OWNER'}, type: 1},
{buttonId: 'sc', buttonText: {displayText: '📄 SCRIPT'}, type: 1}
]
sendButLoc(from, display,create, foto, buttons,{mimetype: Mimetype.jpeg, contextInfo: {"mentionedJid":[user,sender], externalAdReply:{title:'Official Whatsapp Bot',body:'By @mhmdfjralfarizi_',previewType:"PHOTO",thumbnail:thumb,sourceUrl:``}}})
break
case 'allmenu':
buttons = [
{buttonId: 'sewabot', buttonText: {displayText: '📄 SEWA'}, type: 1},
{buttonId: 'owner', buttonText: {displayText: '👤 OWNER'}, type: 1},
{buttonId: 'stats', buttonText: {displayText: '🎗️ STATS'}, type: 1}
]
sendButVideo(from,`🌹𝐇𝐄𝐋𝐋𝐎𝐖𝐎𝐑𝐋𝐃🌹`, menu, fs.readFileSync ('./asupan.mp4'), buttons, {quoted: rep, sendEphemeral: true, contextInfo: {"forwardingScore":999,"isForwarded":true, "externalAdReply": {"title": `Hai Kak ${pushname}👋🏻`, "body": `${ucapanWaktu}`, mediaType: 2, "thumbnail": thumb, "mediaUrl": `https://youtu.be/5odMRQDrhoI`
}
}
})
break
case 'menu2':
var groupsss = iqbl.chats.array.filter(v => v.jid.endsWith('g.us'))
var privattt = iqbl.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
timestamppp = speed();
totalChattt = await iqbl.chats.all()
latensiiii = speed() - timestamppp
menu2 = `🌹𝐈𝐍𝐅𝐎 𝐁𝐎𝐓
🔖 _Creator_ : @${user.split('@')[0]}
🔖 _Lib_ : 𝑩𝒂𝒊𝒍𝒆𝒚𝒔
🔖 _Type_ : 𝑵𝒐𝒅𝒆𝑱𝒔
🔖 _Mode_ : ${isPublic ? '𝑷𝑼𝑩𝑳𝑰𝑪' : '𝑺𝑬𝑳𝑭'}
🔖 _Prefix_ : ${multi ? '𝑴𝒖𝒍𝒕𝒊𝑷𝒓𝒆𝒇𝒊𝒙' : '𝑵𝒐𝑷𝒓𝒆𝒇𝒊𝒙'}
🔖 _Group Chats_ : ${groupsss.length}
🔖 _Private Chats_ : ${privattt.length}
🔖 _Total Chats_ : ${totalChattt.length}
🔖 _Speed_ : ${latensiiii.toFixed(4)} 𝑺𝒆𝒄𝒐𝒏𝒅𝒔`
sendButLocation(from, `${menu2}`, "Created By 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖", {jpegThumbnail: thumb}, 
[{buttonId: `!allmenu`, buttonText: {displayText: '📒 MENU'} ,type:1},
{buttonId: `!owner`, buttonText: {displayText: '👤 OWNER'}, type: 1},
{buttonId: `!sc`, buttonText: {displayText: '📄 SCRIPT'}, type: 1}],
{contextInfo: { mentionedJid: [user,sender]}})
break
case 'menu':
if(menusimpel == false){
sendButLocation(from, display, "Created By 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖", {jpegThumbnail: thumb}, 
[{buttonId: 'allmenu', buttonText: {displayText: '📒 MENU'} ,type:1},
{buttonId: 'owner', buttonText: {displayText: '👤 OWNER'}, type: 1},
{buttonId: 'sc', buttonText: {displayText: '📄 SCRIPT'}, type: 1}],
{contextInfo: { mentionedJid: [user,sender]}})
}
else if(menusimpel = true){
iqbl.sendMessage(from, {
"contentText": display,
"footerText": create,
"buttons": [
{buttonId: 'allmenu', buttonText:{displayText: '📒 MENU'}, type: 1},
{buttonId: 'owner', buttonText:{displayText: '👤 OWNER'}, type: 1},
{buttonId: 'sc', buttonText:{displayText: '📄 SCRIPT'}, type: 1}
],
"headerType": "DOCUMENT", 
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
"mimetype": "application/pdf",
"fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
"fileLength": "98999999999",
"pageCount": 999,
"mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
"fileName": "𝑭𝒂𝒋𝒂𝒓 𝑩𝒐𝒕 𝑾𝒉𝒂𝒕𝒔𝒂𝒑𝒑",
"fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
"directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
"mediaKeyTimestamp": "1634472176",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAHgAVMDASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAAAAIDBAUGAQcI/8QAVBAAAQMCBAIFBgkHCQYGAgMAAQACAwQRBRIhMUFRBhMiYXEUMoGRobEHI0JSwdHh4vAVFhczcqOkJGJkZYKSorLxQ0RFU2ODNDVVhLPCJVRzw9L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAhEQEBAAICAgMBAQEAAAAAAAAAAQIRITEDEhNBUQQyIv/aAAwDAQACEQMRAD8A9mQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEKloOkXlzpGikyOY3MB1l7+xUDPhKzYnVURwixpyRm8p84Xte2XROTfSblJ23KFjvz/AL/8M/f/AHVTVXwweS1ctOcCuY3Ft/K7X/wJ3Gzsp5Mb9vSkLy/9NA/9A/jPuKxwH4UhjeJiiOD9Rdtw/wApzfKAtbIOak/fFv0LzbFfhdOF4pUULsB6wwuy5vK7ZvRkUf8ATQ4Fufo8I822atsT4Dq7lPQ9o9RQvKXfDgzK17Ojzi0yBhLqu3C9/M7lqXdOsv8Aw2//AH/upa0e9tahZBnTzOCfybax/wCf91dl6d9W5o/Jt8w/5/3UvadG1yFkPz80/wDLf3/3VBxD4T/IJYmHB84kvr5Ta3+BMN6hYhvwjZ+jsmLjCf1ZeDF5R815bvl7r7Jys+EHyWppohhecVDnNzeUWy2Fx8nVPVL2jZoWDd8JuWukpjg/mMDw7yne/wDYRQfCTU4lUvp6bAM0jH5NauwGgNycmm6NWDcbxCpXdImwsb19OGyEAljZM1vYF2LpFDM7K2IX4Av+xZ/JjPtp6ZLlCzuJdJq2hAfDhAqovlFtRZw9GX6VjMU+Gx2GSBjujmc5nNP8tta3/bVSy9Jss7eqoXmGFfDL+U4XyfkDqiw2t5Zf/wCinH4U7Xvguo3/AJV9xaTDKs75MZdWvQULHVnT7ySgmqhhfWdU5oy9fa9wDe+XvVRQ/C6azEnURwLJaPOHeV3vra1simyzinM8cunpCFiX/COyMXfhoaO+pt/9VOo+m9POwST04p4yL5nS+yxAU70pqELITfCFSRghlI6VwPyJOz6yB7kwPhFP/pX8R91HtA2yFiv0if1V/EfdXf0h/wBVfxH3UvaHptELFj4Qr/8AC/4j7q7+kL+q/wCI+6j2g02aFjP0hf1X/EfdR+kL+q/4j7qPaDTZoWM/SF/Vf8R91d/SCP8A0z+I+6j2g02SFjP0g/1X/EfdR+kL+q/4j7qPaDTZoWM/SF/Vf8R91H6Qv6r/AIj7qPaDTZoWM/SF/Vf8R91CPaDRHR9+XEcvBzSFicQh8l6aVce2dvr7Iv7QVrsIkyYjCTpd1lnel8Xk/TaF/CRtvEku+ghaePuOfyEDdZDpCwx4zKde21rvZb6FsJC5rSWRPldbRkYu5x5ALM4tSYnXxz4pHhT2wUzvJ5HvNy14OxYNR53Fb+Xplhio2h775QTbc8B4qz6OVc1JjUElI1lTOSWtYHdi4GbV22lr6KuLX+UwNnL7h1nMeMoBvY9nhoQpGAu6vEaLW38pjZ/eBaVjI1sh7HautqMXqp6kRQzuDnO6luxa/IRc9zTsqmR3VmCYXubhxJ1uHc/SFe9KY8uPzEDSSWcDwc0PH+dZ6Qk0beOWU+1oP0Jh2pbljqWbdXMCO4ZiPpXptNJ11FBL/wAyJrvWAvMqh2d9UNy+EPH+F31r0LAZeu6P0L9/iQ31afQprTFNivdw70qq2hPiE3GbSOTs/apmnk9YX/TT6JVH0mFoqeT5r1eDZVHSRubDc3zXXWiUrBQKnoZidOdckkth4sD/AHldr39Zh2EVfEvhN/2hr70joU7rqbE6Y7ODHW/aaWn/ACpuRxd0Jp5L6wBv+B9voWsRXJqd8mPNy7OpyCeAOYfatR0apIqKKpmYG9a83uRbu949iz1f2cRoSDYZ3g94yn6bLQUkr6ehkjawucQMxA53OnO1x61j5rdL8U3UetxXDKecwVEsr3ud2j1mW596RVF9LSiqoJ3Twkj4t3nM7wVCxPoVS4rUxVNVVSQwBlnMjHbJ0I1Ow3V1RUFJQUbKSFrnRC2krszj4lcdx427drjDa4VeGsknsJAASDpfvWI6XdCm4vibpqIRBsnaJJIDDbXj4LRh0cbmSRssC/I8X20TzpmRucLDTzu7vTxtxvBXGZdsLR9Dq/B4ntcYZonDMDBvpfcHVdZH1jjDJD2mt3It6LrazSOzRvjJDmk2bz7vxxTE0VPVuJazK5u4G5HMLqx/osmq5s/55btU1JZJh0lM8PDpWtubXDSAOPHZU0eE09NMJ2h/XEZS7MQbHhor18Jiccp7N9bX19CjvY14F3WOhufFO+T25RPFMOkZkTGG7Wi547k+lOVh/kEfc/6117HRuyuFkTtzYe8/NIPtU5dKRYzcJ0FMRHdPNUGcBQuA2RdAKBslJACUEB1CEIAQlMikk81ptzTzaR3ynAeGqNUI6FMFPC3cF3iU6MrBZjAPQqmJbQWwSv1DCBzOidbSH5bwO5oUguN0kuKr1JwUsFtS71oXc6EBZUb8k8bvmvBTfTWPCIcVpqvEZapz26shp2gZr285x2HZ4JEZsdEn4RYuuwukqha+Vmvdr9YVS6ZZQ1JjUsALKOmjoots8PaeR3uOvuWCxN0jMUrHNlfmfLmzhxuS5uhv4tun4aqopnZopXAW806t9Sh11Q6Wsc94a0yNaTlFh2T95aXKWF62cpB6S1NRNHVYrBBipDDF/KW9oN0cCHNsQdDrqmoXYS3qiySppqmKoa6V7wHxWD75hbtDhpqqwf8AhrHcOH0hEly+Zo+XGT/hv70bJpOmkbWYtHI0hzc8Lr87syn/AONZRzSKaVvzXNPvH0rWdLPjsLoaq+slGx/pD7//ANoWWlAz1IGxDiPQ4FPkiMpdNCL/AKyAt9jm/Qtr0Nl63ozAP+W97fbf6VimnKaR/FriPQHX+lavoM62FVMH/KqD7gPoU1pi0LP/ABBHMJ6XWkf3EH2pgm07Snyb08rf5t1hnOWsIabgKBjbBJhcw4gXUyNwLQm69nWUMzf5pWiar+g0tsTnZewkpQf7r/vqWyMO6NYjSu7IhmmZ4a5vpVNg1HitJOyopwyAmNzA+XXsmxuG8dhyVzQ4BHU1TpK6pmqAX55ATkYXHjlH1q96ha3wnw0HlcdDWPBIa5rrBtydLkW09quKgQ0rmvecmgvmfu7l4JuqqWHG6TD4AGxQsL3ADQAaW9Zv32UDGqgzzFsbhlcLBr9Bpdc2WXtXRjh6zhZeWNqIx2gCQCW3AsT/AKqBidYcOqGMIJjNixxOjT3+gkKkmqJaZwleZWC1hleC32jXwV7T19NiFIyOrjBzAec3j4LO8NYiw4pAKpzXPBgqLAa+aeHpBBT1XVGn7bwHNBs/hccfp9aiYhghez+T5XM1+SAQPEW9yWyOeemNPU526i0h11HE23U8HE2Orjmu0OvpoSN9fqUSSpdTVccjTbW0lzpY6H2ketM0uFVdKC0OztDrtu4gj1jXfhzUfEPKGFxdE5zHMIc+PcG3AHbW/rTFWHlPaHzHgm19WniEy6NmWznF0ThoW+cNdhzty8FWOmmEXWtOrXZmsdpcG9x6dk+KvqpHAXyFoeAeRO1+drFVE2J8lK4wCVpbLH85uqZLL0szOYTsFXJR1bS0ZopfOHfzU2aGKVjpY9BIPN+afqWnsyuGmbjTwSI4ZMxAjcSOQUplHKR2rM8UtbQbGy7bXVSm0sbfOcXexONbGzzWAd6r1pbRWRvd5rHH0J4Ur+Lmt9qfznmuZgnMS2S2nib5xc72J1rWMN2MDfQkZwuZlWgdLuZXMwTeZczBPQLzrhdqmy8JOdMHCdVzMmy8LmdAOZghNZxyQgLQG2yf6VM8p6GRv4saR6iD/wDVRb62VjVs8p6HzRb5HOHrBH0pfbPLp5YJ2BxaXgEcDoo9W4dZE4G4OZvsv9CeLWOb2hf0KLUxsjYx7OEjb+76U5C9twydGyjgDf2goH6+O/EAe0hFrulb85v0W+hILtY3DkfoKpLT4gRU9CcLcfObFLGfQ1pH/wARWZ0L7389lvWz6wtJTyRy9Deqc9rXRVZa0E62PWAn94FD6LEjEXNjphWGelkp3NBAa3MDYl57ItoqKRQm7qVmnmyHXncD6lpuhbyKzFIuBc149v1q5rOjtJV9UZmUdIY2gFtBGXZyBa7i6wvvs07pii6PyYNXTTmoe5k4ayxbYnTU6cNAlbwvGLKV4Y9ri4C5FrqVHrmbzBCgyNa1pIaL8+KmRO7YKwzbYocTZHMGZ+UcmfWuT1NNRQyGSOWRzxlAZqTx1JS2dkubycQkyRNke0kA2PE9yucwioJ/KGiTq+qDtQy/m9yuY2eS0DZ3b9YD7D9aroYfjGtAvc8FY45O1lHJTs+RHmHo/BUZX6Xhj9qnB68VVfUzEgFkVtOBvx4639ii187esHWHK5hsAHEHcqLQvdT4NW1Eej55rMtpoNvWfeo1NiEsrW5WEHKBd7dR6llptFpTMuC4OlaD/POvpupbWtO+44k3PrUGF3WmxN+ZUrO7ZujeARYqJ0VQRuXA80o1Mgd2ZyD3Cygszv2UgQy8iVFi5FhHiHWCz3HxCJHQvJdpJfcgAKLHRzHcDwUmOkeN2hJWlfUUlNM4gaucTqBsoNXQvppS6M3AZlFxZaRtMAdY/WlPpI5ABkGmguLqpU3FnCSKdrragWty1U2gqHNcGP1BGv49SnVOHZIbW9QUMU7m2LWlzhwvZPaLC6nsPOUkNBsEwXcylziVoHWiwGqh59NytsenNlNVIzDmuZlGMhCOsJVpSC+xXM57kxnJXMxTCRnRnTGYrt0A6X6bpOdI1K6GkoDuYrl0oMJ4JQhKWwb1XLHknxEBvqlBjeSNhHseSFIyDkhLYSgbuVtRESYLWxDgQ70afUqguD3lzRYOOYAC26scOqYoo6uOWQMEsJaL87H60Js3Hl1TDIyoewbNcWn0FRKqOQ07wbcwTptqtfNgfX1csr5srHvLg1o11UqLCaKJo+Ia885O0qRMaw1PSTVc16WGWo4Hq2dn+8dFb0fROqcAaiSKmaBs341/r2C1o0FgLAbAIT2r1iuocDoaIEmPyiU7yTgOPoFrD0Kc1rWNDWNa1o2DRYJR3XElaJcTY2VeKY+Umoe9znaauddWDhom3jsEdyDNyeYQnoXEsYUy/UeKXTu+KHcozOEkWnkHelaaa7Ee9InNqn9oApeRxYeA5k2RLwSzwxoM+cm4YLqDjM466UuflOQt9QH/APpWNC5oZK4ObyNj3ae9ZvFKjrq1rS7z3tA7i5rQfUQoy5rXDpFleIaNlM4WIF3a7Xsfq9SiR5Q8hoGZx1c3S/oUaeqMs8rn7dYdL/J0+pELmQgmF5kcPNaRo0nvKNLi9pgGt148OXcp9PH1jhc3BVLRvfJLaQgm2tvctFRDUG2qlcTaemaPk2U5kA4NRA0EBSQ2yjJcEcTeSlRwt+amWKTEdlOmkd8nvs1cbR2deylNdol3BCNBCmpg8atBVPXU0kBD2aN4my0hso08bXtcCLgoGmRFUJZerfZ3C6r6xnUyZWnsnbuPJSpoXQYhMwjstdoLJrEGfElx3ztt6jf6Ffjt25vLOEPMSi5CQ0JwNuujbmAJS26oa0b2TjUbDjY3HgliK/FKBSkt0OCMBLAXAlDdKABdQhGgEIQgBCEKgOzJq0PawaBub6eK603aPBNxHsuHfdLabNsidB0lcQhOALhRdcAvsLpgLhJunBE865bDvXeqA85/oAS9oDJKLF2gBT+VjdhfxSS480vYIxhflF7N04obH1bbZr6p5yaJUZXcOKjpBJVQNjqKaRzdC1wFtVlZqmoq+1NPI+2pBdf1La4izraUi22qyr6XJMCGAu1Iadie9Zyqja4Y50ODZiACbv3vcF1h7LetUs5c+eKw7UTib25Ov9JV4wkYa6AC7mxgZe78AetUNRHJGZdw0guYfx6VTSMuXPNQ4m419fEKyoYJHEaEl1twmpYr1GcjzhcCyt8LiLn5uAHrT2adR03VMDTz17yrulGRoKhwxHfkpbHBupIAHNJpJpa08o01KnscHDRZx2J0tObvnHgNUsdKqCMgAud3iymntpANU8w2sqWk6Q0FUBllDTyKs2VDCA5rgR3KV7Tmuul3USOoB0TweClT2dukvPZK4Cg6hSqM7iMTTiElm3vYnkqSvlDniJpvlPaPM/i6sekNQYq58Y0u0H2KhBubndbYT7cXly50UltSE41bMSxslNSRslN3QDjSlDdICcakHV0LmyM7eYQCkLl76hpPoSWyteXNY9hc3cBwJCAWhVtZjVJRVDoJXyOlba7WM5i41Oigy9KGCJ0kFG99jYdZJb2BBXKRf3CFkT0srSTalpQORa4/ShNPvi1UehISwdSnWUTmuDnSN8ALqSMjNWsAPOymXUaVFbFI7Zh9OiWKf57gO4ap0v1OpN+ZSC5PZARRtFrXPMruawsOz4JDnpBelsFuceaQSklxSS431SBRckEoJSDdADnJsnVLLSUksIBJCKcNygOjIKoKmn+PBuDYgnwV+dQVWVkelrauCy6XI0cEFHTtDqhzpJ3N1Gawbpt3lUlc4UshEgBgdqHngpNU57sQnHJxcfWosj856uQgtPMbJTJ33wyY8KOoppYqlzHMykEEDuIve/eLFXOFwEBo5DVOSU7aih63QvpTlPewnQ+hxt6QpWGsDWA78yr2wk5TGxlrdAm5ZGsBzWKl2BGigVtM9zSWi6Nq0hTuppDd8bPUoj6ejfe1m+BVVi09dSBxFM4tHyg7ZULMZnD7va5x5ZiAnrYvrO2mloZY3GSmqSO667SY7ieGShr3OdGq2lxVssWZsU0IabPe8h7Abad44qzheJmXIBHrCizRzV6a7BekDq0Mz7kXWmjlu26wuCRsbOMgstpG0sgznYC5SMubEIqZt5Hho7yhmMUrtOuaTyBWNx2SavnLIpcoB0Ci4fgM5kzuriDyGt0tC7i26SzNlxW7DdvVt+lVTTcpysYYql8Tn9YY+zm5ptu66MZw4c7vI4Eq6SEzVOcyK7DldwKpKWHDnfwSg6wvZY+TGq98bfjstwLlrRfZR5Kiedg62aR+vynEo0yvkjZyYhSwgmSoiZbftbJp2M0xpnzRF0zWPDDl01O2/gslEAIZxbdoPtU/D9cJrG8Wuid/iIRovepNX0pljizQ0kY1teRxd9Sqp+lWLSuLRO2IX2jYB9qZrP8Aw58Qqt7T1xCEe1qVNX1dQbz1M0nc6QkLRdBXt8proxxiafUftWU6sjitL0HIbi87b+dTn/M1Axt2V0lIj6QvHz42O9lvoVe3tUkn45Ky6WhrMbhcflU7f8zlUtnMEOZoDtSCHC4QeXZvT8BC7+WHj/ZNHhHohNOnp5nB4pJmVaak96PKf5xWbqWBkukl5UHyg33S2yuKAlXK5c3SGG6daLoBO671bjrZOgAbIQejYi5lK6tqUSuXQYyhuwTc2sLvBLSX6sI7kUIBKiyi7wDvcAetPk6pmQAvBPAgrK9qifWRgVEr2jV49o+xUlW74kgjtA2I5K9ncHzEONmvFweRUKpoWyseJNDwcFFnL0MPJLjoYdI2BoMjc8TowJG/OaRr6eXeAp0cDqV7onEOF7tcNnNOx9IVVRukMTopmgOYAwEbOGwVzCDNQhtvjKcXHey+vqPvKqM7OTrH2spEYDhqFXdYQpEFQQbEp2nIXiGCR10JFhqNlj6voeYZCfJy9t9wNl6DTVAdYFTRG1/AJe1Vp59Q4EWwGlbE+ON+ps3W/fclOx9HHYfCYmSukYdWZm6t7r8VvvJW/N9ibnpmBhJA25I9re06k6Y/C4HQVLQ7iVqukstRTdFpJqSF00oAsxg1Kq54mtmBA1C0bGipwYNIuAgaeQUDsbq8QMM8TA8DNkmYQNDtuLBTsIxyRtTIHQvZlGkYLntvtcE628VqKzo314yXzN2AcToO5RZsMgwSOmY1pyS5xIL7jT26q5ZeE5SzHe1fmLiXONyTckpTeCHxmKR0ZIOU2uNj3obwWkcNODZNVIvF6Up8scTbySMYObnAKBWY3hUUTg6uhLhwac3uVJvTN2Js1oJtpYBONheGdoBuvyjZVs+JxdZJknkLC45Q0WFrqN+UWA6Ruce9yph6Xa8BY1kjRK1znN2apuEuJpa9v/Ra71OCypxSe/YYxunAXSoZ8Vqczad07gWnMIgQLcb24IV8dXFSSYnNt7FVyOAeXdYwH9oKOaGseC54Pi5yR5I65BI7Nr2F90D0n3TxqIxvKT+y0n3qZhOP/ketNVBD1zshbZ5sNfBQRQjiHFWnR/DqWo6QUtNVRCWKQOuwk6kDTZLR4+u+EfFek1Xi1SyeWGFjo25G5AdBe/EqA6vrHi3WEC/AALa9KsJo6FlG6ioo4m3eHmNn7NrlUNfTPjw98t2FrXNcbcNUH7TaofJVvdm7bdtAShaBwhDiPKoxrtlCEy92vJuuLnWRnaRnuQ0tc4NbIwuJsAHDVZNShupDNSEzJG+J2WRpa7exUunYDqg9nWNTrQgCyULW1sgnRsgpL5GMHacG+JsosuK0UQIdUx3HI39yAl6blc0VRL0jo23yCSTwbb3qJL0medIqYAc3OQPZoSbJBcBoqc4rUPpYZAGNMkZJOW+ocQbX7rKlkxOvllkY+qksD8k5fcnpN8kjQu0cQdCCmn80zQvL6OIuN3WsSnyAQsb21xvCQZGyQCQ6kDK4KNS1BnElMTmt+rO+nELkcre0x2jXe9GGxGLFmC1+19Cc5aY5XGu0jXNqmscPkn0q0ikdBK2RvydweI4hOFrfLHAga3SXs1KWm/tu7N1kYil7FzG4ZmHmD+LehMseQ7dS8vX0zoTrJEC9nePlD6fQVA2Kmri0pnkEaq5pZtlnaZ+ytqZ2yUXtddaLKBW1zIzlJ1PBKMhyrP1Ve1lc/Puw2sqKrFzHSdotIurrCWkUj4zssm7pExjura5hd80uF/UrbCekrHODJGAE6Io0uJGNB2WI+EXFnYRQ0UkcTZHPlc2zjpsFtHTdY0uA0Oy886YVlPW9LKHC5WNlbBC97muFxmdt7APWnhN5M/LdYM1iPSHEqjCqOupS1pfmhmDGXIe3b1tI/ulU7KnpBiZc2OWqkymzgwloHivQaOKNsUlPHG1gcMzGtbYZh3eFx6VTYMcmMYvH/wBVr/WCumOGs7H0UxmpN5WtZfjJJf3XXcL6LuxGkfUPqREGPLC0Mubhb0KlwAFtNiUP/Lq5EJrKS4TBT1UkLnuIZpmJAuk0cFL1OaUDNcjW5T2NgMxuTvsfYosbg1hH84pbRdpzX07CCxu3JtlM6KEeXyw2/WCVvoylVIcL6Ky6MPyY5B/OmcD6Wp7KdGnSP1GY6d6aowx2IlsurHOZm8OKJbsme08HEJuJ2WrLv5rT/iTRPtq4KbDYp6hopOsDXNyZhewsOffdNF8cXSvCHxQMiBzss0AX0+1Oss2rnH81p96h1jsmM4TL82pA9dkpWeH+lz0uMn5J7Dst3WNuWh+hYPO40dS3MTdoJvxs4L0HpW2+DvNtnX9hXn8Y7FS0C/xbveE2n2RM3459uJuhdlN3NPNjT/hCELe+Eg96SWtO7R6kXC4SLKgzmMx5KpjvnN9x+1MMkfHSPew9pvd3qd0gackLxwcQfT/ooFMDJTSs5tI9ixs5aQycVnu1oZGLg3JBOt/qt61x9ZUSC3XvaP5lgob9HRuPz3e0Nt7ilOnhj8+VjfEhVIxzt2TjUZOF08hc55bK5pc43OoBCo7aXKt6/E6KXCn04nDpM7XNABOwIP0Kgkq4QLdo+iyNcqm7F/8Amti1tGQkd0v2JJ6MYsDYQxnwkC4zpxXSsbFSYe17mtDSbOeduQTbcZ6W4lLJFSQuY+MgPa2IMLb7XzJ+sTrJLho6huFwh7LGMzA6+H0gpmfABG8zS1LIc2tnOaPpUBvR3pfiFS6nkbUsbYvL3F3V3O9iNLqVH8GGMSzQdbMCyQnrXXF4xbvOqNC4WhmKYfQQiJ9bG/KTq3Xj3XTU3SmgY0CNsspcLiwt71av+CaVzR1VQ3NmGsjtCOOgCtY/gvoxe7mtJBF8rnW9qi4TbfHpiH9J2hjHNpnXeNi7bXjor3oxiMmI1zBLGGlozfZ38FawfBLSMy9biNS8g37LA2/vV5F0VpcJa6ogdKXNFu0Rb1WRrSpVXUPLKrPfY3T77E3GxUart1pulwvuzLyWddMdD3QzNlZ5zDcJusgbHNeMHqpBnj04Hh6NvQnH6JbK54pTC5rJGt8zM2+Q6m4SsabMwR5bGR4jB1F9z6FbU3VG3x7bd4KpS4lxcSSTuSuTVoo4HSlrnBvBo1RIJa1Ba2xyyxn0296zmL4cJqgzsqI2SbEGQC/rVT+eMcbjeOQW+cE5H0lqq6TLTZLE2sCL38FXpVSUx+bkzpc5phJd18zO1rz0Wrw7AGR2mnvmFiG8PSoGH1czA+GU07Zjd7IpbNz/ALJOiuYKpzaZjqiAxuNxtceghRZZ2rr7P1E0dLTvmkfkjiaXOJ4AC5Xi1NiMuJdNnVsuhmldYHgLEAeqy9qjw6bEYC+Vz6anLuLyHOt4HQelJqqbAmgNqKymLmbXe1x9gJV4cOXy5+3DFRucx4c0m41FlXsi6jpbWZW5Y6mBkrOXIj0G49C2VVL0XJyMe58rtAY2OFz7Aoc7MO/KtPPK502QZXNNmjK4i+1uQVXPVRh4rnOFc0FxDQCSdLKwwPoPUMdWz1VU2JtZLnaxrcxaLcdd1e0OJYM1zhHA2K2jRYe9POxqB8raanOdx4DlxPgoy8v41x8Gu2ZxD4IqbEKk1H5cfG+wFvJwR/mVXU/A1XxxPdS4xTzvFy1j4izN3XubL0qliZlzyylxPAaWUnrYI9iAfFKZ0ZeHF82SxS0s8lPOwslicWPYd2kGxCl4C/JjMDif94j9q9e6e9GqPHOjlVUU1LGK+naZo5I2AOfbVzSRvcX9Nl4zhzxHUxPB/wBox3qct8btx+TD0SMQb1WJVLCfNlcPaordZS4fMt7QVO6QMEeO1YuNZCbclXtd2w3mHe5UwbiKniNeXWJDqdp1PefrUHH42QihmY0Asq2a+tS6aQulpXcX0n0t+tROkrrYaHHdkrXJMcb/ANxf9IAH4TUNFvNPuI+lec0us0zPnRvHsJXouLFpwqaQus3q7nlqQvOKM/yofzg4f4Sqrb7SIIhJTxuI1ygerRCcpHjyZtrcfehNenqU/SrCowQySSUj5kZ+mygSdNIw4thonuP894HsAK02D9C8Mo6Nra+kp6ioD33kJc67cxLdDpfLYKxwzo9huFwOhgjzgyOfd1rjMb28BsEaqtR5zXYxiuIw28gMcQcHZhG73nRNUuHdI6s2p4pg08R2R7F622ngZ5sLAedrpzOBubJepzh5MegHSSrljJhjY1p7TpJrAixHjxCtKL4Kapzb1uIRMN9obnT0hehmqgYDmmYPEpmTGMPiHbq4m/2kaDK0nwU4ZFGRVVks7ybh3m5fRsp9L8GvR2kcTkllJN+28/RZWbuk+Dt0OIRX/aSPzpwomwqC79lt0+AeoujmEYaHikpI4s5zOsL5jzKnMoaZg0jA8FVjpPQHzWVDvCFx+hB6T0t9KesPhTv+pLQXAp4RswJXVwj/AGYVGek1NuaesH/tn/UufnPRDzm1TfGnf9SYXuWIfJARaPg0Ki/OnDNM8sjf2oyEsdJ8HP8Av0Tf2jZAXVo/mhQcayDCpiGgHTX0hNxY5hkxtHXQn+2ExjFVDLhUojmY4m2jT3pZdHj2xFW74wnvTcUha7ddqT2yo2Yg7rndcWDjmamwLh3NNxyEt3QZHNdma6xSXC8pKebAHMs5tweaQ2paTeSBpPNhy3UmGopnfJeO7MD9CZqeoooWSHNC0g9ylUsWH0sQlihbHUOJANuH1bqxkpWytzMsD36qN+RzI/M6Qkk8UrnWuOU6qJJguH4xMx80LpJbWBzHsjutsp2X8jU7y0F8dJGI2Ntckm5HvVth1CyBoZEztu4q7pBJhzpGMg65kzs5eDqDYCxHLTTxUS88l5fJuaxjyOWuqauVzppnPJNzcnRJc4xuaBex5L2N8NBWaVGFxyE/PhB94VHjzMAwGnNQ/AZXvAuBFA+x/tDshb7n04eftgaZknlcQLhcEOIv5tuacxGWR4dkFv531Io8X/K9VUyMoIKOBhaGMjb43udyUV0pyWbG4nnbRZZ811+CyQ1Ry1VRLHBEM8shsOFytvhuFQ4Uwve+87xeV30DuXmnlUkVQXMOUtOnctFgnSOo65z5QHCMDvH4+1GuCxz3lZtuI5HyG7w6Ng2B0JU+Ooo3ANfGy/MgLEVfSe4NnG/IKCcRrpagPbIxrbbG+neoaXG16dFJTbRtYL7gBeQdIuhtBhM04gri2odUXbE8CwiN3NsBrodLrWYNiE5qB1kuZp0ACk9OMMhr8GZiBb8dSkdpuhLCbW9dj61eGWq5/LjuPMcdw+prMWmq6ZgljkAIs4X25KpmpZacxOfFKxxzB2ZthstH1BDgWSA9x0Toq/JwGuZNbjd/ZW+3F6Mn5fVWaBPJZoyt7Ww5JyrmnloGmR1xbTXUrQzsw6qF5aCG5+U3sn1iyjT4VRz03UxTPiA2v2gqR6arTVfx/RJ5+dRX9TV53QuvVxftAL0CGSE4B5F1oc9tMY9rXOUhYOno6iCqjM8L4gHjVzbcUxlDMVT1cYZe1ifehRKkAVMobewebetCbR9KGuxKb9ThnVj508oHsFygMxaXz6qnhvwjjL/abe5edu+ELG6jNkbTxNFrZWE8O8qvrOl2Ouic78oSBx0aGgDXgtphaj2509IZQV9RJM+fGZ2w57RCJrWnKBqTcHje3dZddhWGsu6prp5OZkqi33ELysYpiPVMjdXzkMaGjtlVuJ1VZNEQyokJbq7M4m+ug9qVws7Ey29dkf0Sp/10tGSP+ZLn95KZ/OHoXTHsSUIPNkAP0Lx9uEzSAGescTxDQnG4PCN5pT/aVTxZVN8mM+3rp6e9GIdGVH9yI/Um3fCZ0eH+2m/uLyb8kUw3dJ/eR+SaUcHn+2UfDkXy4vVj8J+AfPnP/b+1c/Sd0f8AnVH9wfWvKvyXS381394rhwqlv5rv7xT+LIvlxesfpN6On5c4/wC39qWz4SOjhOtRK3xjK8j/ACVTcA8f2kk4VT23k/vI+LI/lxezx9P+jT/+I5fFjlJZ0u6Oz7YrTn9p1vevDfyVFs2SUelX2D/B7W12WepnkpKY63e3tu8B9JUZY3Gcrxsy6etxy9H8QPY/J9QbX2Y4qvxODDoGF1HSRQuOhcxgbcctFEw3DsOwSDqKCEMHypDq957z+AkYhUZm77Lmyz3w6ccNXannN3E81HsCnXuzC6bA1WTY43shJc/VdJ0TLzqhUOiTVKa43uzfkmG3c4AK0oIA0hx3We1aFNXFujuCnw1IeQGjMeQUqCipZTeSBju+ys6ejpYG3hgYwniBqpqpBRs6luZ47Z9imtlHNR7WSHvybpKTxI1KEhvdj3N7gVV+U8inmTJ7TZL2q+lVLEKSKVscbXmWznNYATod7brKzQAs2Ws6SSZsPiHKYe4qhawSs7JsFQnHTM1fQfF6iL8qYaG1DJSS6ON1nsINrWO+3tUTC4K2inqYq+CSB7WgBssZYTc76+C1zxU00Lo4KiVjCbkNeRcqlrOumcXTSPe7m4kn2rS5f86rOeOTP2QZBmNwbqwp3ZzxsQoLYrPDgNePerKlieXAxAdo7LLTa5J2HwMbOHCR8WvAXBWyjgZW4TNSTPD2TRmNxtzFlR4ZBVRi0tNnYfmkFX1OWMbpo3v0snGeXLyJ7ZaeV8MoyyROLHDkRoUCYt70nF8RbW41W1cX6uWdzmd4vofUowmaRqbLojivaQRE85m3jdzbokmN4ObPnHIdkpvNyKM5B3VkWx7QdXZTyeCCpDK0RHK93i1zVFMrXNLXtDgeaQIWtu6B4YXbtcLgoCU/8kyOL30ERc7UnJuhQyXX1pbnm2TRCAcb2WAHfieZTLj1lSANWxC5/aO3sunXuAaSTYDUlN04tHmcLOecx9P2Lvrlhwm2qjMBlmjZvmd1jvAaD2+5Ozudkys85xyj0ooGZusn4OOVn7LdAo7ykG/XG1IXbJVlCdFWwV5ngIkY7djjpbjot8rphJMksjuScq6yTO2+xvqDwXbpovBBauWVjhmEVeL1HU0kdwPPkdo1nifoW0wzobhtC0Pqv5ZKPn6MH9n61ln5scG/j8GWfTBUWGV2Iuy0dLJNzLW6DxOyv6LoFWS2dX1MdOzi1nbd9Q9ZW7zxwsDGNaxo2a0WAUaSYuBAK5Mv6cr07MP5cZ2raLBcJwWz6eASTD/ay9p3o4D0JypxAuNgm6rObqC4FYXK3t0TGY8Q95TYqNUyl4N13Kbpid1lFMxm4JV0wXapYdokZwnRNHdKvoklKrh6AAOVpTutZVMbrKXBKcw1UVcaKkdsrJr7ABU1HJoLqwbKCpVEu91DrJMqkB1m7qrr5C47pC1xk9ypkcoVKJLPuCpsEt+5BJGKQ+WUL42jttOZveQqKlf8lXuc73VDUDyfEJG7C9x4FXCt0ndSHt1VdV0F7mytYHB7BqlyRty67K9FtmRQEHZWmHYf1ZvbwUoRNL72U+BjQNEglUrS1oHFSjRnEGyU2d0YkY5rns85oItcd6Yi0sVcYY2zXSHc6BVJusvJlqPM8T+CnFKa7sMq4qyMbMk+Lf8AUfWFj8QwjE8JkLMQoJ6b+c5nZPpGi+irgpMkTJWFkjGva7QtcAQfQttOXb5sbI4atKWJx8rQ817Ri3wddHcTzObSGilPy6Y5f8O3sWJxb4J8WpgX4bUxVsY2Y/4t/t0PrTG2PvdGaybr8PxHCJuqr6SelfwEjCAfA7H0JdPFNM3MWZW8HHigys/ehPikFtZXDwCE9FtFm7QbH891j4bn8d6ezBR2kOne7gzsjx3P0J0uXZtz6M1EhBOXdrez+0dB71YwwiGFkY2Y0BV1MzyitiG7cxld4DQe1XOVHj/UeW8SGsq5lT2UpJC1YaR5I3B2ePzuI+cFZ4Dg0mO1WVjiynjF5ZLat7h3qvmlZC273WvsOJXouC0keDYTFARlkd8ZMebzv6tvQsfN5fScOjweL3vPSfTU9Ph1MympIxFEwaNHE8yeJXXSE8U31zX6tcDfUEJD32Xm277erNTiEvkLbm6jOnIOpTkjgQdVCmJtZECZG9kuhTNRTWN2qA2pML+4qayuY8WJ3TCLI3KD3KBPurWoLJG6aFVk0br6oCHIbFEZvdKkjKTE1wvcWU0FXXbosgBI4LlSKdxzpmxT8AN7pKi4p35QNVPgkvx1VTC+ymwyEEd6jStrJ0gDN1AqSCdE71lxZR5De5RobQHizzqn6eW2iakF0lhIKrRLRsmbioWLwZmMnbu3R3glwyHiVLs2WMseLtcLEKoSqpJyLAlTnThwAJuquoidTymM8NjzCGSkDUpiLRjhfVTICbKqp5g52psraAaJGlRXOg4q+hb1cTWcgqmjiAka487qzDytfHPty+Q+H2Ss4TGdGda6ZaSg4LtmlRs6cD0tFoT0sFTEYp4o5Y3bse0OB9BWaxT4PsHrw50AkopDxiN2/wB0/RZacP03Sw66Og8nn+CzHuud1GLURiv2czHg27xqhesaIRum+aISREM257R8TqlSSFsZ8Fy6bleGlpOzbvPgBddFuoy7qfhMXank4C0TfRv7VZLJ4di1TSNIzNfGXXLHb95BWlpayCrja6KQZiLll9QrwymtMfJhd7PpJAtcpRNgSdgqyprzNZkDH3GhFrG/AKrlpEx2fY+CoxigpS0PLqmME92YX9i9LlnDy4HUFeaYHh0sOK0lRVMPWGZhDTbsdoL0F7u2R3ri83N27/55JFayaan+KBaQwnKTuB4qPVYtPGwuD3G244+hWFTTtlFw2530VbUU9QAXBheBzGoWE7elPTLHVM0/SIyOt2iBvfSynR4nHKSLg6b8fSFmpnVDZjek31NmHT1JyGrbA1vWMaJNbBpN/St/SZRw2+l74XdX1kgzQkacFCp8SIf1bxldwTEeJs0s0C/DMkzsbUDPmyP7/pWc8ec7jaZ+P13bpdRVQe0EOung5rxqqCN00JGoJtrY3uFb0shkZfcKOd6XljNbnR4wgpt1MRqBdSWnmno7E6pJ0rHROG4Scmqt5IWuHJQ3RAINGawlSYo7DRcYLOCkgWQcKjbqpUewUZh7k+11kjP5rJp503Xc1wkuKWgZkGyaOieckOGiAQJCCp9NLewVLJUZZMoOqsaJxdYkoB7FYc1OyYfINj4H7feqmy0ksRlpJIwLlzTbx4LINxKHq2uc17SbBzS3Vt+apF4Smuex1wr/AA6Rz2Aut61lfytQl2Xyhl+etvxotLhh7IRYJWkpeClXCg0z9PBTFp4/xj5J9lXCL96ShasjgKUHpsG66DZAOh104HpgFLDkA9mQm83ehLQfOGqh1rj1cgB3swe8+5TSNCVW1Ae/J1bu1cvtxJJsLepa1nO0QPaGNaIxe+9zqpTK6eGLNExkRtbMzQ2Tdmve5swlM97G1rBOthAcYnskuBuSQfABZ8w7pMGJTVFAGveJJCb5SLZbce9MR1JijLXZXNJ0YRqVyazYuqZ2QCM77EjwFgkMnoIrMEDpTfUu0V7t7TqfS2wyLE5KyOpMpjja9rrAgmwN7XXpj/1h8V5fROrHMdJS9mPg0EOI9a9LgmFRSwTg/rYmv9YBWfmnErXwXmw60IMDHG5aL80pm6eaNFzupAmwynm1eCT3Gyhv6PQl14y0a/KbdXTxYXTD3SPiJhLTICC3Nt6VUysT6yXelFUdF3SEOjlAcONrXVfVYJWwXYJQ/KNSAbD0rWU1RK2WSOohcy7hlJdcHgbd2xsn3TQPhMjHCRm5LRc+pa4+XKdufyeGZcvOX0da6QSOBzNPnA7q7w1z2SZZdDbQ2sHfar2ejiqPjY2NffmbKKaKpB/UxW5aozzlmtH4fF5Jf9cH2i6Wy4clMY4sGdtncUrJZYOqFZtEy9qcGy45AMCMZweSdCLC/ilNahUFktpXMuq61pCCLDrLhN13IuEWQog6lJmOSMnklHdQcUqeqpHnuSCsglNViM1vMjsL960NDpoqLCYOpoWE+dL23X5nVXdI6x0SC+p9QFjsYe2kraqmlZZuf4rLuWnUekLW0r721We6U0RlxMStdbNG02txF/qCqdoy6V9PSRSxPD4crZDcsJFge6y0OGtygDks5g8+fNFe4Zq09xWpohZo706mLinKsWC7AVXQcFa0wzRDu0VeO8p8nROVGVSMqMq2YGAF3KnsoXcqAZDSlBtkvKuht0AiyEvIhAfN1S7LTPI3tZLoMLjqqeape0ksdkZY2tYa+1NVJHxbTsXXPgFOpqvqej8TW2a14LpJnWtcm9h3rWMr0o4XRtr3ta4gWIBa0HX3KypWCqqXNiOaQA5Wk31UKihD3OMbS0SGwJ9pVvg1JDSS9a593kkAu0sFM5uhlxE2mwhjaHqZG3LtXXJ39CqMQwSqgaZQ/rW3F22utK6vpGHtVDPRqmn4nRnRpfIe5hK1/wCWMuXbPYLDIK4hwkZE4FpINteS9EwsNZhdPGzzY25Brtbb2LCuiYK11RHFLZzswBGWy1PRzEHVQqIHsDCyz2gOBuDofo9ax8s/4b+K2Zr5h1UuPVQWGxUyE3A1XI7nZm/FmyqaactqZoyfNfb0WCu5BeM6rM4gTSYzG+9o5hlP7W4+lSel9G8PtcA21B5LklBTT3c6PK7fMw5T7FEp5jmCsYzcKk6M08L25w8a5t+ae6rkE6BrsnWsuE9nIhPg0vaxTRiIGys+qTb4OyQkelY5tk048FMmiLeChS9klB6A1KcYmGuN1JjFwgFAXTjYyUpjLnZPtj0QRgs0sm3MKmZLJt7EHtBlu0XWb6QzF1M5gNrhaapFmlY7HXFwkF+BslTXUQAaANgFMp3dsBV9FKJqWKQfKYCpsB7V0D7XtGVC6SMc6opC0gXY8G/EixH0qTRuSMeaHRUb3fJlIv4tP1Ji9Mtg1LNTzSCRpaNtVrqHVoVM3R11b0LtAnbtnjNLqAaXVlRHRw5G6rYHaKdSOtLbYEKcf9DObxT0Lh8Vy3euly6KuhJt3roFkjdXQFwFdugCyEXQgPm2ela993TgNsRYA8UpkNG1ojZEHcha693h6NYDT2MWC0LTzMLSfarCKCCAWhgiiHJkYb7lszrwaDD62cBtLhVVIBt1cLj7grCHoj0kqbZMBnA5yNDf8xXtpc4/KPrSNQUg8lh+DrpRL50FJT/tzNH+UFT4/gsxZ4/lGMU8d9wxrn/UvTLhFwgmBh+CajBBqcYnfzEcQb7yVZwdAcIwiGapo31T6gRkB0kgII3OgA5LWXRYEEHYpXmHLqvP7WNr7KVC4aJusi6iqkjItlcQkxOsd1yV3Y8xNeQWaFUHSWDrqMkaObqCOBV1muFV4wf5I4Hkk0MYJOauiimO7hr3HY+1X8Q0Cy/RP/y919myvA8LrUxDROM72fYLp9rdNkiMKQ1vJPQDY7jZK6oWTzWpwMSVFbUU12HTVUVZGWFa98eYLOY5GI2XHNJSrZupsLbqDSHrTdWULbaqtJqRG3VSGt0SIwpDRokRstTMjdCpRFlHlsAUHFXV+a5Y3GCC9619c8NaVi8UcHvcL6dyNK0m9Gqls2Ghl+1E4sP48CrppsVlOjU4ir5qfYPaHAeC1IKeivFW1HJtun8WIkoGAi9pAfYVW00uUi6m1kgdRtA+ePcVP2L0rQbKyoHKtU+iNrJoi+pz2d1Mifle13IqDTnRSmlRvlXcWXlDDxXPKGqDdczWXTMuHN6rAVDV3r281XZxyRmTlLSxFQ0cV3yhirc6M6ey0svKG/goVbnQjY0sLlGZJIsuK+Wei8yMyQhLYLzIukXQnstHAdV1NbcUF/ejY0zXSSn6uu6wDSVoPp2KqY/OWlx+ITUPWA3MTr+g/gLMsHaC5s5y6/HdxKbdVeMn+TuHcrRp0VPjhPk77clLc50fpwzDIC0ecwOcORPFX8Qs0KppGGGCJsZsY2Buh5BWUNQ0gCRpb3t+paaRcbbuJ0Y2UpgUSOSMjSRvp0UqN7dg4etKwap9u6eCZaRbcJfWMHyh61CpCnDRZ3HReF3cFfumYBq5VOIU3lbS0PDQdrhCpGWwWTracPvxI9RV5GQQPBMYZ0dZh8BifVGUlxdcNy7m9tyrJsEER0aT4lOFcLXY9E/mAbckDxTBefki3oTRY557RKejmH6elqYmjzr+CrpqmR98jbBSjG1uml7Xso8rmjWwbdulzqD4IkVqKerjkeDmJuszXw5Sba6kWBWtqXh7CbO1todLehZ7EmE2LdfDmnobZ6kl8lxmnlJ0LrG3I6LcN2vzWGq4xnDhob6LZUUvX0kcgPnNBSZ3lKa/IVI64yRBt+N1Dcl05JcdeCVhXg7xU6jOoUFTKTzglpMXlOdApjTooFMb2U1ugUVcLukkoJSbrbHmMcpqlXK7dIugG6vSC7oukE2XLpkcQm7lCAtiRZJuOaQXJBKpno6XWSXP5JtCWxorOVwvPNcuuI2NOlyTdcK4kNEzMEsL4zs4WWSLSyQtO4Nlr1m8UjEVdJYaHUelRm28d+jTToqvF7OZbmQPap+ewVPjU4a1oNruka0DvLgs432v4YruOWwO1ypQhDgAWljrej1qKZC0mwsL21G4UqmqOzcm176t7Q14rc5ShAQRaxCcbGeISj1cg4H5Oht4+5LcBwBte99NEqrYaCBqT60vNZMgOaS6zjdwdYkHlt3ae1dY4WA+SbgWU6OZHDIBufakGVp2PgmnvAa25Zo/ib8fsSBIxpfa18xsMv41RpWz+dtwDrfQcU0ZLk2YbJAeS42D9DYcL/YkvcMp0GhsL6+zglotuumNtA3keNimzK8k3aSTfQ2F7ezguZnXs3Ne9m249/emSRYktbYHjqbeHoVJ24aguDRcaDQMGml7Ag8NvWmHvJadbag6anxKdJu1wDSRe+UDTl4jgmpCY3+cNdspv6bhIkWoa5zTqL6Hta/jS3rVVWsc5rhra2YAu+j8bq2lkvqR2ncdz61XVd3dogDU673G6D7ZqqjGoI48rq+wR5NC1riCW72VTVsAcQCTccRbVWWC3bG6+xOhukVWknmrtLqXHgNEiQ9lPUjcsAJ3cbpIpxSqY9oFRVIpzqNUqUXdMdApgOir6ZxsFOa7RTVwu5XEX0XBuq8d+mec+3UE2QTqkrZkVe6ElCAVfuQkZkIG1jdCT1g5IzhDMpcuuZguEoDp2XLriEAIQuEoAJVNjsYzRy23BBVwSoOKx9ZRE8WG6nLpWPbBY47EKciop6l7afZ4AByd/gs7VSCSvoyaqWd/XNcc50ABW4mDTG7NbLbW+1l55UuEbn1ULGZA85G31Db3FkYctrXqh86wNjubG5/0XWsIbna3xI4nhf1exMCYPAIJAeBx1sf9E7FLna0O1tqTs7Tv29SpcPiV+rSRc6Bzha3fppZLbUMaXZsrcpsbHYcfR9Sjm4DSXPsDfzQfVz24pGY7NG5GzQddPX4fWhaYZGgAXb2NbD3j8cVyN18oL2ntGxsRy25H7VE64sB0ceyBsLE6e1OCrZmeLv8AOAF+O26mhJEYsLu2dfRoRYdkFupfprbT6eHuUdlU15udh2u0/XSw9Phy8Ek1Ia0HMwWFzYE6m/tQezxIAvZu+bX0bpLjZpAvmG1hrcqOawNc4NLiQQ0ANF/Rz9Kakqz1bhY6G9idLWPD0JDaQ8Gxu24825+r0FMufYWJFxbRouDyUd1QXOINgOHavbnY+B9iT10jnXym7htbLflt4XQk64m4FyDYkF5sSNyfTwTJlFxrvpZuno71xr2Ax2EeW9jmJIIvxA1G/sTMhtmAOYA3uBp3m++psmZMr/C/K1lCqH5QRY33udNPtuE+918w0GYcde/f8cVDmc4tJOulrnX/AEU0IEzc3asN7alWOHtayFhOjiojY8zzpYe/VWtJTyPa4sackTLmw/HekVLlHYUoDKxo2sFGdrlG9ypJJshDlxdPQGxCik6p+E2KVEXFM7ZT2HshVlK5WEb9Apq4euutKQHBKbxRh2nPoo7riELf6YhCDsuA2RA7YIXLoTCZcLmZJzd6EMil2/JIzd6M3egFXXbpGbvRdAKJSblCEAJuZokiew7OaQlkpJQGProOugkhLizM0tLhuLrNP6NUcRAe6WUDYOdp7Fsq6PLPIAPlKoqW2useY6pJSqeVraKMDTq2ZLeA09llJjmJcLk3OtiNvV61VxTCN5a4nK7fu70vO6N+Une/HdVMlaXQmikFtw5x3da++v2eK46YG7u8G1/V4E6epVjans2cDobb8LpZnHbBdaxvp+OGqe1JrpWXddgB3Om/IfjkkOlZcZSBppa+/H2HjyUJ0xDrXAJ0H45n3JrrXZW5jpa3Hbl+N0bCeKloANxqLatG3u112TZq3C5zea7TXjy9pUMyaHTRpvpr6bLmZ93AHTe44H8fSlsJL5L9YNrtsT67m3ikGY52m17i/wBQTfUucT2gALADXU8B7kCEho0Og0025+GiQ26JgGt7RtbLcnfn47JRl3JcCdbNOtj9mqaOo1ZbK4W21HD8dyHgAuab3t/r7foTgLdI0OuCTflx4D6011twHA39O9vtSHusb2sct7W9Sa1AIve1rW101RsHnSFoblIDh80kH0/Yo7jcWTjw5xHEOJsCbWCVFA+R7WNBdfkkHKSkfPK1jG3dZbCjoI205p2DsFtnv4kkWKgYfSCmaBlBeTrayuw5lLBc2u4gC3E8lIk2yZaWPLXaOabHxCVmUjFIH09e4vAaZRnA8d/aobnJ7TZy7msnIndoKOXXO6XE7tBIlzTO2U9jtFV0ztQVZR6hRTiQw3KfjGl0xGLaqS0WaFWHac+nDuuLp3XFsyBSV0riCoQuXQguT90ZiuIVIdui64hAdzIzFJuEXCAVmKMxSbhFwgFZlwm65cLl0BUYi3496papu6vsRbebxCqKiAuusL26sLwo5tHIjqGtbklBLdmkbt+tPVMBBKhmMoWnAZ2XY7My2hau59QNbnQAnRVpY6O7mOLHAbtNlvThFFK1pkpxmsLkEgpxOWXqyebQC405n8dy4fNeNRx22K0VbgcTIjJStOYbsJvcdyopCGmwaNOB4KhjlMnARmGpFx6vBOh7D5rXAO0A3t7O8qMZCCCGi24NkjrTbUDw1SWmdYxoBDACBYa+tNZ2ta1t22Bt4DXT1KKZj80WXOuu+xAtbfmgJD5czXEvB1+Tb0eKQ547TbE8/tTJkzajLchcDm2IABHqI9qAcO2rS06abexdDRcnXUWsdymi9rWkk6bk8LcU4w3OpJHEnigHo2MzHQXIte6taOLKAW7/AEKDSREm4G/LRXdNGGMbqSeKmhLhYGNzEAA+lOttm6yTUgWDSfN+36k051rt2De/8dy6x/aIPDhm15IVEbF4DVU4lAu+K+ndx+tZ9y1IIefO7Lhob9yo8VovJZs7G2ikPZ7jyQnKK4mycjPaCbIXWHtIQtqV2g1VvDYgFUlKdlcQOAYFFUmRgl7QpRCj0nacXclKIurwZ5mikpZ0SFozcKQT3pRPckHdMO370JKEA9qu3KRdBKpmVqi6RdFwgirrt0i4QgF68Fy/NJui6AUSuEpOayAUBExBvmO8QoLm5grGuGamJ+aQVBjIcscu2/j6QZ6UHWyrpaUN4LQuZcKJNADwSaqB8IAW/wCKxlVCADotex/WQsf85oPrCrHtl5Tl1mMZo3NqpJIzlublttNftWkVPizbzuJHyeXBaWI8fbNvZ/N9v1pLoxqSBy3T8ri03ykpvrYuNws3SbEY4C2u913qXZL5SQRe9jte3JOdbH89vpK7ZvBw9aDNRxFzwGsLiToBxJXC1xtw+pOh0Ys3OzwzBJfJFtn9QKAQGXBAAta1u5SIoHEC5seNkmOWN5sC5x8D+OKmQvaGjMx3aHZPI945WulaEmmaWDKOPd+OansOltR3G4Khxus3ObdnexGnfr3a+hSQOxlaGi2oNtCkfR+OV4ae0cp3zcT/AKrjZHO1sOVifb6tU0H6Ak5Q8aXNjdOMOYaEDSxGm6DSYyRe98uoufBcqaZlTS9S8EXNmnLcg89OCQwXbYWPfobfj6FJZ4b+v2IF5ZWqpZaWUxytseB4HwUfZy2FTBDVxlkrA5p211B7lSVmBVEF3wnro+4doeI+pCbCKMFx0VzHFI7LGwXeeAVPQiQOyMjeX31GU6LS4SC18rXC7w1pJ8SdPYo0aXBB1EIZoTxPMpRCc2SSLLWML2ZcEghOuFwmnKomkEapDt04Qm3bpk4hCEAXKLriLjZUz06hc0XUDQRcoQgaFygm6EIIAI2KEIBEjc8bm7XFlVROLSRxVsSqqqb1VS7k7ULPONfHUpuoSJIr8V2E3CfyXChsqKuHQ8Va4a/Ph0N92jL6tExUQ3F7JeFm0D2fNefcFWPaM5wnKsxdrPi3PHZN2kqwuomIduCw87W2vctKyw/0y9ax0czhsb+sb6fUoZLc2rLknbirqe08eoB3H4+1VstMM5LdQNbLN1IpA5j08UCMcu8C24TuW3DZdA+SfAoMhsZGgAsTxTsVO3QkZiTa5NtUpjNri997J+ONtzqGi3EaX9CAaDHh5BA8QpMUZc+41B11G34+hORsFg7KCT2dTt3p5sYAAIIe06hASoy0a3JzN2HA+CU3LdriQOBc4bfjQpqNrrWIPPe9k40Bx1FtD3BLQKYHEWaXDmTqNfwdPBPN7GYAEu33Iv6UhulnAEk6Hbhx9vtSgQDttwuRojQ2dab9prgRoRqD6k6zcgAjjqLFMtsG5r3ynW5G34ulZgBfKDls7a4/GvtRpSQyWzhbjwIOnrSw7stc63frsojH37Lr2O2+n1JecyOIZcAcEaNIYXSyBrSbDc96fYW0jzJ8h5DZObTwPhwTULerYbb95XZR10DmMN79/G/1pGsiuHVNxSdZGx9rZgnE4wzmqbOiZcE85NHdVGVITTt08RZNuF1REIXbBCARdcXLd6DoqQ6Dqu3SFzMUA6CglNZzddzX7kAq6C5IJXL9yCpeYrocmyUXQRZKiV8eeMPA1afYpF9UlwD2Fp2OinKbisbqolM/hdT2ahVMZ6uXKdwbK1gN1g6oJI8zdVHpm9XJIOdirHqy4bKHLGYpL8wrxvKc5w6XjmoVdK4NY4AGzvYk1dfDR5WvLnyyfq4Yxme89w+nZRyyrfA+Ws6uMvt1cLDm6sd7uJPdoLcVsyw7MzsySEN812o7j4KHK25vfXY34qZI4PZ1drkba/bZRXkAHPudvFRXRER5s6wJsuCxPEX5J2S1zsE3ltsCRfVSZwXJF9zy4JfLkRsSkM1FidttEob+KAlQPuMpG5+VbVTIw5xLnA6G2a+hKr4TZwtsdDw1U9sgaCbAX86/D8fSgHrFtjbbhzBTli12XcDtNvy93f6Ew6SwBeDlbYHU6/ge5EczgdBYN4tNib7oCS21rOscw20Ou31rrbkA8DoSAd/xr6U00aEa7BwOv1fiy682BbocwzaWP27X9SAfe/KWE+d5jml1jodzf0epNtecwzi5FwW2AuPR+NAmi8vvcWDhtcgX24+n1p0CwaADcDW410/0ugFZmgZQQP5w9qkRjILNFraEkKKwgEAG9xfXQX9PpTzHuIDg3W+XbfT/AEQpKBc64bq4d/BSWsy6Am543UWEWdfc21UomwI2trdKqhbHhgDToCbg/QpKgvkbGNQSPG6lxG8LDzaiM/I47dNlLdumym56SUkpRSTsqIhC6hMG1wtTllwhUg0WpBaniFwhAMWtqi+icLbpBFkBy5XCUJLigFITdyjMgHLoSQ7RF0FpDqxllD7aOU2ieHAbqPUtzxHmNUmjkyu5rDKcujC8NBEzM1RcWp5jRv8AJ3MZLbsue3MB324qZSPzNCXVMzQPHMKJeWlnDL0lBDRF72F0s0n6yeXV7/qHcNAlVIvTusbEHTxTx3skSlhiLTbNfS+x7iuqOfHtTvLmnMBZ17EcikSdsA6XOpF12YSU79t+J8dAe7vST8Y5zg6zh5wO4KVjoMusAbG/49ibtw5J4i41bY7bJD2Ed6iqjjOy65F76lLBBtz3GqbaACL3t3J1ovq3mkNHI/OOnpUxpFg8mw2N+aissCLaElPscWjuPFBHMxFwdDteychaLBxFwDYgafj7FHL25gbEAmx4FOtk1Liedw0fj8FAP5xFqbusRodre9JZd4Lr5hG/e2h9G/BMucZXgjNe1jc3uVJhj6tjSWg5hYH07+xOA7la0FoJIvcOB+g+hNyvy2BFnNdY3+r1pYaHAsGZxsbAa37lEne642Oa17fb4e1IH2FzSWaksN234+gqYx4iBLxlc7ha1r/YocRygPkdcnQEi/44J2Jht1rxZlsrtD+OSDidFJma3gRa17bJwztjGpu62wKhdeXWbFcNHyhy7vb609DGA2+rjxJ4ckGdcx73Xe4X5HkrCMkRtHIWUJxGQhp7ZG54KVGeyDzCEZ9FuOqQTddJF0lDncKZe83yMAL+/YDmUt7iXZWWvxJ2b+OS4xjWNs2+9yTuVUBvyWM6vYHu4uO5Qn0Jhcfm5/S/3f2o/Nz+l/u/tV4hUz2oj0av/vf7v7Ufmz/TP3X2q9QgbUH5sf0z919q4ei1/wDfP3X2rQIQNs7+an9N/dfauHolf/fv3X2rRoQNs1+aH9P/AHP3kfmf/T/3P3lpUIG2bPRHlXW/7P2rg6IW/wB//c/eWlQgbZr80L7137n7yZj6E9W/MMRv/wBj7y1aErjL2cys6U0HR8wgDyrNb/p2+lPnBwRYz/4PtVkhT6Yq+TL9Zt3RDM5xFda5vbqftSPzMa5r2vrg4Otb4mxH+Lw9S06FaPasg/oE2VhZJiOdh4GD7yiD4NbNt+WDmbpG/wAn1aOR7Wq3SEK+TL9YkfB2cvaxUE2Oopuf9pcPwcX3xb+H+8tuhLUP5Mv1hv0ba64tf/233l0fBxYj/wDLbf0b7y3CEag+XP8AWLb8HmUADFdv6P8AeSx0At/xTS9/1H3lsUI1C+TL9Y0/B+Sf/NBbh/J/vJX5hHS+KaD/AKH3lsEI0fyZfrIs6CFliMS7QvY9R95PfmX/AE/9z95ahCNQvky/WXd0LzNt+UTvcfFaD/F4JA6EW1biAa64IcIdf8y1aEah/Jl+so7oRmLicRNzseo29qc/M45rflABnFoh3PD5XitOhGoPlz/Wdb0Uyiza2w4Wi2/xLv5q2Fm1lufxX2rQoRqD5c/1RN6NBrbeV68T1e/jqlt6P5WhvlWwt+r+1XSEahXyZX7U35v/ANK/d/auO6PEts2rynn1f2q6QjUT7VSDo21rcraqw/8A4/tQOjtv97/d/artCNQe1Un5un/9v939qFdoRoboQhCZBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgP/9k="
}}, MessageType.buttonsMessage,{ quoted: rep, sendEphemeral: true, contextInfo:{"forwardingScore":999,"isForwarded":true, "mentionedJid":[user,sender],"externalAdReply":{"title": `Hai Kak ${pushname}`, "body": `${ucapanWaktu}`, mediaType: 2, "thumbnail": thumb, "mediaUrl": `https://youtu.be/5odMRQDrhoI`}}})
}
break
case 'menu5':
res = await iqbl.prepareMessageFromContent(from,{
"videoMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj2wvVIciPEr7AqnvgQqAimMmBLSAlvxbuKMKOLj8ipH.enc",
"mimetype": "video/mp4",
"fileSha256": "LNNbulPIy4MMKEu8Nhq6UCuXt2B53VVQaD3tXrF3kLY=",
"fileLength": "7891504",
"seconds": 111,
"caption": display,
"mediaKey": "H/4TeZtMHc8agRNQa6rGaPn8Jz2C5DuaFr8+aZ+2QV4=",
"mediaKey": "h3Qj51MWgjdmvp/UFrOIcRHQosumd8j/JT5gKyfRNbI=",
"height": 360,
"width": 640,
"gifPlayback": true,
"fileEncSha256": "J4WGWV2IbktzSRw3/zGT+OfyTibFAvL43e7tqyz/mZc=",
"directPath": "/v/t62.7161-24/32393661_274308811263331_7762483138857871527_n.enc?ccb=11-4&oh=2bf5aef065459132452a1c5412065065&oe=619A351B",
"mediaKeyTimestamp": "1634991419",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACkASAMBIgACEQEDEQH/xAAtAAADAQEBAAAAAAAAAAAAAAACAwQAAQUBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAAu0NKOKXlPZOss5OcMycsNYCNmcR5tlIqp6+QeXrO9xZvOkRK13KSZ4DFo//EACcQAAICAQMDAgcAAAAAAAAAAAECAAMREiExBCJBEBMUIzJCUVJx/9oACAEBAAE/AFrRRgCPhRAazwZhYXrDhPMwsws7IQAYnVWMxEVy9IY8wjSFcA5/EW+wkjSZfUwspsHjmfE2a8YMF76gMGEstoHM6i162GJX2MSQeIh+QDLLQtKmJd3HY7mWX3Nf9xGeIbdLAsN4t6F1BB5lt1YvRfJnWOiYJmeRNJYfUZpB53hAIxFrUJkAehxiaYE333/sFawIs9sTQI7styIODzMjjSYNX6wCYniLz6CECGCeTPIn/8QAHxEAAgAFBQAAAAAAAAAAAAAAAAECEBIiQREgQlFS/9oACAECAQE/AL1kvfI0j7L/AEKt5G2yocUk2t3/xAAbEQACAwADAAAAAAAAAAAAAAAAIgERURIgQf/aAAgBAwEBPwBZ8FwXBcFwiKOJUFFdv//Z",
"gifAttribution": "NONE"
}
},{quoted: rep, contextInfo:{"forwardingScore":999,"isForwarded":true, "mentionedJid":[user,sender]}})
iqbl.relayWAMessage(res)
break
case 'sc':
reply('Bot ini menggunakan sc : https://github.com/Hexagonz/SELF-HX')
break
case 'sewabot':
reply('Silahkan Pc Owner https://wa.me/6281333782061')
break
case 'public': case 'publik':
if (!bal.key.fromMe) return
isPublic = true
reply('Sukses')
break
case 'self': case 'sel':
if (!bal.key.fromMe) return
isPublic = false
reply('Sukses')
break
case 'setcmd':
if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = bal.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
reply("Done")
break
case 'delcmd':
var kodenya = bal.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Done")
break
case 'listcmd':
let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*•> ID :* ${i.id}\n*•> Cmd :* ${i.chats}`
}
reply(teksnyee)
break
case 'mp4':
var id = m.chat
reply(msg.wait)
iqbl.plays = iqbl.plays ? iqbl.plays : {}
if (!(id in iqbl.plays)) return reply(`Hanya bisa mendownload satu tipe!!`)
playesnye = iqbl.plays[id][0]
ytsnya = await yts(playesnye);
res = ytsnya.all;
anu = await ytv(res[0].url)
buf = await getBuffer(anu[0].video)
buftum = await getBuffer(anu[0].thumb)
sendFakeLink(from, buf, video, "Youtube Play🎧", anu[0].title, buftum, bal)
delete iqbl.plays[id]
break
case 'mp3':
var id = m.chat
reply(msg.wait)
iqbl.plays = iqbl.plays ? iqbl.plays : {}
if (!(id in iqbl.plays)) return reply(`Hanya bisa mendownload satu tipe!!`)
playesnye = iqbl.plays[id][0]
ytsnya = await yts(playesnye);
res = ytsnya.all;
anu = await yta(res[0].url)
buf = await getBuffer(anu[0].audio)
buftum = await getBuffer(anu[0].thumb)
sendFakeLink(from, buf, audio, "YOUTUBE PLAY 🎧", anu[0].title, buftum, bal)
delete iqbl.plays[id]
break
case 'ptt':
var id = m.chat
reply(msg.wait)
iqbl.plays = iqbl.plays ? iqbl.plays : {}
if (!(id in iqbl.plays)) return reply(`Hanya bisa mendownload satu tipe!!`)
playesnye = iqbl.plays[id][0]
ytsnya = await yts(playesnye);
res = ytsnya.all;
anu = await yta(res[0].url)
buf = await getBuffer(anu[0].audio)
buftum = await getBuffer(anu[0].thumb)
sendFakeLink(from, buf, audio, "Youtube Play🎧", anu[0].title, buftum, bal, true)
delete iqbl.plays[id]
break
case 'ttmp4':
var id = m.chat
reply(msg.wait)
iqbl.plays = iqbl.plays ? iqbl.plays : {}
if (!(id in iqbl.plays)) return reply(`Hanya bisa mendownload satu tipe!!`)
playesnye = iqbl.plays[id][0]
anu = await tiktok(playesnye)
anu1 = await tiktokmusic(playesnye)
buf = await getBuffer(anu.result.nowm)
buftum = await getBuffer(anu1.meta.video.cover)
sendFakeLink(from, buf, video, "Tiktok Downloader 🎧", create, buftum, bal)
delete iqbl.plays[id]
break
case 'ttmp3':
var id = m.chat
reply(msg.wait)
iqbl.plays = iqbl.plays ? iqbl.plays : {}
if (!(id in iqbl.plays)) return reply(`Hanya bisa mendownload satu tipe!!`)
playesnye = iqbl.plays[id][0]
anu = await tiktokmusic(playesnye)
buf = await getBuffer(anu.meta.music.playUrl)
buftum = await getBuffer(anu.meta.video.cover)
sendFakeLink(from, buf, audio, "Tiktok Downloader 🎧", create, buftum, bal)
delete iqbl.plays[id]
break
case 'ttptt':
var id = m.chat
reply(msg.wait)
iqbl.plays = iqbl.plays? iqbl.plays : {}
if (!(id in iqbl.plays)) return reply(`Hanya bisa mendownload satu tipe!!`)
playesnye = iqbl.plays[id][0]
anu = await tiktokmusic(playesnye)
buf = await getBuffer(anu.meta.music.playUrl)
buftum = await getBuffer(anu.meta.video.cover)
sendFakeLink(from, buf, audio, "Tiktok Downloader 🎧", create, buftum, bal, true)
delete iqbl.plays[id]
break
case 'play': case 'ytplay':
var id = m.chat
iqbl.plays = iqbl.plays ? iqbl.plays : {}
if (m.quoted && m.quoted.text) {
var p = m.quoted.text
ytsnya = await yts(p);
res = ytsnya.all;
anu = await yta(res[0].url)
vid = await ytv(res[0].url)
tum = await getBuffer(anu[0].thumb)
iqbl.plays[id] = [p]
sort = await axios.get(`https://tinyurl.com/api-create.php?url=${anu[0].audio}`)
sort2 = await axios.get(`https://tinyurl.com/api-create.php?url=${vid[0].video}`)
capt = `_${u[1]} YOUTUBE PLAY_

🌹 Judul : ${anu[0].title}
🌹 Size Audio : ${anu[0].filesize}
🌹 Size Video : ${vid[0].filesize}
🌹 Audio : ${sort.data}
🌹 Video : ${sort2.data}`
buttonsply = [
{buttonId: 'mp4', buttonText: {displayText: `🎥 Video ${vid[0].filesize}`}, type: 1},
{buttonId: 'mp3', buttonText: {displayText: `🎵 Audio ${anu[0].filesize}`}, type: 1},
]
sendButImage(from, capt,'Silahkan Pilih Type Berikut\nCreated By @mhmdfjralfarizi_', tum, buttonsply, {quoted: bal, thumbnail:foto, contextInfo:{"externalAdReply":{"title": `${anu[0].title}`, "previewType": "VIDEO", mediaType: 2, "thumbnailUrl": `${anu[0].thumb}`,"mediaUrl": `${res[0].url}`}}})
} else {
if (!q) return reply('Silahkan Masukan Link yt/Query' +prefix+command)
ytsnya = await yts(q);
res = ytsnya.all;
anu = await yta(res[0].url)
vid = await ytv(res[0].url)
tum = await getBuffer(anu[0].thumb)
iqbl.plays[id] = [q]
sort = await axios.get(`https://tinyurl.com/api-create.php?url=${anu[0].audio}`)
sort2 = await axios.get(`https://tinyurl.com/api-create.php?url=${vid[0].video}`)
capt = `_${u[1]} YOUTUBE PLAY_
🌹 Judul : ${anu[0].title}
🌹 Size Audio : ${anu[0].filesize}
🌹 Size Video : ${vid[0].filesize}
🌹 Audio : ${sort.data}
🌹 Video : ${sort2.data}`
buttonsply = [
{buttonId: 'mp4', buttonText: {displayText: `🎥 Video ${vid[0].filesize}`}, type: 1},
{buttonId: 'mp3', buttonText: {displayText: `🎵 Audio ${anu[0].filesize}`}, type: 1},
]
sendButImage(from, capt,'Silahkan Pilih Type Berikut\nCreated By @mhmdfjralfarizi_', tum, buttonsply, {quoted: bal, thumbnail:foto, contextInfo:{"externalAdReply":{"title": `${anu[0].title}`, "previewType": "VIDEO", mediaType: 2, "thumbnailUrl": `${anu[0].thumb}`,"mediaUrl": `${res[0].url}`}}})
}
break
case 'tiktokdown': case 'ttmp4': case 'tiktok': case 'tiktoknowm': case 'tiktokdl':
var id = m.chat
iqbl.plays = iqbl.plays ? iqbl.plays : {}
buttonstt = [
{buttonId: 'ttmp4', buttonText: {displayText: 'MP4'}, type: 1},
{buttonId: 'ttmp3', buttonText: {displayText: 'MP3'}, type: 1},
]
if (m.quoted && m.quoted.text && isUrl) {
var p = m.quoted.text
mc = await tiktokmusic(p)
vd = await tiktok(p)
tum = await getBuffer(mc.meta.video.cover)
iqbl.plays[id] = [p]
sort = await axios.get(`https://tinyurl.com/api-create.php?url=${vd.result.nowm}`)
sort2 = await axios.get(`https://tinyurl.com/api-create.php?url=${mc.meta.music.playUrl}`)
capt = `_${u[1]} TIKTOK DOWNLOADER_

🌹 Desc : ${mc.meta.desc}
🌹 Durasi : ${mc.meta.video.duration}
🌹 Author : ${mc.meta.author.nickname}
🌹 Audio : ${sort2.data}
🌹 Video : ${sort.data}`
sendButImage(from, capt,'Silahkan Pilih Type Berikut\nCreated By @mhmdfjralfarizi_', tum, buttonstt, {quoted: bal, thumbnail:foto})
} else {
if (!q) return reply('Silahkan Masukan' +prefix+command+ 'Url')
mc = await tiktokmusic(q)
vd = await tiktok(q)
tum = await getBuffer(mc.meta.video.cover)
iqbl.plays[id] = [q]
sort = await axios.get(`https://tinyurl.com/api-create.php?url=${vd.result.nowm}`)
sort2 = await axios.get(`https://tinyurl.com/api-create.php?url=${mc.meta.music.playUrl}`)
capt = `_${u[1]} TIKTOK DOWNLOADER_

🌹 Desc : ${mc.meta.desc}
🌹 Durasi : ${mc.meta.video.duration}
🌹 Author : ${mc.meta.author.nickname}
🌹 Audio : ${sort.data}
🌹 Video : ${sort2.data}`
sendButImage(from, capt,'Silahkan Pilih Type Berikut\nCreated By @mhmdfjralfarizi_', tum, buttonstt, {quoted: bal, thumbnail:foto})
}
break
case 'inspect':
let linkRegex = /chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
let [, code] = q.match(linkRegex) || []
if (!code) throw 'Link Invailid'
res = await iqbl.query({json: ["query", "invite", code],
expect200: true})
Json(res)
break
case 'kick':
if (!m.quoted) return reply('Reply Chatnya')
anu = await iqbl.groupRemove(from, [m.quoted.sender])
Json(anu)
break
case 'add':
if (!m.quoted) return reply('Reply Chatnya')
anu = await iqbl.groupAdd(from, [m.quoted.sender])
Json(anu)
break
case 'demote':
if (!m.quoted) return reply('Reply Chatnya')
anu = await iqbl.groupDemoteAdmin(from, [m.quoted.sender])
Json(anu)
break
case 'promote':
if (!m.quoted) return reply('Reply Chatnya')
anu = await iqbl.groupMakeAdmin(from, [m.quoted.sender])
Json(anu)
break
case 'kodepos':
anu = await kodepos(q)
Json(anu)
break
case 'ghstalk': case 'githubstalk': case 'gitstalk': 
Json(await ghstalk(q))
break
case 'igstalk':
Json(await igstalk(q))
break
case 'gempa':
Json(await gempa(q))
break
case 'asmaul':
iqbl.reply(m.chat, Object.entries(await asmaul(q)).map(([latin, arabic, translation_id, translation_en]) => `_${latin}_\n_${arabic}_\n_${translation_id}_\n_${translation_en}_`).join`\n\n`, bal)
break
case 'styletext': case 'textstyle':
iqbl.reply(m.chat, Object.entries(await styleText(q)).map(([name, value]) => `_${name}_ : ${value}`).join`\n\n`, bal)
break
case 'pinterest':
if (!q) return reply('yg mau di cari apa?')
pinterest(`${q}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest, `Pinterest : ${q}`)
})
break
case 'lirik':
if (args.length < 1) return reply('Judulnya?')
reply(msg.wait)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
case 'creategrup': case 'creategroup': case 'createg':
if (!bal.key.fromMe) return
argz = args[0].split('|')
if (bal.message.extendedTextMessage != undefined){
mentioned = bal.message.extendedTextMessage.contextInfo.mentionedJid
anu = iqbl.groupCreate(argz[0], mentioned)
Json(anu)
reply(from, `Penggunaan ${prefix}creategrup namagrup|@tag`)
}
break
case 'linkgc':
if (!isGroup && isBadmin) return reply(msg.group)
linkgc = await iqbl.groupInviteCode(from)
reply(`https://chat.whatsapp.com/${linkgc}`)
break
case 'stats':
var groups = iqbl.chats.array.filter(v => v.jid.endsWith('g.us'))
var privat = iqbl.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
uptime = process.uptime();
timestamp = speed();
totalChat = await iqbl.chats.all()
latensi = speed() - timestamp
teks = `${u[3]} _Bot Stats_
🌹Group Chats : ${groups.length}
🌹Private Chats : ${privat.length}
🌹Total Chats : ${totalChat.length}
🌹Speed : ${latensi.toFixed(4)} ms
🌹Runtime : ${kyun(uptime)}
🌹Public : ${isPublic}

🤖 _Phone Stats_
🌹Baterai : ${baterai}
🌹Penggunaan Ram : ${ram2}
🌹Platform : ${os.platform()}
🌹Hostname : ${os.hostname()}
🌹Uptime : ${kyun(os.uptime())}
🌹Wa Version: ${iqbl.user.phone.wa_version}
🌹Os Version: ${iqbl.user.phone.os_version}
🌹Device Model: ${iqbl.user.phone.device_model}`
reply(teks)
break
case 'suit':
if (args.length < 1) return reply('Pilih gunting/batu/kertas')
if (args[0] === 'gunting' ) {
gunting = [
"Kamu *Gunting*\nBot *Kertas*\nKamu Menang 😔",
"Kamu *Gunting*\nBot *Batu*\nKamu Kalah 🙂",
"Kamu *Gunting*\nBot *Gunting*\nKita Seri 😏"
]
gun = gunting[Math.floor(Math.random() * gunting.length)]
reply(gun)
} else if (args[0] === 'kertas') {
ker = [
"Kamu *Kertas*\nBot *Batu*\nKamu Menang 😔",
"Kamu *Kertas*\nBot *Gunting*\nKamu Kalah 🙂",
"Kamu *Kertas*\nBot *Kertas*\nKita Seri 😏"
]
kertas = ker[Math.floor(Math.random() * ker.length)]
reply(kertas)
} else if (args[0] === 'batu') {
bat = [
"Kamu *Batu*\nBot *Gunting*\nKamu Menang 😔",
"Kamu *Batu*\nBot *Kertas*\nKamu Kalah 🙂",
"Kamu *Batu*\nBot *Batu*\nKita Seri 😏"
]
batu = bat[Math.floor(Math.random() * bat.length)]
reply(batu)
} else {
reply('Pilih gunting/batu/kertas')
}
break
case 'owner':
ownerNumberee = ["6281333782061@s.whatsapp.net"]
let ini_list = []
for (let as of ownerNumberee) {
const vname = iqbl.contacts[as] != undefined ? iqbl.contacts[as].vname || iqbl.contacts[as].notify : undefined
ini_list.push({
"displayName": '1',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖;;;\nFN:${vname ? `${vname}` : `${iqbl.user.name}`}\nitem1.TEL;waid=6281333782061:6281333782061\nitem1.X-ABLabel:Owner Karina\nitem2.TEL;waid=62813159956288:62813159956288\nitem2.X-ABLabel:Karina\nitem3.EMAIL;type=INTERNET: meguminbot12@gmail.com\nitem3.X-ABLabel:Email\nEND:VCARD`
})
}
hehe = await iqbl.sendMessage(from, {
"displayName": `1`,
"contacts": ini_list
}, 'contactsArrayMessage', { quoted: bal })
butkon = [
{buttonId: 'sewabot', buttonText: {displayText: '📒 SEWA BOT'}, type: 1},
{buttonId: 'sc', buttonText: {displayText: '📄 SCRIPT BOT'}, type: 1},
]
buttonse = {
contentText: 'Nih Kak Owner ku ><',
footerText: `Created By 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖`,
buttons: butkon,
headerType: 1
}
await iqbl.sendMessage(from, buttonse, MessageType.buttonsMessage, {quoted: hehe})
break
case 'isbaileys': 
case 'bail': 
case 'baileys':
reply(`${bal.quoted.isBaileys}`)
break
case 'jadibot':
if(bal.key.fromMe) return reply('Tidak bisa jadibot di dalam bot')
jadibot(reply,iqbl,from)
break
case 'stopjadibot':
if(bal.key.fromMe)return reply('tidak bisa stopjadibot kecuali owner')
stopjadibot(reply)
break
case 'listbot':
let tekss = '「 *LIST JADIBOT* 」\n'
for(let i of listjadibot) {
tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
}
reply(tekss)
break
case 'setfoto':
if (!bal.key.fromMe) return
encmedia = JSON.parse(JSON.stringify(bal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await iqbl.downloadMediaMessage(encmedia)
fs.unlinkSync(`./media/BaseIqbalzz.jpg`)
fs.writeFileSync(`./media/BaseIqbalzz.jpg`, media)
reply('Sukses Mengganti Thumbnail')
break
case 'setthumb':
if (!bal.key.fromMe) return
encmedia = JSON.parse(JSON.stringify(bal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await iqbl.downloadMediaMessage(encmedia)
fs.unlinkSync(`./media/BaseIqbalzz.jpg`)
fs.writeFileSync(`./media/BaseIqbalzz`, media)
reply('Sukses Mengganti Thumbnail')
break
case 'group': case 'grup': case 'gc':
if (args[0] === 'buka') {
anu = await iqbl.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'tutup') {
anu = await iqbl.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
Json(anu)
break           
case 'revoke':
case 'resetlinkgc':
case 'resetlink':
if (!isGroup) return reply("Khusus di grup");
anu = await iqbl.revokeInvite(from)
Json(anu)
break
case 'repeat':       
var bee_imut = `${args.join(' ')}`
var kata = bee_imut.split("|")[0];
var angka = bee_imut.split("|")[1]
let meme = `${kata}`.repeat(angka)
iqbl.sendMessage(from, meme, MessageType.text, { quoted: floc })
break
case 'repeat2':
var Iqbalzz = `${args.join(' ')}`
var Emoji = Iqbalzz.split("|")[0];
let Karina = `${Emoji}`.repeat(99999)
iqbl.sendMessage(from, Karina, MessageType.text, { quoted: floc })
break
case 'herolist':
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
case 'spamsw':
if (!bal.key.fromMe) return reply('Khusus Owner')
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
argzi = arg.split("|")
if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
if (isNaN(argzi[1])) return reply(`harus berupa angka`)
for (let i = 0; i < argzi[1]; i++){
iqbl.sendMessage('status@broadcast', argzi[0], MessageType.text)
}
break	
case 'tinyurl':
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break
case 'neko':
case 'waifu':
case 'megumin':
case 'shinobu':
case 'cuddle':
case 'cry':
case 'bully':
case 'hug':
case 'kiss':
case 'yeet':
case 'bonk':
case 'smug':
case 'pat':
case 'lick':
reply(msg.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/${command}`)
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(anu.url))
buttons = [{buttonId: `${command}`,buttonText:{displayText: '➡️ Next'},type:1},{buttonId: 'allmenu',buttonText:{displayText: 'Back To Menu'},type:1}]
imageMsg = ( await iqbl.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'Created By 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖`', imageMessage: imageMsg,
contentText:`Hai ${pushname} Silahkan Pilih`,buttons,headerType:4}
prep = await iqbl.prepareMessageFromContent(from,{buttonsMessage},{quoted: bal, contextInfo:{"externalAdReply": {"title": create, "previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/6b0259fd741e108910fbe.jpg`}}})
iqbl.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break
case 'loli':
case 'husbu':
case 'milf':
case 'cosplay':
case 'wallml':
reply(msg.wait)
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
buttons = [{buttonId: `${command}`,buttonText:{displayText: '➡️ Next'},type:1},{buttonId: 'allmenu',buttonText:{displayText: 'Back To Menu'},type:1}]
imageMsg = ( await iqbl.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'Created By 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖`', imageMessage: imageMsg,
contentText:`Hai ${pushname} Silahkan Pilih`,buttons,headerType:4}
prep = await iqbl.prepareMessageFromContent(from,{buttonsMessage},{quoted: bal, contextInfo:{"externalAdReply": {"title": create, "previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/6b0259fd741e108910fbe.jpg`}}})
iqbl.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break
case 'addrespon':{
if (!bal.key.fromMe) return reply('Khusus Owner')
if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
let input1 = body.slice(11)
if (!input1.includes('|')) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
let input = input1.split("|")
if (checkCommands(input[0], commandsDB) === true) return reply(`Command tersebut sudah ada`)
addCommands(input[0], input[1], sender, commandsDB) 
reply(`Key : ${input[0]}\nRespon : ${input[1]}\n\nRespon berhasil di set`)
}
break
case 'dellrespon':
case 'delrespon':{
if (!bal.key.fromMe) return reply('Khusus Owner')
if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon key\n\nContoh : ${prefix}delrespon hai`)
if (!checkCommands(body.slice(11), commandsDB)) return reply(`Key tersebut tidak ada di database`)
deleteCommands(body.slice(11), commandsDB)
reply(`Berhasil menghapus respon dengan key ${body.slice(11)}`)
}
break
case 'listrespon':{
let txt = `List Respon\nTotal : ${commandsDB.length}\n\n`
for (let i = 0; i < commandsDB.length; i++){
txt += `❏ Key : ${commandsDB[i].pesan}\n`
}
reply(txt)
}
break
case 'fetch':
if(!q) return reply('link?')
axios(q).then(bu =>{
Json(bu.data)
}) 
break
case 'once': 
try{
if (!isQuotedImage)return reply('Reply image')
const viewonce = isQuotedImage ? JSON.parse(JSON.stringify(bal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : bal
oneclick = await iqbl.downloadMediaMessage(viewonce)
iqbl.sendMessage(from, oneclick, image,{quoted:bal ,viewOnce : true}) 
} catch {
reply('Reply Image')
}
break
case 'oncee':
res = await iqbl.prepareMessageFromContent(from,{
"viewOnceMessage": {
"message": {
"imageMessage": {
"mimetype": 'image/jpeg',
"jpegThumbnail": thumb,
"viewOnce": true
}
}
}
}, {}) 
iqbl.relayWAMessage(res)
break
case 'setprefix':
if (!bal.key.fromMe) return reply('Khusus Owner')
if (args.length < 1) return reply(`Masukkan prefix\nOptions :\n=> multi\n=> nopref`)
if (q === 'multi'){
multi = true
reply(`Berhasil mengubah prefix ke ${q}`)
} else if (q === 'nopref'){
multi = false
nopref = true
reply(`Berhasil mengubah prefix ke ${q}`)
} else {
multi = false
nopref = false
reply(`Berhasil mengubah prefix ke ${q}`)
}
break
case 'setprefix2':
if (!bal.key.fromMe) return reply('Khusus Owner')
if(!q)return
multi = false
single = true
nopref = false
prefa = `${q}`
reply(`Berhasil mengubah prefix ke ${q}`)
break
case 'runtime':
run = process.uptime() 
teks = `${kyun(run)}`
freply(teks)
break
case 'ping':
speedz(iqbl, reply)
break
case 'speed':
const timestampp = speed();
const latensiii = speed() - timestampp
exec(`neofetch --stdout`, (error, stdout, stderr) => {
const child = stdout.toString('utf-8')
const teks = child.replace(/Memory:/, "Ram:")
const pingnya = `*${teks}Speed: ${latensiii.toFixed(4)} Second*`
freply(pingnya)
})
break  
case 'tag':
noes = `${args[0]}@s.whatsapp.net`
beks = `@${noes.split("@")[0]}`
iqbl.sendMessage(from, beks, text, {quoted:bal, contextInfo:{mentionedJid:[noes]}})                
break
case 'attp':
if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖`)
atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
iqbl.sendMessage(from, atetepe, sticker, { quoted: bal })
break
case 'attp2':{
if (!q) return reply(`Teks Nya Mana Kak?`)
let Karina = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
fs.writeFileSync('./sticker/attp.webp', Karina)
exec(`webpmux -set exif ./sticker/data.exif ./sticker/attp.webp -o ./sticker/attp.webp`, async (error) => {
if (error) return reply('Error!')
iqbl.sendMessage(from, fs.readFileSync(`./sticker/attp.webp`), sticker, {quoted: bal})
fs.unlinkSync(`./sticker/attp.webp`)
})
}
break
case 'unpin':
if (!bal.key.fromMe) return reply('Lu siapa?')
iqbl.modifyChat(from, ChatModification.unpin)
reply('*succes unpin this chat*')
console.log('unpin chat = ' + from)
break   
case 'pin':
if (!bal.key.fromMe) return reply('Lu siapa?')
iqbl.modifyChat(from, ChatModification.pin)
reply('*succes pin this chat*')
console.log('pinned chat = ' + from)
break
case 'culik':
if (!bal.key.fromMe) return reply('Owner bukan?')
if (args.length < 1) return reply('Masukin id grupnya')
let pantek = []
for (let i of groupMembers) {
pantek.push(i.jid)
}
iqbl.groupAdd(args[0], pantek)
break
case 'demoteall':
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
iqbl.groupDemoteAdmin(from, members_id)
break
case 'promoteall':
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
iqbl.groupMakeAdmin(from, members_id)
break
case 'kickall': // Anti Banned
if (!bal.key.fromMe) return reply('Lu siapa?')
for (let i of groupMembers) {
await kickMember(from, [i.jid])
}
break
case 'kudet':
if (!bal.key.fromMe) return reply('Lu siapa?')
for (let i of groupMembers) {
anu = i.jid
if (anu === user) {
}
iqbl.groupRemove(from, [anu])
}
break
case 'balik':
encmediau = JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediau = await iqbl.downloadAndSaveMediaMessage(encmediau)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
iqbl.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:bal})
fs.unlinkSync(ran)
})
break
case 'bass':                 
encmediao = JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediao = await iqbl.downloadAndSaveMediaMessage(encmediao)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediao)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)	
iqbl.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:bal})
fs.unlinkSync(ran)
})
break
case 'detikvn':
encmediam = JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediam = await iqbl.downloadAndSaveMediaMessage(encmediam)
cokmatane = Number(args[0])
hah = fs.readFileSync(mediam)
iqbl.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:bal})
fs.unlinkSync(mediam)
break
case 'detikvideo':
encmedian = JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo
median = await iqbl.downloadAndSaveMediaMessage(encmedian)
cokmatane = Number(args[0])
hah = fs.readFileSync(median)
iqbl.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: bal})
fs.unlinkSync(median)
break
case 'hackvn':
encmediam = JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediam = await iqbl.downloadAndSaveMediaMessage(encmediam)
hah = fs.readFileSync(mediam)
iqbl.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true, quoted:bal})
fs.unlinkSync(mediam)
break
case 'hackvideo':
encmedian = JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo
median = await iqbl.downloadAndSaveMediaMessage(encmedian)
hah = fs.readFileSync(median)
iqbl.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: 359996400, quoted: bal})
fs.unlinkSync(median)
break
case 'bug': //By Ferrz
if (!bal.key.fromMe) return reply('Khusus Owner')
if (args.length < 1) return reply('Jumlahnya?') 
for (let i = 0; i < args[0]; i++) {
iqbl.relayWAMessage(global.mm=iqbl.
prepareMessageFromContent(from, iqbl.
prepareDisappearingMessageSettingContent(0),
{}),{waitForAck:!0})
}
break
case 'sendbug':
if (!bal.key.fromMe) return reply('Khusus Owner')
iqbl.relayWAMessage(global.mm=iqbl.
prepareMessageFromContent(`${body.slice(9)}`, iqbl.
prepareDisappearingMessageSettingContent(0),
{}),{waitForAck:!0})
break
case "autojoin":
if (!isGroup) return reply("Khusus di grup");
if (!bal.key.fromMe) return reply("Khusus owner");
if (args[0] == "on") {
if (autojoin == true) return reply("Sudah aktif!!");
autojoin = true;
reply("Sukses mengaktifkan autojoin!");
} else if (args[0] == "off") {
autojoin = false;
reply("Sukses mematikan autojoin!");
} else if (!q) {
sendButMessage(from, `Mode Auto Join`, `Silahkan pilih salah satu`, [
{
buttonId: `autojoin on`,
buttonText: {
displayText: `on`,
},
type: 1,
},
{
buttonId: `autojoin off`,
buttonText: {
displayText: `off`,
},
type: 1,
},
]);
}
break
case 'online':
case 'on':
if (!bal.key.fromMe) return reply('Khusus Owner')
offline = false
reply(' ```ANDA TELAH ONLINE``` ')
break
case 'offline':
case 'off':
if (!bal.key.fromMe) return reply('Khusus Owner')
offline = true
waktuafk = Date.now()
anuu = q ? q : '-'
alasanafk = anuu
reply(' ```ANDA TELAH OFFLINE``` ')
break
case 'debug':
res = await iqbl.prepareMessageFromContent(from,{
"templateMessage": {
"hydratedFourRowTemplate": {
"hydratedContentText": "Hi MyMans APIs 👋,\n\nThank you for your message.\n\nHow can I help you today?",
"hydratedFooterText": "WATI's Chatbot",
"hydratedButtons": [
{
"quickReplyButton": {
"displayText": "Know the Pricing",
"id": "60dd75b0081979507a679f99"
},
"index": 0
},
{
"quickReplyButton": {
"displayText": "Know how WATI works?",
"id": "60dd75b0081979507a679f99"
},
"index": 1
},
{
"quickReplyButton": {
"displayText": "Get Started",
"id": "60dd75b0081979507a679f99"
},
"index": 2
}
]
},
"hydratedTemplate": {
"hydratedContentText": "Hi 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖",
"hydratedFooterText": "Selamat Datang",
"hydratedButtons": [
{
"quickReplyButton": {
"displayText": "Debug",
"id": "60dd75b0081979507a679f99"
},
"index": 0
},
{
"quickReplyButton": {
"displayText": "By",
"id": "60dd75b0081979507a679f99"
},
"index": 1
},
{
"quickReplyButton": {
"displayText": "𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖",
"id": "60dd75b0081979507a679f99"
},
"index": 2
}
]
}
}
}, {quoted:bal})
iqbl.relayWAMessage(res)
break
case 'debug2':
 res = await iqbl.prepareMessageFromContent(from,{
"templateMessage": {
"hydratedFourRowTemplate": {
"hydratedContentText": "Hello,\nSelamat Datang 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖",
"hydratedFooterText": "Debug By 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖",
"hydratedButtons": [
{
"urlButton": {
"displayText": "Join Group Whatsapp 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖",
"url": "https://chat.whatsapp.com/HQ12TzXxI9k8zz3llLyGTN"
},
"index": 0
}
]
},
"hydratedTemplate": {
"hydratedContentText": "Hello,\nSelamat Datang 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖",
"hydratedFooterText": "Debug By 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖",
"hydratedButtons": [
{
"urlButton": {
"displayText": "Join Group Whatsapp 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖",
"url": "https://chat.whatsapp.com/HQ12TzXxI9k8zz3llLyGTN"
},
"index": 0
}
]
}
}
}, {quoted:bal})
iqbl.relayWAMessage(res)
break
case 'bc':   
if (!bal.key.fromMe) return reply('Khusus Owner')
if (args.length < 1) return reply('teks?')
anu100 = await iqbl.chats.all()
if (isMedia && !iqbl.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo : bal
bc100 = await iqbl.downloadMediaMessage(encmedia)
for (let _ of anu100) {
iqbl.sendMessage(_.jid, bc100, image, {quoted: ftroli, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
reply('Suksess broadcast')
} else {
for (let _ of anu100) {
iqbl.sendMessage(_.jid, 
{contentText: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`,
footerText: 'Created By 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖',
buttons: [
{buttonId: `!menu`, buttonText: {displayText: '📒 MENU'},type: 1},
{buttonId: `!owner`, buttonText: {displayText: '👤 OWNER'},type: 1},
{buttonId: `!sc`, buttonText: {displayText: '📄 SCRIPT'},type: 1},
], 
"headerType": 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: thumb, }}, MessageType.buttonsMessage )
}
reply('Suksess broadcast')
}
break
case 'bcgc': //Jangan Sering² 
if (args.length < 1) return reply('pesannya mana?')
anu = await groupMembers
nom = anu.participant
if (isMedia && !bal.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo : bal
Karina = await iqbl.downloadMediaMessage(encmedia)
for (let _ of anu) {
iqbl.sendMessage(_.jid, Karina, image, {caption: `「 Broadcast Group 」\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
}
reply('Sukses broadcast group')
} else {
for (let _ of anu) {
iqbl.sendMessage(_.jid, 
{contentText: `「 Broadcast Group 」\n\nDari Group : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`,
footerText: 'Created By 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖',
buttons: [
{buttonId: `!menu`, buttonText: {displayText: '?? MENU'},type: 1},
{buttonId: `!owner`, buttonText: {displayText: '👤 OWNER'},type: 1},
{buttonId: `!sc`, buttonText: {displayText: '📄 SCRIPT'},type: 1},
], 
"headerType": 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: thumb, }}, MessageType.buttonsMessage )
}
reply('Sukses broadcast group')
}
break
case 'volume':
if (!isQuotedAudio) return reply(`Reply audionya`)
encmedia = JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await iqbl.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "volume=${args[0]}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
iqbl.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: true, quoted: bal})
fs.unlinkSync(ran)
})
break 
case 'tovn': case 'getvn':
if (!isQuotedAudio && !isQuotedVideo) return reply('Tag audio/vn/video nya!')
encmedia = JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await iqbl.downloadAndSaveMediaMessage(encmedia)
hah = fs.readFileSync(media)
iqbl.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true,quoted : bal})
fs.unlinkSync(media)
break
case "colongsw": //arif
if (!bal.key.fromMe) return
if ((isMedia && !bal.message.videoMessage) || isQuotedImage) { ger = isQuotedImage ? JSON.parse(JSON.stringify(bal).replace("quotedM", "m")).message.extendedTextMessage.contextInfo: bal
owgi = await iqbl.downloadAndSaveMediaMessage(ger);
iqbl.sendMessage(sender, fs.readFileSync(owgi), "imageMessage", {
caption: q,
});
reply("Sukses");
fs.unlinkSync(owgi);
} else if ((isMedia && !bal.message.videoMessage) || isQuotedVideo) { ger = isQuotedVideo ? JSON.parse(JSON.stringify(bal).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : bal
owgi = await iqbl.downloadAndSaveMediaMessage(ger);
iqbl.sendMessage(sender, fs.readFileSync(owgi), "videoMessage", {caption: q,
});
reply("Sukses");
fs.unlinkSync(owgi);
} else {
reply("Reply sw foto / video yg mau dicolong");
}
break;
case 'gabut':
let remsult = await iqbl.prepareMessageFromContent(from, 
{"listMessage": {
"title": "Karina",
"description": "Created By Karina",
"listType": "PRODUCT_LIST",
"productListInfo": {
"productSections": [
{
"title": "",
"products": [
{
"productId": "2763624180428432"
},
{
"productId": "4284494008265445"
}
]
}
],
"headerImage": {
"productId": "2763624180428432",
"jpegThumbnail": foto
},
businessOwnerJid: iqbl.user.jid
},
buttonText: "𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖",
footerText: 'Created By 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖'
}
}, { quoted: bal, contextInfo: {}})
iqbl.relayWAMessage(remsult)
break
case 'sticker': 
case 'stiker':
case 'sg':
case 's':
if ((isMedia && !bal.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(bal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : bal
const media = await iqbl.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
iqbl.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: bal})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && bal.message.videoMessage.seconds < 11 || isQuotedVideo && bal.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(bal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : bal
const media = await iqbl.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
console.log('Finish')
iqbl.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: bal})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
break         
case 'colong':
if (!isQuotedSticker) return reply('Stiker aja om')
encmedia = JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await iqbl.downloadAndSaveMediaMessage(encmedia)
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `Fajar Alfarizi`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `mhmdfjralfarizi_`
require('./lib/fetcher.js').createExif(satu, dua)
require('./lib/fetcher.js').modStick(media, iqbl, bal, from)
break
case 'take':
case 'takestick':
if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}take nama|author*`)
var encmedia = JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var media = await iqbl.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
let packname1 = q.split('|')[0] ? q.split('|')[0] : q
let author1 = q.split('|')[1] ? q.split('|')[1] : ''
v4 = await WSF.createSticker(fs.readFileSync(`./sticker/${sender}.webp`), { type: 'full',pack: packname1,author: author1,categories: ["ЁЯМ╣","ЁЯШО","ЁЯШЕ","ЁЯШН","ЁЯе░","ЁЯдб","ЁЯдг","ЁЯШЗ","ЁЯШб","ЁЯРд","ЁЯРг","ЁЯРе","ЁЯФе","тнР"]})
sendStickerFakeSize(v4)
fs.unlinkSync(media)	
break
case 'tospam':
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
for (let i = 0; i < oi2; i++) {
iqbl.sendMessage(from, `${oi1}`, MessageType.text)
}
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = bal.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
for (let i = 0; i < args[0]; i++) {
iqbl.sendMessage(from, teks, MessageType.text)
}
} else if (isQuotedSticker) {
encmedian = JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo
median = await iqbl.downloadAndSaveMediaMessage(encmedian)
anu = fs.readFileSync(median)
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
for (let i = 0; i < args[0]; i++) {
iqbl.sendMessage(from, anu, sticker)
}
} else if (isQuotedAudio) {
encmediat = JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediat = await iqbl.downloadAndSaveMediaMessage(encmediat)
anu = fs.readFileSync(mediat)
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
for (let i = 0; i < args[0]; i++) {
iqbl.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
}
} else if (isQuotedImage) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo : bal
delb = await iqbl.downloadMediaMessage(boij)
teks = body.slice(6)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
for (let i = 0; i < oi2; i++) {
iqbl.sendMessage(from, delb, MessageType.image, {caption: oi1})
}
}
break
case 'exif':{
if (!bal.key.fromMe) return reply('Lu siapa?')
const namaPack = q.split('|')[0] ? q.split('|')[0] : q
const authorPack = q.split('|')[1] ? q.split('|')[1] : ''
exif.create(namaPack, authorPack)
await reply('Done')
}
break
case 'getlink':
try{
if(!itsMe)return
if(!q)return reply('Command disertai ID Group!!')
linkgc2 = await iqbl.groupInviteCode(`${q}`)
reply('https://chat.whatsapp.com/'+linkgc2)
} catch (e){
reply(`Error! Mungkin bot bukan admin di Group ID`)
console.log(e)
}
break
case 'resend':
pore = await iqbl.prepareMessageFromContent(from,bal.message.extendedTextMessage.contextInfo.quotedMessage, {})
iqbl.relayWAMessage(pore)
break
case 'addprem':
if (!itsMe && !isOwner)return reply(mess.only.ownerB)
if (!q)return reply(`Format Error!\n\nExample :\n• ${prefix + command} @tag 10d\n\nNote :\n• s : detik\n• m : menit\n• h : jam\n• d : hari\n\n ${fake}`)
expired = q.split(" ")[1]
const pnom = {id: `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`,expired: Date.now() + toMs(expired) }
premium.push(pnom) 
fs.writeFileSync('./database/premium.json',JSON.stringify(premium))
reply(msg.sukses)
break
case 'delprem':
if(!itsMe && !isOwner) return reply(mess.only.ownerB)
userp = q.split('@')[1] + '@s.whatsapp.net'
for(let i=0; i<premium.length; i++){
if(userp.includes(premium[i].id)){
let del = premium.indexOf(premium[i])
premium.splice(del, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
mentions(`Succes delete premium @${userp.split("@")[0]}`,[userp],true)
}
}
break
case 'listprem':
let txt = `── 「 LIST PREMIUM 」 ──\nTotal : ${premium.length}\n\n`
let men = [];
for (let i of premium){
men.push(i.id)
let cekvip = ms(i.expired - Date.now())
txt += `ID : @${i.id.split("@")[0]}\nExpired : ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
}
mentions(monospace(txt), men, true)
break
case 'cekprem': case 'cekpremium':
let cekprm = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
const prmm = isPremium ? `${cekprm.days} day ${cekprm.hours} hour ${cekprm.minutes} minute ${cekprm.seconds} second`:'Not Premium'
reply(`Nama : ${pushname}\nStatus : ${isPremium ? 'Premium':'Free'}\nStatus Bot : ${isOwner ? 'Owner':'User'}\nExpired : ${prmm}`)
break
case 'ytsearch': case 'yts':
if(!q) return reply(`Example : ${prefix + command} Melukis senja`)
reply(msg.wait)
try{
ysearch = await yts(q)
}catch(e){
return reply(mess.error)
}
p = 0
aramat = ysearch.all 
var tbuff = await getBuffer(aramat[0].image)
teks = `Y T  S E A R C H\nTotal : ${ysearch.all.length}\n\n`
for(let i of ysearch.all){
teks += `🌹No : ${p+=1}.\n🔖Title :` + i.title + '\n'
teks += `🔖Url :` + i.url + '\n'
teks += `🔖Durasi :` + i.timestamp + '\n'
teks += `🔖Upload:` + i.ago + '\n\n-----------------------------\n\n'
}
teks +=  `Ketik ${prefix}getmusic 1 atau angka selanjutnya untuk mengambil Music!\nKetik ${prefix}getvideo 1 atau angka selanjutnya untuk mengambil Video!`
iqbl.sendMessage(from, tbuff, image, {quoted:ftroli, caption: teks, contextInfo:{"externalAdReply":{"title": `${aramat[0].title}`, "body": `${aramat[0].description}`, mediaType: 2, "thumbnail": tbuff, "mediaUrl": `${aramat[0].url}`}}})
break
case 'getvideo':
try{
if(!q) return reply('Masukkan nomo urutnya!')
if(!m.quoted) return reply('Reply pesan hasil pencarian youtube!')
reply(msg.wait)
queee = 'Y T  S E A R C H'
qtekss = m.quoted.text
if(qtekss.includes(queee)){
jmlhh = m.quoted.text.split('Total : ')[1].split('\n')[0]
if(isNaN(args[0])) return reply('Input harus berupa nomor!')
if(args[0].text > jmlhh) return reply(`Hanya Tersedia ${jmlhh} Pilihan\nSilahkan coba pilih lagi dibawah angka ${jmlhh}`)
pilihh = JSON.stringify(await eval(`${args[0]}-1`), null, 2) 
downmm = await ytvv(m.quoted.text.split('-----------------------------')[pilihh].split('Url :')[1].split('\n')[0])
const { dl_link, thumb, title, filesizeF, filesize } = downm
if(Number(filesize) >= 30000){
short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
reply(`Ukuran file Terlalu besar!!\nSize : ${filesizeF}\nLink : ${short.data}\n\nSilahkan download Link diatas!!`)
}
tekss = `*P L A Y  V I D E O*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}`
bufff = await getBuffer(dl_link)
fakk = await getBuffer(thumb)
const ytmp4b = await iqbl.prepareMessage("0@s.whatsapp.net", fakk, MessageType.location,{ thumbnail: fakk})
const ytmp4c = ytmp4b.message["ephemeralMessage"] ? ytmp4b.message.ephemeralMessage : ytmp4b
ytmp4 = [{buttonId:`ytsearch ${q}`,buttonText:{displayText:'ytsearch'},type:1}]
ytmp42 = { contentText: `${tekss}`, footerText: `Created By 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖`, buttons: ytmp4, headerType: 6, locationMessage: ytmp4c.message.locationMessage}
iqbl.sendMessage(from, ytmp42, MessageType.buttonsMessage, { caption: 'fakk'})
iqbl.sendMessage(from, bufff, MessageType.video, {quoted: ftroli, "contextInfo": {mimetype: 'video/mp4', "forwardingScore": 1000000000, isForwarded: true, sendEphemeral: true}})
}
} catch(e) {
reply('Reply pesan Bot hasil pencarian youtube!')
console.log(e)
}
break
case 'getmusic':
try{
if(!m.quoted) return reply('Reply pesan Bot hasil pencarian youtube!')
if(!q) return reply('Masukkan nomo urutnya!')
reply(msg.wait)
quee = 'Y T  S E A R C H'
qteks = m.quoted.text
if(qteks.includes(quee)){
jmlh = m.quoted.text.split('Total : ')[1].split('\n')[0]
if(isNaN(args[0])) return reply('Input harus berupa nomor!')
if(args[0].text > jmlh) return reply(`Hanya Tersedia ${jmlh} Pilihan\nSilahkan coba pilih lagi dibawah angka ${jmlh}`)
pilih = JSON.stringify(await eval(`${args[0]}-1`), null, 2) 
downm = await ytaa(m.quoted.text.split('-----------------------------')[pilih].split('Url :')[1].split('\n')[0])
const { dl_link, thumb, title, filesizeF, filesize } = downm
if(Number(filesize) >= 30000){ 
short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
reply(`Ukuran file Terlalu besar!!*\n*Size : ${filesizeF}*\n*Link : ${short.data}*\n\n_Silahkan download Link diatas!!_`)
}
teks = `*P L A Y M U S I C*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n\nTunggu sebentar\nMusic segera dikirim`
buff = await getBuffer(dl_link)
fak = await getBuffer(thumb)
const ytmp3b = await iqbl.prepareMessage("0@s.whatsapp.net", fak, MessageType.location,{ thumbnail: fak})
const ytmp3c = ytmp3b.message["ephemeralMessage"] ? ytmp3b.message.ephemeralMessage : ytmp3b
ytmp3 = [{buttonId:`ytsearch ${q}`,buttonText:{displayText:'ytsearch'},type:1}]
ytmp32 = { contentText: `${teks}`, footerText: `Created By 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖`, buttons: ytmp3, headerType: 6, locationMessage: ytmp3c.message.locationMessage}
iqbl.sendMessage(from, ytmp32, MessageType.buttonsMessage, { caption: 'fak'})
iqbl.sendMessage(from, buff, MessageType.audio, {quoted: bal})
}
} catch(e) {
reply('Reply pesan Bot hasil pencarian youtube!')
console.log(e)
}
break
case 'sewa':
if (!isGroup) return
if (!bal.key.fromMe) return
if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
if (args[0] === 'add'){
if (isSewa) return reply(`Sudah ada`)
addSewaGroup(from, args[1], sewa)
reply(`Success`)
} else if (args[0] === 'del'){
if (!isSewa) return reply(`Tidak ada`)
sewa.splice(getSewaPosition(from, sewa), 1)
fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
reply(`Succes`)
} else {
reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
}
break
case 'sewacheck':
case 'ceksewa':
if (!isGroup) return
if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
let cekvip = ms(getSewaExpired(from, sewa) - Date.now())
let premiumnya = `*Expired :* ${cekvip.days} Hari ${cekvip.hours} Jam ${cekvip.minutes} Menit ${cekvip.seconds} Detik`
reply(premiumnya)
break
case 'sewalist': 
case 'listsewa':
let txtnyee = `List Sewa\nJumlah : ${sewa.length}`
for (let i of sewa){
let cekvipp = ms(i.expired - Date.now())
txtnyee += `\n\n*ID :* ${i.id} \n*Expire :* ${cekvipp.days} Hari ${cekvipp.hours} Jam ${cekvipp.minutes} Menit ${cekvipp.seconds} Detik`
}
reply(txtnyee)
break
case 'banchat':
case 'mute':
if (!isGroup) return reply(mess.only.group)
if (!bal.key.fromMe) return
if (isBanchat) return reply(`_Already Ban Chat In This Group!_`)
bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`_Success Ban Chat In This Group!_`)
break
case 'unbanchat':
case 'unmute':
if (isBanchat){
if (!bal.key.fromMe) return
if (!isBanchat) return reply(`_Already Unban Chat In This Group!_`)
let anu = bancht.indexOf(from)
bancht.splice(anu, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`_Success Unban Chat In This Group!_`)
}
break
case 'listbanchat': case 'listmute':
 teks = `*List Banchat Group!*\n_Total : ${bancht.length}_\n\n`
for(let i of bancht){
met = await iqbl.groupMetadata(i)
teks += 'Id : ' + i + '\n'
teks += 'Group Name : ' + met.subject + '\n\n'
}
reply(teks)
break
case 'adderror':
if(!itsMe) return
if(!q) return reply('Masukkan nama fitur yang error!')
if(error.includes(q)) return reply(`Fitur ${q} telah ditambahkan ke daftar error sebelumnya!`)
error.push(q)
await fs.writeFileSync('./database/error.json', JSON.stringify(error))
reply('Done')
break
case 'delerror': case 'dellerror':
if(!itsMe) return
if(!q) return reply('Masukkan nama fiturnya!')
if(!error.includes(q)) return reply('Fitur tersebut tidak masuk ke list error!')
del = error.indexOf(q)
error.splice(del, 1)
await fs.writeFileSync('./database/error.json', JSON.stringify(error))
reply('Done')
break
case 'listerror':
teks = `List Fitur Error\n${shp} Total : ${error.length}\n\n`
for(let i of error){
teks += shp + ' ' + i + '\n'
}
reply(teks)
break
case 'setfake':
if(!itsMe) return
teks = `Silahkan pilih salah satu\n\n${shp} once\n${shp} once2\n${shp} toko\n${shp} kontak\n${shp} kontak2\n${shp} sticker\n${shp} vn\n${shp} text\n${shp} loc2\n${shp} troli\n${shp} video\n${shp} gc\n${shp} gif\n${shp} loc\n${shp} doc\n\nContoh : ${prefix}setfake once`
if(!q) return reply(teks)
if(args[0] == 'fonce'){
setting.fakerep = 'fonce'
await fs.writeFileSync('./database/setting.json', JSON.stringify(setting))
iqbl.sendMessage(from, 'Sukses', text, {quoted:Sonce})
//Fbal('Sukses')
}
else if(args[0] == 'fonce2'){
setting.fakerep = 'fonce2'
await fs.writeFileSync('./database/setting.json', JSON.stringify(setting))
iqbl.sendMessage(from, 'Sukses', text, {quoted:Sonce2})
//Fbal('Sukses')
}
else if(args[0] == 'ftoko'){
setting.fakerep = 'ftoko'
await fs.writeFileSync('./database/setting.json', JSON.stringify(setting))
iqbl.sendMessage(from, 'Sukses', text, {quoted:Stoko})
//Fbal('Sukses')
}
else if(args[0] == 'fkontak'){
setting.fakerep = 'fkontak' 
await fs.writeFileSync('./database/setting.json', JSON.stringify(setting))
iqbl.sendMessage(from, 'Sukses', text, {quoted:Skontak})
//Fbal('Sukses')
}
else if(args[0] == 'fkontak2'){
setting.fakerep = 'fkontak2' 
await fs.writeFileSync('./database/setting.json', JSON.stringify(setting))
iqbl.sendMessage(from, 'Sukses', text, {quoted:Skontak2})
//Fbal('Sukses')
}
else if(args[0] == 'fsticker'){
setting.fakerep = 'fsticker'
await fs.writeFileSync('./database/setting.json', JSON.stringify(setting))
iqbl.sendMessage(from, 'Sukses', text, {quoted: Ssticker})
//Fbal('Sukses')
}
else if(args[0] == 'fvn'){
setting.fakerep = 'fvn'
await fs.writeFileSync('./database/setting.json', JSON.stringify(setting))
iqbl.sendMessage(from, 'Sukses', text, {quoted:Svn})
//Fbal('Sukses')
}
else if(args[0] == 'ftext'){
setting.fakerep = 'ftext'
await fs.writeFileSync('./database/setting.json', JSON.stringify(setting))
iqbl.sendMessage(from, 'Sukses', text, {quoted:Stext})
//Fbal('Sukses')
}
else if(args[0] == 'floc2'){
setting.fakerep = 'floc2'
await fs.writeFileSync('./database/setting.json', JSON.stringify(setting))
iqbl.sendMessage(from, 'Sukses', text, {quoted:Sloc2})
//Fbal('Sukses')
}
else if(args[0] == 'ftroli'){
setting.fakerep = 'ftroli'
await fs.writeFileSync('./database/setting.json', JSON.stringify(setting))
iqbl.sendMessage(from, 'Sukses', text, {quoted: Stroli})
//Fbal('Sukses')
}
else if(args[0] == 'fvideo'){
setting.fakerep = 'fvideo'
await fs.writeFileSync('./database/setting.json', JSON.stringify(setting))
iqbl.sendMessage(from, 'Sukses', text, {quoted:Svideo})
//Fbal('Sukses')
}
else if(args[0] == 'fgc'){
setting.fakerep = 'fgc'
await fs.writeFileSync('./database/setting.json', JSON.stringify(setting))
iqbl.sendMessage(from, 'Sukses', text, {quoted:Sgc})
//Fbal('Sukses')
}
else if(args[0] == 'fgif'){
setting.fakerep = 'fgif'
await fs.writeFileSync('./database/setting.json', JSON.stringify(setting))
iqbl.sendMessage(from, 'Sukses', text, {quoted:Sgif})
//Fbal('Sukses')
}
else if(args[0] == 'floc'){
setting.fakerep = 'floc'
await fs.writeFileSync('./database/setting.json', JSON.stringify(setting))
iqbl.sendMessage(from, 'Sukses', text, {quoted:Sloc})
//Fbal('Sukses')
}
else if(args[0] == 'fdoc'){
setting.fakerep = 'fdoc'
await fs.writeFileSync('./database/setting.json', JSON.stringify(setting))
iqbl.sendMessage(from, 'Sukses', text, {quoted: Sdoc})
//Fbal('Sukses')
}
else{
reply(teks)
}
setting = await JSON.parse(fs.readFileSync('./database/setting.json'))
fakerep = setting.fakerep
break
case 'setmenu':
if (!bal.key.fromMe) return
if (args.length < 1) return freply('Pilih Lokasi Atau Document')
if (args[0] === "lokasi") {
if (menusimpel === false) return
menusimpel = false
freply(`Succes Mengganti Menu Lokasi`)
} else if (args[0] === "document") {
if (menusimpel === true) return
menusimpel = true
freply(`Succes Mengganti Menu Document`)
} else {
freply(`Pilih Lokasi Atau Document`)
}
break
case 'forwardsw': case 'forwardstory':
if(!itsMe)return
if(!q)return 
if(args[0] == 'on'){
settings.forwardSw = true
await fs.writeFileSync('./database/settings.json', JSON.stringify(settings))
reply('Succses..')
} else if (args[0] == 'off'){
settings.forwardSw = false
await fs.writeFileSync('./database/settings.json', JSON.stringify(settings))
reply('Succses..')
} else {
reply(`Pilih On : untuk mengaktifkan\nOff : untuk mnegnonaktifkan\n\nExample : ${prefix + command} on`)
}
break
case 'getexif':
if (!isQuotedSticker) return reply('Reply Stickernya Kak')
let webpv = require('node-webpmux')
let utilc = require('util')
let imguy = new webpv.Image()
await imguy.load(await m.quoted.download())
reply(utilc.format(JSON.parse(imguy.exif.slice(22).toString())))
break
case 'cutvid':
case 'cutvideo':
if(!m.quoted) return reply('Reply Videonya Kak')
if(!q) return reply(`*Example : ${prefix+command} 00:00:10|00:00:20*`)
reply(monospace(msg.wait))
namac = q.split('|')[0]
cnama = q.split('|')[1]
encmedia = JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await iqbl.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -ss ${namac} -to ${cnama} -async 1 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
iqbl.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted:rep, caption: fake })
fs.unlinkSync(ran)
})
break
case 'cutaud':
case 'cutaudio':
case 'cutvn':
case 'cutmp3':
if(!isQuotedAudio) return reply('Reply Audionya Kak')
if(!q) return reply(`*Example : ${prefix+command} 00:00:10|00:00:20*`)
reply(monospace(msg.wait))
namac = q.split('|')[0]
cnama = q.split('|')[1]
encmedia = JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await iqbl.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -ss ${namac} -to ${cnama} -async 1 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
iqbl.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', quoted:rep })
fs.unlinkSync(ran)
})
break
case 'pesansementara':
case 'ephemeral':
if (!itsMe && !isGroupAdmins) return
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`Example : ${prefix + command} on/off`)
if (args[0] && args[0].toLowerCase() == 'on') {
iqbl.toggleDisappearingMessages(from, WA_DEFAULT_EPHEMERAL)
reply(`Success Turn On Ephemeral`)
} else if (args[0] && args[0].toLowerCase() == 'off') {
iqbl.toggleDisappearingMessages(from, 0)
reply(`_Success Turn Off Ephemeral_`)
}
break
case 'sendfile':
if (!bal.key.fromMe && !isOwner) return
if (!q) return reply(`Example : ${prefix+command} ./lib/simple.js|simple.js`)
namaf = q.split('|')[0]
fnama = q.split('|')[1]
reply(monospace(msg.wait))
anud = fs.readFileSync(namaf)
iqbl.sendMessage(from, anud, document, {mimetype:'jpg/application', filename:`${fnama}`})
break     
case 'savefile':
if (!itsMe&& !isOwner) return
if(!m.quoted) return reply('Reply Teksnya')
if(!q) return reply(`Nama Filenya Apa Kak?`)
reply(monospace(msg.wait))
mengsev = await m.quoted.text
fs.writeFileSync(`./${q}`, mengsev)
reply(`Sukses Save File Dengan Nama ${q}`)
break
case 'downloadfile':
if (!itsMe && !isOwner) return
if(!m.quoted) return reply('Reply File Yang Ingin Di Download!')
if (!q) return reply(`Nama Filenya Apa Kak?`)
reply(monospace(msg.wait))
saveas = await m.quoted.download()
fs.writeFileSync(`./${q}`, saveas)
reply(`Sukses Download File Dengan Nama ${q}`)
break
case 'readfile':
if (!itsMe && !isOwner) return
if(!m.quoted) return reply('_Reply File Yang Ingin Di Lihat!_')
if (!q) return reply(`Masukan Format File!`)
reply(monospace(msg.wait))
saveas = await m.quoted.download()
fs.writeFileSync(`./media/read.${q}`, saveas)
cmyd2 = `cat media/read.${q}`
var itsme2 = `0@s.whatsapp.net`
var split2 = `${fake}`
term2 = {
contextInfo: {
participant: itsme2,
quotedMessage: {
extendedTextMessage: {
text: split2,
}
}
}
}
exec(cmyd2, (err, stdout) => {
if (err) return iqbl.sendMessage(from, ` ${err}`, text, { quoted:rep })
if (stdout) {
iqbl.sendMessage(from, stdout, text, term2)
}
})
break
case 'getkontak':
let ini_list2 = []
for (let i of groupMembers.map(v => v.jid)) {
ini_list2.push({
"displayName": iqbl.getName(i),
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖;;;\nFN:${iqbl.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await iqbl.sendMessage(m.chat, {
"displayName": `${ini_list2.length} kontak`,
"contacts": ini_list2
}, 'contactsArrayMessage', { quoted: m })
iqbl.sendMessage(m.chat,`_Ini List Kontak Member Di Grup ${groupName}_`,text,{quoted: hehe, contextInfo: {"mentionedJid": groupMembers}})
iqbl.sendMessage(from, `Tuh Kak Kontak Yang Di Dalam Gc Ini`, text, {quoted : rep})
break
case 'gethex':
if (!isGroup)return reply(`Khusus Grup`)
ghex = bal.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("hex")
iqbl.sendMessage(from, `${ghex}`, MessageType.text, {quoted: bal})
break
case 'get64':
if (!isGroup)return reply(`Khusus Grup`)
gbase64 = bal.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64")
iqbl.sendMessage(from, `${gbase64}`, MessageType.text, {quoted: bal})
break
case 'gitclone':
if (!q) return reply(`Masukan Link Nya...`)
reply(msg.wait)
v2 = q.split(`.com/`)[1].split(`/`)[1]
exec(`git clone ${q}`, async(err, stdout) => {
if (err) return reply(String(err))
reply(`Sukses Clone\nTunggu sebentar, mengkompres file ke zip...`)
await sleep(5000)
exec(`zip -r ${v2}.zip ${q.split('/')[4]}`, (err, stdout) => {
if (err) return reply(String(err))
if (stdout){
iqbl.sendMessage(from, fs.readFileSync(`./${v2}.zip`), MessageType.document, {quoted : bal,mimetype: 'zip', filename: `${v2}.zip`})
}
})
})
await sleep(15000)
fs.unlinkSync(`./${v2}.zip`)
exec(`rm -rf ${v2}`, (err, stdout) => {
})
break

/*
case 'bugreport':
if(!q) return reply('Silahkan masukkan deskripsi bugnya!')
teks = 'BUG REPORT\n\n'
teks += shp + ' Pelapor : @' + sender.split('@')[0] + '\n'
teks += shp + ' Group : ' + groupName + '\n'
teks += shp + ' IdGroup : ' + from + '\n'
teks += shp + ' Waktu : ' + date + ` ( ${time} )` + '\n'
teks += shp + ' Deskripsi Bug : ' + q
iqbl.sendMessage(Owner[0],teks,text,{contextInfo:{mentionedJid:[sender]}})
reply('Masalah telah dilaporkan ke owner!')
break*/

case 'setid':
if(!itsMe)return
if(!q)return
settings.setId = q
await fs.writeFileSync('./database/settings.json', JSON.stringify(settings))
reply('Succses..')
break
case 'welcome':
if(!isGroup)return reply('Only Group')
if(!isGroupAdmins && !itsMe)return
if ((args[0]) === 'on') {
if(isWelkom) return reply('Sudah on kak')
welkom.push(from)
fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
reply(`Sukses mengaktifkan fitur welcome`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return reply('Sudah off kak')
welkom.splice(from, 1)
fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
reply(`Sukses menonaktifkan fitur welcome!`)
} else {
wgc= [
{buttonId: `welcome on`, buttonText: {displayText: '</ON'}, type: 1},
{buttonId: `welcome off`, buttonText: {displayText: '</OFF'}, type: 1}
]
wgc1 = {
contentText: `Silahkan Pilih On Or Off`,
footerText: `Created By 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖`,
buttons: wgc,
headerType: 1
}
return iqbl.sendMessage(from, wgc1, MessageType.buttonsMessage,{quoted:bal})
}
break
case 'left':
if(!isGroup)return reply('Only Group')
if(!isGroupAdmins && !itsMe)return
if ((args[0]) === 'on') {
if (isLeft) return reply('Sudah on kak')
left.push(from)
fs.writeFileSync('./database/left.json', JSON.stringify(welkom))
reply(`Sukses mengaktifkan fitur left`)
} else if ((args[0]) === 'off') {
if (!isLeft) return reply('Sudah off kak')
left.splice(from, 1)
fs.writeFileSync('./database/left.json', JSON.stringify(welkom))
reply(`Sukses menonaktifkan fitur left`)
} else {
gc= [
{buttonId: `left on`, buttonText: {displayText: '🌹On'}, type: 1},
{buttonId: `left off`, buttonText: {displayText: '🌹Off'}, type: 1}
]
gc1 = {
contentText: `Silahkan Pilih On Or Off`,
footerText: `Created By 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖`,
buttons: gc,
headerType: 1
}
return iqbl.sendMessage(from, gc1, MessageType.buttonsMessage,{quoted:bal})
}
break
case 'setwelcome':
if(!isGroupAdmins && !itsMe && !isOwner) return
if(!q) return reply(`Contoh penggunaan : ${prefix}setwelcome Halo @user, Selamat datang di Group @subject\n\nInfo : \n${shp} @user = Tag Member\n${shp} @subject = Nama Group\n${shp} @desc = deskripsi group`)
for(let i of welkam){
if(from.includes(i.idgc)){
let del = welkam.indexOf(i)
welkam.splice(del, 1)
await fs.writeFileSync('./database/welkam.json', JSON.stringify(welkam))
welkamgc = {
idgc : from,
textwel : q
}
welkam.push(welkamgc)
fs.writeFileSync('./database/welkam.json', JSON.stringify(welkam))
return reply(`Succses!\nWelcome Group diubah menjadi ${q}`)
}
}welkamgc = {
idgc : from,
textwel : q
}
welkam.push(welkamgc)
fs.writeFileSync('./database/welkam.json', JSON.stringify(welkam))
reply(`Succses!\nWelcome Group diubah menjadi ${q}`)
break
case 'delwelcome':
if(!isGroupAdmins && !itsMe && !isOwner) return
for(let i of welkam){
if(from.includes(i.idgc)){
let del = welkam.indexOf(i)
welkam.splice(del, 1)
fs.writeFileSync('./database/welkam.json', JSON.stringify(welkam))
reply(`Sukses Menghapus welcome di group ini`)
}
}
welkom.splice(from, 1)
fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
break
case 'cekwelcome':
if(!isGroupAdmins && !itsMe) return
for(let i of welkam){
if(i.idgc.includes(from)){
teks = `🌹Nama Group : ${groupName}\n🌹Id : ${i.idgc}\n🌹Text Welcome :\n${i.textwel}`
return reply(teks)
}
}
teks = `🌹Nama Group : ${groupName}\n🌹Id : ${from}\n🌹Text Welcome : Default Bot`
reply(teks)
break
case 'setleft':
if(!isGroupAdmins && !itsMe && !isOwner) return 
if(!q) return reply(`Contoh penggunaan : ${prefix}setleft Sayonara @user, Semoga Tenang dialam sana\n\nInfo : \n🌹@user = Tag Member\n🌹@subject = Nama Group\n🌹@desc = deskripsi group`)
for(let i of tleft){
if(from.includes(i.idgc)){
let del = tleft.indexOf(i)
tleft.splice(del, 1)
await fs.writeFileSync('./database/tleft.json', JSON.stringify(tleft))
tleftgc = {
idgc : from,
textleft : q
}
tleft.push(tleftgc)
fs.writeFileSync('./database/tleft.json', JSON.stringify(tleft))
return reply(`Succses!\nLeft Group diubah menjadi ${q}`)
}
}
tleftgc = {
idgc : from,
textleft : q
}
tleft.push(tleftgc)
fs.writeFileSync('./database/tleft.json', JSON.stringify(tleft))
reply(`Succses!*\nLeft Group diubah menjadi ${q}`)
break
case 'delleft':
if(!isGroupAdmins && !itsMe && !isOwner) return
for(let i of tleft){
if(from.includes(i.idgc)){
let del = tleft.indexOf(i)
tleft.splice(del, 1)
fs.writeFileSync('./database/tleft.json', JSON.stringify(tleft))
reply(`Sukses Menghapus Left di group ini`)
}
}
left.splice(from, 1)
fs.writeFileSync('./database/left.json', JSON.stringify(left))
break
case 'cekleft':
if(!isGroupAdmins && !itsMe) return
for(let i of tleft){
if(i.idgc.includes(from)){
teks = `🌹Nama Group : ${groupName}\n🌹Id : ${i.idgc}\n🌹Text Left :\n${i.textleft}`
return reply(teks)
}
}
teks = `🌹Nama Group : ${groupName}\n🌹Id : ${from}\n🌹Text Left : Default Bot`
reply(teks)
break
case 'antidelete':
if (!bal.key.fromMe) return
if (args.length < 1) return freply('Pilih on atau off')
if (args[0] === "on") {
if (antidel === true) return
antidel = true
freply(`Succes mengaktifkan antidelete`)
} else if (args[0] === "off") {
if (antidel === false) return
antidel = false
freply(`Succes mematikan antidelete`)
} else {
freply(`Pilih on atau off`)
}
break
case 'totag':
if(!itsMe) return
m.quoted.copyNForward(from, true, {contextInfo: {mentionedJid : groupMembers.map(bal => bal.jid)}})
break
case 'q':
let qse = await iqbl.serializeM(await m.getQuotedObj())
await qse.quoted.copyNForward(m.chat, true)
break
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
console.log(e)
}
}
