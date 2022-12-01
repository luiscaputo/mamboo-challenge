export interface IAppResponse<Data> {
  success: boolean;
  data?: Data | void;
  message?: string;
}
