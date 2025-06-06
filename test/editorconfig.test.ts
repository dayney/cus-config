import { describe, it, expect } from "vitest";
import * as editorconfig from "editorconfig";
import fs from "fs";
import path from "path";

describe("EditorConfig 校验", () => {
  it("src/index.ts 应符合 .editorconfig 规则", async () => {
    const filePath = path.resolve(__dirname, "../mock/index.ts");
    const config = await editorconfig.parse(filePath);
    const content = fs.readFileSync(filePath, "utf8");
    // 示例：校验缩进风格
    expect(config.indent_style).toBe("space");
    // 你可以根据实际 .editorconfig 内容补充更多断言
  });
});
