import { BaseReqInterface } from '../../../../core/interface/base-req.interface';
import { BrandModel } from './brand.model';

export class BrandReqModel implements BaseReqInterface {
  name: string;
  brandLogo: string;
  description: string;
  id: number;

  constructor() {
    this.name = '';
    this.brandLogo = '';
    this.description = '';
    this.id = 0;
  }

  clone(dto: BrandModel | BrandReqModel): BrandReqModel {
    if (dto.name) {
      this.name = dto.name;
    }
    if (dto.brandLogo) {
      this.brandLogo = dto.brandLogo;
    }
    if (dto.description) {
      this.description = dto.description;
    }
    if (dto.id) {
      this.id = dto.id;
    }

    return this;
  }

  convert(): Record<string, any> {
    return {
      name: this.name,
      brand_logo: this.brandLogo,
      description: this.description,
      id: this.id,
    };
  }
}
