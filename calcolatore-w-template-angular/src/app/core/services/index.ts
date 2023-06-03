import {LocalStorageService} from "./local-storage.service";
import {LocalInfoAppService} from "@core/services/local-info-app.service";

//Add Here the new Service in the services list
export const services: any[] = [LocalStorageService, LocalInfoAppService];

//Add Here export * from 'path of the service'
export * from './local-storage.service';
export * from  './local-info-app.service';
