export type IFormData = {
  label: string;
  name: keyof IUserInfo;
  id: string;
  type: string;
};
export type IUserInfo = {
  userName: string;
  email: string;
  address: string;
  password: string;
};
