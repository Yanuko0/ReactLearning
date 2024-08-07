const URL = 'http://geek.itheima.net/v1_0/channels'

const createChannelStore = (set) => {
    return {
        channelList: [],
        fetchGetList: async () => {
            const res = await fetch(URL)
            const jsonRes = await res.json()
            console.log(jsonRes)
            set({
                channelList: jsonRes.data.channels
            })
        }

    }
}

export default createChannelStore