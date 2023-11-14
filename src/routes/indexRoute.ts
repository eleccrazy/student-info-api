import { Router, Request, Response } from 'express';

const indexRouter = Router();

const students = [
  { id: 1, firstName: 'John', lastName: 'Doe', age: 20, gender: 'Male' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', age: 19, gender: 'Female' },
  { id: 3, firstName: 'Michael', lastName: 'Johnson', age: 21, gender: 'Male' },
  { id: 4, firstName: 'Emily', lastName: 'Brown', age: 20, gender: 'Female' },
  { id: 5, firstName: 'David', lastName: 'Davis', age: 22, gender: 'Male' },
  { id: 6, firstName: 'Emma', lastName: 'Wilson', age: 19, gender: 'Female' },
  { id: 7, firstName: 'Daniel', lastName: 'Taylor', age: 20, gender: 'Male' },
  { id: 8, firstName: 'Olivia', lastName: 'Thomas', age: 19, gender: 'Female' },
  { id: 9, firstName: 'Sophia', lastName: 'Anderson', age: 21, gender: 'Female' },
  { id: 10, firstName: 'James', lastName: 'Miller', age: 22, gender: 'Male' }
];

indexRouter.get('/', (req: Request, res: Response) => {
    res.send('Welcome to student information api!');
  });


  indexRouter.get('/students', (req: Request, res: Response) => {
    res.send(students)
  })

  indexRouter.get('/departments', (req: Request, res: Response) => {
    res.send({message: 'List of departments'})
  })

  export default indexRouter;

