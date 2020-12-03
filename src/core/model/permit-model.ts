import BaseModel from "../base-model";
import PermitTypeModel from './permit-type-model';

export default class PermitModel extends BaseModel {
  employeeName: string | null = null;
  employeeLastName: string | null = null;
  permitTypeId: number | null = null;
  permitType: PermitTypeModel | null = null;
  permitDate: Date | null = null;

  constructor(entity?: Partial<PermitModel>) {
    super();
    for (const key in entity) {
      if (this.hasOwnProperty(key)) {
        (this as any)[key] = (entity as any)[key];
      }
    }
  }
}
