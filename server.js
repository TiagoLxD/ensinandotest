/* eslint-disable no-undef */
import express from "express";
import { NodeVM } from "vm2";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const app = express();

app.get("/", (req, res) => {
	res.sendFile(join(dirname(__filename), "src", "public", "index.html"));
});

app.use(express.json());

app.post("/run", async (req, res) => {
	const { userCode, expect } = req.body;
	let output = "";
	const vm = new NodeVM({
		timeout: 2000,
		console: "redirect",
	});

	vm.on("console.log", (data) => {
		output += data;
	});

	try {
		await vm.run(`${userCode}`);
		const isCorrect = expect === output;
		return res.json({ success: true, result: output ?? "null", isCorrect });
	} catch (error) {
		console.log(error);
		return res.json({ success: false, error: error.message });
	}
});

app.listen(3000, () => {
	console.log("Server started on port 3000");
});
