import vars from '#design/public-tokens.css'

export const feedback = ['danger', 'warn', 'success', 'info'] as const
export type Feedback = (typeof feedback)[number]

export const feedbackSpec = {
  danger: vars.color.red[930],
  warn: vars.color.yellow[780],
  success: vars.color.green[720],
  info: vars.color.blue[920],
}
