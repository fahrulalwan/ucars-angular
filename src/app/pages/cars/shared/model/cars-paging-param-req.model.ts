import { BasePagingParamReqModel } from '../../../../core/interface/base-paging-param-req.model';

export class CarsPagingParamReqModel extends BasePagingParamReqModel {
  brandId: number;

  constructor() {
    super();
    this.brandId = 0;
  }

  override convert(): Record<string, any> {
    return {
      ...super.convert(),
      brand_id: this.brandId,
    };
  }

  override clone(data: Record<string, any>): CarsPagingParamReqModel {
    super.clone(data);
    this.brandId = data['brandId'];

    return this;
  }
}
