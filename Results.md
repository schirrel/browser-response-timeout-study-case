So far:
- Overall timeout is: 180000

# Chrome
<details>
  <summary> 1 - MacOS Ventura 13.4.1</summary>

    
OS: MacOS - Ventura 13.4.1
Browser Version:  114.0.5735.198
### Get
Time Spent till timeout: 180646.80000001192ms

Full PerformanceResourceTiming object:
```json
{
    "name": "https://electric-amethyst-coyote.glitch.me/get-never-responds",
    "entryType": "resource",
    "startTime": 8252.399999976158,
    "duration": 180644.40000003576,
    "initiatorType": "fetch",
    "nextHopProtocol": "",
    "renderBlockingStatus": "non-blocking",
    "workerStart": 0,
    "redirectStart": 0,
    "redirectEnd": 0,
    "fetchStart": 8252.399999976158,
    "domainLookupStart": 0,
    "domainLookupEnd": 0,
    "connectStart": 0,
    "secureConnectionStart": 0,
    "connectEnd": 0,
    "requestStart": 0,
    "responseStart": 0,
    "responseEnd": 188896.80000001192,
    "transferSize": 0,
    "encodedBodySize": 0,
    "decodedBodySize": 0,
    "responseStatus": 0,
    "serverTiming": []
}
```


### Post
Time Spent till timeout: 180178.40000003576ms.
Full PerformanceResourceTiming object:
```json
{
    "name": "https://electric-amethyst-coyote.glitch.me/post-never-responds",
    "entryType": "resource",
    "startTime": 9336,
    "duration": 180177.69999998808,
    "initiatorType": "fetch",
    "nextHopProtocol": "",
    "renderBlockingStatus": "non-blocking",
    "workerStart": 0,
    "redirectStart": 0,
    "redirectEnd": 0,
    "fetchStart": 9336,
    "domainLookupStart": 0,
    "domainLookupEnd": 0,
    "connectStart": 0,
    "secureConnectionStart": 0,
    "connectEnd": 0,
    "requestStart": 0,
    "responseStart": 0,
    "responseEnd": 189513.69999998808,
    "transferSize": 0,
    "encodedBodySize": 0,
    "decodedBodySize": 0,
    "responseStatus": 0,
    "serverTiming": []
}

```


</details>


<details>
  <summary> 2 - iOS 16.5.1 </summary>

    Browser Version: 115.0.5790.130
  > On screen lock, the request await is interupt at the moment of lock so the timeout becames smaller

  ### GET
  180971ms

  ### POST
  181004.ms

  </details>

# Firefox

<details>
  <summary> 1 - MacOS Ventura 13.4.1</summary>


Browser Version: 115.0.2

### Get
Time Spent till timeout:  180420ms.
Full PerformanceResourceTiming object:

 ```json
{
  "name": "https://electric-amethyst-coyote.glitch.me/post-never-responds",
  "entryType": "resource",
  "startTime": 4537,
  "duration": 180410,
  "initiatorType": "fetch",
  "nextHopProtocol": "",
  "workerStart": 0,
  "redirectStart": 0,
  "redirectEnd": 0,
  "fetchStart": 4537,
  "domainLookupStart": 0,
  "domainLookupEnd": 0,
  "connectStart": 0,
  "connectEnd": 0,
  "secureConnectionStart": 0,
  "requestStart": 0,
  "responseStart": 0,
  "responseEnd": 184947,
  "transferSize": 0,
  "encodedBodySize": 0,
  "decodedBodySize": 0,
  "serverTiming": []
}
```


### Post

Time Spent till timeout:  180808ms.
Full PerformanceResourceTiming object:
```json
{
  "name": "https://electric-amethyst-coyote.glitch.me/get-never-responds",
  "entryType": "resource",
  "startTime": 4155,
  "duration": 180793,
  "initiatorType": "fetch",
  "nextHopProtocol": "",
  "workerStart": 0,
  "redirectStart": 0,
  "redirectEnd": 0,
  "fetchStart": 4155,
  "domainLookupStart": 0,
  "domainLookupEnd": 0,
  "connectStart": 0,
  "connectEnd": 0,
  "secureConnectionStart": 0,
  "requestStart": 0,
  "responseStart": 0,
  "responseEnd": 184948,
  "transferSize": 0,
  "encodedBodySize": 0,
  "decodedBodySize": 0,
  "serverTiming": []
}
```


</details>

# Safari

<details>
  <summary> 1 - MacOS Ventura 13.4.1</summary>

Browser Version: 115.0.2
### Get 


Time Spent till timeout:  180307ms.

### Post 
Time Spent till timeout:  180235ms.


</details>
<details>
  <summary> 2 - iOS 16.5.1 </summary>
Browser Version:  16.5.1

    > On safari at ios, on screen lock the request is "freeze". When this happen request with large timeout was seen, such as 348123ms
### Get 
-  180293ms

### Post 
- 180928ms


</details>
