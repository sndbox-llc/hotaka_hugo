import { defineCollection, z } from "astro:content";

// blogコレクションの定義
const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({ // ← 引数に { image } を追加
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    // z.array(z.string()) ではなく、単一の image() または z.string() にする
    image: image().optional(), 
  }),
});

// pageコレクションの定義（こちらは変更なしでOK）
const pageCollection = defineCollection({
  type: "content", 
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  page: pageCollection,
};