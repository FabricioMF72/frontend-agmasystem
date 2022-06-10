export const USER_DUMMY_DATA = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      identiticationId: 123456789,
      birthDate: new Date('01/01/1990'),
      email: 'John@Doe.com',
      status : "active",
      phone: '123456789',
      firstEmergencyNumber: '123456789',
      secondEmergencyNumber: '123456789',
      address: '150 mts west of the city',
      districtId: 1
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      identiticationId: 323456789,
      birthDate: new Date('01/05/1992'),
      email: 'Jane@Doe.com',
      status : "inactive",
      phone: '423456782',
      firstEmergencyNumber: '423456782',
      secondEmergencyNumber: '423456782',
      address: '120 mts west of the city',
      districtId: 2
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

export const SUCCESS_TEXT = 'User added successfully!';

export const ERROR_TEXT = 'Something went wrong!';

export const TOAST_POSITION = 'toast-top-right';

export const TOAST_DURATION = 3000;