import {useEffect} from "react";

const discordRedirect = () =>  {
    useEffect(() => {
        window.location.replace(
            "https://discord.gg/avdanos"
        );
    });

    return (<></>);
}

export default discordRedirect;

