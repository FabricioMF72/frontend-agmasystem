import { User } from "src/app/models/user";

export const USER_DUMMY_DATA: User[] = [
  {
    userId: 1,
    firstName: "John",
    lastName: "Doe",
    identiticationId: 123456789,
    genderId: 1,
    birthDate: new Date("10/10/1990"),
    email: "Client1@gmail.com",
    phoneNumber: "123456789",
    statusSubscription: "Active",
    firstEmergencyNumber: "123456789",
    secondEmergencyNumber: "123456789",
    cityId: 1,
    address: "Address 1",
    zipCode: 12345,
    gymId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    created_by: 1,
  },
  {
    userId: 2,
    firstName: "Josue",
    lastName: "Betancourt",
    identiticationId: 263423489,
    genderId: 1,
    birthDate: new Date("02/08/1999"),
    email: "Client2@gmail.com",
    phoneNumber: "873456789",
    statusSubscription: "Active",
    firstEmergencyNumber: "523456789",
    secondEmergencyNumber: "323456789",
    cityId: 3,
    address: "Address 3",
    zipCode: 62425,
    gymId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    created_by: 1,
  }
];
export const DEFAULT_STATUS = "active";

export const ALL_STATUS = "all";

export const FILTER_LIST_ITEMS = [
  {
    name: 'All',
    value: 'all'
  },
  {
    name: 'Active',
    value: 'active'
  },
  {
    name: 'Inactive',
    value: 'inactive'
  },
  {
    name: 'Pending',
    value: 'pending'
  }
]

export const ORDER_LIST_ITEMS = [
  {
    name: 'Name',
    value: 'name'
  },
  {
    name: 'Status',
    value: 'status'
  },
  {
    name: 'Date',
    value: 'date'
  },
  {
    name: 'Oldest User',
    value: 'oldest'
  },
  {
    name: 'Newest User',
    value: 'newest'
  }
]

export const FILTER_LABEL_TEXT = 'Filter by status:';

export const ORDER_LABEL_TEXT = 'Order by:';

export const SEARCH_LABEL_TEXT = 'Search for name, identification or email:';

export const USER_TITLE_TEXT = 'Users';

export const ADD_USER_BUTTON_TEXT = '+ Add user';

export const ADD_USER_ROUTE = '/users/add';

export const USER_ROUTE = '/users';

export const SUCCESS_TEXT_CREATED_USER = 'User added successfully!';

export const ERROR_TEXT = 'Something went wrong!';

export const TOAST_POSITION = 'toast-top-right';

export const TOAST_DURATION = 3000;