export type UserType = {
  _id: string;
  avatar: {
    url: string;
    localPath: string;
    _id: string;
  };
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export interface ChatAppSuccessResponseObj {
  data: any;
  statusCode: number;
  message: string;
  success: boolean;
}
