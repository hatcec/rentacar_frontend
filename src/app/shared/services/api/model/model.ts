/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Brand } from './brand';
import { Car } from './car';
import { Fuel } from './fuel';
import { Transmission } from './transmission';


export interface Model { 
    id?: number;
    createdDate?: string;
    updatedDate?: string;
    deletedDate?: string;
    name?: string;
    brand?: Brand;
    fuel?: Fuel;
    transmission?: Transmission;
    cars?: Array<Car>;
}

