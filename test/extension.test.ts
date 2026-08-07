import assert from "node:assert/strict";
import test from "node:test";
import { SettingsManager } from "@earendil-works/pi-coding-agent";
import extension from "../extensions/pi-dont-change-my-defaults/index.ts";

void test("prevents default model settings from being changed", () => {
  const settings = SettingsManager.prototype;
  extension();

  const receiver = {} as SettingsManager;

  assert.equal(settings.setDefaultModelAndProvider.call(receiver, "provider", "model"), undefined);
  assert.equal(settings.setDefaultModel.call(receiver, "model"), undefined);
  assert.equal(settings.setDefaultProvider.call(receiver, "provider"), undefined);
  assert.equal(settings.setDefaultThinkingLevel.call(receiver, "high"), undefined);
  assert.deepEqual(receiver, {});
});
