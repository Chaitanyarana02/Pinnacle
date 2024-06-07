import { setupWorker } from 'msw/browser'
import { http, HttpResponse } from 'msw'
import UtilityService from '../services/utilit.service'
import projectListData from './projectListData.mock'
import projectDetailMockData from './projectDetailData.mock'
import customizationData from './customizationData.mock'

const worker = setupWorker(

  http.get(UtilityService.getBaseUrl() + 'getProjects', () => {

    return HttpResponse.json(projectListData)
  }),
  http.get(UtilityService.getBaseUrl() + 'getCustomization', () => {

    return HttpResponse.json(customizationData)
  }),
  http.get(UtilityService.getBaseUrl() + 'getProjectDetail/:id', ( {params}) => {
    console.log(params.id);
    
    return HttpResponse.json(projectDetailMockData)
  }),
)

export default worker
// worker.start()