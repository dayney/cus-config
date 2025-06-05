import { describe, it, expect } from "vitest";
import prettier from "prettier";
import fs from "fs";
import path from "path";

describe("Prettier 格式校验", () => {
  it("src/index.ts 应符合 .prettierrc 配置", async () => {
    const filePath = path.resolve(__dirname, "../src/index.ts");
    const content = fs.readFileSync(filePath, "utf8");
    const config = await prettier.resolveConfig(filePath);
    const formatted = await prettier.format(content, {
      ...config,
      filepath: filePath,
    });
    expect(formatted).toBe(content);
  });
});
