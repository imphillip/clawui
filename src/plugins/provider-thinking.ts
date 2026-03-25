/**
 * Browser UI bundle: no OpenClaw plugin registry. Exported hooks always defer to
 * fallbacks in `auto-reply/thinking.shared.ts` / `thinking.ts`.
 */
type ThinkingHookParams<TContext> = {
  provider: string;
  context: TContext;
};

export function resolveProviderBinaryThinking(
  _params: ThinkingHookParams<{ provider: string; modelId: string }>,
): boolean | undefined {
  return undefined;
}

export function resolveProviderXHighThinking(
  _params: ThinkingHookParams<{ provider: string; modelId: string }>,
): boolean | undefined {
  return undefined;
}

export function resolveProviderDefaultThinkingLevel(_params: ThinkingHookParams<{
  provider: string;
  modelId: string;
  reasoning?: unknown;
}>): undefined {
  return undefined;
}
