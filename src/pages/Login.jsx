import React from 'react';

const Login = ({ onLogin }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-indigo-950 p-4">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">SI-Kehadiran</h2>
          <p className="text-indigo-200 text-sm mt-2">Masuk untuk mengelola data santri</p>
        </div>
        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <div>
            <label className="block text-indigo-100 text-sm mb-2">Email</label>
            <input type="email" placeholder="admin@tpa.com" className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-indigo-400 transition-all" />
          </div>
          <div>
            <label className="block text-indigo-100 text-sm mb-2">Password</label>
            <input type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white outline-none focus:ring-2 focus:ring-indigo-400 transition-all" />
          </div>
          <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg shadow-lg transition-all transform hover:scale-[1.02] active:scale-95">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;