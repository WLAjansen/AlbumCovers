<script>
    let alleAlbums = document.querySelectorAll('.cover');
    const naarBoven = (e) => {
      e.target.classList.remove('naarBeneden');
      e.target.classList.add('naarBoven');
    }
    const naarBeneden = (e) => {
      e.target.classList.remove('naarBoven');
      e.target.classList.add('naarBeneden');
    }

    for (let i = 0; i < alleAlbums.length; i++) {
      let album = alleAlbums[i];
      album.addEventListener('mouseenter', naarBoven);
      album.addEventListener('mouseleave', naarBeneden);
    }
  </script>