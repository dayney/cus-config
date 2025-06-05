import { describe, it, expect } from "vitest";
import { ESLint } from "eslint";

const eslint = new ESLint();

// comma-dangle
// -------------------
describe("ESLint 规则: comma-dangle", () => {
  it("正例不应有 comma-dangle 报错", async () => {
    const code = "const arr = [1, 2, 3];";
    const results = await eslint.lintText(code, { filePath: "foo.ts" });
    const messages = results[0].messages.filter(
      (m) => m.ruleId === "comma-dangle",
    );
    expect(messages).toHaveLength(0);
  });
  it("反例应有 comma-dangle 报错", async () => {
    const code = "const arr = [1, 2, 3,];";
    const results = await eslint.lintText(code, { filePath: "foo.ts" });
    const messages = results[0].messages.filter(
      (m) => m.ruleId === "comma-dangle",
    );
    expect(messages.length).toBeGreaterThan(0);
  });
});

// quotes
// -------------------
describe("ESLint 规则: quotes", () => {
  it("正例不应有 quotes 报错", async () => {
    const code = "const msg = 'hello';";
    const results = await eslint.lintText(code, { filePath: "foo.ts" });
    const messages = results[0].messages.filter((m) => m.ruleId === "quotes");
    expect(messages).toHaveLength(0);
  });
  it("反例应有 quotes 报错", async () => {
    const code = 'const msg = "hello";';
    const results = await eslint.lintText(code, { filePath: "foo.ts" });
    const messages = results[0].messages.filter((m) => m.ruleId === "quotes");
    expect(messages.length).toBeGreaterThan(0);
  });
});

// no-debugger
// -------------------
describe("ESLint 规则: no-debugger", () => {
  it("正例不应有 no-debugger 报错", async () => {
    const code = "const a = 1;";
    const results = await eslint.lintText(code);
    const messages = results[0].messages.filter(
      (m) => m.ruleId === "no-debugger",
    );
    expect(messages).toHaveLength(0);
  });
  it("反例应有 no-debugger 报错", async () => {
    const code = "debugger;";
    const results = await eslint.lintText(code);
    const messages = results[0].messages.filter(
      (m) => m.ruleId === "no-debugger",
    );
    expect(messages.length).toBeGreaterThan(0);
  });
});

// @typescript-eslint/no-explicit-any
// -------------------
describe("ESLint 规则: @typescript-eslint/no-explicit-any", () => {
  it("正例不应有 no-explicit-any 报错", async () => {
    const code = "function foo(x: number) { return x; }";
    const results = await eslint.lintText(code, { filePath: "foo.ts" });
    const messages = results[0].messages.filter(
      (m) => m.ruleId === "@typescript-eslint/no-explicit-any",
    );
    expect(messages).toHaveLength(0);
  });
  it("反例应有 no-explicit-any 报错", async () => {
    const code = "function foo(x: any) { return x; }";
    const results = await eslint.lintText(code, { filePath: "foo.ts" });
    const messages = results[0].messages.filter(
      (m) => m.ruleId === "@typescript-eslint/no-explicit-any",
    );
    expect(messages.length).toBeGreaterThan(0);
  });
});

// @typescript-eslint/explicit-function-return-type
// -------------------
describe("ESLint 规则: @typescript-eslint/explicit-function-return-type", () => {
  it("正例不应有 explicit-function-return-type 报错", async () => {
    const code = "function foo(): number { return 1; }";
    const results = await eslint.lintText(code, { filePath: "foo.ts" });
    const messages = results[0].messages.filter(
      (m) => m.ruleId === "@typescript-eslint/explicit-function-return-type",
    );
    expect(messages).toHaveLength(0);
  });
  it("反例应有 explicit-function-return-type 报错", async () => {
    const code = "function foo() { return 1; }";
    const results = await eslint.lintText(code, { filePath: "foo.ts" });
    const messages = results[0].messages.filter(
      (m) => m.ruleId === "@typescript-eslint/explicit-function-return-type",
    );
    expect(messages.length).toBeGreaterThan(0);
  });
});

// @typescript-eslint/naming-convention
// -------------------
describe("ESLint 规则: @typescript-eslint/naming-convention", () => {
  it("正例不应有 naming-convention 报错", async () => {
    const code = "const fooBar = 1;";
    const results = await eslint.lintText(code, { filePath: "foo.ts" });
    const messages = results[0].messages.filter(
      (m) => m.ruleId === "@typescript-eslint/naming-convention",
    );
    expect(messages).toHaveLength(0);
  });
  it("反例应有 naming-convention 报错", async () => {
    const code = "const foo_bar = 1;";
    const results = await eslint.lintText(code, { filePath: "foo.ts" });
    const messages = results[0].messages.filter(
      (m) => m.ruleId === "@typescript-eslint/naming-convention",
    );
    expect(messages.length).toBeGreaterThan(0);
  });
});

// complexity
// -------------------
describe("ESLint 规则: complexity", () => {
  it("正例不应有 complexity 报错", async () => {
    const code = "function foo(a) { if(a) return 1; return 2; }";
    const results = await eslint.lintText(code, { filePath: "foo.ts" });
    const messages = results[0].messages.filter(
      (m) => m.ruleId === "complexity",
    );
    expect(messages).toHaveLength(0);
  });
  it("反例应有 complexity 报错", async () => {
    const code =
      "function foo(a) { if(a) return 1; else if(a>1) return 2; else if(a>2) return 3; else if(a>3) return 4; else if(a>4) return 5; else if(a>5) return 6; else if(a>6) return 7; }";
    const results = await eslint.lintText(code, { filePath: "foo.ts" });
    const messages = results[0].messages.filter(
      (m) => m.ruleId === "complexity",
    );
    expect(messages.length).toBeGreaterThan(0);
  });
});
