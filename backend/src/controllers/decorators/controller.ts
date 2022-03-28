import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { MethodKeys } from "./MethodKeys";
import { Methods } from './Methods';

const router = AppRouter.initRouter();

export const controller = () => {
    return (target: Function) => {
        for (let propName of Object.getOwnPropertyNames(target.prototype)) {

            let path = Reflect.getMetadata(Methods.path, target.prototype, propName)
            let method: MethodKeys = Reflect.getMetadata(Methods.method, target.prototype, propName)

            if (path) {
                router[method](path, target.prototype[propName]);
            }
        }
    }
}