import { Gym } from "src/app/models/gym";

export const GYM_TITLE_TEXT = 'Gym';

export const ADD_GYM_BUTTON_TEXT = '+ Add gym';

export const ADD_GYM_ROUTE = '/gym/add';

export const GYM_DUMMY_DATA : Gym[] = [
    {
        id: 1,
        name: 'SuperGym',
        country: 'Costa Rica',
        city: 'San Jose',
        address: 'Calle 1',
        zip: '12345',
        phone: '123456789',
        email: 'Gym1@cr.com',
        image: 'https://www.stylist.co.uk/images/app/uploads/2019/04/15125144/john-arano-1136867-unsplash-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: 2,
        name: 'Gym2',
        country: 'Costa Rica',
        city: 'Cartago',
        address: 'Calle 2',
        zip: '12345',
        phone: '123456789',
        email: 'Gym2@cr.com',
        image: 'https://static.wixstatic.com/media/04b6b7_ce7b270a3571402e8ce4527e3b0e2d5b~mv2.jpg/v1/crop/x_45,y_433,w_2985,h_2985/fill/w_256,h_256,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/A7302186.jpg',
        created_at: new Date(),
        updated_at: new Date()
    }
];