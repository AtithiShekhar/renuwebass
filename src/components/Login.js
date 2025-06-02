import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setScreen, setToken, setUser }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      console.log('Sending login request to http://localhost:5000/api/login:', formData);
      const response = await axios.post('http://localhost:5000/api/login', formData);
      console.log('Login response:', response.data);
      setToken(response.data.token);
      setUser(response.data.user);
      setScreen('home');
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'Login failed. Check console for details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700 animate-fadeIn">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Welcome Back</h2>
        {error && <p className="text-red-400 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-secondary transition"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-secondary transition"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-secondary text-white p-3 rounded-lg hover:bg-cyan-500 transition disabled:opacity-50 font-semibold"
          >
            {loading ? 'Logging in...' : 'Login Now'}
          </button>
        </form>
        <p className="text-center mt-5 text-gray-300">
          Don’t have an account?{' '}
          <span
            className="text-primary cursor-pointer hover:underline font-medium"
            onClick={() => setScreen('register')}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;