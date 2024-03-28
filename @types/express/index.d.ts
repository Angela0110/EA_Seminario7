import User from "../../src/models/User"

declare global{
    namespace Express {
        interface Request {
            userId: User._id
        }
    }
}