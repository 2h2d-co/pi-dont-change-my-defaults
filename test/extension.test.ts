import assert from "node:assert/strict";
import test from "node:test";
import { SettingsManager } from "@earendil-works/pi-coding-agent";
import extension from "../extensions/index.ts";

test("prevents default model settings from being changed", () => {
  extension();

  const receiver = SettingsManager.inMemory();

  assert.equal(receiver.setDefaultModelAndProvider("provider", "model"), undefined);
  assert.equal(receiver.setDefaultModel("model"), undefined);
  assert.equal(receiver.setDefaultProvider("provider"), undefined);
  assert.equal(receiver.setDefaultThinkingLevel("high"), undefined);
  assert.equal(receiver.getDefaultProvider(), undefined);
  assert.equal(receiver.getDefaultModel(), undefined);
  assert.equal(receiver.getDefaultThinkingLevel(), undefined);
});
