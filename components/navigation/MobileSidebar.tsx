interface Props {
  open: boolean;
}

export default function MobileSidebar({
  open,
}: Props) {
  return (
    <aside
      className={
        open
          ? "mobile-sidebar open"
          : "mobile-sidebar"
      }
    >
      <ul>

        <li>🏠 Home</li>

        <li>🤖 AI Chat</li>

        <li>📢 Status</li>

        <li>⭐ Premium</li>

        <li>⚙ Settings</li>

      </ul>
    </aside>
  );
}
