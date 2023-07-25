So far:

- Overall timeout is: 180000
- PerformanceResourceTiming doesnt working on Safari when timeout happens

# Chrome

<details>
  <summary> 1 - MacOS Ventura 13.4.1</summary>

**Browser Version: 114.0.5735.198**

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

**Browser Version: 115.0.5790.130**


### GET

180971ms

### POST

181004.ms

> On screen lock, the request await is interupt at the moment of lock so the timeout becames smaller

  </details>

<details>
  <summary> 3 - Windows 10</summary>
**Browser Version: 114.0.0.0**

### Get

Time Spent till timeout: 80504.79999995232ms
Full PerformanceResourceTiming object:

```js
{
  "entryType": "resource",
  "responseStart": 0,
  "initiatorType": "fetch",
  "decodedBodySize": 0,
  "connectStart": 0,
  "redirectEnd": 0,
  "domainLookupEnd": 0,
  "name": "https://electric-amethyst-coyote.glitch.me/get-late-responds",
  "domainLookupStart": 0,
  "renderBlockingStatus": "non-blocking",
  "responseStatus": 0,
  "encodedBodySize": 0,
  "transferSize": 0,
  "startTime": 7564.299999952316,
  "duration": 180501,
  "fetchStart": 7564.299999952316,
  "nextHopProtocol": "",
  "secureConnectionStart": 0,
  "responseEnd": 188065.29999995232,
  "connectEnd": 0,
  "redirectStart": 0,
  "serverTiming": [],
  "requestStart": 0,
  "workerStart": 0
}
```

### POST

Time Spent till timeout: 180368.60000002384ms
Full PerformanceResourceTiming object:

```js
{
  "fetchStart": 295554.5,
  "domainLookupStart": 0,
  "requestStart": 0,
  "duration": 180367.89999997616,
  "serverTiming": [],
  "decodedBodySize": 0,
  "secureConnectionStart": 0,
  "redirectEnd": 0,
  "startTime": 295554.5,
  "connectStart": 0,
  "responseEnd": 475922.39999997616,
  "name": "https://electric-amethyst-coyote.glitch.me/post-late-responds",
  "responseStart": 0,
  "workerStart": 0,
  "connectEnd": 0,
  "domainLookupEnd": 0,
  "encodedBodySize": 0,
  "renderBlockingStatus": "non-blocking",
  "initiatorType": "fetch",
  "responseStatus": 0,
  "transferSize": 0,
  "redirectStart": 0,
  "nextHopProtocol": "",
  "entryType": "resource"
}
```

</details>

# Firefox

<details>
  <summary> 1 - MacOS Ventura 13.4.1</summary>

**Browser Version: 115.0.2**

### Get

Time Spent till timeout: 180420ms.
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

Time Spent till timeout: 180808ms.
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

<details>
  <summary> 2 - Windows 10 </summary>

**Browser Version: 115.0**

### GET

Time Spent till timeout: 180715ms
Full PerformanceResourceTiming object:

```js
{
  "secureConnectionStart": 0,
  "workerStart": 0,
  "responseStart": 0,
  "requestStart": 0,
  "responseEnd": 202920,
  "encodedBodySize": 0,
  "duration": 180711,
  "connectEnd": 0,
  "redirectEnd": 0,
  "transferSize": 0,
  "domainLookupStart": 0,
  "initiatorType": "fetch",
  "fetchStart": 22209,
  "connectStart": 0,
  "serverTiming": [],
  "nextHopProtocol": "",
  "domainLookupEnd": 0,
  "entryType": "resource",
  "redirectStart": 0,
  "startTime": 22209,
  "name": "https://electric-amethyst-coyote.glitch.me/get-late-responds",
  "decodedBodySize": 0
}

```

### POST

Time Spent till timeout: 180163ms
Full PerformanceResourceTiming object:

```js
{
  "startTime": 32372,
  "requestStart": 0,
  "domainLookupStart": 0,
  "domainLookupEnd": 0,
  "redirectEnd": 0,
  "nextHopProtocol": "",
  "serverTiming": [],
  "fetchStart": 32372,
  "workerStart": 0,
  "decodedBodySize": 0,
  "name": "https://electric-amethyst-coyote.glitch.me/post-late-responds",
  "responseStart": 0,
  "connectEnd": 0,
  "encodedBodySize": 0,
  "responseEnd": 212533,
  "connectStart": 0,
  "duration": 180161,
  "secureConnectionStart": 0,
  "transferSize": 0,
  "entryType": "resource",
  "initiatorType": "fetch",
  "redirectStart": 0
}
```

</details>

# Edge

<details>
  <summary> 1 - Windows 10</summary>

  **Browser Version: 115.0.1901.183**
  
  ### GET
Time Spent till timeout: 180538.39999997616ms.
Full PerformanceResourceTiming object:
```js
{
  "responseStart": 0,
  "duration": 180534.39999997616,
  "firstInterimResponseStart": 0,
  "encodedBodySize": 0,
  "connectEnd": 0,
  "renderBlockingStatus": "non-blocking",
  "secureConnectionStart": 0,
  "entryType": "resource",
  "redirectStart": 0,
  "domainLookupStart": 0,
  "connectStart": 0,
  "serverTiming": [],
  "responseStatus": 0,
  "workerStart": 0,
  "name": "https://electric-amethyst-coyote.glitch.me/get-late-responds",
  "initiatorType": "fetch",
  "fetchStart": 30000,
  "nextHopProtocol": "",
  "decodedBodySize": 0,
  "redirectEnd": 0,
  "responseEnd": 210534.39999997616,
  "transferSize": 0,
  "domainLookupEnd": 0,
  "requestStart": 0,
  "startTime": 30000
}

````



  ### POST
Time Spent till timeout: 80170.29999995232ms
Full PerformanceResourceTiming object:
```js
{
  "requestStart": 0,
  "domainLookupEnd": 0,
  "startTime": 30388.799999952316,
  "nextHopProtocol": "",
  "connectEnd": 0,
  "entryType": "resource",
  "redirectEnd": 0,
  "serverTiming": [],
  "redirectStart": 0,
  "workerStart": 0,
  "responseStart": 0,
  "firstInterimResponseStart": 0,
  "connectStart": 0,
  "secureConnectionStart": 0,
  "responseStatus": 0,
  "name": "https://electric-amethyst-coyote.glitch.me/post-late-responds",
  "decodedBodySize": 0,
  "domainLookupStart": 0,
  "transferSize": 0,
  "initiatorType": "fetch",
  "renderBlockingStatus": "non-blocking",
  "fetchStart": 30388.799999952316,
  "encodedBodySize": 0,
  "responseEnd": 210558.19999992847,
  "duration": 180169.39999997616
}
````

</details>

# Safari

<details>
  <summary> 1 - MacOS Ventura 13.4.1</summary>

**Browser Version: 115.0.2**

### Get

Time Spent till timeout: 180307ms.

### Post

Time Spent till timeout: 180235ms.

</details>
<details>
  <summary> 2 - iOS 16.5.1 </summary>

  **Browser Version:  16.5.1**

### Get

- 180293ms

### Post

- 180928ms

> On safari at ios, on screen lock the request is "freeze". When this happen request with large timeout was seen, such as 348123ms

</details>
