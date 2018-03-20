# mongodb

> express + mongodb
## environment build
```bash
# docker start mongodb
docker-compose up -d
docker-compose ps # print mongodb container

# start program
npm run build # ts => js
npm run start

# mongodb docker link
# https://hub.docker.com/_/mongo/
docker exec -it mongodb mongo admin # operate mongodb with shell
```

## code file
- `/mongodb` 链接mongodb数据库
- `/models` mongodb数据表schema
- `/routes` 路由 => api
- `controller` api逻辑层
