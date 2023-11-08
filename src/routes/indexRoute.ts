import { Router, Request, Response } from 'express';

const indexRouter = Router();

indexRouter.get('/', (req: Request, res: Response) => {
    res.send('Welcome to student information api!');
  });

  export default indexRouter;