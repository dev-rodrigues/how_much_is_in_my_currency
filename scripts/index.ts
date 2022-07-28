import Redis from 'ioredis';

const redisClient = new Redis({
    port: 6379,
    host: 'localhost',
    family: 4,
    db: 0,
});

async function getRedis(value: string) : Promise<string|null>{
    return Promise.resolve(
        redisClient.get(value)
    ).catch(() => null);
}

function setRedis(key: string, value: string) {
    Promise.resolve(
        redisClient.set(key, value, 'EX', 180)
    ).then(r => {
        console.log(r);
    });
}

export { redisClient, getRedis, setRedis };
