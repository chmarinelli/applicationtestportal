import BaseModel from '../base-model';

export default class PermitTypeModel extends BaseModel {
  description: string | null = null;

  constructor(entity?: Partial<PermitTypeModel>) {
    super();
    for (const key in entity) {
      if (this.hasOwnProperty(key)) {
        (this as any)[key] = (entity as any)[key];
      }
    }
  }
}
