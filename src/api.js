export default {
    nextLaunches(count, offset) {
        return fetch('https://launchlibrary.net/1.4/launch/next/20').then(res => res.json())
    },
    previousLaunches() {
        return fetch('https://launchlibrary.net/1.4/launch?mode=verbose&startdate=1960-01-01&limit=10').then(res => res.json())
    },
    launchById(id) {
        return fetch('https://launchlibrary.net/1.4/launch/' + id).then(res => res.json())
    },
    agencyTypeById(id) {
        return fetch('https://launchlibrary.net/1.4/agencytype/' + id).then(res => res.json())
    },
}