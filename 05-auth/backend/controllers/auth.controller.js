import { registerUser, loginUser } from "../services/auth.service.js";

export async function register(req, res) {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    const user = await registerUser(username, password);

    res.status(201).json({ message: 'User registered successfully', user });
}