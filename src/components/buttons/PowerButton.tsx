import { call } from "@decky/api";
import { ConfirmModal, DialogButton, showModal } from "@decky/ui";
import { useState } from "react";
import { FaPowerOff } from "react-icons/fa";
import { focusHalo, DANGER, toolbarBtnStyle } from "../Styled";
import { useQamUi } from "../../qamUi";
import { publishDiscordRuntime } from "../../hooks/useSteamcordState";
import { t } from "../../i18n";

// Turns the Discord session off from the voice toolbar, so it is one press
// away instead of inside Settings. Same action and the same confirmation as
// the Settings control: stopping Discord ends the call and any sharing.
async function turnOff() {
  try {
    const result = await call<[boolean], { ok: boolean; enabled?: boolean }>("set_discord_runtime", false);
    if (typeof result?.enabled === "boolean") publishDiscordRuntime(result.enabled);
  } catch { }
}

function askTurnOff() {
  showModal(<ConfirmModal
    strTitle={t("discord_runtime_title")}
    strDescription={t("discord_runtime_confirm")}
    strOKButtonText={t("discord_runtime_stop")}
    strCancelButtonText={t("discord_runtime_cancel")}
    onOK={() => { turnOff(); }}
  />);
}

export function PowerButton() {
  const { px } = useQamUi();
  const [focused, setFocused] = useState(false);
  const style = {
    ...toolbarBtnStyle(px),
    display: "flex", alignItems: "center", justifyContent: "center",
    borderRadius: px(6), color: "#fff",
    background: "rgba(255,255,255,0.06)",
    ...focusHalo(DANGER, focused, 1.06),
  };
  const fh = { onFocus: () => setFocused(true), onBlur: () => setFocused(false),
               onGamepadFocus: () => setFocused(true), onGamepadBlur: () => setFocused(false) };

  if (!DialogButton) {
    return (
      <button onClick={askTurnOff} title={t("discord_runtime_off")} {...fh}
        style={{ ...style, border: "none", cursor: "pointer" }}>
        <FaPowerOff size={px(20)} />
      </button>
    );
  }
  return (
    <DialogButton noFocusRing onClick={askTurnOff} style={style} {...fh}>
      <FaPowerOff size={px(20)} />
    </DialogButton>
  );
}
