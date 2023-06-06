import { assertEquals } from "https://deno.land/std@0.190.0/testing/asserts.ts";
import { calc_dist } from "./index"

Deno.test("test distance is zero between the same place", () => {
    const zerodist = calc_dist(10, 10, 10, 10)
    assertEquals(zerodist, 0);
});
Deno.test("test distance between sample coords", () => {
    const testdist = calc_dist(25, 5, 10, 4)
    assertEquals(testdist, 0);
});