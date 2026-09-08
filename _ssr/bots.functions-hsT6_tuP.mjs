import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { a as getMe, f as webhookUrl, i as deleteWebhook, o as setCommands, s as setWebhook } from "./telegram.server-BUOYZjRl.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bots.functions-hsT6_tuP.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var BASE_URL = "https://project--0b8c40b0-3531-496b-a990-979a26d6a635-dev.lovable.app";
var listBots_createServerFn_handler = createServerRpc({
	id: "42cd41816fa6cf591e4868cd2849cd80b96cd5d7d3b52685b234d18e1db3ead6",
	name: "listBots",
	filename: "src/lib/bots.functions.ts"
}, (opts) => listBots.__executeServer(opts));
var listBots = createServerFn({ method: "GET" }).handler(listBots_createServerFn_handler, async () => {
	const { supabaseAdmin } = await import("./client.server-KzwUIAkW.mjs");
	const { data, error } = await supabaseAdmin.from("bots").select("id, username, first_name, webhook_ok, created_at").order("created_at", { ascending: false });
	if (error) throw new Error(error.message);
	return data ?? [];
});
var connectBot_createServerFn_handler = createServerRpc({
	id: "8d3b82a551c8a53f4dd1d9697bd3cf3977162fd40a63c90935a3feb01ec087ab",
	name: "connectBot",
	filename: "src/lib/bots.functions.ts"
}, (opts) => connectBot.__executeServer(opts));
var connectBot = createServerFn({ method: "POST" }).inputValidator((data) => objectType({ token: stringType().min(20) }).parse(data)).handler(connectBot_createServerFn_handler, async ({ data }) => {
	const token = data.token.trim();
	const me = await getMe(token);
	const { supabaseAdmin } = await import("./client.server-KzwUIAkW.mjs");
	const { data: row, error } = await supabaseAdmin.from("bots").upsert({
		token,
		bot_id: me.id,
		username: me.username ?? null,
		first_name: me.first_name ?? null,
		webhook_ok: false
	}, { onConflict: "token" }).select("id, username, first_name, webhook_ok, created_at").single();
	if (error) throw new Error(error.message);
	await setWebhook(token, webhookUrl(BASE_URL, row.id));
	await setCommands(token);
	const { data: updated } = await supabaseAdmin.from("bots").update({ webhook_ok: true }).eq("id", row.id).select("id, username, first_name, webhook_ok, created_at").single();
	return updated ?? row;
});
var removeBot_createServerFn_handler = createServerRpc({
	id: "4865e079779a1f166acbae00e7d226adf02a1a79f7c3b05f09acce7b07dfb919",
	name: "removeBot",
	filename: "src/lib/bots.functions.ts"
}, (opts) => removeBot.__executeServer(opts));
var removeBot = createServerFn({ method: "POST" }).inputValidator((data) => objectType({ id: stringType().uuid() }).parse(data)).handler(removeBot_createServerFn_handler, async ({ data }) => {
	const { supabaseAdmin } = await import("./client.server-KzwUIAkW.mjs");
	const { data: bot } = await supabaseAdmin.from("bots").select("token").eq("id", data.id).maybeSingle();
	if (bot?.token) await deleteWebhook(bot.token);
	const { error } = await supabaseAdmin.from("bots").delete().eq("id", data.id);
	if (error) throw new Error(error.message);
	return { ok: true };
});
//#endregion
export { connectBot_createServerFn_handler, listBots_createServerFn_handler, removeBot_createServerFn_handler };
