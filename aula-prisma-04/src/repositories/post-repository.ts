import prisma from '../database/database';
import { Post } from '@prisma/client';

export type CreatePost = Omit<Post, 'id'>;

async function getPosts() {
  const posts = await prisma.post.findMany();
  return posts;
}

function getPost(id: number) {
  return prisma.post.findFirst({
    where: { id },
  });
}

function createPost(post: CreatePost) {
  return prisma.post.create({
    data: post,
  });
}

function deletePost(id: number) {
  return prisma.post.delete({
    where: { id },
  });
}

const postRepository = {
  getPost,
  getPosts,
  createPost,
  deletePost,
};

export default postRepository;
