import { describe, it, expect } from "vitest";
import dotenv from "dotenv";

describe("Env variables", () => {
	it("loads PORT from .env", () => {
		dotenv.config();

		expect(process.env.PORT).toBeDefined();
	});
});
