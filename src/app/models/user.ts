export interface User {
    userId: number;
    firstName: string;
    lastName: string;
    identiticationId: number;
    genderId: number;
    birthDate: Date;
    email: string;
    phoneNumber: string;
    statusSubscription: string;
    firstEmergencyNumber?: string;
    secondEmergencyNumber?: string;
    cityId: number;
    address: string;
    zipCode: number;
    gymId: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
    created_by: number;
} 

export interface City {
    cityId: number;
    description: string;
    countryId: number;
}

export interface Country {
    countryId: number;
    description: string;
}

export interface Gender{
    genderId: number;
    description: string;
}