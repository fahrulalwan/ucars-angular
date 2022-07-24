import { BasePagingParamReqModel } from '../../../../core/interface/base-paging-param-req.model';

export class BrandPagingParamReqModel extends BasePagingParamReqModel {
  keywords: string;

  constructor() {
    super();
    this.keywords = '';
  }

  override convert(): Record<string, any> {
    return {
      ...super.convert(),
      keywords: this.keywords,
    };
  }

  override clone(data: Record<string, any>): BrandPagingParamReqModel {
    super.clone(data);
    this.keywords = data['keywords'];

    return this;
  }
}
