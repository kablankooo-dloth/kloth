/* -------------------------------------------------------------------------- */
/*                             Import dependencies                            */
/* -------------------------------------------------------------------------- */

// config dotenv: process.env[$envVar]
import "dotenv/config";
import express from "express";

/* -------------------------------------------------------------------------- */

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
	res.status(200).json({
		message: "Hello World",
	});
});

const PORT = Number(process.env.PORT);

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
