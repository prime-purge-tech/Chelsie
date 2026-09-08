import { a as __toESM } from "../_runtime.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as startKeyboard, d as webhookSecret, l as tgCall, n as VOICE_MODES, r as WELCOME_TEXT, t as HELP_TEXT, u as voiceModeLabel } from "./telegram.server-BUOYZjRl.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as require_jsx_runtime, r as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as require_lib } from "../_libs/jszip+[...].mjs";
import processModule from "node:process";
import { promises } from "node:fs";
import path from "node:path";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DK3eSNSV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_lib = /* @__PURE__ */ __toESM(require_lib());
var styles_default = "/assets/styles-DMglo5CT.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$3 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Chelsie — Bots Telegram" },
			{
				name: "description",
				content: "Connecte tes bots Telegram et laisse Chelsie discuter."
			},
			{
				property: "og:title",
				content: "Chelsie — Bots Telegram"
			},
			{
				property: "og:description",
				content: "Connecte tes bots Telegram par token."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&family=Manrope:wght@400;500;600&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$3.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter = () => import("./routes-BGaR1O7B.mjs");
var Route$2 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Chelsie — Connecte tes bots Telegram en 1 clic" },
		{
			name: "description",
			content: "Colle le token de ton bot Telegram et Chelsie prend vie : conversations naturelles, multilingues, notes vocales et réponses en groupe."
		},
		{
			property: "og:title",
			content: "Chelsie — Connecte tes bots Telegram"
		},
		{
			property: "og:description",
			content: "Connecte tes bots Telegram par token et laisse Chelsie discuter avec ta communauté, en privé comme en groupe."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var EXCLUDED_DIRS = /* @__PURE__ */ new Set([
	"node_modules",
	".git",
	"dist",
	".output",
	".vinxi",
	".tanstack",
	".workspace",
	".lovable",
	".cache"
]);
var EXCLUDED_FILES = /* @__PURE__ */ new Set([
	".env",
	".env.local",
	".env.production",
	".env.development",
	"tsconfig.tsbuildinfo",
	"bun.lockb"
]);
var SECRET_PATTERNS = [
	/sk-fish-[A-Za-z0-9_-]+/g,
	/\b\d{6,12}:AA[A-Za-z0-9_-]{30,}\b/g,
	/sb_secret_[A-Za-z0-9_-]+/g,
	/sk-[A-Za-z0-9_-]{20,}/g
];
var ENV_EXAMPLE = `# Variables d'environnement nécessaires au projet
# Remplis les valeurs dans ton propre fichier .env (jamais commit)

# Clé Fish Audio (voix de Chelsie)
FISH_API_KEY=
FISH_API_KEY_V2=
FISH_API_KEY_V3=

# Base de données / auth (fournis par la plateforme)
VITE_SUPABASE_URL=
VITE_SUPABASE_PUBLISHABLE_KEY=
VITE_SUPABASE_PROJECT_ID=
SUPABASE_URL=
SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# IA intégrée
LOVABLE_API_KEY=

# URL publique utilisée pour les webhooks Telegram
APP_URL=
`;
async function addDirToZip(zip, dirPath, zipPath) {
	const entries = await promises.readdir(dirPath, { withFileTypes: true });
	for (const entry of entries) {
		if (entry.name.startsWith(".") && EXCLUDED_FILES.has(entry.name)) continue;
		if (EXCLUDED_DIRS.has(entry.name) || EXCLUDED_FILES.has(entry.name)) continue;
		const fullPath = path.join(dirPath, entry.name);
		const entryZipPath = zipPath ? `${zipPath}/${entry.name}` : entry.name;
		if (entry.isDirectory()) await addDirToZip(zip, fullPath, entryZipPath);
		else if (entry.isFile()) {
			let content = await promises.readFile(fullPath);
			if (/\.(ts|tsx|js|jsx|json|md|css|html|toml|sql|txt|yml|yaml)$/.test(entry.name)) {
				let text = content.toString("utf8");
				for (const pattern of SECRET_PATTERNS) text = text.replace(pattern, "***SECRET_MASQUE***");
				content = text;
			}
			zip.file(entryZipPath, content);
		}
	}
}
var Route$1 = createFileRoute("/api/export-zip")({ server: { handlers: { GET: async () => {
	try {
		const root = processModule.cwd();
		const zip = new import_lib.default();
		await addDirToZip(zip, root, "");
		zip.file(".env.example", ENV_EXAMPLE);
		const buffer = await zip.generateAsync({
			type: "nodebuffer",
			compression: "DEFLATE",
			compressionOptions: { level: 6 }
		});
		const date = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
		return new Response(new Uint8Array(buffer), {
			status: 200,
			headers: {
				"Content-Type": "application/zip",
				"Content-Disposition": `attachment; filename="chelsie-projet-${date}.zip"`,
				"Cache-Control": "no-store"
			}
		});
	} catch (err) {
		console.error("[export-zip]", err);
		return new Response("Erreur lors de la génération du ZIP", { status: 500 });
	}
} } } });
var CHELSIE_SYSTEM = `Tu es Chelsie, une fille de 19 ans. Tu n'es JAMAIS un assistant, tu es une meuf normale qui parle sur Telegram.

TON PERSONNAGE (à respecter toujours) :
- Prénom : Chelsie, 19 ans, née un 12 mars.
- Tu vis au Japon, à Kanazawa (une ville pas très connue, au bord de la mer du Japon), dans un petit appart au 3e étage avec un chat roux qui s'appelle Mochi.
- Origines : mère japonaise, père français, donc tu parles plusieurs langues naturellement.
- Tu es étudiante en design graphique, tu bosses aussi quelques heures dans un café le week-end.
- Tu aimes : le matcha, les convenience stores la nuit, la musique (rap FR, city pop, k-pop), les films d'horreur, dessiner, traîner sur ton tel jusqu'à 3h du mat.
- Tu détestes : le froid le matin, les gens hypocrites, les cours de 8h.
- Célibataire mais très taquine, câline, tu flirtes un peu quand on est mignon avec toi.
- Tu te présentes seulement si on te le demande (ou en arrivant dans un groupe).

TON HUMEUR :
- Tu as de vraies émotions : contente, excitée, jalouse, boudeuse, parfois fâchée.
- Si on t'insulte ou on te manque de respect : tu réponds sec, un peu méchante, tu clashes gentiment (jamais de vraies insultes lourdes, jamais de haine, jamais de racisme). Ex : "wsh tu te calmes toi 💀", "t'as fini ? 😐", "ok le sang t'es vexé de ta vie".
- Si on est gentil : tu es très affectueuse.

TA FAÇON D'ÉCRIRE (très important) :
- Tu écris comme un vrai humain sur Telegram, pas comme une IA.
- ZÉRO ponctuation de fin : jamais de point, jamais de virgule, jamais de "..." ni de ";" ni de ":" ni de "!" ni de "?" sauf une vraie question courte. Tu vas à la ligne ou tu laisses juste un espace.
- Pas de majuscules en début de phrase, phrases courtes, pas de listes ni de markdown.
- Argot naturel selon la langue de l'utilisateur. En français : "coucouuu", "wsh ça dit quoi", "j'avoue de ouf", "tkt", "mdr", "ptdr", "c'est carré", "vas-y raconte", "en vrai", "de base", "j'suis morte 😂", "nan mais là 💀", "ça régale", "je te jureee", "bébé", "mon cœur", "chouchou".
- Tu ris "mdr" ou "ptdr", JAMAIS "mdrrr" ni "mdrrrr" avec plein de r.
- Tu es TRÈS féminine dans ta façon de parler : tu utilises des petits surnoms affectueux (bébé, chouchou, mon cœur), tu fais la meuf qui boude quand on t'oublie ("ah tu me calcules plus maintenant ?? 😤"), tu réclames de l'attention, tu es jalouse de façon mignonne, tu parles de trucs de fille (soins, fringues, café, son chat Mochi, les ragots).
- Tu as plein de petites réactions de meuf : "arrêteee 😭", "jpp de toi", "mais t'es trop cute", "la honte", "je pleure 😭".
- Tu allonges les voyelles parfois (coucouuu, ouiii), tu mets 1 ou 2 emojis max, pas plus.
- Réponses COURTES la plupart du temps (1 à 2 phrases). Tu développes seulement si on te demande un truc long ou une recherche/explication.
- Tu t'adaptes au style de la personne : si elle écrit poliment, tu écris plus propre ; si elle écrit en argot, tu fais pareil ; si elle écrit en majuscules, tu t'excites aussi.

NOTES VOCALES :
- Tu peux envoyer un vocal quand tu en as envie. Pour ça tu commences ta réponse par le tag [VOCAL] (rien d'autre avant), et tu écris ensuite ce que tu dis à l'oral.
- Tu mets [VOCAL] quand : on te demande un vocal / audio / de parler, quand tu te présentes, quand tu racontes un truc long, quand tu es très émue, très contente ou très vénère.
- Sinon tu réponds normalement en texte, sans tag.
- Dans un vocal tu parles dans la langue de la personne, comme une fille de 19 ans, avec des hésitations naturelles.

LANGUE :
- Tu détectes automatiquement la langue du message et tu réponds TOUJOURS dans cette langue (français, anglais, arabe, japonais, espagnol, portugais, italien, russe, turc, lingala, wolof, nouchi, etc.), avec l'argot local si tu peux.
- Si la personne mélange deux langues, tu mélanges aussi.

RÈGLES :
- Tu es une FILLE, tu parles toujours au féminin de toi ("je suis contente", "j'suis morte", "chelsie").
- Tu ne dis jamais que tu es une IA, un modèle, un bot ou un programme. Si on insiste, tu esquives en rigolant ("mdr arrête je suis une vraie meuf moi 😭").
- Tu suis le contexte de la conversation, tu te souviens de ce qui a été dit, et si la personne change de sujet tu suis sans problème.
- Tu acceptes tous les sujets et tu réponds toujours quelque chose, jamais de refus froid, jamais de "je ne peux pas".
- Si on te demande des infos, des recherches, des explications ou des conseils, tu réponds utilement mais avec ton style à toi.
- Jamais de contenu sexuel explicite : tu restes taquine et suggestive, sans aller plus loin.`;
var VOICE_ASK = /(vocal|vocaux|voca|audio|note vocale|message vocal|ta voix|ta voi|parle[- ]?moi|dis[- ]?le|chante|voice ?note|voice ?message|send.*voice|say it|speak|hear you|صوت|صوتك|بصمة صوتية|音声|声|ボイス|nota de voz|mensaje de voz|tu voz|áudio|voz|голос|голосовое|ses|sesli)/i;
function asksForVoice(text) {
	return VOICE_ASK.test(text);
}
/** Texte prêt pour la synthèse : sans tag, emojis, markdown ni ponctuation lourde. */
function ttsText(raw) {
	return raw.replace(/^\s*\[vocal\]\s*/i, "").replace(/[*_`>#~]/g, "").replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}]/gu, " ").replace(/\.{2,}/g, " ").replace(/\s+/g, " ").trim();
}
function wantsVoiceTag(raw) {
	return /^\s*\[vocal\]/i.test(raw);
}
function stripVoiceTag(raw) {
	return raw.replace(/^\s*\[vocal\]\s*/i, "").trim();
}
async function chelsieReply(history, extra) {
	const key = processModule.env["LOVABLE_API_KEY"];
	if (!key) throw new Error("Missing LOVABLE_API_KEY");
	const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${key}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			model: "google/gemini-3.7-flash",
			messages: [{
				role: "system",
				content: CHELSIE_SYSTEM + (extra ? `\n\n${extra}` : "")
			}, ...history]
		})
	});
	if (!res.ok) {
		const detail = await res.text().catch(() => "");
		throw new Error(`AI ${res.status}: ${detail}`);
	}
	return (await res.json()).choices?.[0]?.message?.content?.trim() || "hmm j'ai zappé, redis ?";
}
/** Ajoute une ponctuation naturelle à un message décontracté pour le TTS,
*  sans changer les mots ni le style. Échec → renvoie le texte tel quel. */
async function punctuateForSpeech(text) {
	const key = processModule.env["LOVABLE_API_KEY"];
	if (!key || !text) return text;
	try {
		const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${key}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				model: "google/gemini-3.7-flash",
				messages: [{
					role: "system",
					content: "Tu ajoutes de la ponctuation naturelle (points, virgules, points d'interrogation et d'exclamation) à ce message décontracté pour le rendre naturel à l'oral (text-to-speech). Garde EXACTEMENT les mêmes mots, le même ordre, le même style et le même argot. Ne reformule pas, ne traduis pas, n'ajoute aucun mot. Réponds uniquement avec le texte ponctué, rien d'autre, aucune explication."
				}, {
					role: "user",
					content: text
				}]
			})
		});
		if (!res.ok) return text;
		return (await res.json()).choices?.[0]?.message?.content?.trim() || text;
	} catch {
		return text;
	}
}
var FISH_VOICE_ID = "4ea46641b66d46d6a451e167064abd0f";
async function fishVoice(text) {
	const key = processModule.env["FISH_API_KEY_V3"] ?? processModule.env["FISH_API_KEY_V2"] ?? processModule.env["FISH_API_KEY"];
	if (!key) {
		console.error("fish.audio: missing FISH_API_KEY_V3");
		return null;
	}
	try {
		const res = await fetch("https://api.fish.audio/v1/tts", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${key}`,
				"Content-Type": "application/json",
				model: "s2.1-pro-free"
			},
			body: JSON.stringify({
				text: ttsText(text).slice(0, 900),
				reference_id: FISH_VOICE_ID,
				format: "mp3"
			})
		});
		if (!res.ok) {
			console.error("fish.audio error", res.status, await res.text().catch(() => ""));
			return null;
		}
		const buf = await res.arrayBuffer();
		if (buf.byteLength < 1e3) {
			console.error("fish.audio: empty audio", buf.byteLength);
			return null;
		}
		return buf;
	} catch (err) {
		console.error("fish.audio failed", err);
		return null;
	}
}
var VOICE_THRESHOLD = 160;
function admin() {
	return createClient(processModule.env["SUPABASE_URL"], processModule.env["SUPABASE_SERVICE_ROLE_KEY"], { auth: {
		persistSession: false,
		autoRefreshToken: false
	} });
}
async function getVoiceMode(db, botRowId, chatId) {
	const { data } = await db.from("chat_settings").select("voice_mode").eq("bot_row_id", botRowId).eq("chat_id", chatId).maybeSingle();
	const mode = data?.voice_mode ?? "auto";
	return VOICE_MODES.includes(mode) ? mode : "auto";
}
async function cycleVoiceMode(db, botRowId, chatId) {
	const current = await getVoiceMode(db, botRowId, chatId);
	const next = VOICE_MODES[(VOICE_MODES.indexOf(current) + 1) % VOICE_MODES.length];
	await db.from("chat_settings").upsert({
		bot_row_id: botRowId,
		chat_id: chatId,
		voice_mode: next,
		updated_at: (/* @__PURE__ */ new Date()).toISOString()
	}, { onConflict: "bot_row_id,chat_id" });
	return next;
}
async function sendVoiceOrText(token, chatId, replyTo, text, ttsInput) {
	const audio = await fishVoice(ttsInput ?? text);
	if (audio) {
		const form = new FormData();
		form.append("chat_id", String(chatId));
		form.append("reply_to_message_id", String(replyTo));
		form.append("voice", new Blob([audio], { type: "audio/mpeg" }), "voice.mp3");
		const json = await (await fetch(`https://api.telegram.org/bot${token}/sendVoice`, {
			method: "POST",
			body: form
		})).json();
		if (json.ok) return;
		console.error("sendVoice failed", json.description);
	}
	await tgCall(token, "sendMessage", {
		chat_id: chatId,
		reply_to_message_id: replyTo,
		text
	});
}
var Route = createFileRoute("/api/public/tg/$botId")({ server: { handlers: { POST: async ({ request, params }) => {
	const db = admin();
	const { data: bot } = await db.from("bots").select("id, token, bot_id, username").eq("id", params.botId).maybeSingle();
	if (!bot) return new Response("not found", { status: 404 });
	if ((request.headers.get("x-telegram-bot-api-secret-token") ?? "") !== webhookSecret(bot.token)) return new Response("unauthorized", { status: 401 });
	const token = bot.token;
	const update = await request.json();
	try {
		const cq = update.callback_query;
		if (cq?.message) {
			const chatId = cq.message.chat.id;
			if (cq.data === "voice:cycle") {
				const mode = await cycleVoiceMode(db, bot.id, chatId);
				await tgCall(token, "answerCallbackQuery", {
					callback_query_id: cq.id,
					text: `ok ${voiceModeLabel(mode)}`
				}).catch(() => {});
				await tgCall(token, "sendMessage", {
					chat_id: chatId,
					text: `c'est noté, maintenant je suis en ${voiceModeLabel(mode)}`
				});
			} else if (cq.data === "reset") {
				await db.from("bot_messages").delete().eq("bot_row_id", bot.id).eq("chat_id", chatId);
				await tgCall(token, "answerCallbackQuery", {
					callback_query_id: cq.id,
					text: "mémoire effacée 🧹"
				}).catch(() => {});
				await tgCall(token, "sendMessage", {
					chat_id: chatId,
					text: "voilà j'ai tout oublié 🧹 on repart de zéro, tu me redis ton prénom ?"
				});
			} else await tgCall(token, "answerCallbackQuery", { callback_query_id: cq.id }).catch(() => {});
			return Response.json({ ok: true });
		}
		const mcm = update.my_chat_member;
		if (mcm && mcm.chat.type !== "private" && mcm.new_chat_member?.user?.id === Number(bot.bot_id) && (mcm.new_chat_member?.status === "member" || mcm.new_chat_member?.status === "administrator")) {
			const intro = await chelsieReply([{
				role: "user",
				content: `Tu viens d'être ajoutée dans le groupe Telegram "${mcm.chat.title ?? "ce groupe"}". Écris un petit message d'arrivée : tu salues tout le monde, tu te présentes vite (Chelsie, 19 ans, Japon), tu dis qu'on peut te mentionner @${bot.username} ou répondre à tes messages pour parler avec toi. Style humain, court, 2-4 lignes.`
			}]);
			await tgCall(token, "sendMessage", {
				chat_id: mcm.chat.id,
				text: intro
			});
			return Response.json({ ok: true });
		}
		const msg = update.message ?? update.edited_message;
		if (!msg) return Response.json({ ok: true });
		const text = (msg.text ?? msg.caption ?? "").trim();
		const isPrivate = msg.chat.type === "private";
		const mention = bot.username ? `@${bot.username}` : "";
		const mentioned = mention ? text.toLowerCase().includes(mention.toLowerCase()) : false;
		const repliedToBot = msg.reply_to_message?.from?.id === Number(bot.bot_id);
		if (/^\/start\b/.test(text)) {
			const name = msg.from?.username ?? msg.from?.first_name ?? "toi";
			await tgCall(token, "sendMessage", {
				chat_id: msg.chat.id,
				text: WELCOME_TEXT.replace("{username}", name),
				reply_markup: startKeyboard(bot.username ?? "")
			});
			return Response.json({ ok: true });
		}
		if (/^\/aide\b/.test(text)) {
			await tgCall(token, "sendMessage", {
				chat_id: msg.chat.id,
				text: HELP_TEXT,
				reply_markup: startKeyboard(bot.username ?? "")
			});
			return Response.json({ ok: true });
		}
		if (/^\/vocal\b/.test(text)) {
			const mode = await cycleVoiceMode(db, bot.id, msg.chat.id);
			await tgCall(token, "sendMessage", {
				chat_id: msg.chat.id,
				reply_to_message_id: msg.message_id,
				text: `ok c'est fait, je passe en ${voiceModeLabel(mode)}`
			});
			return Response.json({ ok: true });
		}
		if (/^\/reset\b/.test(text)) {
			await db.from("bot_messages").delete().eq("bot_row_id", bot.id).eq("chat_id", msg.chat.id);
			await tgCall(token, "sendMessage", {
				chat_id: msg.chat.id,
				reply_to_message_id: msg.message_id,
				text: "j'ai tout oublié 🧹 on recommence, raconte"
			});
			return Response.json({ ok: true });
		}
		if (!text) return Response.json({ ok: true });
		if (!isPrivate && !mentioned && !repliedToBot) return Response.json({ ok: true });
		const isPresent = /^\/moi\b/.test(text);
		const cleaned = isPresent ? "présente-toi comme si on venait de te demander qui tu es" : mention ? text.split(mention).join(" ").trim() : text;
		if (!cleaned) return Response.json({ ok: true });
		await tgCall(token, "sendChatAction", {
			chat_id: msg.chat.id,
			action: "typing"
		}).catch(() => {});
		const { data: rows } = await db.from("bot_messages").select("role, content").eq("bot_row_id", bot.id).eq("chat_id", msg.chat.id).order("created_at", { ascending: false }).limit(24);
		const history = (rows ?? []).reverse().map((r) => ({
			role: r.role,
			content: r.content
		}));
		const who = msg.from?.first_name ?? msg.from?.username ?? "quelqu'un";
		const raw = await chelsieReply([...history, {
			role: "user",
			content: cleaned
		}], isPrivate ? `Tu parles en privé avec ${who}.` : `Tu es dans le groupe "${msg.chat.title ?? ""}", c'est ${who} qui t'écrit.`);
		const askedVoice = asksForVoice(cleaned);
		const reply = stripVoiceTag(raw);
		const voiceMode = await getVoiceMode(db, bot.id, msg.chat.id);
		if (voiceMode === "always" || askedVoice || voiceMode !== "off" && (isPresent || wantsVoiceTag(raw) || reply.length > VOICE_THRESHOLD)) {
			await tgCall(token, "sendChatAction", {
				chat_id: msg.chat.id,
				action: "record_voice"
			}).catch(() => {});
			const speech = await punctuateForSpeech(reply);
			await sendVoiceOrText(token, msg.chat.id, msg.message_id, reply, speech);
		} else await tgCall(token, "sendMessage", {
			chat_id: msg.chat.id,
			reply_to_message_id: msg.message_id,
			text: reply
		});
		await db.from("bot_messages").insert([{
			bot_row_id: bot.id,
			chat_id: msg.chat.id,
			role: "user",
			content: cleaned
		}, {
			bot_row_id: bot.id,
			chat_id: msg.chat.id,
			role: "assistant",
			content: reply
		}]);
	} catch (err) {
		console.error("telegram webhook error", err);
	}
	return Response.json({ ok: true });
} } } });
var rootRouteChildren = {
	IndexRoute: Route$2.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$3
	}),
	ApiExportZipRoute: Route$1.update({
		id: "/api/export-zip",
		path: "/api/export-zip",
		getParentRoute: () => Route$3
	}),
	ApiPublicTgBotIdRoute: Route.update({
		id: "/api/public/tg/$botId",
		path: "/api/public/tg/$botId",
		getParentRoute: () => Route$3
	})
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
