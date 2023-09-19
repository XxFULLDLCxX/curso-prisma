export type Post = {
  id: number;
  username: string;
  title: string;
  content: string;
  createdAt?: string | Date;
}

export type ApplicationError = {
  name: string;
  message: string;
};