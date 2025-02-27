// types/registration.ts
export interface ChildInfo {
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: Date | null;
    gender: 'Male' | 'Female' | 'Other';
    class: string;
    homeAddress: string;
    passportPhoto: File | null;
  }
  
  export interface ParentGuardianInfo {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    homeAddress: string;
  }
  
  export interface RegistrationFormData {
    children: ChildInfo[];
    parentGuardian: ParentGuardianInfo;
  }