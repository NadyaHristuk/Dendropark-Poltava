import { OverlayScrollbars } from "overlayscrollbars";
import { useEffect } from "react";

const config = {
    scrollbars: {
        defer: true,
        // theme: 'os-theme-dark'
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