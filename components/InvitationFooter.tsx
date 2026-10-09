import { invitationConfig } from "@/lib/invitation-config";

export function InvitationFooter() {
  return (
    <footer className="border-t border-champagne/20 px-5 py-12 text-center">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-champagne/50 font-display text-2xl text-champagne">
          {invitationConfig.company.logoText}
        </div>
        <p className="mt-5 font-display text-3xl text-ivory">{invitationConfig.company.name}</p>
        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-champagne/75">{invitationConfig.event.dateLabel} | {invitationConfig.event.time}</p>
        <div className="mx-auto my-6 flex max-w-xs items-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-champagne/70" />
          <span className="h-1.5 w-1.5 rotate-45 bg-champagne" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-champagne/70" />
        </div>
        <p className="text-sm uppercase tracking-[0.24em] text-ivory/62">We Can&apos;t Wait to Welcome You</p>
      </div>
    </footer>
  );
}

