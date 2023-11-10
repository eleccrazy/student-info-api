import { Router, Request, Response } from 'express';

const indexRouter = Router();

indexRouter.get('/', (req: Request, res: Response) => {
    res.send('Welcome to student information api!');
  });


  indexRouter.get('/students', (req: Request, res: Response) => {
    res.send([
      {
        firstName: 'Gizachew',
        lastName: 'Bayness',
        gender: 'Male',
        department: 'Çomputer Science'
      }
    ])
  })

  indexRouter.get('/departments', (req: Request, res: Response) => {
    res.send({message: 'List of departments'})
  })

  export default indexRouter;

