export const toNotificationSuccessView = message => {
  return `
    <div class="notification-content">
        <i class="fa-solid fa-check"></i>
        <div class="notification-message">
            <span class="text text-1">Success</span>
            <span class="text text-2">${message}</span>
        </div>
        <span class="close-notification">&times;</span>
        <div class="progress"></div>
    </div>
    `;
};

export const toNotificationErrorView = message => {
  return `
    <div class="notification-content">
        <i class="fa-solid fa-burst"></i>
        <div class="notification-message">
            <span class="text text-1">Error</span>
            <span class="text text-2">${message}</span>
        </div>
        <span class="close-notification">&times;</span>
        <div class="progress"></div>
    </div>
    `;
};

export const toNotificationNoteView = message => {
  return `
    <div class="notification-content">
        <i class="fa-solid fa-exclamation"></i>
        <div class="notification-message">
            <span class="text text-1">Note</span>
            <span class="text text-2">${message}</span>
        </div>
        <span class="close-notification">&times;</span>
        <div class="progress"></div>
    </div>
    `;
};
