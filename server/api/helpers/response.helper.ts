export const responseHelper = (
  response: any,
  status: number,
  responseData: any = {}
) => {
  return response.status(status).send(responseData);
};
