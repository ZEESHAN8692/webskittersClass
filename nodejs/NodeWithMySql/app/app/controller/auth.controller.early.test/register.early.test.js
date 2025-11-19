


const AuthController = require('../auth.controller');
const { User } = require("../../models");
const bcrypt = require("bcryptjs");


// auth.controller.test.js
jest.mock("../../models");
jest.mock("bcryptjs");
jest.mock("jsonwebtoken");

describe('AuthController.register() register method', () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
        password: 'password123'
      }
    };

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
  });

  describe('Happy paths', () => {
    it('should register a user successfully', async () => {
      // Arrange
      const hashedPassword = 'hashedPassword123';
      const createdUser = { id: 1, ...req.body, password: hashedPassword };
      bcrypt.hash.mockResolvedValue(hashedPassword);
      User.create.mockResolvedValue(createdUser);

      // Act
      await AuthController.register(req, res);

      // Assert
      expect(bcrypt.hash).toHaveBeenCalledWith(req.body.password, 10);
      expect(User.create).toHaveBeenCalledWith({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: hashedPassword
      });
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        message: 'User registered successfully',
        user: createdUser
      });
    });
  });

  describe('Edge cases', () => {
    it('should handle errors during user creation', async () => {
      // Arrange
      const errorMessage = 'Database error';
      bcrypt.hash.mockResolvedValue('hashedPassword123');
      User.create.mockRejectedValue(new Error(errorMessage));

      // Act
      await AuthController.register(req, res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
    });

    it('should handle errors during password hashing', async () => {
      // Arrange
      const errorMessage = 'Hashing error';
      bcrypt.hash.mockRejectedValue(new Error(errorMessage));

      // Act
      await AuthController.register(req, res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });
});