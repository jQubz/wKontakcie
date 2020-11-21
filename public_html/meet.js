const domain = 'meet.jit.si';
const options = {
    roomName: 'W Kontakcie',
    width: $(window).width() - 8,
    height: $(window).height() - 8,
    parentNode: document.querySelector('#meet'),
    userInfo: {
        email: 'anna@buziaczek.pl',
        displayName: 'Anna Kowalska'
    },
    configOverwrite: {
        startWithAudioMuted: true,
        disableDeepLinking: true
    },
    interfaceConfigOverwrite: {
        MOBILE_APP_PROMO: false
    },

};
const api = new JitsiMeetExternalAPI(domain, options);
