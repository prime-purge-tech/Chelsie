//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-Cgdrnh56.js
var manifest = {
	"42cd41816fa6cf591e4868cd2849cd80b96cd5d7d3b52685b234d18e1db3ead6": {
		functionName: "listBots_createServerFn_handler",
		importer: () => import("./_ssr/bots.functions-hsT6_tuP.mjs")
	},
	"4865e079779a1f166acbae00e7d226adf02a1a79f7c3b05f09acce7b07dfb919": {
		functionName: "removeBot_createServerFn_handler",
		importer: () => import("./_ssr/bots.functions-hsT6_tuP.mjs")
	},
	"8d3b82a551c8a53f4dd1d9697bd3cf3977162fd40a63c90935a3feb01ec087ab": {
		functionName: "connectBot_createServerFn_handler",
		importer: () => import("./_ssr/bots.functions-hsT6_tuP.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
