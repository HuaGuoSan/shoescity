import {request} from 'network/home/request.js'

export function HomeMultidata() {
  return request({
    url: '/home/multidata',
    method: 'get'
  })
}
