[createdPlaylists, playlistObj].forEach(i => {
  i.addEventListener('click', () => {
    if (playlistObjBool) {
      playlistObj.data = '/icons/less_up-arrow.svg';

      playlistObjBool = false;
    } else {
      playlistObj.data = '/icons/more_down-arrow.svg';

      playlistObjBool = true;
    }

    playlistObj.addEventListener('load', () => {
      const svgDoc = playlistObj.contentDocument;
      const path = svgDoc.querySelector('path');
  
      path.setAttribute('fill', '#3E4557');
    })
  })
})
