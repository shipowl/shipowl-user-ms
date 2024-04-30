// import {
//   BlogsPayload,
//   ResponsePayload,
//   DBReqPayload,
//   UsersPayload,
// } from "../interfaces";
// const { QueryTypes, Op } = require("sequelize");
// import sequelizeInit from "../../db/connection";
// import BlogsModel from "../models/blogs.model";
// import UsersModel from "../models/users.model";
// import ImagesModel from "../models/images.model";
// import LinksModel from "../models/links.model";
// import ViewsModel from "../models/views.model";
// import PupularBlogs from "../models/popularBlogs.model";
// import pendingBlogs from "../models/pendingBlogs.model";
// import TagsModel from "../models/tags.model";
// import TagRelationModel from "../models/tagRelation.model";
// import LogsModel from "../models/logs.model";
// import grpcHelper from "./grpchelper.service";
// import jwtHelper from "../middlewares/jwt.helper";
// import getConfig from "../../config";
// const CONFIG = getConfig();

// import mongoHelper from "../helpers/mongo.helper";

// import * as Utils from "./utils.service";

// import { v4 } from "uuid";

// import {
//   findAllBlog,
//   findAllBlogBySearch,
//   findAllBlogByCategory,
//   findAllBlogByTag,
//   CreateBlogBody,
//   CreateDownloadLinks,
//   CreatePopularLinks,
//   CreateTags,
// } from "./queryhelper.service";

// const sequelizeDb = sequelizeInit();

import { ResponsePayload } from '../interfaces';
import { SUCCESS, BADREQUEST } from '../constant/response';

export const login = async (phone: number): Promise<ResponsePayload> => {
  try {
    return {
      message: 'Success',
      error: false,
      status: SUCCESS,
      request: { phone },
      response: {},
    };
  } catch (error) {
    return {
      message: error?.message || 'Login Failed!!',
      error: true,
      status: error?.status || BADREQUEST,
      request: { phone },
    };
  }
};
