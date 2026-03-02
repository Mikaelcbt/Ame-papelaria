import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const META_ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;
const PIXEL_ID = process.env.META_PIXEL_ID;

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 8080;

  app.use(express.json());

  // Meta Conversions API Endpoint
  app.post("/api/meta-event", async (req, res) => {
    const { event_name, event_id } = req.body;

    if (!event_name) {
      return res.status(400).json({ error: "event_name is required" });
    }

    const event_time = Math.floor(Date.now() / 1000);

    const payload = {
      data: [
        {
          event_name,
          event_time,
          event_id,
          action_source: "website",
          user_data: {
            // Minimal user data for matching (recommended by Meta)
            client_ip_address: req.ip,
            client_user_agent: req.headers["user-agent"],
          },
        },
      ],
    };

    try {
      const response = await fetch(
        `https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${META_ACCESS_TOKEN}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error("Error sending event to Meta:", error);
      res.status(500).json({ error: "Failed to send event to Meta" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production: Serve static files
    const distPath = path.join(__dirname, "dist");
    app.use(express.static(distPath));
    
    // Fallback for SPA routes - Express 5 compatibility (no '*' wildcard)
    app.use((req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
