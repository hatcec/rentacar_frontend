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
import { Fuel } from './fuel';
import { Transmission } from './transmission';


export interface CreatedModelResponse { 
    id?: number;
    name?: string;
    brandId?: Brand;
    fuelId?: Fuel;
    transmissionId?: Transmission;
    createdDate?: string;
}
