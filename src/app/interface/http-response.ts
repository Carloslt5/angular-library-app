export interface SuccessResponseAPI {
  status: boolean;
  message: string;
}

export interface ErrorMessage {
  message: string;
}

export type APIResponse = SuccessResponseAPI | ErrorMessage;
