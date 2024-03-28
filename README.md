# Typescript

## JWTPayLoad Type

https://nozzlegear.com/blog/implementing-a-jwt-auth-system-with-typescript-and-node

alternatives 

`jwtPayload = <any>jwt.verify(token, config.SECRET);`


## Extend Express Request Object

https://dev.to/kwabenberko/extend-express-s-request-object-with-typescript-declaration-merging-1nn5

alternatives

`res.locals.jwtPayload = jwtPayload;`
