import React from 'react';

const Dashboard = () => {
  // Data sementara (Array Object) sesuai ketentuan tugas
  const dataSantri = [
    { id: 1, nama: "Ahmad Fauzan", kelas: "Iqra 2", status: "Hadir" },
    { id: 2, nama: "Siti Aisyah", kelas: "Iqra 3", status: "Izin" },
    { id: 3, nama: "Budi Santoso", kelas: "Al-Quran", status: "Hadir" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar Sederhana */}
      <div className="w-64 bg-indigo-900 text-white hidden md:block p-6">
        <h1 className="text-xl font-bold mb-10">Admin Panel</h1>
        <ul className="space-y-4">
          <li className="bg-indigo-800 p-3 rounded-lg cursor-pointer">Dashboard</li>
          <li className="hover:bg-indigo-800 p-3 rounded-lg cursor-pointer transition-all">Data Santri</li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 md:p-10">
        <header className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-slate-800">Ringkasan Kehadiran</h2>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm" onClick={() => window.location.reload()}>Logout</button>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-indigo-500">
            <p className="text-slate-500 text-sm">Total Santri</p>
            <h3 className="text-2xl font-bold">120</h3>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
            <p className="text-slate-500 text-sm">Hadir</p>
            <h3 className="text-2xl font-bold">112</h3>
          </div>
        </div>

        {/* Tabel Data */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-100 border-bottom">
              <tr>
                <th className="p-4 text-slate-600 font-semibold">Nama</th>
                <th className="p-4 text-slate-600 font-semibold">Kelas</th>
                <th className="p-4 text-slate-600 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {dataSantri.map((s) => (
                <tr key={s.id} className="border-b hover:bg-slate-50 transition-all">
                  <td className="p-4 text-slate-700">{s.nama}</td>
                  <td className="p-4 text-slate-700">{s.kelas}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${s.status === 'Hadir' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {s.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;