//importing joi
import Joi from '@hapi/joi';
//imprting JoiAuthbearer
import { JoiAuthBearer } from '../helpers/validator';

export default {
  apiKey: Joi.object()
    .keys({
      'x-api-key': Joi.string().required(),
    })
    .unknown(true),
  auth: Joi.object()
    .keys({
      authorization: JoiAuthBearer().required(),
    })
    .unknown(true),
};
