import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";
import type { NextApiRequest, NextApiResponse } from "next";

export default handleAuth({
    async login(req: NextApiRequest, res: NextApiResponse) {
        try {
            await handleLogin(req, res, {
                authorizationParams: {
                    prompt: "login",
                },
                returnTo: "/post/create",
            });
        } catch (error) {
            if(typeof error === 'object' && error !== null && 'message' in error) {
                const e = error as { message: string };
                res.status(400).json({ error: e.message });
            } else {
                res.status(500).json({ error: "An error occurred" });
            }
        }
    },
})