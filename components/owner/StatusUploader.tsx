"use client";

export default function StatusUploader() {

return(

<div className="status-upload">

<input
type="text"
placeholder="Status title"
/>

<textarea
placeholder="Status caption"
/>

<input
type="file"
accept="image/*,video/*"
/>

<button>

Upload Status

</button>

</div>

);

}
