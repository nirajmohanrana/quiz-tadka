```
npm install
npm run dev
```

## Docker Build

```
docker build -t quiz-tadka:latest -f dev.DockerFile .
```

## Docker Run

```
docker run -it --rm -p 3000:3000 quiz-tadka:latest /bin/sh
```

```
open http://localhost:3000
```
