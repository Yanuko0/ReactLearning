import { create } from "zustand"; 
import createChannelStore from "./modules/channenlStore";
import createCounterStore from "./modules/conterStore";

const useStore = create((...a) => {
    return {
        ...createCounterStore(...a),
        ...createChannelStore(...a)
    }
})



export default useStore