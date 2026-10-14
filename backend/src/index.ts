/* -------------------------------------------------------------------------- */
/*                             Import dependencies                            */
/* -------------------------------------------------------------------------- */

// config dotenv: process.env[$envVar]
import "dotenv/config";
// import the express API
import { api } from "./network/express/express.index.js";

/* -------------------------------------------------------------------------- */

const { app, registerRoute, runApi } = api();

registerRoute({
	method: "get",
	endpoint: "/",
	handler: (_req, res) => {
		res.send("Hello World!");
	},
});

const apiSuccess = runApi(Number(process.env.PORT));
if (apiSuccess) {
	console.log("API is running!");
} else {
	console.log("API is not running!");
}
