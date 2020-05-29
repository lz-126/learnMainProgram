import request from "./network"

export function getMultData(){
return request({
    url:'/home/multidata/multidata.json'
  })
}
export function getGoodsData(type,page){
  return request({
    url:'/home/data/'+type+"/"+page+".json",
  })
}