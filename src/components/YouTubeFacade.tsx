"use client";

import { useState } from "react";

export function YouTubeFacade({ videoId, title }: { videoId: string; title: string }) {
  const [loaded, setLoaded] = useState(false);
  return <div className="relative aspect-video overflow-hidden rounded-3xl bg-navy shadow-soft">{loaded ? <iframe className="h-full w-full" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> : <button type="button" className="group h-full w-full" onClick={() => setLoaded(true)} aria-label={`Play video: ${title}`}><img src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`} alt="" className="h-full w-full object-cover opacity-80 transition group-hover:scale-105" /><span className="absolute inset-0 grid place-items-center"><span className="grid h-20 w-20 place-items-center rounded-full bg-white text-3xl text-teal shadow-soft">▶</span></span></button>}</div>;
}
