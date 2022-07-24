import { BaseReqInterface } from './base-req.interface';

export class BasePagingParamReqModel implements BaseReqInterface {
  page: number;
  size: number;

  constructor() {
    this.page = 1;
    this.size = 10;
  }

  convert(): Record<string, any> {
    return {
      skip: this.page * this.size - this.size,
      limit: this.size,
    };
  }

  clone(data: Record<string, number>): BaseReqInterface {
    this.page = data['page'];
    this.size = data['size'];
    return this;
  }
}
