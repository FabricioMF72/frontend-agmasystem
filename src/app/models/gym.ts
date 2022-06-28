export interface Gym {
    gymId: number;
    name: string;
    cityId: number;
    address: string;
    zipCode: number;
    phoneNumber: number;
    email: string;
    imageUrl: string;
    selected: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
    createdBy: number;
}