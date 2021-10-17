

export interface Customer{
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    hobbies?:any [];
    birthday?: Date;
    address?:any[];
    isGuy?: boolean;
    notes?: string;
  
}