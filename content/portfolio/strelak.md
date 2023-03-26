---
head.title: Strelak Community Garden
head.description: Creating a website that helps to build a community. A heartwarming work 🌿.
head.image: /image/portfolio/community-garden.jpg
fields.image: /image/portfolio/community-garden.jpg
fields.order: 500
fields.skills: ["Netlify", "Vue.js", "Tailwind CSS", "Figma"]
featured: false
type: "full"
---

# **Od semínka ke květu:** <br>Web komunitní zahrady Střelák

_Web může být skvělý způsob jak nechat rozrůst a rozkvést komunitu. Zkusili jsme to se zahradou Střelák v Hradci Králové._

## Zahradníci

Nápad přišel od zakladatelů hradeckého spolku Souhra (sousedský Hradec). Ti promysleli koncept, našli pro něj místo a začali k zahradě zvát všechny zájemce o "terapii hlínou". Projekt vyklíčil v půlroční snažení mnoha zapálených amatérských zahradníků a v menší podzimní sklizeň. Cílem projektu ale není jen odnést si domů koš mrkve nebo brambor, ale také lépe poznat svoje okolí, a lidi, kteří v něm žijí.

Pro takový cíl je nezbytná určitá forma organizace, a tady mohl pomoct nový web. Ten měl fungovat jako zdroj informací, ale i jako cesta k rezervování záhonů pro budoucí zahradníky. Cílem bylo, aby si návštěvníci mohli pomocí formuláře zaregistrovat k odběru novinek vybrat si, jakým způsobem se zapojí do dění okolo zahrady.

![Ukázka webu Zahrada Střelák](/image/portfolio/strelak/strelak-homepage.webp)

## Technologie pro přírodu

Pro tvorbu stránky jsem zvolil variantu statického webu. Ten má několik výhod, jako jsou například rychlé načítání, **malá uhlíková stopa** a **minimální náklady na údržbu**. Díky tomu stačilo správcům zahrady pokrýt náklady na registraci domény a web od té doby funguje zcela zdarma.

Pro ukládání a správu dat jsem použil [Supabase](https://supabase.com/), skvělou službu, která usnadňuje propojení databáze s formuláři prostřednictvím API. Díky napojení na databázi si návštěvníci mohli zarezervovat záhonky v zahradě, ale pouze tehdy, dokud zbývala volná místa.

Součástí přihlášení bylo i vytvoření **uživatelsky příjemných formulářů** pro jednotlivé role (zahradník, dobrovolník, pozorovatel). Ty návštěvníky přesně navedou ke správnému vyplnění a odeslání. Ty jsou napojeny na [Netlify Forms](https://docs.netlify.com/forms/setup/), které automaticky upozorní správce zahrady na každou novou registraci.

Protože na webové stránky se mělo odkazovat na sociálních sítích, bylo důležité vytvořit optimalizované obrázky pro sdílení - [Open Graph images](https://css-tricks.com/essential-meta-tags-social-media/). Ty dodávají odkazům na Facebooku nebo Twitteru výraznost a šmrnc.

Konečně, záměrem bylo vytvořit přátelský, hravý design webu, který by odrážel neformální charakter komunitní zahrady. K tomu jsem použil volně přístupné ilustrace, které jsem doplnil o několik **interaktivních animací** a UI prvků.

![Ukázka webu zahrady na mobilu](/image/portfolio/strelak/strelak-homepage-mobile.webp)

## Co vyrostlo?

Komunita okolo zahrady se v prvním roce rozrostla na bezmála sto členů. Organizují se zde pravidelné akce a pěstitelé si už odnesli domů první sklizeň. Web se rozrůstá s každou další sezónou, stejně jako sazeničky dychtivých pěstitelů.

::alert{icon="ph:eye-duotone"}
#title
Zahradou se můžete projít na [zahradastrelak.cz](https://zahradastrelak.cz/).
::
