const domain = 'meet.jit.si';
const options = {
    roomName: 'W Kontakcie',
    width: 700,
    height: 700,
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