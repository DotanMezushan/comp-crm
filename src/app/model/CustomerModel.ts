export interface CustomerModel{
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    birthday?: Date;
    address?: string;
    notes?: string;
    isGuy?: boolean;
}