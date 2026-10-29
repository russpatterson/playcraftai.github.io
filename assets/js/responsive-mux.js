/* One iframe per demo: inactive formats never receive a player URL. */
(() => {
  const narrow = window.matchMedia('(max-width: 767px)');
  document.querySelectorAll('.responsive-mux').forEach((host) => {
    const frame = host.querySelector('.responsive-mux__frame');
    const status = host.querySelector('.responsive-mux__status');
    let activeId = null;
    let timeout;
    function update() {
      const mode = narrow.matches ? 'phone' : 'landscape';
      const id = narrow.matches ? host.dataset.mobilePlaybackId : host.dataset.desktopPlaybackId;
      if (id && id === activeId) return;
      clearTimeout(timeout);
      // Removing the previous browsing context stops its playback and requests.
      frame.replaceChildren();
      activeId = id || null;
      host.dataset.activeFormat = mode;
      if (!id || !/^[a-zA-Z0-9]+$/.test(id)) {
        status.textContent = `${mode === 'phone' ? 'Phone' : 'Landscape'} video is awaiting upload.`;
        return;
      }
      status.textContent = `Loading ${mode} view…`;
      const player = document.createElement('iframe');
      player.title = `${host.dataset.title} — ${mode} view`;
      player.allow = 'accelerometer; gyroscope; encrypted-media; picture-in-picture; fullscreen';
      player.allowFullscreen = true;
      player.src = `https://player.mux.com/${id}`;
      player.addEventListener('load', () => {
        if (frame.firstElementChild !== player) return;
        clearTimeout(timeout);
        status.textContent = `${mode === 'phone' ? 'Phone' : 'Landscape'} view · selected for your screen width`;
      });
      player.addEventListener('error', () => {
        if (frame.firstElementChild !== player) return;
        clearTimeout(timeout);
        status.textContent = 'Video could not load. Reload the page to retry.';
      });
      frame.append(player);
      timeout = setTimeout(() => {
        if (frame.firstElementChild === player) status.textContent = 'Video is taking longer to load. Check your connection or reload to retry.';
      }, 20000);
    }
    narrow.addEventListener('change', update);
    update();
  });
})();
