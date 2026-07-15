"use client";

export default function UploadStatus() {
  return (
    <div className="upload-status">

      <input
        type="text"
        placeholder="Status Title"
      />

      <textarea
        placeholder="Write a caption..."
      />

      <input type="file" />

      <button>
        Upload Status
      </button>

    </div>
  );
}
