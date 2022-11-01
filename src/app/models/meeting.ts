export interface IMeeting {
    gender: string,
    name: {
        title: string,
        first: string,
        last: string
    },
    picture: {
        large: string,
        medium: string,
        thumbnail: string,
    },
    nat: string,
    id: {
        name: string,
        value: string
    }
}