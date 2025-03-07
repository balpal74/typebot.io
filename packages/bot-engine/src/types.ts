import type { SessionState } from "@typebot.io/chat-session/schemas";
import type { SetVariableHistoryItem } from "@typebot.io/variables/schemas";
import type { ContinueChatResponse, CustomEmbedBubble } from "./schemas/api";

export type ExecuteLogicResponse = {
  outgoingEdgeId: string | undefined;
  newSessionState?: SessionState;
  newSetVariableHistory?: SetVariableHistoryItem[];
} & Pick<ContinueChatResponse, "clientSideActions" | "logs">;

export type ExecuteIntegrationResponse = {
  outgoingEdgeId: string | undefined;
  newSessionState?: SessionState;
  startTimeShouldBeUpdated?: boolean;
  customEmbedBubble?: CustomEmbedBubble;
  newSetVariableHistory?: SetVariableHistoryItem[];
} & Pick<ContinueChatResponse, "clientSideActions" | "logs">;

export type ParsedReply =
  | { status: "success"; reply: string }
  | { status: "fail" }
  | { status: "skip" };
