import React, { useEffect } from "react";
import "./ChatWidget.scss"
const ChatWidget = () => {
    useEffect(() => {
        const s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://embed.tawk.to/641ddb294247f20fefe7ce49/1gsaa07bm";
        const t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(s, t);

        // Add custom CSS to hide the default text
        const style = document.createElement("style");
        style.innerHTML = ".tawk-chat-status-widget .tawk-to-tooltip { display: none !important; }";
        document.head.appendChild(style);
    }, []);

    return <div />;
};

export default ChatWidget;
