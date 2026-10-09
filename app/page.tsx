import { CountdownSection } from "@/components/CountdownSection";
import { EventDetails } from "@/components/EventDetails";
import { GrandOpeningReveal } from "@/components/GrandOpeningReveal";
import { InvitationFooter } from "@/components/InvitationFooter";
import { InvitationMessage } from "@/components/InvitationMessage";
import { InvitationWelcome } from "@/components/InvitationWelcome";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-midnight text-ivory">
      <InvitationWelcome>
        <GrandOpeningReveal />
        <CountdownSection />
        <EventDetails />
        <InvitationMessage />
        <InvitationFooter />
      </InvitationWelcome>
    </main>
  );
}
