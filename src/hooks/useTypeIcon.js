import { useState, useEffect } from "react";

export default function useTypeIcon(iconName) {
    const [image, setImage] = useState([]);

    useEffect(() => {
        const importImages = (r) => {
            return r.keys().map((item) => {
                return r(item);
            });
        };

        const importedIconsPaths = importImages(require.context("./../img/typeIcons", false, /\.(svg)$/));
        const requestedIcon = importedIconsPaths.filter(iconPath => iconPath.includes(iconName));
        setImage(requestedIcon);

    }, [iconName]);

    return image;
}