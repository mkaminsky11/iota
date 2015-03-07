## Promise

**This is an experimental technology, part of the ECMAScript 6 (Harmony) proposal.**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for usage in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future version of browsers as the spec changes.

### Summary

The **`Promise`** object is used for deferred and asynchronous computations. A `Promise` is in one of these states:

* _pending_: initial state, not fulfilled or rejected.
* _fulfilled_: successful operation
* _rejected_: failed operation.
* _settled_: the Promise is either fulfilled or rejected, but not pending.

### Syntax

    new Promise(_executor_);
    new Promise(function(resolve, reject) { ... });

### Parameters

**executor**

> Function object with two arguments `resolve` and `reject`. The first argument fulfills the promise, the second argument rejects it. We can call these functions, once our operation is completed.

### Description

The `**Promise**` interface represents a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers to an asynchronous action's eventual success or failure. This lets asynchronous methods return values like synchronous methods: instead of the final value, the asynchronous method returns a _promise_ of having a value at some point in the future.

A pending promise can become either _fulfilled_ with a value, or _rejected_ with a reason. When either of these happens, the associated handlers queued up by a promise's `then` method are called. (If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.)

As the `[`Promise.prototype.then`][1]` and `[`Promise.prototype.catch`][2]` methods return promises, they can be chained---an operation called _composition_.

![](https://mdn.mozillademos.org/files/8633/promises.png)

### Properties

**`Promise.length`**

> Length property whose value is 1 (number of constructor arguments).

**[`Promise.prototype`][3]**

> Represents the prototype for the `Promise` constructor.

### Methods

**[`Promise.all(iterable)`][4]**

> Returns a promise that resolves when all of the promises in the iterable argument have resolved.

**[`Promise.race(iterable)`][5]**

> Returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise.

**[`Promise.reject(reason)`][6]**

> Returns a `Promise` object that is rejected with the given reason.

**[`Promise.resolve(value)`][7]**

> Returns a `Promise` object that is resolved with the given value. If the value is a thenable (i.e. has a `then` method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise the returned promise will be fulfilled with the value.

### `Promise` prototype

### Properties

**`Promise.prototype.constructor`**

> Returns the function that created an instance's prototype. This is the [`Promise`][8] function by default.

### Methods

**[`Promise.prototype.catch(onRejected)`][2]**

> Appends a rejection handler callback to the promise, and returns a new promise resolving to the return value of the callback if it is called, or to its original fulfillment value if the promise is instead fulfilled.

**[`Promise.prototype.then(onFulfilled, onRejected)`][1]**

> Appends fulfillment and rejection handlers to the promise, and returns a new promise resolving to the return value of the called handler.

### Examples

### Creating a Promise

This small example shows the mechanism of a `Promise`. The `testPromise()` method is called each time the [`<button>`][9] is clicked. It creates a promise that will resolve, using [`window.setTimeout`][10], to the string `'result'` after `1s to 3s` (random).

The fulfillment of the promise is simply logged, via a fulfill callback set using `p1.then`. A few logs shows how the synchronous part of the method is decoupled of the asynchronous completion of the promise.

    var promiseCount = 0;
    function testPromise() {
      var thisPromiseCount = ++promiseCount;
    
      var log = document.getElementById('log');
      log.insertAdjacentHTML('beforeend', thisPromiseCount + 
          ') Started (<small>Sync code started</small>)<br/>');
    
      // We make a new promise: we promise the string 'result' (after waiting 3s)
      var p1 = new Promise(
        // The resolver function is called with the ability to resolve or 
        // reject the promise
        function(resolve, reject) {       
          log.insertAdjacentHTML('beforeend', thisPromiseCount + 
              ') Promise started (<small>Async code started</small>)<br/>');
          // This only is an example to create asynchronism
          window.setTimeout(
            function() {
              // We fulfill the promise !
              resolve(thisPromiseCount)
            }, Math.random() * 2000 + 1000);
        });
    
      // We define what to do when the promise is fulfilled
      p1.then(
        // Just log the message and a value
        function(val) {
          log.insertAdjacentHTML('beforeend', val +
              ') Promise fulfilled (<small>Async code terminated</small>)<br/>');
        });
    
      log.insertAdjacentHTML('beforeend', thisPromiseCount + 
          ') Promise made (<small>Sync code terminated</small>)<br/>');
    }
    

This example is executed when clicking the button. You need a browser supporting `Promise`. By clicking several times the button in a short amount of time, you'll even see the different promise being fulfilled one after the other.

### Example using new XMLHttpRequest()

### Creating a Promise

This example shows the implementation of a method of success callback and error in XMLHttpRequest Interestingly enough.

    // A-> $http function is implemented in order to follow the standard Adapter pattern
    var $http = function(url){
     
      // A small example of object
      var core = {
        
        // Method that performs the ajax request
        ajax : function(method, url, args){
          
              // Establishing a promise in return
              return new Promise(function(resolve, reject) {
                
                // Instantiates the XMLHttpRequest
                var client = new XMLHttpRequest();
                var uri = '';
                if (args !== undefined) {
                  for (key in args) {
                    uri += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]) + '&';
                  }
    
                  if (method === 'GET' || method === 'HEAD') {
                    client.open(method, url + '?' + uri, true);
                  } else {
                    client.open(method, url, true);
                  }
                } else {
                  client.open(method, url, true);
                }
    
                if (method === 'POST' || method === 'PUT' || method === 'DELETE')
                  client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                client.setRequestHeader("Cache-Control", "no-cache");
                client.onreadystatechange = function() {
                  if (this.readyState === 4) {
                    if (this.status === 200) {
                      // Performs the function "resolve" the case this.status is equal to 200
                      resolve(JSON.parse(this.response));
                    } else {
                      // Performs the function "reject" the case is different this.status 200
                      reject({"error":this.statusText});
                    }
                  }
                };
    
                if (uri !== '' && (method === 'POST' || method === 'PUT' || method === 'DELETE')) {
                  client.send(uri);
                } else {
                  client.send();
                }
              });
            }
      };
    
      // Adapter pattern
      return {
        'get' : function(args) {
          return core.ajax('GET', url, args);
        },
        'post' : function(args) {
          return core.ajax('POST', url, args);
        },
        'put' : function(args) {
          return core.ajax('PUT', url, args);
        },
        'delete' : function(args) {
          return core.ajax('DELETE', url, args);
        }
      };
    };
    // End A
    
    // B-> Here you define its functions and its payload
    var youtubeUri = 'https://developer.mozilla.orghttps://developer.mozilla.org/en/search.json';
    var payload = {
      'topic' : 'js',
      'q' : 'Promise'
    };
    var callback = {
      success : function(data){
         console.log(1, 'success', data);
      },
      error : function(data){
         console.log(2, 'error', data);
      }
    };
    // End B
    
    // Executes the method call
    $http(youtubeUri).get(payload).then(callback.success, callback.error);

