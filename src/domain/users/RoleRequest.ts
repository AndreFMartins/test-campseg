import HttpRequest from '@/support/http/HttpRequest';

class RoleRequest {
    baseUrl: string;

    constructor() {
      this.baseUrl = '/role';
    }

    list() {
      return HttpRequest.get(this.baseUrl);
    }
}

export default new RoleRequest();
