chrome.storage.sync.get(["hideName", "hideProfilePicture"], function (items) {
  if (items.hideName) {
    console.log("hiding name");
    // Apply styles to hide name
  }
  if (items.hideProfilePicture) {
    // Apply styles to hide profile picture
    console.log("hiding profile picture");
  }
});
