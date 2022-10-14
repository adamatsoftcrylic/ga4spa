import { React, useEffect } from "react";



export default function Promo() {
  useEffect(() => {
    dataLayer.push({
      'event': "test"
    })
  }, []);

  return (
    <div id="promo">Promo Box</div>
  )
}