import { useEffect, useRef, useState } from "react";

export default function Map() {
    const mapRef = useRef();
    const [googleMap, setGoogleMap] = useState();

    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current)

        setGoogleMap(map)
    }, [mapRef, googleMap])

    return (
        <div ref={mapRef} />
    )
}