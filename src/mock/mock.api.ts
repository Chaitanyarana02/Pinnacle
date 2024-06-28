import { setupWorker } from 'msw/browser'
import { http, HttpResponse } from 'msw'
import UtilityService from '../services/utilit.service'
import projectListData from './projectListData.mock'
import projectDetailMockData from './projectDetailData.mock'
import customizationData from './customizationData.mock'
// import { CustomizationProduct } from '../interfaces/customizationProduct.interface'
import { userList } from './user-list.mock'
import { productCategoryMock } from './productCategory.mock'
import { ProjectListMockData } from './productList.mock'

const worker = setupWorker(

  http.get(UtilityService.getBaseUrl() + 'getProjects', () => {

    return HttpResponse.json(projectListData)
  }),

  http.get(UtilityService.getBaseUrl() + 'getProjectDetail/:id', ( {params}) => {
    console.log(params.id);
    
    return HttpResponse.json(projectDetailMockData)
  }),


  http.get(UtilityService.getBaseUrl() + 'customization', () => {

    return HttpResponse.json(customizationData)
  }),
  http.post(UtilityService.getBaseUrl() + 'customization', () => {

    return HttpResponse.json({id: (Date.now()).toString()})
  }),
  http.put(UtilityService.getBaseUrl() + 'customization/:id', ({params}) => {
    console.log(params.id);
    return HttpResponse.json({})
  }),
  http.delete(UtilityService.getBaseUrl() + 'customization/:id', ({params}) => {
    console.log(params.id);
    return HttpResponse.json({})
  }),


  http.get(UtilityService.getBaseUrl() + 'productCategories', () => {

    return HttpResponse.json(productCategoryMock)
  }),
  http.post(UtilityService.getBaseUrl() + 'productCategories', () => {

    return HttpResponse.json({id: (Date.now()).toString()})
  }),
  http.put(UtilityService.getBaseUrl() + 'productCategories/:id', ({params}) => {
    console.log(params.id);
    return HttpResponse.json({})
  }),
  http.delete(UtilityService.getBaseUrl() + 'productCategories/:id', ({params}) => {
    console.log(params.id);
    return HttpResponse.json({})
  }),

  
  http.get(UtilityService.getBaseUrl() + 'products', () => {

    return HttpResponse.json(ProjectListMockData)
  }),
  http.post(UtilityService.getBaseUrl() + 'product', () => {

    return HttpResponse.json({id: (Date.now()).toString()})
  }),
  http.put(UtilityService.getBaseUrl() + 'product/:id', ({params}) => {
    console.log(params.id);
    return HttpResponse.json({})
  }),
  http.delete(UtilityService.getBaseUrl() + 'product/:id', ({params}) => {
    console.log(params.id);
    return HttpResponse.json({})
  }),


  http.get(UtilityService.getBaseUrl() + 'users', () => {
    return HttpResponse.json(userList)
  }),
  http.post(UtilityService.getBaseUrl() + 'generatePassword', () => {
    return HttpResponse.json({});
  })
)

export default worker
// worker.start()