export const feedback = ['danger', 'warn', 'success', 'info'] as const
export type Feedback = (typeof feedback)[number]
