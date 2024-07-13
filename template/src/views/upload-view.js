export const toUploadView = () => {
  return `
    <div class="content">
    <div class="upload-content">
    <h1>Upload a GIF, MP4, MOV or WebM</h1>
        <div>
          <input type="file" id="fileInput" style="display: none;" />
          <label for="fileInput" id="fileLabel" class="input-element">Drag & drop | Click to choose file</label>
        </div>
      </div>
    </div>
    `;
};
