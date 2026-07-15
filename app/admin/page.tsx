import AdminNavbar from "@/components/admin/AdminNavbar";
import AdminSidebar from "@/components/admin/AdminSidebar";
import StatsCard from "@/components/admin/StatsCard";

export default function AdminPage() {
  return (
    <>
      <AdminNavbar />
      <AdminSidebar />

      <main className="admin-main">
        <h1>👑 SAFARI AI V2 Admin Dashboard</h1>

        <StatsCard
          title="Users"
          value="0"
        />

        <StatsCard
          title="Premium Users"
          value="0"
        />

        <StatsCard
          title="Status Posts"
          value="0"
        />

        <StatsCard
          title="AI Chats"
          value="0"
        />
      </main>
    </>
  );
}
