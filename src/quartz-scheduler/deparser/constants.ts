import { commonErrorMessage } from "../../constants/errors";

const ErrorMessages = {
  minimumRequired: `${commonErrorMessage}Must have below:
    - seconds
    - minutes
    - hours
    - days of month
    - months
    - days of week
  `
}

export {
  ErrorMessages
}