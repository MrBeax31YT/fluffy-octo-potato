const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
import fetch from 'node-fetch'
let handler = async (m, { conn, command, viewOnce  }) => {
const bot = global.db.data.bot[conn.user.jid] || {}
const chats = bot.chats || {}
const privs = chats.privs || {}
const groups = chats.groups || {}
const chat = m.isGroup ? groups[m.chat] || {} : privs[m.chats] || {}
if (!chat.modohorny && m.isGroup) {return conn.sendWritingText(m.chat, '*[ ⚠️ ] LOS COMANDOS +18 ESTAN DESACTIVADOS EN ESTE GRUPO, SI ES ADMINISTRADOR DE ESTE GRUPO Y DESEA ACTIVARLOS ESCRIBA #enable modohorny*', m)
} else {
let url = packgirl[Math.floor(Math.random() * packgirl.length)]
let resp = '*_🥵 Pack2 🥵_*'
let q = await conn.sendMessage(m.chat, { image: {url: url}, caption: resp.trim(), mentions: conn.parseMention(resp), viewOnce: true }, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await delay(1 * 2000)
return conn.sendWritingText(m.chat, resp, q)
}
}
handler.help = ['pack2']
handler.tags = ['internet']
handler.command = /^(pack2)$/i
export default handler

global.packgirl = [
  "https://i.imgur.com/mwLJaxU.jpg",
  "https://i.imgur.com/9ptmlPl.jpg",
  "https://i.imgur.com/38tVliz.jpg",
  "https://i.imgur.com/2NqCKE3.jpg",
  "https://i.imgur.com/pveviMG.jpg",
  "https://i.imgur.com/d71dnkv.jpg",
  "https://i.imgur.com/cr7Ypj1.jpg",
  "https://i.imgur.com/jAxzCj4.jpg",
  "https://i.imgur.com/xokuFLf.jpg",
  "https://i.imgur.com/Hi4zLaf.jpg",
  "https://i.imgur.com/OlaQtwW.jpg",
  "https://i.imgur.com/Dm4GLuF.jpg",
  "https://i.imgur.com/k6Y2E9b.jpg",
  "https://i.imgur.com/1rk7jdu.jpg",
  "https://i.imgur.com/TFmEVPc.jpg",
  "https://i.imgur.com/0XefLlJ.jpg",
  "https://i.imgur.com/bwa9LYZ.jpg",
  "https://i.imgur.com/WgrpTmg.jpg",
  "https://i.imgur.com/Z5f5YAw.jpg",
  "https://i.imgur.com/xEuBtPO.jpg",
  "https://i.imgur.com/NA0fHxn.jpg",
  "https://i.imgur.com/InueCKQ.jpg",
  "https://i.imgur.com/3syOcHe.jpg",
  "https://i.imgur.com/N1dgels.jpg",
  "https://i.imgur.com/IxKAJaV.jpg",
  "https://i.imgur.com/8VrxL1d.jpg",
  "https://i.imgur.com/8B4Y0bG.jpg",
  "https://i.imgur.com/wgkGOjF.jpg",
  "https://i.imgur.com/765Wi6q.jpg",
  "https://i.imgur.com/5joeWnm.jpg",
  "https://i.imgur.com/71fjmmM.jpg",
  "https://i.imgur.com/cAuKeyZ.jpg",
  "https://i.imgur.com/SDZ2Hs5.jpg",
  "https://i.imgur.com/skkEyqI.jpg",
  "https://i.imgur.com/6dXFsBW.jpg",
  "https://i.imgur.com/6CeG9ZX.jpg"
]
