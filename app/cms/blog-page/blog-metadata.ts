import type { GetCollectionType } from "next-cms/collection";
import { pageMetadata } from "app/cms/page-metadata";

export type BlogMetadata = GetCollectionType<typeof blogMetadata>;

export const blogMetadata = pageMetadata({
  file: "app/blog/blog-metadata.json",
});
