import { describe, expect, it } from "vitest";

import app from "../../src/app";
import request from "supertest";

describe("GET api/v1/health", () => {
    it("should return the API health status", async () => {
        const response = await request(app).get("/api/v1/health");
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ status: "OK" });
    });
});