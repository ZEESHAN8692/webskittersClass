const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../server");
const Student = require("../app/model/student");

beforeAll(async () => {
  await mongoose.connect(
    "mongodb+srv://manishsharma2221996:XwCswLyXR1owuNN6@cluster0.gtodg.mongodb.net/jest_testing"
  );
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

afterEach(async () => {
  await Student.deleteMany();
});

describe("Student CRUD API", () => {
  it("should create a student", async () => {
    const res = await request(app).post("/api/create/student").send({
      name: "John Doe",
      city: "New York",
      age: "21",
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.status).toBe(true);
    expect(res.body.data.name).toBe("John Doe"); // 👈 fixed line
  });

  it("should get all students", async () => {
    await Student.create({ name: "Alice", city: "Paris", age: "22" });

    const res = await request(app).get("/api/student");

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe(true);

    // Access the docs array inside data
    expect(res.body.data.docs.length).toBe(1);
    expect(res.body.data.docs[0].name).toBe("Alice");
  });

  it("should get a student by ID", async () => {
    const student = await Student.create({
      name: "Eve",
      city: "Rome",
      age: "20",
    });
    const res = await request(app).get(`/api/edit/student/${student._id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.data.name).toBe("Eve");
  });

  it("should update a student", async () => {
    const student = await Student.create({
      name: "Bob",
      city: "Berlin",
      age: "23",
    });

    const res = await request(app)
      .put(`/api/update/student/${student._id}`)
      .send({ name: "Bobby" })
      .set("Content-Type", "application/json");

    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("Bobby"); // ✅ should now pass
  });

  it("should delete a student", async () => {
    const student = await Student.create({
      name: "Tom",
      city: "London",
      age: "24",
    });

    const res = await request(app)
      .delete(`/api/delete/student/${student._id}`)
      .set("Content-Type", "application/json");

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Deleted");

    // Optional: verify student no longer exists
    const check = await Student.findById(student._id);
    expect(check).toBeNull();
  });
});