### Loading an image with XHR

Another simple example using `Promise` and `[XMLHttpRequest][11]` to load an image is available at the MDN GitHub[promise-test][12] repository. You can also [see it in action][13]. Each step is commented and allows you to follow the Promise and XHR architecture closely.


[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/then "The then() method returns a Promise. It takes two arguments, both are callback functions for the success and failure cases of the Promise."
[2]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch "The catch() method returns a Promise and deals with rejected cases only. It behaves the same as calling Promise.prototype.then(undefined, onRejected)."
[3]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/prototype "The Promise.prototype property represents the prototype for the Promise constructor."
[4]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/all "The Promise.all(iterable) method returns a promise that resolves when all of the promises in the iterable argument have resolved."
[5]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/race "The Promise.race(iterable) method returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise."
[6]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject "The Promise.reject(reason) method returns a Promise object that is rejected with the given reason."
[7]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve "The Promise.resolve(value) method returns a Promise object that is resolved with the given value. If the value is a thenable (i.e. has a then method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise the returned promise will be fulfilled with the value."
[8]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise "The Promise object is used for deferred and asynchronous computations. A Promise is in one of the three states:"
[9]: https://developer.mozilla.org/en/docs/Web/HTML/Element/button "The HTML <button> Element represents a clickable button."
[10]: https://developer.mozilla.org/en/docs/Web/API/WindowTimers.setTimeout
[11]: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest
[12]: https://github.com/mdn/promises-test/blob/gh-pages/index.html
[13]: http://mdn.github.io/promises-test/