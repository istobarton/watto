import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions, RequestOptionsArgs } from '@angular/http';

//Allows for adjustment of baseURL. Defaults to localhost:4200
@Injectable()
export class CustomRequestOptions extends BaseRequestOptions {
  merge(options?: RequestOptionsArgs): RequestOptions {
    options.url = ' https://demo7475333.mockable.io/' + options.url;
    return super.merge(options);
  }
}

// Information for common url found at:
// https://stackoverflow.com/questions/34516651/set-base-url-for-angular-2-http-requests
