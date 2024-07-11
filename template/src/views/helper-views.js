export const toggleHeart = (gifId, type) => `
    <i class="favorite ${type} fa-heart" data-gif-id="${gifId}"></i>`;

export const gifOverlayUserInfo = (gif, user) => {
  if (user) {
    return `
    <div class="account">
        <span class="avatar"><img src=${user.avatar_url || ''}></span>
        <span class="account-name">${gif.username || 'Unknown User'}</span>
    </div>`;
  }
  return '';
};
