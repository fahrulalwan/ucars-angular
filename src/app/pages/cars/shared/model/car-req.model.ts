import { BaseReqInterface } from '../../../../core/interface/base-req.interface';
import { CarModel } from './car.model';

export class CarReqModel implements BaseReqInterface {
  name: string;
  description: string;
  brandId: number;
  id: number;

  constructor() {
    this.name = '';
    this.brandId = 0;
    this.description = '';
    this.id = 0;
  }

  clone(dto: CarModel | CarReqModel): CarReqModel {
    if (dto.name) {
      this.name = dto.name;
    }
    if (dto.brandId) {
      this.brandId = dto.brandId;
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
      brand_id: this.brandId,
      description: this.description,
      id: this.id,
    };
  }
}
