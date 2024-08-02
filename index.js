import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

const app = express();
const PORT = process.env.PORT || 4000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(join(__dirname)));

// Handle requests to index.html
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
