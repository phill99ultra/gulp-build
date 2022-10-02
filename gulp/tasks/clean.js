import { deleteAsync as del } from 'del';

export const clean = () => del(app.path.clean);