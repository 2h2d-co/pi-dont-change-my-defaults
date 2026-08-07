import { SettingsManager } from "@earendil-works/pi-coding-agent";

const ignoreDefaultChange = () => {};

export default function extension() {
  const settings = SettingsManager.prototype;

  settings.setDefaultModelAndProvider = ignoreDefaultChange;
  settings.setDefaultModel = ignoreDefaultChange;
  settings.setDefaultProvider = ignoreDefaultChange;
  settings.setDefaultThinkingLevel = ignoreDefaultChange;
}
