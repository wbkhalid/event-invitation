"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowLeft01Icon, ArrowRight01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeIcon } from "@/components/HugeIcon";
import { invitationConfig } from "@/lib/invitation-config";

export function OfficeGallery() {
  const photos = invitationConfig.gallery;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [failedPhotos, setFailedPhotos] = useState<string[]>([]);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isOpen = selectedIndex !== null;
  const selected = selectedIndex === null ? null : photos[selectedIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isOpen]);

  function navigate(direction: number) {
    setSelectedIndex(index => index === null ? null : (index + direction + photos.length) % photos.length);
  }

  function imageFailed(src: string) {
    setFailedPhotos(previous => previous.includes(src) ? previous : [...previous, src]);
  }

  return (
    <section id="office-gallery" aria-labelledby="gallery-heading" className="office-gallery">
      <div className="mx-auto max-w-6xl">
        <motion.div className="gallery-heading" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div>
            <p className="text-xs uppercase text-brand/80">A Glimpse Inside</p>
            <h2 id="gallery-heading" className="mt-3 font-display text-4xl text-ivory sm:text-5xl">Our office.<br /><em className="text-brand">Your warm welcome.</em></h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-ivory/65">The setting for an evening of good food, warm conversation, and great company.</p>
        </motion.div>
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <motion.figure key={photo.src} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}>
              <button type="button" onClick={() => setSelectedIndex(index)} aria-label={`View ${photo.title} photo`} aria-haspopup="dialog" className="gallery-photo">
                {failedPhotos.includes(photo.src) ? <span className="gallery-image-error">Photo unavailable</span> : (
                  <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1199px) 48vw, 560px" onError={() => imageFailed(photo.src)} />
                )}
              </button>
              <figcaption className="gallery-caption"><span className="text-brand/65">{String(index + 1).padStart(2, "0")}</span><span>{photo.title}</span></figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
      <dialog ref={dialogRef} className="gallery-dialog" aria-labelledby="gallery-photo-title" onClose={() => setSelectedIndex(null)} onClick={event => { if (event.target === event.currentTarget) setSelectedIndex(null); }} onKeyDown={event => {
        if (event.key === "ArrowRight") { event.preventDefault(); navigate(1); }
        if (event.key === "ArrowLeft") { event.preventDefault(); navigate(-1); }
      }}>
        {selected ? (
          <div className="gallery-viewer">
            <div className="gallery-viewer-header">
              <h3 id="gallery-photo-title" className="font-display text-xl text-ivory">{selected.title}</h3>
              <button type="button" className="gallery-control" onClick={() => setSelectedIndex(null)} aria-label="Close photo viewer" title="Close"><HugeIcon icon={Cancel01Icon} size={24} /></button>
            </div>
            <div className="gallery-full-photo">
              {failedPhotos.includes(selected.src) ? <span className="gallery-image-error" role="status">Photo unavailable</span> : (
                <Image src={selected.src} alt={selected.alt} width={selected.width} height={selected.height} sizes="(max-width: 1200px) 95vw, 1200px" onError={() => imageFailed(selected.src)} />
              )}
            </div>
            <div className="gallery-viewer-footer">
              <button type="button" className="gallery-control" onClick={() => navigate(-1)} aria-label="Previous photo" title="Previous photo"><HugeIcon icon={ArrowLeft01Icon} size={24} /></button>
              <p className="text-xs text-ivory/65" aria-live="polite">{(selectedIndex ?? 0) + 1} / {photos.length}</p>
              <button type="button" className="gallery-control" onClick={() => navigate(1)} aria-label="Next photo" title="Next photo"><HugeIcon icon={ArrowRight01Icon} size={24} /></button>
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
