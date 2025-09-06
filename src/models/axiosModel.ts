import { AxiosResponse } from 'axios';

export class ServerActionError {
  message: string;
  status_code?: number;
  error_response_data?: unknown | AxiosResponse['data'];

  constructor(
    data: Pick<
      ServerActionError,
      'message' | 'status_code' | 'error_response_data'
    >,
  ) {
    this.message = data.message;
    this.status_code = data.status_code;
    this.error_response_data = data.error_response_data;
  }

  toJson() {
    return {
      message: this.message,
      status_code: this.status_code,
      error_response_data: this.error_response_data,
    };
  }
}
