import { Request, Response, NextFunction } from 'express';
import { responseHelper } from '../helpers/response.helper';
import { BADREQUEST } from '../constant/response';
import * as yup from 'yup';

export const validateLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  let loginSchema = yup.object({
    phone: yup
      .string()
      .required('Phone Number Required (phone) !')
      .matches(phoneRegExp, 'Phone number is not valid!'),
  });

  loginSchema
    .validate(req.body)
    .then(() => next())
    .catch((err) => {
      responseHelper(res, BADREQUEST, {
        message: err.message,
        error: true,
        // errors: err,
        request: req.body,
      });
    });
};
