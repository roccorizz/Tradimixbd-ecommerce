import React, { useEffect } from "react";

const ChatWidget = () => {
    useEffect(() => {
        const s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://embed.tawk.to/641ddb294247f20fefe7ce49/1gsaa07bm";
        const t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(s, t);
    }, []);

    return <div />;
};

export default ChatWidget;
