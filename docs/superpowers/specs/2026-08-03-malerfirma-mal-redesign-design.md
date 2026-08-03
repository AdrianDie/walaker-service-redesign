# Walaker Service — redesign basert på malerfirma-malen

## Bakgrunn
Walaker Service (odd-jobs/håndverker, én person, Thilo Fossum Walaker, 19 år, Gol i Hallingdal) skal få et fullstendig nytt design. I stedet for å bygge fra bunnen gjenbruker vi malen `dmarketing-redesign/maler/malerfirma` (Tailwind CDN + Motion.js, grønn brand-farge) som visuelt/strukturelt utgangspunkt, og fyller inn ekte innhold fra dagens `walaker-service-redesign` og den opprinnelige mirrorede siden.

## Beslutninger (avklart med Adrian)
- **Én side**, ikke malens 4-siders struktur (index/tjenester/om-oss/kontakt) — seksjonene fra malen slås sammen med ankerlenker som i dag.
- **Ingen fiktivt innhold**: malens falske stats (800+ prosjekter, 12 år, 4.9★, Mesterbrev, 5 års garanti) og fiktive kundeanmeldelser fjernes/skrives om til ærlig innhold. Anmeldelsesseksjonen droppes helt siden det ikke finnes ekte sitater.
- **Behold malens grønne brand-farge** (`#15803D` / `#16A34A` / `#DCFCE7`) som den er.
- **Bygges direkte i `walaker-service-redesign`** (overskriver index.html/style.css/app.js) — ingen ny mappe.

## Innholdskilder
- Ekte kontaktinfo, tjenesteliste og om-meg-tekst: `walaker-service-redesign/index.html` (dagens live redesign) og `walaker-service/walakerservice.no/index.html` (opprinnelig mirror).
- Visuell struktur, seksjonstyper, Tailwind-klasser og animasjonsmønster: `dmarketing-redesign/maler/malerfirma/{index,tjenester,om-oss,kontakt}/index.html`.

## Seksjonsplan (én side)
1. **Nav** — "Walaker Service", ankerlenker (#tjenester #om-meg #kontakt), CTA "Ring meg" → `tel:+4748190098`.
2. **Hero** — glassmorphism-kort over full-bleed bilde (generisk stock-bilde med onerror-fallback, ikke portrett av en ekte person siden vi ikke har egne bilder). Overskrift "Walaker Service — Hallingdal", ingress fra dagens hero-lead, CTA-er Ring meg / Se tjenester.
3. **Stats-rad** — erstatter malens falske tall med ærlige: 8 tjenester · 100% tilgjengelig · Gol, Hallingdal · Fast/avtalt pris.
4. **Tjenester (bento grid)** — de 8 ekte tjenestene: Bæring, Hagearbeid, Maling, Montering, Rydding, Snømåking, Teknisk bistand, Vask og polering. Korte, ærlige beskrivelser (ingen priser/garantier vi ikke har).
5. **Om meg (split)** — dagens ekte tekst (19 år, Gol, fleksibel og blid, bredt tjenestetilbud) + de 4 eksisterende stat-kortene (100% tilgjengelig, blid og fleksibel, lokalkjent, 8 tjenester).
6. **Prosess** — ny, ærlig 3-stegs prosess: Send melding → Avtal tid og pris → Jobben gjøres. Ikke malens "5 års garanti / skriftlig tilbud innen 24t".
7. **Anmeldelser** — droppes (ingen ekte sitater).
8. **Mørk CTA** — "Klar for å få hjulpet?" med Ring / Send melding-knapper, ekte telefon/e-post.
9. **Kontakt** — beholder dagens ekte kontaktmåte (telefon, e-post, Facebook/Instagram, service-tags), stylet i malens pill/kort-look. Ikke malens fiktive skjema/adresse/åpningstider siden vi ikke har ekte data der.
10. **Footer** — ekte org.nr, © 2026, "Nettside levert av Dietrichs Marketing"-kreditt (som i dag).

## Teknisk
- Behold enkeltside-filstrukturen (`index.html`, `style.css` eller inline `<style>`, `app.js` eller inline `<script>`), avhengig av hva som blir ryddigst når malens Tailwind-utility-klasser flettes inn.
- Bruk malens Tailwind CDN + Motion.js-oppsett for scroll-reveals i stedet for dagens GSAP, siden vi bygger videre på malens mønster.
- Behold favicon (`assets/favicon.svg`).

## Ute av scope
- Ingen endring av `walaker-service` (rå-mirror) eller `dmarketing-redesign/maler/malerfirma` (malen rører vi ikke).
- Ingen publisering/push til remote uten eksplisitt godkjenning fra Adrian.
