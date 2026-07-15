import StatusViewer from "@/components/status/StatusViewer";
import StatusCard from "@/components/status/StatusCard";

export default function StatusPage() {

return(

<main>

<h1>📢 SAFARI AI Status</h1>

<StatusViewer/>

<StatusCard
title="Welcome"
caption="Owner has not uploaded any status yet."
/>

</main>

);

}
