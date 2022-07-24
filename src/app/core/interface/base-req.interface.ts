export interface BaseReqInterface {
  clone(data: Record<string, any>): BaseReqInterface;

  convert(): Record<string, any>;
}
