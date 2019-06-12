# Dependencies 

Requires [moviebuff-api](https://github.com/davepmiller/moviebuff-api) to be running locally

# Run locally

Start the backend:
```bash
$ docker run -p 8080:8080 davidpmiller/moviebuff-api:0.0.1
```

Start the local dev server:
```bash
$ git clone https://github.com/davepmiller/moviebuff-hooks
$ cd moviebuff
$ npm install
$ npm start
# this should open your browser to [http://localhost:3000](http://localhost:3000)
