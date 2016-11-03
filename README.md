For /post (send POST by cURL):

 

1. Header **key** is present and **POST BODY** is empty:

**Request**:

>   curl -i --header "key: qwe" -X POST http://localhost:3000/post

**Response**:

HTTP/1.1 404 Not Found

>   X-Powered-By: Express

>   Content-Type: text/html; charset=utf-8

>   Content-Length: 13

>   ETag: W/"d-HmzZF+1xoSQeS+3CkmS9mA"

>   Date: Thu, 03 Nov 2016 10:37:45 GMT

>   Connection: keep-alive

>    

>   404 Not Found

 

2. header **кey** is missing

**Request**:

>   curl -i --header "key1: qwe" -X POST -d
>   '{"username":"zozer","password":"something"}' http://localhost:3000/pos

**Response**:

>   HTTP/1.1 401 Unauthorized

>   X-Powered-By: Express

>   Date: Thu, 03 Nov 2016 10:37:57 GMT

>   Connection: keep-alive

>   Content-Length: 0

 

3. Header **key** is present and **POST BODY** is present:

**Request**:

>   curl -i --header "key: qwe" -X POST -d
>   '{"username":"zozer","password":"something"}' http://localhost:3000/post

**Response**:

>   HTTP/1.1 200 OK

>   X-Powered-By: Express

>   Content-Type: application/json; charset=utf-8

>   Content-Length: 44

>   ETag: W/"2c-TItkHNJ1BehdZK1XKLi5Jg"

>   Date: Thu, 03 Nov 2016 10:38:10 GMT

>   Connection: keep-alive

>    

>   {"'{username:zozer,password:something}'":""}
