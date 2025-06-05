import { describe, it, expect } from "vitest";
import lint from "@commitlint/lint";
import config from "../commitlint.config.cjs";

describe("Commitlint 校验", () => {
  it("规范提交信息应校验通过", async () => {
    const message = "feat: add new feature";
    const result = await lint(message, config.rules, { defaultIgnores: true });
    expect(result.valid).toBe(true);
  });

  it("不规范的提交信息应校验失败", async () => {
    const message = "foo: bar";
    const result = await lint(message, config.rules, { defaultIgnores: true });
    expect(result.valid).toBe(false);
  });
});
