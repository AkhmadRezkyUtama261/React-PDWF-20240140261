import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 font-['Urbanist'] relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-2xl w-full max-w-md border border-slate-200 z-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Welcome Back</h1>
          <p className="text-slate-500 text-sm">Please enter your details to sign in</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
              placeholder="name@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
              placeholder="••••••••"
            />
          </div>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-indigo-200 transition-all transform hover:-translate-y-0.5 active:scale-95">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

Dasar (`src/pages/Dashboard.jsx`)

```jsx
import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-slate-50 font-['Inter']">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 p-6 hidden md:block">
        <h2 className="text-white text-2xl font-bold mb-10">SI_TAILWIND</h2>
        <nav className="space-y-4">
          <a href="#" className="flex items-center space-x-3 text-white bg-slate-800 p-3 rounded-lg">
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 hover:bg-slate-800 rounded-lg transition-colors">
            <span>Data Santri</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 hover:bg-slate-800 rounded-lg transition-colors">
            <span>Kehadiran</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Overview</h1>
          <div className="flex items-center space-x-4">
            <span className="text-slate-600">Admin Mode</span>
            <div className="w-10 h-10 bg-indigo-500 rounded-full"></div>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[ {title: 'Total Santri', val: '124'}, {title: 'Hadir Hari Ini', val: '118'}, {title: 'Izin/Sakit', val: '6'} ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <p className="text-slate-500 text-sm font-medium">{stat.title}</p>
              <h3 className="text-4xl font-bold text-slate-900 mt-1">{stat.val}</h3>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

Silakan cek presentasi di atas untuk melihat detail visualnya. Beritahu saya jika kamu ingin menambahkan fitur spesifik lainnya seperti tabel data atau grafik!