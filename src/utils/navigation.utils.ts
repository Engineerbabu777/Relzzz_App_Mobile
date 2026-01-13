

import {
    createNavigationContainerRef,
    CommonActions
} from "@react-navigation/native";


export const navigationRef = createNavigationContainerRef();

export async function navigate(name: string, params?: object) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(CommonActions.navigate({ name, params }));
    }
}