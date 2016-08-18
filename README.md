# react-redux-demo
***
###目录结构

```
.
├── actions                         //actions dir
|   └── count.js                    //count action file,contains all count action
├── components                      //components dir
|   └── Counter.js                  //count component file,render dom and change state
├── reducers                        //reducers dir
|   ├── counter.js                  //count reducer file,handle data , merge data and return new data
|   └── index.js                    //combine file,all single reducer files will combine together in this file
├── store                           //store dir
|   └── configureStore.js           //init Store and use middleWare to handle state data   
├── index.html                      //index template
├── index.js                        //entry file
├── package.json                    //depend file
├── server.js                       //server file
├── webpack.config.js               //webpack config file
.
```

***
###获取
`git clone https://github.com/Greensoon/react-redux-demo.git`

---

###安装依赖
>cd react-redux-demo

>npm install

***

###运行

>npm start

***

###访问
>http://localhost:3000
