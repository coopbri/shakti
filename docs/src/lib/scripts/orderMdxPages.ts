/**
 * Order MDX pages based on navigation menu order.
 */

import path from "path";
import { promises as fs } from "fs";

import { navMenuItems } from "../../constants";

/**
 * Remove prefix (`##-`) from MDX filenames
 * @param path {string} relative path location (parent) of file
 * @param file {string} file name string in path
 */
const removePrefix = async (path: string, file: string) => {
  try {
    await fs.rename(
      `${path}/${file}`,
      `${path}/${file}`.replace(/(([0-9]+)-)+/g, ""),
    );
    console.log(`Prefix successfully removed on ${file}`);
  } catch (err) {
    throw err;
  }
};

/**
 * Add prefix (`##-`) to MDX filenames
 * @param path {string} relative path location (parent) of file
 * @param file {Array<string>} file name string in path
 * @param prefix {number} prefix integer for file name
 */
const addPrefix = async (path: string, file: string[], prefix: number) => {
  try {
    await fs.rename(`${path}/${file}`, `${path}/${prefix}-${file}`);
    console.log(`Prefix successfully added on ${file}`);
  } catch (err) {
    // console.log(path, file, prefix);
    throw err;
  }
};

/**
 * Main script: order MDX pages based on ordering specified in
 * `navMenuItems.ts`.
 */
const orderMdxPages = async () => {
  const mdxContentPath = path.resolve(__dirname, "../../content");

  // read current prefixed MDX content files
  const prefixedFiles = await fs.readdir(mdxContentPath);
  prefixedFiles.map(async (file) => {
    // remove prefix from each file
    await removePrefix(mdxContentPath, file);
  });

  // read MDX content files with prefixes removed
  const strippedFiles = await fs.readdir(mdxContentPath);
  navMenuItems.map(async (item, idx) => {
    // find file based on ordering in `navMenuItems.ts`
    const curFile = strippedFiles.filter((file) => {
      return file.includes(item[0].toLowerCase().replace(" ", "-"));
    });

    // add incrementing prefix to each file
    await addPrefix(mdxContentPath, curFile, idx + 1);
  });
};

try {
  // execute script
  orderMdxPages();
} catch (err) {
  throw err;
}
