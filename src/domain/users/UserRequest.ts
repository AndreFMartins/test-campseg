import QueryString from 'querystring';
import HttpRequest from '@/support/http/HttpRequest';

class UserRequest {
    baseUrl: string;

    constructor() {
      this.baseUrl = '/user';
    }

    list(params = {}) {
      return HttpRequest.get(`${this.baseUrl}${Object.keys(params).length ? `?${QueryString.stringify(params)}` : ''}`);
    }

    store(body = {}) {
      return HttpRequest.post(this.baseUrl, body);
    }

    update(body = {}, id: number) {
      return HttpRequest.put(`${this.baseUrl}/${id}`, body);
    }

    destroy(id: number) {
      return HttpRequest.delete(`${this.baseUrl}/${id}`);
    }
}

export default new UserRequest();
