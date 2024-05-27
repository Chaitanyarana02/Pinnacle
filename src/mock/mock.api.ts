import { setupWorker } from 'msw/browser'
import { http, HttpResponse } from 'msw'
import UtilityService from '../services/utilit.service'
import projectListData from './projectListData.mock'

const worker = setupWorker(

  http.get(UtilityService.getBaseUrl() + 'getProjects', () => {

    return HttpResponse.json(projectListData)
  }),

)

export default worker
// worker.start()