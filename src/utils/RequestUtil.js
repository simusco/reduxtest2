export function doPost(url, params){
    params = params | {};
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
    }).then((response) => response.json());
}

export function doGet(url, params){
    params = params | {};
    return fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }).then((response) => response.json());
}

export function toURL(hostUrl, methodUrl, obj){

    let responseUrl = hostUrl+ methodUrl+'?';
    for(let key in obj){//用javascript的for/in循环遍历对象的属性
        responseUrl += key+"="+obj[key]+"&";
    }
    // alert(responseUrl);
    let index = responseUrl.lastIndexOf('&');
    responseUrl = responseUrl.substring(0,index);
    return responseUrl;

}
