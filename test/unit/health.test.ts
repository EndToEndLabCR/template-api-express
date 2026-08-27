import { describe, expect, it } from "vitest";

import { createHealthRoute } from "../../src/routes/healthRoute";

describe("Health router", () => {
    it("Should contain one get route", () => {
        const healthRouter = createHealthRoute();

        expect(healthRouter.stack).toHaveLength(1);
        expect(healthRouter.stack[0].route?.path).toBe("/health");
    });
});