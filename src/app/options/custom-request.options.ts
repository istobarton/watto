import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions, RequestOptionsArgs } from '@angular/http';

@Injectable()
export class CustomRequestOptions extends BaseRequestOptions {
  merge(options?:RequestOptionsArgs):RequestOptions {
    options.url = ' http://demo7475333.mockable.io/' + options.url;
    return super.merge(options);
  }
}

// Information for common url found at:
// https://stackoverflow.com/questions/34516651/set-base-url-for-angular-2-http-requests
