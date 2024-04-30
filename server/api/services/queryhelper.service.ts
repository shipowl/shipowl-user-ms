// const { QueryTypes, Op, fn, col } = require("sequelize");
// import sequelizeInit from "../../db/connection";

// import * as Utils from "./utils.service";

// const sequelizeDb = sequelizeInit();

// export async function findAllBlog({ limit, offset, order, isActive }: any) {
//   // Find by blog title
//   let count: any;
//   let blogs = await sequelizeDb.query(
//     `SELECT b.blogId, b.title, b.postName, b.featuredImage, b.isActive, a.username as author, b.category, b.createdAt, b.updatedAt FROM blogs as b LEFT JOIN authors as a ON a.authorId = b.authorId WHERE b.isActive = :isActive GROUP BY b.blogId ORDER BY ${order} LIMIT :offset,:limit`,
//     {
//       replacements: {
//         limit,
//         offset,
//         order,
//         isActive,
//       },
//       type: QueryTypes.SELECT,
//     }
//   );

//   if (blogs.length) {
//     count = await sequelizeDb.query(
//       `SELECT blogId FROM blogs WHERE isActive = :isActive`,
//       {
//         replacements: {
//           isActive,
//         },
//         type: QueryTypes.SELECT,
//       }
//     );
//   }

//   return { blogs, count: count?.length || 0 };
// }
// export async function findAllBlogBySearch({
//   limit,
//   offset,
//   order,
//   search,
//   isActive,
// }: any) {
//   // Find by blog title
//   let count: any;
//   let blogs = await sequelizeDb.query(
//     `SELECT b.blogId, b.title, b.postName, b.featuredImage, b.isActive, a.username as author, b.category, b.createdAt, b.updatedAt FROM blogs as b LEFT JOIN authors as a ON a.authorId = b.authorId WHERE b.title LIKE :search AND b.isActive = :isActive GROUP BY b.blogId ORDER BY ${order} LIMIT :offset,:limit`,
//     {
//       replacements: {
//         limit,
//         offset,
//         order,
//         search: `%${search}%`,
//         isActive,
//       },
//       type: QueryTypes.SELECT,
//     }
//   );

//   if (blogs.length) {
//     count = await sequelizeDb.query(
//       `SELECT blogId FROM blogs WHERE title LIKE :search AND isActive = :isActive`,
//       {
//         replacements: {
//           search: `%${search}%`,
//           isActive,
//         },
//         type: QueryTypes.SELECT,
//       }
//     );
//   }
//   // Find by category
//   if (!blogs.length) {
//     blogs = await sequelizeDb.query(
//       `SELECT b.blogId, b.title, b.postName, b.featuredImage, b.isActive, a.username as author, COUNT(views.blogId) as views, b.category, b.createdAt, b.updatedAt FROM blogs as b LEFT JOIN authors as a ON a.authorId = b.authorId LEFT JOIN views ON views.blogId = b.blogId WHERE b.category LIKE :search AND b.isActive = :isActive GROUP BY b.blogId ORDER BY ${order} LIMIT :offset,:limit`,
//       {
//         replacements: {
//           limit,
//           offset,
//           order,
//           search: `%${search}%`,
//           isActive,
//         },
//         type: QueryTypes.SELECT,
//       }
//     );
//     if (blogs.length) {
//       count = await sequelizeDb.query(
//         `SELECT blogId FROM blogs WHERE category LIKE :search AND isActive = :isActive`,
//         {
//           replacements: {
//             search: `%${search}%`,
//             isActive,
//           },
//           type: QueryTypes.SELECT,
//         }
//       );
//     }
//   }
//   // Find by tag
//   if (!blogs.length) {
//     blogs = await sequelizeDb.query(
//       `SELECT b.blogId, b.title, b.postName, b.featuredImage, b.isActive, a.username as author, COUNT(views.blogId) as views, b.category, b.createdAt, b.updatedAt FROM blogs as b LEFT JOIN authors as a ON a.authorId = b.authorId LEFT JOIN views ON views.blogId = b.blogId WHERE b.blogId IN(SELECT blogId FROM tagRelation WHERE tagRelation.tagMeta LIKE :search) AND b.isActive = :isActive GROUP BY b.blogId ORDER BY ${order} LIMIT :offset,:limit`,
//       {
//         replacements: {
//           limit,
//           offset,
//           order,
//           search: `%${search}%`,
//           isActive,
//         },
//         type: QueryTypes.SELECT,
//       }
//     );
//     if (blogs.length) {
//       count = await sequelizeDb.query(
//         `SELECT b.blogId FROM blogs as b WHERE b.blogId IN(SELECT blogId FROM tagRelation WHERE tagRelation.tagMeta LIKE :search) AND b.isActive = :isActive`,
//         {
//           replacements: {
//             search: `%${search}%`,
//             isActive,
//           },
//           type: QueryTypes.SELECT,
//         }
//       );
//     }
//   }

