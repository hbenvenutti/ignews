/* eslint-disable import/no-anonymous-default-export */
import {NextApiRequest, NextApiResponse} from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'huam'},
    { id: 2, name: 'tai'},
    { id: 3, name: 'joão'},
    { id: 4, name: 'dante'},
  ];

  return response.json(users);
}
