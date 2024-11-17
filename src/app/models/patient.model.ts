export class InsertPatientModel {
  constructor() {
    this.genderIx = 0;
    this.provinceIx = 0;
    this.cityIx = 0;
    this.insuranceID = 0;
  }
  isActive: boolean;
  firstName: string;
  lastName: string;
  fatherName: string;
  nationalCode: string;
  birthDate: string;
  mobileNumber: string;
  genderIx: number;
  isSitizen: boolean;
  provinceIx: number;
  cityIx: number;
  insuranceID: number;
  email: string;
  description: string;
  createDate: string;
  address: string;
  isRegistry: boolean;
}
export class UpdatePatientModel {
  constructor() {
    this.genderIx = 0;
    this.provinceIx = 0;
    this.cityIx = 0;
    this.insuranceID = 0;
  }
  id: string;
  patientID: number;
  isActive: boolean;
  firstName: string;
  lastName: string;
  fatherName: string;
  nationalCode: string;
  birthDate: string;
  mobileNumber: string;
  genderIx: number;
  isSitizen: boolean;
  provinceIx: number;
  cityIx: number;
  insuranceID: number;
  email: string;
  description: string;
  createDate: string;
  address: string;
  isRegistry: boolean;
} 