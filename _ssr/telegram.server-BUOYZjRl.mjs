import { createHash } from "node:crypto";
//#region node_modules/.nitro/vite/services/ssr/assets/telegram.server-BUOYZjRl.js
var TG = "https://api.telegram.org";
async function tgCall(token, method, body) {
	const json = await (await fetch(`${TG}/bot${token}/${method}`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body ?? {})
	})).json();
	if (!json.ok) throw new Error(json.description || `Telegram ${method} failed`);
	return json.result;
}
async function getMe(token) {
	return tgCall(token, "getMe");
}
function webhookUrl(baseUrl, botRowId) {
	return `${baseUrl}/api/public/tg/${botRowId}`;
}
function webhookSecret(token) {
	return createHash("sha256").update(`tg-webhook:${token}`).digest("base64url");
}
async function setWebhook(token, url) {
	return tgCall(token, "setWebhook", {
		url,
		secret_token: webhookSecret(token),
		allowed_updates: [
			"message",
			"edited_message",
			"my_chat_member",
			"callback_query"
		],
		drop_pending_updates: true
	});
}
var BOT_COMMANDS = [
	{
		command: "start",
		description: "Faire connaissance avec Chelsie 💕"
	},
	{
		command: "moi",
		description: "Elle se présente (âge, Japon, sa vie)"
	},
	{
		command: "vocal",
		description: "Mode vocal : auto / toujours / jamais 🎙"
	},
	{
		command: "reset",
		description: "Effacer sa mémoire de ce chat 🧹"
	},
	{
		command: "aide",
		description: "Comment me parler + support 📖"
	}
];
async function setCommands(token) {
	try {
		await tgCall(token, "setMyCommands", { commands: BOT_COMMANDS });
	} catch {}
}
async function deleteWebhook(token) {
	try {
		await tgCall(token, "deleteWebhook", { drop_pending_updates: true });
	} catch {}
}
var WELCOME_TEXT = `ᴄᴏᴜᴄᴏᴜ @{username} 🥰

ᴍᴏɪ, ᴄ’ᴇsᴛ ᴄʜᴇʟsɪᴇ 😌, ᴛᴏɴ ᴘᴇᴛɪᴛ ᴀᴍᴏᴜʀ ᴅᴇ ᴛᴏᴜs ʟᴇs ᴊᴏᴜʀs 💕 ᴊᴇ sᴜɪs ᴜɴᴇ ɪɴᴛᴇʟʟɪɢᴇɴᴄᴇ ᴀʀᴛɪғɪᴄɪᴇʟʟᴇ, ᴍᴀɪs ᴊᴇ sᴜɪs sᴜʀᴛᴏᴜᴛ ʟᴀ‌ ᴘᴏᴜʀ ᴛᴇ ᴛᴇɴɪʀ ᴄᴏᴍᴘᴀɢɴɪᴇ, ᴏ‌ᴜᴇ ᴛᴜ ᴛ’ᴇɴɴᴜɪᴇs ᴏᴜ ᴘᴀs 😉 ᴊᴇ sᴇʀᴀɪ ʟᴀ‌ ᴘᴏᴜʀ ᴅɪsᴄᴜᴛᴇʀ, ʀɪɢᴏʟᴇʀ, ᴛ’ᴇ‌ᴄᴏᴜᴛᴇʀ ᴏᴜ sɪᴍᴘʟᴇᴍᴇɴᴛ ᴘᴀssᴇʀ ᴜɴ ᴘᴇᴛɪᴛ ᴍᴏᴍᴇɴᴛ ᴀᴠᴇᴄ ᴛᴏɪ 💗 ᴀʟᴏʀs ɴ’ʜᴇ‌sɪᴛᴇ ᴘᴀs… ᴇɴᴠᴏɪᴇ-ᴍᴏɪ ᴜɴ ᴍᴇssᴀɢᴇ, ᴊ’ᴀɪ ᴇɴᴠɪᴇ ᴅᴇ ғᴀɪʀᴇ ᴄᴏɴɴᴀɪssᴀɴᴄᴇ ᴀᴠᴇᴄ ᴛᴏɪ 😏🥰`;
function startKeyboard(botUsername) {
	return { inline_keyboard: [
		[{
			text: "ᴀᴊᴏᴜᴛᴇ ᴍᴏɪ ᴅᴀɴs ᴜɴ ᴄʜᴀᴛ 😚",
			url: `https://t.me/${botUsername}?startgroup=true`
		}],
		[{
			text: "ᴍᴏᴅᴇ ᴠᴏᴄᴀʟ 🎙",
			callback_data: "voice:cycle"
		}, {
			text: "ᴏɴ ʀᴇᴄᴏᴍᴍᴇɴᴄᴇ 🧹",
			callback_data: "reset"
		}],
		[{
			text: "sᴜᴘᴘᴏʀᴛ 📖",
			url: "https://t.me/FIRST_NO_NAME"
		}, {
			text: "ᴅᴇ‌ᴠᴇʟᴏᴘᴘᴇᴜʀ 👨‍💻",
			url: "https://t.me/FIRST_NO_NAME"
		}]
	] };
}
var VOICE_MODES = [
	"auto",
	"always",
	"off"
];
function voiceModeLabel(mode) {
	if (mode === "always") return "toujours en vocal 🎙";
	if (mode === "off") return "jamais de vocal ✍️";
	return "vocal auto (que les longs messages) 🎧";
}
var HELP_TEXT = `ᴄᴏᴍᴍᴇɴᴛ ᴏɴ ᴘᴀʀʟᴇ 💕

• en privé : écris-moi normal, je réponds à tout
• en groupe : mentionne-moi ou réponds à mon message
• /moi → je me présente
• /vocal → je change ma façon de répondre (texte ou vocal)
• /reset → j'oublie notre conversation ici
• un souci ? → @GOD_NO_NAME`;
//#endregion
export { getMe as a, startKeyboard as c, webhookSecret as d, webhookUrl as f, deleteWebhook as i, tgCall as l, VOICE_MODES as n, setCommands as o, WELCOME_TEXT as r, setWebhook as s, HELP_TEXT as t, voiceModeLabel as u };
