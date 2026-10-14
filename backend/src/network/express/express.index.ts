import express, { type Express, type RequestHandler } from "express";

type HttpMethod = "get" | "post" | "put" | "patch" | "delete";

interface RouteOptions {
	method: HttpMethod;
	endpoint: string;
	handler: RequestHandler;
}

export function api() {
	const app: Express = express();

	app.use(express.json());

	function registerRoute({ method, endpoint, handler }: RouteOptions) {
		app[method](endpoint, handler);
	}

	function runApi(port: Number): Boolean {
		try {
			app.listen(port);
			return true;
		} catch (err) {
			console.error(err);
			return false;
		}
	}

	return {
		app,
		registerRoute,
		runApi,
	};
}
