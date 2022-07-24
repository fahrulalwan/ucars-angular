import {BaseInterface} from "../../../../core/interface/base.interface";

export class BrandModel implements BaseInterface {
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

  convert(dto: Record<string, any>): BrandModel {
    if (dto['name']) {
      this.name = dto['name'];
    }
    if (dto['brand_logo']) {
      this.brandLogo = dto['brand_logo'];
    }
    if (dto['description']) {
      this.description = dto['description'];
    }
    if (dto['id']) {
      this.id = dto['id'];
    }

    return this;
  }
}
