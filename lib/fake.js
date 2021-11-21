 const {
  WAConnection,
   MessageType,
  Presence,
  MessageOptions,
  Mimetype,
   WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
  generateMessageID,
      ChatModification
} = require('@adiwajshing/baileys');
const fs = require("fs");
let create = `Created By 𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖`


exports.fonce = (from, bal) => {
return { key:  {fromMe: false, id: generateMessageID(), remoteJid: "6281333782061@g.us", participant: '0@s.whatsapp.net'}, message: { imageMessage: { "jpegThumbnail": Fthumb, "viewOnce": true}}}}

exports.fonce2 = (from, bal) => {
return { key:  {fromMe: false, id: generateMessageID(), remoteJid: "6281333782061@g.us", participant: '0@s.whatsapp.net'}, message: { videoMessage: { "jpegThumbnail": Fthumb, "viewOnce": true}}}}

exports.ftoko = (from, bal) => {
return { key: {fromMe: false, id: generateMessageID(), participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281333782061@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./media/BaseIqbalzz.jpg`)},"title": create,"description": "𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖`", "currencyCode": "IDR","priceAmount1000": "9999999999","retailerId": "𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖`","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}}

exports.fkontak = (from, bal) => {
return { key: {fromMe: false, id: generateMessageID(), participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖;;;\nFN:𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖,\nitem1.TEL;waid=6281282765434:+62 812-8276-5434\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./media/BaseIqbalzz.jpg')}}}}

exports.fkontak2 = (from, bal) => {
return { key: {fromMe: false, id: generateMessageID(), participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6281333782061-1617740713@g.us' } : {}) }, message: { "contactsArrayMessage": { "displayName": "100 contacts", "contacts": [{"displayName": "9", "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;9;;;\nFN:9\nEND:VCARD"},{"displayName": "Admin","vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Admin;;;\nFN:Admin\nitem1.TEL:+62 812-8276-5434\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]}}}}

exports.fsticker = (from, bal) => {
return { key: {fromMe: false, id: generateMessageID(), participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281333782061@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}}

exports.fvn = (from, bal) => {
return { key: {fromMe: false, id: generateMessageID(), participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281333782061@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}}

exports.ftext = (from, bal) => {
return { key: {fromMe: false, id: generateMessageID(), participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281333782061@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${create}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./media/BaseIqbalzz.jpg')}}}}

exports.floc2 = (from, bal) => {
return { key: {"fromMe": false, id: generateMessageID(), "participant": `0@s.whatsapp.net`, "remoteJid": "6281333782061-1617740713@g.us" },message: { "liveLocationMessage": { "caption": `Rusia`,"name":`Rusia`}}}}

exports.ftroli = (from, bal) => {
return { key: {fromMe: false, id: generateMessageID(), participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281333782061@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 1,status: 1,surface : 1,message: `${create}`,orderTitle: 'Bang',thumbnail: fs.readFileSync('./media/BaseIqbalzz.jpg'), sellerJid: '0@s.whatsapp.net'}}}}

exports.fvideo = (from, bal) => {
return { key: {fromMe: false, id: generateMessageID(), participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281333782061-1617740713@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999999999', 'caption': `${create}`,'jpegThumbnail': fs.readFileSync('./media/BaseIqbalzz.jpg')}}}}

exports.fgc = (from, bal) => {
return { key: {"fromMe": false, id: generateMessageID(), "participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${create}`, 'jpegThumbnail': fs.readFileSync('./media/BaseIqbalzz.jpg')}}}}

exports.fgif = (from, bal) => {
return { key: {fromMe: false, id: generateMessageID(), participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281333782061-1617740713@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${create}`,'jpegThumbnail': fs.readFileSync('./media/BaseIqbalzz.jpg')}}}}

exports.floc = (from, bal) => {
return { key : { id: generateMessageID(), participant : '0@s.whatsapp.net' }, message: { locationMessage: { name: 'Russia', jpegThumbnail: fs.readFileSync('./media/BaseIqbalzz.jpg')}}}}

exports.fdoc = (from, bal) => {
return { key : { id: generateMessageID(), participant : '0@s.whatsapp.net' }, message: { documentMessage: { title: '𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖', jpegThumbnail: fs.readFileSync('./media/BaseIqbalzz.jpg')}}}}