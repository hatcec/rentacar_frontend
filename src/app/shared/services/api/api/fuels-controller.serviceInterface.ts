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
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { CreateFuelRequest } from '../model/models';
import { CreatedFuelResponse } from '../model/models';
import { GetAllFuelResponse } from '../model/models';
import { GetFuelByIdResponse } from '../model/models';
import { UpdateFuelRequest } from '../model/models';
import { UpdateTransmission400Response } from '../model/models';
import { UpdatedFuelResponse } from '../model/models';


import { Configuration }                                     from '../configuration';


export interface AddFuelRequestParams {
    createFuelRequest: CreateFuelRequest;
}

export interface DeleteFuelRequestParams {
    id: number;
}

export interface GetFuelByIdRequestParams {
    id: number;
}

export interface UpdateFuelRequestParams {
    updateFuelRequest: UpdateFuelRequest;
}


export interface FuelsControllerServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
* @param requestParameters
     */
    addFuel(requestParameters: AddFuelRequestParams, extraHttpRequestParams?: any): Observable<CreatedFuelResponse>;

    /**
     * 
     * 
* @param requestParameters
     */
    deleteFuel(requestParameters: DeleteFuelRequestParams, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
*/
    getAllFuel(extraHttpRequestParams?: any): Observable<Array<GetAllFuelResponse>>;

    /**
     * 
     * 
* @param requestParameters
     */
    getFuelById(requestParameters: GetFuelByIdRequestParams, extraHttpRequestParams?: any): Observable<GetFuelByIdResponse>;

    /**
     * 
     * 
* @param requestParameters
     */
    updateFuel(requestParameters: UpdateFuelRequestParams, extraHttpRequestParams?: any): Observable<UpdatedFuelResponse>;

}