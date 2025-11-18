const dotenv = require("dotenv");
dotenv.config();

const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../index");
const Product = require("../app/model/product.model");

const beforeAll = async () => {
    await mongoose.connect(process.env.MONGODB_URL);
};

const afterAll = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
};

const afterEach = async () => {
    await Product.deleteMany({});
};

describe("Product Crud Api ", () => {
    it("should create a new product", async () => {
        const response = await request(app).post("/api/craete-user").send({
            name: "Test Product",
            price: 100,
            size: ["Small", "Medium", "Large"],
            color: ["Red", "Green", "Blue"],
            description: "This is a test product",
            brand: "Test Brand",
        });

        expect(response.status).toBe(201);
        expect(response.body.status).toBe(true);
        // expect(response.body.name).toBe("Test Product");

    })

    it("should get all products", async () => {
        const product = await Product.create({
            name: "Test Product",
            price: 100,
            size: ["Small", "Medium", "Large"],
            color: ["Red", "Green", "Blue"],
            description: "This is a test product",
            brand: "Test Brand",
        })
        const response = await request(app).get("/api/user");
        expect(response.status).toBe(200);
        expect(response.body.status).toBe(true);
    })

    it("should get a single product", async () => {
        const product = await Product.create({
            name: "Test Product",
            price: 100,
            size: ["Small", "Medium", "Large"],
            color: ["Red", "Green", "Blue"],
            description: "This is a test product",
            brand: "Test Brand",
        });
        const response = await request(app).get(`/api/single-user/${product._id}`);
        expect(response.status).toBe(200);
        expect(response.body.status).toBe(true);
        expect(response.body.data.name).toBe("Test Product");
    })

    it("should update a product", async () => {
        const product = await Product.create({
            name: "Test Product",
            price: 100,
            size: ["Small", "Medium", "Large"],
            color: ["Red", "Green", "Blue"],
            description: "This is a test product",
            brand: "Test Brand",
        });
        const response = await request(app).put(`/api/update-user/${product._id}`).send({
            name: "Updated Product",
            price: 200,
            size: ["Small", "Medium", "Large"],
            color: ["Red", "Green", "Blue"],
            description: "This is a test product",
            brand: "Test Brand",
        });
        expect(response.status).toBe(200);
        expect(response.body.status).toBe(true);
        // expect(response.body.data.name).toBe("Updated Product");
    })

    it("should delete a product", async () => {
        const product = await Product.create({
            name: "Test Product",
            price: 100,
            size: ["Small", "Medium", "Large"],
            color: ["Red", "Green", "Blue"],
            description: "This is a test product",
            brand: "Test Brand",
        });
        const response = await request(app).delete(`/api/delete-user/${product._id}`);
        expect(response.status).toBe(200);
        expect(response.body.status).toBe(true);
        expect(response.body.message).toBe("Data Delete Success");

        // Optional: Check if the product was actually deleted
        const deletedProduct = await Product.findById(product._id);
        expect(deletedProduct).toBeNull();
    })


})
