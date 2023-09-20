import { Product } from '@prisma/client';
import prisma from '../database/database';


export type CreateProduct = Omit<Product, 'id'>;

async function getProducts() {
  return await prisma.product.findMany();
}

async function getProduct(id: number) {
  return await prisma.product.findFirst({
    where: { id },
  });
}

async function createProduct(product: Product) {
  return await prisma.product.create({
    data: product
  })
}

const productRepository = {
  getProduct,
  getProducts,
  createProduct,
};

export default productRepository;
