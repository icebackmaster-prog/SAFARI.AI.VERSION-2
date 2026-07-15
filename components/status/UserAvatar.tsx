interface Props {
  name: string;
}

export default function UserAvatar({
  name,
}: Props) {
  return (
    <div className="user-avatar">
      {name.charAt(0).toUpperCase()}
    </div>
  );
}
