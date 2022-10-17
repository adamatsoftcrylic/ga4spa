import { React, useEffect } from "react";

export default function Promo() {
  const dataLayer = window.dataLayer;

  useEffect(() => {
    dataLayer.push({
      'event': "promo-test",
    })
  }, []);

  return (
    <div id="promo">Promo Box</div>
  )
}