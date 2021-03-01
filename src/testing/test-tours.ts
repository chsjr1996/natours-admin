import { Tour } from 'src/app/tours/shared/tours.service';

export function getTestTours(): Tour[] {
  return [
    {
      id: '1',
      create_at: Date.now().toString(),
      updated_at: Date.now().toString(),
      user_id: '1',
      start_date: Date.now().toString(),
      name: 'Awesome tour 1',
      slug: 'awesome-tour-1',
      duration: 5,
      max_group_size: 4,
      difficulty: 'easy',
      price: 200,
      summary: 'Awesome summary',
      description: 'Awesome description',
      secret_tour: false,
      deleted_at: '',
      is_active: true,
    },
    {
      id: '2',
      create_at: Date.now().toString(),
      updated_at: Date.now().toString(),
      user_id: '1',
      start_date: Date.now().toString(),
      name: 'Awesome tour 2',
      slug: 'awesome-tour-2',
      duration: 5,
      max_group_size: 4,
      difficulty: 'medium',
      price: 200,
      summary: 'Awesome summary',
      description: 'Awesome description',
      secret_tour: false,
      deleted_at: '',
      is_active: true,
    },
  ];
}
