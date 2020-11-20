const domain = 'meet.jit.si';
const options = {
    roomName: 'W Kontakcie',
    width: $(window).width() - 8,
    height: $(window).height() - 8,
    parentNode: document.querySelector('#meet'),
    userInfo: {
        email: 'email@jitsiexamplemail.com',
        displayName: 'John Doe'
    },
    configOverwrite: {
        startWithAudioMuted: true
    },
    interfaceConfigOverwrite: {
        filmStripOnly: true
    },

};
const api = new JitsiMeetExternalAPI(domain, options);
