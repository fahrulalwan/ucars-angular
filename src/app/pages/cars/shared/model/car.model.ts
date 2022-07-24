import {BaseInterface} from '../../../../core/interface/base.interface';

export class CarModel implements BaseInterface {
  name: string;
  description: string;
  brandId: number;
  id: number;

  constructor() {
    this.name = '';
    this.description = '';
    this.brandId = 0;
    this.id = 0;
  }

  convert(dto: Record<string, any>): CarModel {
    if (dto['name']) {
      this.name = dto['name'];
    }
    if (dto['description']) {
      this.description = dto['description'];
    }
    if (dto['brand_id']) {
      this.brandId = dto['brand_id'];
    }
    if (dto['id']) {
      this.id = dto['id'];
    }

    return this;
  }
}
