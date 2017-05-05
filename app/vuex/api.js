    import axios from 'axios'

let url = process.env.NODE_ENV !== 'production' ? '/apis/' : 'http://api.douban.com/v2/';

let func_axios = (api,cb) => {
    axios.get(api).then(function(res){
        if(res.status >= 200 && res.status <300){
            cb(res.data)
        }
    }).catch((error) => {
        // new Error('desc');
        return Promise.reject(error)
    })
}

export default {
    getNowList:(cb)=>func_axios(url + 'movie/in_theaters?city=成都',cb),
    getComingList:(cb)=>func_axios(url + 'movie/coming_soon',cb),
    getWeatherConfig:(id,cb)=>{
        var config = {
            show:true,
            "location": {
              "id": "C23NB62W20TF",
              "name": "成都",
              "country": "US",
              "timezone": "America/Los_Angeles",
              "timezone_offset": "-07:00"
            },
            "now": {
              "text": "多云", //天气现象文字
              "code": "4", //天气现象代码
              "temperature": "24", //温度，单位为c摄氏度或f华氏度
              "feels_like": "22", //体感温度，单位为c摄氏度或f华氏度
              "pressure": "1018", //气压，单位为mb百帕或in英寸
              "humidity": "76", //相对湿度，0~100，单位为百分比
              "visibility": "16.09", //能见度，单位为km公里或mi英里
              "wind_direction": "西北", //风向文字
              "wind_direction_degree": "340", //风向角度，范围0~360，0为正北，90为正东，180为正南，270为正西
              "wind_speed": "8.05", //风速，单位为km/h公里每小时或mph英里每小时
              "wind_scale": "2", //风力等级，请参考：http://baike.baidu.com/view/465076.htm
              "clouds": "90", //云量，范围0~100，天空被云覆盖的百分比 #目前不支持中国城市#
              "dew_point": "-12" //露点温度，请参考：http://baike.baidu.com/view/118348.htm #目前不支持中国城市#
            }
        }   
        setTimeout(function(){
            cb(config)
        },1000)   
        // cb(config)
    },
    getUserInfo:(id,cb)=>func_axios(url+'user/'+id,cb),
    getSearchResult:(payload,cb)=>{
        var type = payload.field;
        switch (type) {
            case 'MUSIC_LIST':
                var target = 'music/search?q='+payload.content
                break;
            case 'BOOK_LIST':
                var target = 'book/search?q='+payload.content
                break;                
            default:
                // statements_def
                var target = 'music/search?q='+payload.content

                break;
        }
        func_axios(url+target,cb)
    }
}