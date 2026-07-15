import UserAvatar from "./UserAvatar";
import StatusReaction from "./interactions/StatusReaction";
import StatusReply from "./interactions/StatusReply";
import StatusViews from "./interactions/StatusViews";

interface Props {
  title: string;
  caption: string;
}

export default function StatusCard({
  title,
  caption,
}: Props) {
  return (
    <div className="status-card">

      <UserAvatar name="Owner" />

      <h2>{title}</h2>

      <p>{caption}</p>

      <StatusViews views={0} />

      <StatusReaction />

      <StatusReply />

    </div>
  );
}
