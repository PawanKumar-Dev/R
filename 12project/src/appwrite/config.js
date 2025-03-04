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

    async createPost({ blog_title, blog_content, blog_img, blog_status, userId }) {
        try {
            return await databases.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                ID.unique(),
                { blog_title, blog_content, blog_img, blog_status, userId }
            )
        } catch (error) {
            throw error
        }
    }

    async updatePost(id, { blog_title, blog_content, blog_img, blog_status }) {
        try {
            return await databases.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                id,
                { blog_title, blog_content, blog_img, blog_status }
            )
        } catch (error) {
            throw error
        }
    }

    async deletePost(id) {
        try {
            await databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                id
            )
            return true
        } catch (error) {
            throw error
            return false
        }
    }

    async getPost(id) {
        try {
            return await databases.getDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                id,
            )
        } catch (error) {
            throw error
        }
    }

    async getActivePosts() {
        try {
            return await databases.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                [
                    Query.equal('blog_status', 'active')
                ]
            )
        } catch (error) {
            throw error
        }
    }

    async uploadFile() {
        try {
            await storage.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                document.getElementById('uploader').files[0]
            )
        } catch (error) {
            throw error
        }
    }

}

const service = new Service()

export default service