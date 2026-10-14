import { describe, it, expect } from "vitest";
import dotenv from "dotenv";

describe("Env variables", () => {
	it("PORT in .env", () => {
		dotenv.config();

		expect(process.env.PORT).toBeDefined();
	});
});
