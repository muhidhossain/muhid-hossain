const { useEffect } = require("react");
const { useLocation } = require("react-router-dom")

const ScrollTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scroll(0, 0);
    }, [pathname])

    return null;
}

export default ScrollTop;