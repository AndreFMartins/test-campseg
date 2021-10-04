import HttpRequest from '@/support/http/HttpRequest';
import Env from '@/../env.json';

class DashboardRequest {
  getOnlineEquipments() {
    return HttpRequest.get(Env.CHART_API_URL);
  }

  getTotalUsers() {
    return HttpRequest.get('/user/dashboard/total-user');
  }
}

export default new DashboardRequest();
