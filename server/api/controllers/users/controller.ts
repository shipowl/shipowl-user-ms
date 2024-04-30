import { Request, Response } from 'express';
import { responseHelper } from '../../helpers/response.helper';
import { ResponsePayload } from '../../interfaces';
import { login } from '../../services/users.service';
export class Controller {
  login = async (req: Request, res: Response): Promise<ResponsePayload> => {
    const response = await login(req.body.phone);
    return responseHelper(res, response.status, response);
  };
}
export default new Controller();
