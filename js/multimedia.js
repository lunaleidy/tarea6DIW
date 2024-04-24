document.addEventListener("DOMContentLoaded", function () {
    var linkAudios = document.getElementById('linkAudios');
    var linkVideo = document.getElementById('linkVideo');
    var sectionAudios = document.getElementById('audios');
    var sectionVideo = document.getElementById('video');
    var audioSections = document.querySelectorAll('.audio-container');
    var audios = document.querySelectorAll('audio');

    // Función para detener todos los audios excepto el actual
    function stopAllAudios(current) {
        audios.forEach(function (audio) {
            if (audio !== current) {
                audio.pause();
                audio.currentTime = 0;
            }
        });
    }

    // Agregar manejadores para detener otros audios al reproducir uno
    audios.forEach(function (audio) {
        audio.addEventListener('play', function () {
            stopAllAudios(this);
        });
    });

    // Función para mostrar u ocultar secciones completas
    function toggleSection(link, section) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var display = section.style.display === 'none' ? 'block' : 'none';
            section.style.display = display;
            if (section === sectionAudios && display === 'block') {
                audioSections.forEach(function (audio) {
                    audio.style.display = 'block';
                });
            }
        });
    }

    // Función para manejar enlaces individuales de audios
    var audioLinks = document.querySelectorAll('aside a[data-audio]');
    audioLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var audioId = this.getAttribute('data-audio');
            audioSections.forEach(function (audio) {
                audio.style.display = 'none';
            });
            document.getElementById(audioId).style.display = 'block';
            sectionAudios.style.display = 'block';
        });
    });

    toggleSection(linkAudios, sectionAudios);
    toggleSection(linkVideo, sectionVideo);
});
