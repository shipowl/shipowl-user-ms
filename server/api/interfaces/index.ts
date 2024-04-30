export interface AxiosGetRequest {
  url: string;
}

export interface ResponsePayload {
  error: boolean;
  message: string;
  status: number;
  response?: any;
  request?: any;
}

export interface UsersPayload {
  authorId?: number;
  username?: string;
  email?: string;
  password?: string;
  role?: string;
  isActive?: boolean;
}

export interface DBReqPayload {
  where?: any;
  limit?: number;
  offset?: number;
  order?: any;
  update?: any;
  model?: string;
}

export interface CronPayload {
  timer: string;
  callback: any;
  cronName: string;
}
