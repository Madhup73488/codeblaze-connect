export type User = {
  id: string;
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  enrolledCourses: string[];
};

export const users: User[] = [
  {
    id: '1',
    email: 'test@test.com',
    password: 'password',
    firstName: 'Test',
    lastName: 'User',
    enrolledCourses: ['javascript-fundamentals'],
  },
];
