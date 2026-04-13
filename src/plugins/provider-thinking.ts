import type {
  ProviderDefaultThinkingPolicyContext,
  ProviderThinkingPolicyContext,
} from "./provider-thinking.types.js";

type ThinkingHookParams<TContext> = {
  provider: string;
  context: TContext;
};

/** Control UI build: no provider plugin registry in the browser. */
export function resolveProviderBinaryThinking(
  _params: ThinkingHookParams<ProviderThinkingPolicyContext>,
): boolean | undefined {
  return undefined;
}

export function resolveProviderXHighThinking(
  _params: ThinkingHookParams<ProviderThinkingPolicyContext>,
): boolean | undefined {
  return undefined;
}

export function resolveProviderDefaultThinkingLevel(
  _params: ThinkingHookParams<ProviderDefaultThinkingPolicyContext>,
):
  | "off"
  | "minimal"
  | "low"
  | "medium"
  | "high"
  | "xhigh"
  | "adaptive"
  | null
  | undefined {
  return undefined;
}
