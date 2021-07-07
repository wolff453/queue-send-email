## In this project, i'm using the patterns: Factory, n-layers, injection dependence, respecting the SOLID principles: S(each class with one responsability), D(don't depend on the concrete class but on its abstraction). The send email occur when the controller get the data of request and he send to queue and the method ```process``` of bull , process the data that was in the queue. With this, the request in postman last only 66ms, but if i not use queue, the request last 2.2s +-.

### What i need to improve?

#### 1- Change to environment variables.
#### 2- Put a constructor in some methods that i imported desrespecting the D of SOLID and remove the ```import```

### 😁 😁 😁
