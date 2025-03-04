import conf from "../conf/conf.js";

import { Client, ID, Databases, Storage, Query } from "appwrite"

export class Service {
    client = new Client()
    databases
    storage

    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId)

        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

}

const service = new Service()

export default service