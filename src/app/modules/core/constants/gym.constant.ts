import { Gym } from "src/app/models/gym";

export const GYM_TITLE_TEXT = 'Gym';

export const ADD_GYM_BUTTON_TEXT = '+ Add gym';

export const ADD_GYM_ROUTE = '/gyms/add';

export const SUCCESS_TEXT_CREATED_GYM = 'Gym added successfully!';

export const GYM_DUMMY_DATA : Gym[] = [
    {
        gymId: 1,
        name: 'SuperGym',
        cityId: 1,
        address: 'Calle falsa 123',
        zipCode: 12345,
        phoneNumber: 123456789,
        email: 'SuperGym@gmail.com',
        imageUrl: 'https://www.stylist.co.uk/images/app/uploads/2019/04/15125144/john-arano-1136867-unsplash-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress',
        selected: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 1,
    },
    {
        gymId: 2,
        name: 'Gym2',
        cityId: 1,
        address: 'Calle 2',
        zipCode: 11901,
        phoneNumber: 123456789,
        selected : false,
        email: 'Gym2@cr.com',
        imageUrl: 'https://static.wixstatic.com/media/04b6b7_ce7b270a3571402e8ce4527e3b0e2d5b~mv2.jpg/v1/crop/x_45,y_433,w_2985,h_2985/fill/w_256,h_256,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/A7302186.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 1,
    },
    {
        name: "Gym Solid",
        cityId: 1,
        address: "General Viejo",
        zipCode: 11903,
        phoneNumber: 84299361,
        email: "Solid@gmail.com",
        imageUrl: "C:\\fakepath\\actividad_4.jpg",
        gymId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 1,
        selected: true
    }
];