const defaultUri = '/admin/'

const getFirebaseUrl = () => window.location.pathname.replace(defaultUri, '')

export { getFirebaseUrl }
