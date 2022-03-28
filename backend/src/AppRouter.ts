import express from "express";

export class AppRouter {
    private static instance: express.Router;

    static initRouter(): express.Router {
        if (!this.instance) {
            this.instance = express.Router();
            return this.instance;
        }

        return this.instance;
    }
}