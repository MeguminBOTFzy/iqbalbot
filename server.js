let {
    WAConnection: _WAConnection,
    MessageType, 
    Presence,
    Mimetype,
    GroupSettingChange,
    ReconnectMode
} = require("@adiwajshing/baileys");
let simple  = require('./plugins/simple.js');
let WAConnection = simple.WAConnection(_WAConnection);
let { color, bgcolor } = require('./lib/color.js');
let { banner, start, success, getGroupAdmins } = require('./lib/functions')
let { ucapanWaktu } = require('./lib/setting')
let qrcode = require("qrcode-terminal");
let term = require('terminal-kit').terminal
let iqbl = new WAConnection()
let fs = require('fs');
let { exec } = require('child_process')
let moment = require('moment-timezone')
let chalk = require('chalk');
let colors = require('colors');
let async = require('async');
let path = require('path');
let figlet = require('figlet');
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}

require('./Iqbal.js')
nocache('./Iqbal.js', module => console.log(`${module} is now updated!`))

async function starts() {
    iqbl.logger.level = 'warn'
    iqbl.autoReconnect = ReconnectMode.onConnectionLost
    console.log(color(figlet.textSync(`MeguminSelf`, {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: true
	    }), 'cyan'))
	iqbl.version = [2, 2143, 3]
    iqbl.browserDescription = [ 'ItsMeFajar','Safari', '3.0' ]
    iqbl.on('qr', () => {
    console.log(color('[','white'), color('!','red'), color(']','white'), color('Scan QR Diatas Untuk Menyambungkan Bot WhatsApp!\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \n\nQR Expired dalam 20 detik'))
    })
    
    iqbl.on('credentials-updated', () => {
        console.log(color('|TRM|'), color('credentials updated!', 'cyan'))
        })
    
    //Session
    fs.existsSync('./QRnya.json') && iqbl.loadAuthInfo('./QRnya.json')
    iqbl.on('connecting', () => {
    })
 
//Plugins
let pluginFolder = path.join(__dirname, 'plugins')
let pluginFilter = filename => /\.js$/.test(filename)
global.plugins = {}
for (let filename of fs.readdirSync(pluginFolder).filter(pluginFilter)) {
  try {
    global.plugins[filename] = require(path.join(pluginFolder, filename))
  } catch (e) {
    conn.logger.error(e)
    delete global.plugins[filename]
  }
}
console.log(Object.keys(global.plugins))
global.reload = (_event, filename) => {
  if (pluginFilter(filename)) {
    let dir = path.join(pluginFolder, filename)
    if (dir in require.cache) {
      delete require.cache[dir]
      if (fs.existsSync(dir)) conn.logger.info(`re - require plugin '${filename}'`)
      else {
        conn.logger.warn(`deleted plugin '${filename}'`)
        return delete global.plugins[filename]
      }
    } else conn.logger.info(`requiring new plugin '${filename}'`)
    let err = syntaxerror(fs.readFileSync(dir), filename)
    if (err) conn.logger.error(`syntax error while loading '${filename}'\n${err}`)
    else try {
      global.plugins[filename] = require(dir)
    } catch (e) {
      conn.logger.error(e)
    } finally {
      global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)))
    }
  }
}
Object.freeze(global.reload)
fs.watch(path.join(__dirname, 'plugins'), global.reload)

//Open
    iqbl.on('open', () => {
    })
    
    iqbl.on('ws-close', () => {
        console.log(color('[ SYSTEM ]'), color('Connection lost, trying to reconnect.', 'cyan'))
        })
    
    iqbl.on('close', async () => {
        console.log(color('|TRM|'), color('Disconnected.', 'cyan'))
        })
        
	await iqbl.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./QRnya.json', JSON.stringify(iqbl.base64EncodedAuthInfo(), null, '\t'))

//Anti Delete
antidel = false
iqbl.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
if (antidel === false) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const type = Object.keys(m.message)[0]
iqbl.sendMessage(m.key.remoteJid, `\`\`\`「 Anti Delete 」\`\`\`
•> Nama : @${m.participant.split("@")[0]}
•> Waktu : ${jam} ${week} ${calender}
•> Type : ${type}`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant], "externalAdReply": {"title": `Hayolo Ngapus Apaan?`, "body": `${ucapanWaktu}`, mediaType: 2, "thumbnail": thumb,"previewType": "VIDEO","mediaUrl": `https://fb.watch/8f0gXPj5p0/`}}})

iqbl.copyNForward(m.key.remoteJid, m.message)
})

//Baterai
baterai = `belum detect`
charging = `unknown`
iqbl.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
	   global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
        if (json[2][0][1].live == 'true') charging = true
       if (json[2][0][1].live == 'false') charging = false
        console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel+'%')
	})
	global.batrei = global.batrei ? global.batrei : []
		iqbl.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
		}) 
		
    iqbl.on('CB:Conn,pushname', json => {
    const pushname = json[1].pushname
    iqbl.user.name = pushname // update on client too
    console.log ("Name updated: " + pushname)
})
console.log(color('[ SYSTEM ]', 'orange'), color('Sending bot info to bot owner','cyan'));
console.log(color('[ SYSTEM ]', 'orange'), color('Sending ip address to developer bot'));
await sleep(10000)

console.clear()
await sleep(10000)
var progressBar , progress = 0 ;
function doProgress()
{
	progress += Math.random() / 10 ;
	progressBar.update( progress ) ;
	
	if ( progress >= 1 )
	{
		setTimeout( function() { console.clear(),
		exec(`screenfetch -A Deepin`, (error, stdout, stderr) => {
			console.log(stdout), console.log(bgcolor('https://github.com/Iqbalzz/bot-wa', 'cyan'))})}, 200 ) ;
	}
	else
	{
		setTimeout( doProgress , 100 + Math.random() * 400 ) ;
	}
}

console.log(color(figlet.textSync(`Fajar`, {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: true
	    }), 'lightgreen')), term.slowTyping('Created By FajarXcode7' ,{ flashStyle: term.brightWhite })
progressBar = term.progressBar( {
	width: 80 ,
	title: '\n\nLoading' ,
	eta: true ,
	percent: true
} ) ;
doProgress() ;
await sleep(10000)
console.log(color('[ SYSTEM ]', 'orange'), color('Tersambung... ','greenyellow'));
await sleep(10000)
start('2',colors.bold.blue('\nMenunggu Pesan Baru...\n   『々Lord』𝐹𝑎𝑗𝑎𝑟 𝐴𝑙𝑓𝑎𝑟𝑖𝑧𝑖ツ'));

iqbl.on('group-update', async (ane) => {
        require("./lib/group")(iqbl, ane)
    })
iqbl.on('group-participants-update', async (anu) => {
        require("./lib/welcome")(iqbl, anu)
    })
iqbl.on('chat-update', async (message) => {
        require('./Iqbal.js')(iqbl, message)
    })
    }

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
