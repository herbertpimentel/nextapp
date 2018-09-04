import stores from "../stores";
import { Provider } from "mobx-react";

import IndexPage from "./index";

export default () => {
    
    return (
        <Provider {...stores}>
            <IndexPage />
        </Provider>
    )
};