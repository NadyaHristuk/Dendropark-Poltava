import { OverlayScrollbars } from "overlayscrollbars";
import { useEffect } from "react";

const config = {
    scrollbars: {
        // autoHide: 'never'
    }
};


export const useScrollBar = (root) => {
    useEffect(() => {
        let scrollbars;

        if (root.current) {
            scrollbars = OverlayScrollbars(root.current, config)
        }

        return () => {
            if (scrollbars) {
                scrollbars.destroy();
            }
        }

    }, [root])

}