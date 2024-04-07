import { UserType } from './user.type';
import socketio from 'socket.io-client';

export interface AuthContextTypes {
  user: UserType | null;
  token: string | null;
  registerUser: (data: { username: string; email: string; password: string }) => Promise<void>;
  loginUser: (data: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
}

export interface SocketContextType {
  socket: ReturnType<typeof socketio> | null;
}