//   return { blogs, count: count?.length || 0 };
// }
// export async function findAllBlogByCategory({
//   limit,
//   offset,
//   category,
//   isActive,
// }: any) {
//   // Find by category
//   let count: any;
//   let blogs = await sequelizeDb.query(
//     `SELECT b.blogId, b.title, b.postName, b.featuredImage, b.isActive, a.username as author, b.category, b.createdAt, b.updatedAt FROM blogs as b LEFT JOIN authors as a ON a.authorId = b.authorId WHERE b.category LIKE :category AND b.isActive = :isActive GROUP BY b.blogId ORDER BY createdAt DESC LIMIT :offset,:limit`,
//     {
//       replacements: {
//         limit,
//         offset,
//         category: `%${category}%`,
//         isActive,
//       },
//       type: QueryTypes.SELECT,
//     }
//   );
//   if (blogs.length) {
//     count = await sequelizeDb.query(
//       `SELECT blogId FROM blogs WHERE category LIKE :category AND isActive = :isActive`,
//       {
//         replacements: {
//           category: `%${category}%`,
//           isActive,
//         },
//         type: QueryTypes.SELECT,
//       }
//     );
//   }

//   return { blogs, count: count?.length || 0 };
// }
// export async function findAllBlogByTag({ limit, offset, tag, isActive }: any) {
//   // Find by category
//   let count: any;
//   let blogs = await sequelizeDb.query(
//     `SELECT b.blogId, b.title, b.postName, b.featuredImage, b.isActive, a.username as author, b.category, b.createdAt, b.updatedAt FROM blogs as b LEFT JOIN authors as a ON a.authorId = b.authorId WHERE b.blogId IN(SELECT blogId FROM tagRelation JOIN tags ON tags.tagMeta = tagRelation.tagMeta WHERE tags.tagName LIKE :tag) AND b.isActive = :isActive GROUP BY b.blogId ORDER BY createdAt DESC LIMIT :offset,:limit`,
//     {
//       replacements: {
//         limit,
//         offset,
//         tag: `%${tag}%`,
//         isActive,
//       },
//       type: QueryTypes.SELECT,
//     }
//   );
//   if (blogs.length) {
//     count = await sequelizeDb.query(
//       `SELECT b.blogId FROM blogs as b WHERE b.blogId IN(SELECT blogId FROM tagRelation JOIN tags ON tags.tagMeta = tagRelation.tagMeta WHERE tags.tagName LIKE :tag) AND b.isActive = :isActive`,
//       {
//         replacements: {
//           tag: `%${tag}%`,
//           isActive,
//         },
//         type: QueryTypes.SELECT,
//       }
//     );
//   }

//   return { blogs, count: count?.length || 0 };
// }
// export const CreateBlogBody = ({
//   description,
//   images,
//   title,
//   postType,
// }: any) => {
//   let imageIndex = 0;

//   const body = description
//     .map((desc: any, index: number) => {
//       const imageSource = images[imageIndex]?.link
//         ? `${images[imageIndex]?.link}?tr=w-800,h-450`
//         : "";
//       const title = images[imageIndex]?.name;
//       let imgTag = imageSource
//         ? `<img src="${imageSource}" alt="${title}">`
//         : "";

//       let img = "";
//       if (description.length !== index + 1 && imgTag) {
//         img = `<div>${imgTag}</div>`;
//       }

//       if (description.length === index + 1 && !imageIndex && imgTag) {
//         img = `<div>${imgTag}</div>`;
//       }

//       const content = `<p>${desc}</p>${img}`;
//       imageIndex = imageIndex + 1;

//       return content;
//     })
//     .join("");

//   return `${body}<p>${`${title} complete ${postType} free download, links below:`}</p>`;
// };
// export const CreateDownloadLinks = ({ links }: any) => {
//   const DownloadLinks: any = {
//     myfonts: "My Fonts Download Link",
//     creativemarket: "Creative Market Download Link",
//     tmfonts: "TM Fonts Download Link",
//   };
//   return links
//     .map((item: any) => {
//       return `<div class="w-full"><a href="${
//         item?.shortLink ? item.shortLink : item?.link
//       }" target="_blank" rel="noreferrer" class="block capitalize m-auto max-w-[300px] text-center text-gray-900 bg-white border border-gray-300 font-bold rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">${
//         DownloadLinks[item?.type] || `${item?.type} Download Link`
//       }</span></a></div>`;
//     })
//     .join("");
// };
// export const CreatePopularLinks = ({ popularLinks }: any) => {
//   const links = popularLinks
//     .map((item: any) => {
//       const ll = item?.link ? Utils.replaceAllTxt(item.link, " ", "-") : "";
//       return `<li><a href="/${ll}" class="font-medium"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">${item.title}</span></a></li>`;
//     })
//     .join("");

//   return `<h1 class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-700 md:text-2xl lg:text-3xl dark:text-white">More Fonts :</h1><ul class="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400">${links}</ul>`;
// };
// export const CreateTags = ({ tags }: any) => {
//   const Tags = tags
//     .map((item: any) => {
//       return `<a href="/tag/${item.tagMeta}" class="bg-gray-100 text-gray-500 text-xs font-normal mr-1 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">${item.tagName}</a>`;
//     })
//     .join("");

//   return `<h1 class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-700 md:text-2xl lg:text-3xl dark:text-white">Tags :</h1><div class="max-w-full gap-1 flex flex-wrap">${Tags}</div>`;
// };
