import React from "react";

const TILES: ReadonlyArray<{
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
}> = [
  { left: "45px", top: "45px", animationDelay: "-2s", animationDuration: "9s" },
  { left: "133px", top: "1px", animationDelay: "-6s", animationDuration: "11s" },
  { left: "265px", top: "1px", animationDelay: "-1s", animationDuration: "10s" },
  { left: "441px", top: "1px", animationDelay: "-8s", animationDuration: "12s" },
  { left: "529px", top: "45px", animationDelay: "-4s", animationDuration: "9s" },
  { left: "573px", top: "133px", animationDelay: "-9s", animationDuration: "13s" },
  { left: "1px", top: "177px", animationDelay: "-3s", animationDuration: "10s" },
  { left: "617px", top: "265px", animationDelay: "-7s", animationDuration: "11s" },
  { left: "1px", top: "309px", animationDelay: "-5s", animationDuration: "12s" },
  { left: "45px", top: "397px", animationDelay: "-10s", animationDuration: "9s" },
  { left: "89px", top: "485px", animationDelay: "-2s", animationDuration: "13s" },
  { left: "353px", top: "529px", animationDelay: "-6s", animationDuration: "10s" },
  { left: "485px", top: "485px", animationDelay: "-4s", animationDuration: "11s" },
  { left: "573px", top: "441px", animationDelay: "-8s", animationDuration: "9s" },
  { left: "705px", top: "1px", animationDelay: "-3s", animationDuration: "12s" },
  { left: "749px", top: "177px", animationDelay: "-7s", animationDuration: "10s" },
  { left: "705px", top: "397px", animationDelay: "-1s", animationDuration: "11s" },
  { left: "793px", top: "485px", animationDelay: "-5s", animationDuration: "9s" },
];

export function GridTiles() {
  return (
    <>
      {TILES.map((tile, idx) => (
        <span key={idx} className="tile" style={tile} />
      ))}
    </>
  );
}
