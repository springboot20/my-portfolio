import { AxiosResponse } from 'axios';
import { ChatAppSuccessResponseObj } from './user.type';
import { ToastOptions } from 'react-toastify';

export interface ApiRequestHandlerProps {
  api: () => Promise<AxiosResponse<ChatAppSuccessResponseObj, any>>;
  setLoading: ((loading: boolean) => void) | null;
  onSuccess: (
    data: ChatAppSuccessResponseObj,
    message: string,
    toast: (content: React.ReactNode, options?: ToastOptions) => React.ReactText
  ) => void;
  onError: (
    error: string,
    toast: (content: React.ReactNode, options?: ToastOptions) => React.ReactText
  ) => void;
  // onError: (error: string) => void;
}
