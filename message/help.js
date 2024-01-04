import moment from "moment-timezone"
import fs from "fs"
import chalk from 'chalk'
import ms from "parse-ms"
import {runtime,kyun} from "../lib/myfunc.js" 
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
moment.tz.setDefault("Asia/Jakarta").locale("id");

//Total fitur by Official Dittaz
const totalFitur = () =>{
var mytext = fs.readFileSync("./message/case.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)

let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("id" + '-TN-u-ca-islamic', {day: 'numeric',month: 'long',year: 'numeric'}).format(dot)

let yes = "*Error* ❌"
let no =""


const feat = (q) => {
let status = false
Object.keys(db.data.listerror).forEach((i) => {
if (db.data.listerror[i].cmd === q) {
status = true
}
})
return status
}

const app = `*▸*`
const apz = `*❏*`


export const allmenu =  ( limitCount, isPremium,thisHit, publik, sender, prefix, pushname) => {
return `*${botName}*
${week}, ${calender} 

 ❏ Running On : *${runWith}*
 ❏ Mode : ${publik ? "Public" : "Self"}
 ❏ Time : ${timeWib} WIB 
 ❏ Islamic : ${dateIslamic}
 ❏ Hit Today : ${thisHit.toLocaleString()}
 ❏ Total Feature : ${totalFitur()}
 ❏ Total Error : ${db.data.listerror.length}
 ❏ Total User : ${Object.keys(db.data.users).length}
 ❏ User Banned : ${db.data.banned.length}
					    `}

export const fitur = (prefix) => {
const data = global.db.data.others['newinfo']
const info = data ? data.info : ""

const timeInfo = data ? clockString(new Date - data.lastinfo)  : "tidak ada"
  
return`
${apz} *NEWW FITUR
${app} totalfitur
${app} script
${app} tts
${app} openai
${app} reii
${app} aiimage
${app} jadianime
${app} jarak 
${app} igstalk
${app} tiktokstalk
${app} quotesanime
${app} faktaunik
${app} katabijak
${app} pantun
${app} bucin
${app} randomnama
${app} artinama
${app} cekjadian
${app} wattpad
${app} wattpadsearch
${app} asupan
${app} bucin3
${app} pantun
${app} jadwaltvnow
${app} darkjoke
${app} darkjokes
${app} jjmeryani
${app} quotes
${app} emojimix
${app} infogempa
${app} tebakgambar
${app} swm
${app} smeme
${app} donasi
${app} ttp2 


${apz} *ROOM CHAT*
${app} .confes
${app} .menfes
${app} .stop




${apz} *MENU STICKER*
${app} s
${app} gura
${app} doge
${app} patrick
${app} kiss
${app} bite
${app} yeet
${app} neko
${app} bully
${app} bonk
${app} wink
${app} poke
${app} nom
${app} slap
${app} smile
${app} wave
${app} awoo
${app} blush
${app} smug
${app} glomp
${app} happyy
${app} dance
${app} cringe
${app} cuddle
${app} highfive
${app} shinobu 
${app} megumin
${app} handhold


${apz} *MENU GROUP*
${app} kick
${app} add
${app} promote
${app} demote
${app} closetime
${app} opentime
${app} revoke
${app} hidetag
${app} listoline
${app} afk
${app} ceksewa
${app} cekprem 
${app} ceklimit 
${app} ban
${app} unban
${app} listban
${app} addkick
${app} delkick
${app} moveongc
${app} out


${apz} *RANDOM FOTO*
${app} art
${app} awoo
${app} bts
${app} cecan
${app} cogan
${app} elaina
${app} exo
${app} elf
${app} estetic
${app} kanna
${app} loli
${app} neko
${app} waifu
${app} shota
${app} husbu
${app} Sagiri
${app} shinobu
${app} megumin
${app} wallnime
${app} quotesimage


${apz} *NFWS MENU*
${app} bj
${app} ero
${app} cum
${app} feet
${app} yuri
${app} trap
${app} lewd
${app} feed
${app} eron
${app} solo
${app} gasm
${app} poke
${app} anal
${app} holo
${app} tits
${app} kuni
${app} kiss
${app} erok
${app} smug
${app} baka
${app} solog
${app} feetg
${app} lewdk
${app} waifu
${app} pussy
${app} femdom
${app} cuddle
${app} hentai
${app} eroyuri
${app} cum_jpg
${app} blowjob
${app} erofeet
${app} holoero
${app} classic
${app} erokemo
${app} fox_girl
${app} futanari
${app} lewdkemo
${app} wallpaper
${app} pussy_jpg
${app} kemonomimi
${app} nsfw_avatar
${app} chiisaihentai
${app} trap
${app} blowjob
${app} yaoi
${app} ecchi
${app} hentai
${app} ahego
${app} hololewd
${app} sideoppai
${app} animefeets
${app} animebooty
${app} animethighss
${app} hentaiparadise
${app} animearmpits
${app} hentaifemdom
${app} lewdanimegirls
${app} biganimetiddies
${app} animebellybutton
${app} hentai4everyone

${apz} *MENU TOOLS*
${app} ttp
${app} attp
${app} resize
${app} inspect
${app} tr
${app} ss
${app} runtime
${app} speed
${app} speed1
${app} ping
${app} rules
${app} speedest
${app} volume
${app} transfer


${apz} *TAG MENU*
${app} ngewe
${app} memek
${app} bego
${app} goblok
${app} janda
${app} perawan
${app} babi
${app} tolol
${app} pinter
${app} pintar
${app} asu
${app} bodoh
${app} gay
${app} lesby
${app} bajingan
${app} jancok
${app} anjing
${app} ngentod
${app} ngentot
${app} monyet
${app} mastah
${app} newbie
${app} bangsat
${app} bangke
${app} sange
${app} sangean
${app} dakjal
${app} horny
${app} wibu
${app} puki
${app} pantex
${app} pantek


${apz} *MENU COVERTER*
${app} tomp3
${app} tomp4
${app} toimg
${app} togif
${app} toptt


${apz} *TEXT PROME
${app} pornhub
${app} glitch
${app} avenger
${app} space
${app} ninjalogo
${app} marvelstudio
${app} lionlogo
${app} wolflogo
${app} steel3d
${app} wallgravity
${app} blackpink
${app} neon
${app} greenneon
${app} advanceglow
${app} futureneon
${app} sandwriting
${app} sandsummer
${app} sandengraved
${app} metaldark
${app} neonlight
${app} holographic
${app} text1917
${app} minion
${app} deluxesilver
${app} newyearcard
${app} bloodfrosted
${app} halloween
${app} jokerlogo
${app} fireworksparkle
${app} natureleaves
${app} bokeh
${app} toxic
${app} strawberry
${app} box3d
${app} roadwarning
${app} breakwall
${app} icecold
${app} luxury
${app} cloud
${app} summersand
${app} horrorblood
${app} thunder


${apz} *PHOTO OXY*
${app} shadow 
${app} cup 
${app} cup1
${app} romance
${app} smoke
${app} burnpaper
${app} lovemessage
${app} undergrass
${app} love
${app} coffe
${app} woodheart
${app} woodenboard
${app} summer3d
${app} wolfmetal
${app} nature3d
${app} underwater
${app} golderrose
${app} summernature
${app} letterleaves
${app} glowingneon 
${app} fallleaves
${app} flamming
${app} harrypotter
${app} carvedwood


${apz} *PHOTO 360*
${app} wetglass
${app} multicolor3d
${app} watercolor
${app} luxurygold
${app} galaxywallpaper
${app} lighttext
${app} beautifulflower
${app} puppycute
${app} royaltext
${app} heartshaped
${app} birthdaycake
${app} galaxystyle
${app} hologram3d
${app} greenneon
${app} glossychrome
${app} greenbush
${app} metallogo
${app} noeltext
${app} glittergold
${app} textcake
${app} starsnight
${app} wooden3d
${app} textbyname
${app} writegalacy
${app} galaxybat
${app} snow3d
${app} birthdayday
${app} goldplaybutton
${app} silverplaybutton
${app} freefire
${app} arcade8bit
${app} battlefield4
${app} pubg


${apz} *ISLAMIC*
${app} kisahnabi
${app} asmaulhusna
${app} listsurah
${app} quotesislami


${apz} *RANDOM SOUND*
${app} sound1
${app} sound2
${app} sound3
${app} sound4
${app} sound5
${app} sound6
${app} sound7
${app} sound8
${app} sound9
${app} sound10
${app} sound11
${app} sound12
${app} sound13
${app} sound14
${app} sound15
${app} sound16
${app} sound17
${app} sound18
${app} sound19
${app} sound20
${app} sound21
${app} sound22
${app} sound23
${app} sound24
${app} sound25
${app} sound26
${app} sound27
${app} sound28
${app} sound29
${app} sound30
${app} sound31
${app} sound32
${app} sound33
${app} sound34
${app} sound35
${app} sound36
${app} sound37
${app} sound38
${app} sound39
${app} sound40
${app} sound41
${app} sound42
${app} sound43
${app} sound44
${app} sound45
${app} sound46
${app} sound47
${app} sound48
${app} sound49
${app} sound50
${app} sound51
${app} sound52
${app} sound53
${app} sound54
${app} sound55
${app} sound56
${app} sound57
${app} sound58
${app} sound59
${app} sound60
${app} sound61
${app} sound62
${app} sound63
${app} sound64
${app} sound65
${app} sound66
${app} sound67
${app} sound68
${app} sound69
${app} sound70
${app} sound71
${app} sound72
${app} sound73
${app} sound74
${app} sound75
${app} sound76
${app} sound77
${app} sound78
${app} sound79
${app} sound80
${app} sound81
${app} sound82
${app} sound83
${app} sound84
${app} sound85
${app} sound86
${app} sound87
${app} sound88
${app} sound89
${app} sound90
${app} sound91
${app} sound92
${app} sound93
${app} sound94
${app} sound95
${app} sound96
${app} sound97
${app} sound98
${app} sound99
${app} sound100
${app} sound101
${app} sound102
${app} sound103
${app} sound104
${app} sound105
${app} sound106
${app} sound107
${app} sound108
${app} sound109
${app} sound110
${app} sound111
${app} sound112
${app} sound113
${app} sound114
${app} sound115
${app} sound116
${app} sound117
${app} sound118
${app} sound119
${app} sound120
${app} sound121
${app} sound122
${app} sound123
${app} sound124
${app} sound125
${app} sound126
${app} sound127
${app} sound128
${app} sound129
${app} sound130
${app} sound131
${app} sound132
${app} sound133
${app} sound134
${app} sound135
${app} sound136
${app} sound137
${app} sound138
${app} sound139
${app} sound140
${app} sound141
${app} sound142
${app} sound143
${app} sound144
${app} sound145
${app} sound146
${app} sound147
${app} sound148
${app} sound149
${app} sound150
${app} sound151
${app} sound152
${app} sound153
${app} sound154
${app} sound155
${app} sound156
${app} sound157
${app} sound158
${app} sound159
${app} sound160
${app} sound161


${apz} *MENU STORAGE*
${app} addvn
${app} addstik
${app} delvn 
${app} delstik
${app} liststik
${app} listvn 
${app} getallstik 


${apz} *MENU DATABASE*
${app} addcmdowner
${app} addcmdlimit
${app} addcmdprem
${app} addowner
${app} addprem
${app} addsewa
${app} blockcmd
${app} unblockcmd
${app} delowner
${app} delprem
${app} delowner
${app} delcmdowner
${app} delcmdlimit
${app} delcmdprem
${app} listcmdowner
${app} listblockcmd
${app} listprem
${app} listsewa
${app} listowner
${app} listcmdlimit


${apz} *SETTING BOT*
${app} setmenu
${app} setnamebot
${app} setppbot
${app} setimgreply
${app} setimgquoted
${app} setimgdoc   


${apz} *MENU GAME*
${app} family100
${app} math
${app} caklontong
${app} tebakgambar

${apz} *MENU DEPELOVER*
${app} clearuser
${app} clearban
${app} clearerror
${app} bcgc
${app} banchat
${app} public
${app} self
${app} > evalcode
${app} $ executor
${app} join
${app} bcgc
${app} ambilcase
${app} getfile
${app} restart
${app} delsampah
${app} delchat
${app} listblock
${app} sendbug
${app} savefile
${app} buggc
${app} out
${app} Verify
${app} listgc


❏ *THANKS TO* 

• MaulanaBot 
• dittaz 
• irfan haryanto
• lana botz
• Reii Code
• Adelin bot


`+'𝘗𝘰𝘸𝘦𝘳𝘦𝘥 𝘉𝘺 Adelin-Botz'
}
// !! JANGAN DI HAPUS THANKS TO !!
// SCRIPT DI KEMBANGKAN OLEH : LANA DEV
// Yt : https://youtube.com/@maulanabot
// MEMAKAI BASE Irfan & Dittaz
// EROR?? WA : 081775445373
// JANGAN DI HAPUS
// JUAL SCRIPT?? NERAKA PALING BAWAH!!

//===================//
  //https://maulanabot.my.id//



