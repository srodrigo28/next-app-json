import UserManagement from './components/UserManagement';

async function getUsers() {
  try {
    const res = await fetch('http://localhost:3001/usuarios', { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Falha ao buscar dados');
    }
    return res.json();
  } catch (error) {
    console.error("Erro ao conectar com json-server:", error);
    return [];
  }
}

export default async function Home() {
  const users = await getUsers();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-indigo-500/30">
      <div className="fixed inset-0 -z-10 h-full w-full bg-[#0a0a0a]">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <UserManagement initialUsers={users} />
    </main>
  );
}
