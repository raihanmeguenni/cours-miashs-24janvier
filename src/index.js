import "dotenv/config";
import Fastify from "fastify";
import { getApiMovies } from "./getApiMovies.js";
import { getApiWatchlist } from "./getApiWatchlist.js";
const fastify = Fastify({
  logger: true,
});

fastify.get("/api/movies", getApiMovies);
fastify.get("/api/watchlist", getApiWatchlist);

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
