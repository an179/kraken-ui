### Kraken UI

This project creates a live ticker, trade blotter, and spread blotter for bitcoin currency pair assets offered on [Kraken](https://www.kraken.com/).

It is built with React (using hooks), Redux, and Typescript. It uses ag-grid. It uses [Kraken's Websocket API](https://docs.kraken.com/websockets/) to source ticker updates. The updates are fed into a Redux store which is watched by ag-grid.

To run the project locally, clone and run npm start from the project root. Then navigate to http://localhost:3000/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
