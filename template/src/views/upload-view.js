export const toUploadView = () => {
  return `
    <div class="content">
      <h1>Upload a gif</h1>
      <form id="uploadForm">
        <input type="file" id="fileInput" />
        <button type="submit">Upload</button>
      </form>
      <div>
        <!-- displaying the gif here -->
      </div>
    </div>
    `;
};
