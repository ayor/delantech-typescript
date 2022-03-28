import 'reflect-metadata';
import { Methods } from './Methods';

const routeBinder = (method: string): Function => {
    return (path: string) => {
        return (target: any, key: string, descriptor: PropertyDescriptor): void => {
            Reflect.defineMetadata(Methods.path, path, target, key)
            Reflect.defineMetadata(Methods.method, method, target, key)
        }
    }
}

export const get = routeBinder('get');