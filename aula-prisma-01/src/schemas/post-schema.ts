import JoiDate from '@joi/date';
import JoiBase, { Root } from 'joi';

const Joi: Root = JoiBase.extend(JoiDate);

import { CreatePost } from "../repositories/post-repository";

export const postSchema = Joi.object<CreatePost>({
  username: Joi.string().required(),
  title: Joi.string().required(),
  content: Joi.string().required(),
  createdAt: Joi.date().format('YYYY/MM/DD')
})