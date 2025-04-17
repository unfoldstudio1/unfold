import { IBill, StatusEnum } from './type';

export const data_bills: IBill[] = [
  {
    category: {
      name: 'Shopping',
      image:
        'https://user-images.githubusercontent.com/42206067/223720276-635dddef-8411-4d7f-bc2e-d4317f99dace.png',
    },
    amount: 56800,
    status: StatusEnum.Waiting,
    due_date: '20/12/2025',
  },
  {
    category: {
      name: 'Water',
      image:
        'https://user-images.githubusercontent.com/42206067/223720271-f92b6d08-2d41-4573-834e-ccc036b660d7.png',
    },
    amount: 56800,
    status: StatusEnum.Paid,
    due_date: '20/12/2025',
  },
  {
    category: {
      name: 'Food & Drink',
      image:
        'https://user-images.githubusercontent.com/42206067/223720258-405baa92-0de8-49cd-b72a-b78e1553c0e0.png',
    },
    amount: 56800,
    status: StatusEnum.Expired,
    due_date: '20/12/2025',
  },
];
