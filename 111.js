const path1 = "get_domains/v5/";
const path2 = "18.3.0&";
const url = $request.url;
let body = $response.body;
if (url.indexOf(path1) != -1) {
    let obj = JSON.parse(body);
    obj['data'] = {};
    obj['summary'] = '[]';
    $done({ body: JSON.stringify(obj) });
}
