import { CHANGE } from "./ActionsNames";

export const change = () => {
    return {
        type: CHANGE,
        info: "Car changed"
    };
};
