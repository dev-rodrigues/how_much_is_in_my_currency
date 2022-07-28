import { NextFunction, Request, Response } from "express";

const uuid = "ccda0211-f6c1-4bc8-b0f4-85abd74f7be6";

export default function VerifyToken(request: Request, response: Response, next: NextFunction) {

    const token = request.params.token;

    if (!token) {
        return response.status(401).json({
            error: "Token not provided"
        });
    }

    try {
        if (uuid !== token) {
            return response.status(500).send({
                message: 'Failed to read public key.',
            });
        }

        next();
    } catch (err) {
        return response.status(400).json({
            error: (err as Error).message
        });
    }
}