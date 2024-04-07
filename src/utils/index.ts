import { ApiRequestHandlerProps } from '../types/api.type';
import { toast } from 'react-toastify';

export const classNames = (...className: string[]) => {
  return className.filter(Boolean).join(' ');
};

export const requestHandler = async ({
  api,
  setLoading,
  onSuccess,
  onError,
}: ApiRequestHandlerProps) => {
  setLoading && setLoading(true);

  try {
    const response = await api();
    const { data } = response;
    if (data?.success) {
      onSuccess(data, data.message, toast.success);
    }
  } catch (error: any) {
    if ([401, 403].includes(error?.response?.data.statusCode)) {
      LocalStorage.clear();
      if (isBrowser) window.location.href = './';
    }
    onError(error?.response?.data?.message ?? 'something went wrong', toast.error);
  } finally {
    setLoading && setLoading(false);
  }
};

export const isBrowser = typeof window !== 'undefined';

export class LocalStorage {
  static get(key: string) {
    if (!isBrowser) return;
    const value = localStorage.getItem(key);
    if (value) {
      try {
        return JSON.parse(value);
      } catch (err) {
        return null;
      }
    }
    return null;
  }

  static set(key: string, value: any) {
    if (!isBrowser) return;

    localStorage.setItem(key, JSON.stringify(value));
  }

  static remove(key: string): void {
    localStorage.removeItem(key);
  }

  static clear(): void {
    localStorage.clear();
  }
}
