/**
 * cities.ts — where the business operates.
 *
 * EDIT HERE. Localization is the moat: each city's intro, neighborhoods, landmarks,
 * issues, and faqs should be genuinely specific to that place. `nearby` slugs MUST
 * exist in CITIES (else dropped silently). Array order = display order.
 */
import type { ImageMetadata } from 'astro';
import type { Faq } from './services';

export interface CityIssue {
  title: string;
  body: string;
}

export interface City {
  slug: string;
  name: string;
  state?: string;
  /** Localized intro, ~150–250 words for priority cities. */
  intro: string;
  neighborhoods: string[];
  landmarks: string[];
  issues: CityIssue[];
  /** 3 nearby city slugs (must exist in this list). */
  nearby: string[];
  faqs: Faq[]; // Faq reused from services.ts
  /** Optional per-city hero background; falls back to the site default. */
  heroImage?: ImageMetadata;
  /** Optional per-city service-photo overrides, keyed by service slug. */
  serviceImages?: Partial<Record<string, ImageMetadata>>;
}

export const CITIES: City[] = [
  {
    slug: 'asheville',
    name: 'Asheville',
    state: 'NC',
    intro:
      'Asheville sits in a bowl of mountains where the French Broad and Swannanoa rivers meet, and while downtown and the close-in neighborhoods are on city sewer, most of Buncombe County is not. The homes out in Leicester, Candler, Fairview, Swannanoa, and the coves above West Asheville run on septic tanks and drain fields, and so do a huge share of the cabins and vacation rentals that fill the ridges around town. That mix is what we work in every day. Mountain septic is its own challenge here: lots are steep, tanks get buried on a slope or behind a deck with no records, the soil is rocky and slow to drain, and the heavy rain that keeps these mountains green also saturates drain fields. Add the short-term rental boom — homes that go from empty to a full house every weekend — and tanks fill faster and less predictably than the old "every few years" rule assumes. We pump, clean, repair, and inspect residential systems all over the Asheville area. Tell us roughly where your tank is and what is going on, and we will give you a straight answer, a real price, and a crew that knows how to work a mountain lot without tearing up your yard.',
    neighborhoods: ['West Asheville', 'Leicester', 'Candler', 'Fairview', 'Swannanoa', 'East Asheville'],
    landmarks: ['French Broad River', 'Blue Ridge Parkway', 'Biltmore Estate', 'Beaucatcher Mountain'],
    issues: [
      {
        title: 'Vacation rentals that fill tanks fast',
        body: 'Asheville’s short-term rental market means a lot of homes go from empty to a packed house every weekend. That bursty, heavy use fills septic tanks faster than a normal household, so rentals need pumping more often than the standard interval — and an overlooked rental tank is a backup waiting to happen.',
      },
      {
        title: 'Steep coves and buried, unmarked tanks',
        body: 'Out in the coves above West Asheville and around Fairview and Leicester, tanks sit on slopes and get buried under years of dirt and landscaping with no records of where the lid is. We locate and dig to the tank as part of the job and can map it so the next service is quick.',
      },
      {
        title: 'Heavy rain saturating drain fields',
        body: 'The same mountain rainfall that keeps Buncombe County green also soaks drain fields, and a saturated field cannot absorb much more. Pairing on-schedule pumping with runoff kept off the field is the best protection against soggy spots and backups here.',
      },
    ],
    nearby: ['arden', 'black-mountain', 'weaverville'],
    faqs: [
      {
        q: 'Do you cover all of the Asheville area?',
        a: 'Yes. We cover Asheville and all of Buncombe County — West Asheville, Leicester, Candler, Fairview, Swannanoa, and the surrounding coves and ridges, plus the suburbs out toward Arden, Weaverville, and Black Mountain. If you are not sure we reach you, call and ask; we likely do.',
      },
      {
        q: 'I run a short-term rental in Asheville — how often should I pump?',
        a: 'More often than a normal home. Rentals see heavy, bursty use, so depending on size and turnover many need pumping every one to three years rather than the usual three to five. We can look at your tank and booking pattern and set a schedule that keeps you from a backup during a guest’s stay.',
      },
      {
        q: 'My tank is somewhere on a steep cove lot — can you still reach it?',
        a: 'Almost always. Mountain access is most of what we do around Asheville. We bring extra hose so the truck can stay where it fits and still reach a tank up a bank or down a slope. Tell us about the driveway and grade when you call and we will come prepared.',
      },
    ],
  },
  {
    slug: 'hendersonville',
    name: 'Hendersonville',
    state: 'NC',
    intro:
      'Hendersonville sits south of Asheville in Henderson County, in the apple-orchard country between the Blue Ridge and the edge of the mountains. The town center has sewer, but the orchards, farms, and rural neighborhoods that surround it — out toward Etowah, Mills River, Edneyville, and Dana — run on septic, and so do a lot of the retirement homes and second homes that have brought so many people to this part of the county. We pump, clean, repair, and inspect residential septic systems all over the Hendersonville area. The local mix is its own thing: a lot of long-owned homes and farms with older, sometimes undersized tanks that have been in the ground for decades, plus newer builds on lots carved out of orchard land where the soil and grade do not always cooperate with a drain field. We see overdue tanks on properties that changed hands without anyone knowing the septic history, slow-draining clay soils, and fields that struggle after a wet spell. Tell us where your tank is and what it is doing, and we will give you an honest answer and a real price — no upsell, just a crew that knows Henderson County septic.',
    neighborhoods: ['Etowah', 'Mills River', 'Edneyville', 'Dana', 'Laurel Park', 'Flat Rock'],
    landmarks: ['Historic Main Street', 'Jump Off Rock', 'Henderson County orchards', 'Flat Rock / Carl Sandburg Home'],
    issues: [
      {
        title: 'Older farm and orchard systems',
        body: 'Much of Henderson County is long-owned farm and orchard land with septic tanks that have been in the ground for decades — often undersized for today’s households and sometimes with no service record at all. These older systems need pumping and an honest look at the tank and baffles before a small problem becomes a field failure.',
      },
      {
        title: 'Retirement and second homes that changed hands',
        body: 'Hendersonville draws a lot of retirees and second-home buyers, and homes often change hands with no idea when the tank was last pumped. A pump and inspection after a purchase gives you a known baseline instead of inheriting someone else’s neglected system.',
      },
      {
        title: 'Slow-draining clay soils',
        body: 'Plenty of lots around Hendersonville have heavy clay that drains slowly, which is hard on a drain field — especially after the wet stretches this area gets. Keeping the tank pumped so solids never reach the field is the best way to protect a field working in tough soil.',
      },
    ],
    nearby: ['fletcher', 'arden', 'brevard'],
    faqs: [
      {
        q: 'Do you serve all of Henderson County?',
        a: 'Yes. We cover Hendersonville and the surrounding communities — Etowah, Mills River, Edneyville, Dana, Laurel Park, and Flat Rock — and out into the rural orchard country. If you are not sure you are in our area, call and ask.',
      },
      {
        q: 'I just bought an older home near Hendersonville — what should I do first?',
        a: 'Have the tank pumped and the system inspected. Older Henderson County homes often have no service record, and starting with a pump and a look at the tank, baffles, and drain field gives you a known baseline and catches problems before they become expensive.',
      },
      {
        q: 'My drains are slow after it rains — is that the septic?',
        a: 'It can be. In the clay soils common here, a drain field that is full or aging struggles to absorb water when the ground is already saturated, and that shows up as slow drains. We will check whether it is a full tank, a line, or the field itself and tell you straight what it needs.',
      },
    ],
  },
  {
    slug: 'waynesville',
    name: 'Waynesville',
    state: 'NC',
    intro:
      'Waynesville is the seat of Haywood County, tucked up against the Great Smoky Mountains where the elevations climb fast and the valleys are full of long-held family land. Almost everything outside the town center runs on septic — the homes out toward Lake Junaluska, Maggie Valley, Clyde, and Canton, and the cabins and second homes scattered up the ridges and coves. We pump, clean, repair, and inspect residential septic systems across the Waynesville area. This is high-country septic: lots are steep enough that many systems use a pump to push effluent uphill to a drain field, tanks are buried on grades with no records, and at these elevations a system can sit unused for months when a second home is empty, then get hit with a full house. Maggie Valley’s seasonal and rental traffic adds to that pattern. We know how to find a buried tank on a mountain lot, how to test the pump-and-float systems so common up here, and how grade and our heavy rain stress a Haywood County drain field. Tell us where your tank is and what is going on, and we will give you an honest answer and a price you can count on.',
    neighborhoods: ['Lake Junaluska', 'Maggie Valley', 'Clyde', 'Hazelwood', 'Saunook', 'Jonathan Creek'],
    landmarks: ['Great Smoky Mountains', 'Lake Junaluska', 'Blue Ridge Parkway', 'Cataloochee / Maggie Valley'],
    issues: [
      {
        title: 'Pump systems pushing effluent uphill',
        body: 'Waynesville’s steep lots mean many homes sit below the only good spot for a drain field, so the system uses a pump tank and floats to lift effluent uphill. Those pumps wear out, and when one fails the system backs up. We test, repair, and replace effluent pumps, floats, and alarms so you get warning before a failure.',
      },
      {
        title: 'Second homes that sit empty, then fill up',
        body: 'A lot of Haywood County homes and cabins are seasonal or rented, sitting empty for stretches and then hosting a full house. That on-off pattern is hard on a system and makes it easy to forget pumping until there is a problem during a stay.',
      },
      {
        title: 'High elevation and freezing lines',
        body: 'At Waynesville and Maggie Valley elevations, shallow lines and exposed pump components can freeze in a hard winter, especially at a home that sits unheated and empty. We can check vulnerable spots and advise on protecting a system through the cold months.',
      },
    ],
    nearby: ['sylva', 'asheville', 'brevard'],
    faqs: [
      {
        q: 'Do you cover Haywood County and Maggie Valley?',
        a: 'Yes. We cover Waynesville and the surrounding Haywood County communities — Lake Junaluska, Maggie Valley, Clyde, Hazelwood, and out into the coves and up the ridges. Tell us where the property is and we will confirm and come prepared for the access.',
      },
      {
        q: 'My home has a septic pump and the alarm went off — what now?',
        a: 'On these mountain lots, a pump lifts effluent uphill to the drain field, and the alarm means the pump tank is filling faster than the pump empties it — usually a failed pump or stuck float. Cut back on water use and call us; we test the pump and floats and get it running before it backs up.',
      },
      {
        q: 'We only use our cabin part of the year — how often should we pump?',
        a: 'It depends on how heavily it is used when occupied, but seasonal and rental cabins are easy to neglect. We can set a schedule based on your actual use and check the system before a busy season so you are not dealing with a backup while guests or family are there.',
      },
    ],
  },
  {
    slug: 'black-mountain',
    name: 'Black Mountain',
    state: 'NC',
    intro:
      'Black Mountain sits just east of Asheville in the Swannanoa Valley, ringed by some of the steepest ridges in Buncombe County and climbing up toward Montreat and the Blue Ridge Parkway. The town has a small sewered core, but the homes up the coves and along the valley — out toward Montreat, Ridgecrest, and the Swannanoa side — almost all run on septic. We pump, clean, repair, and inspect residential systems throughout the Black Mountain and Swannanoa area. The terrain here is the story: lots are steep, drain fields get tucked into whatever flat ground a property has, and a lot of homes use pumps to move effluent to a field uphill. Many of these systems are older, on long-held family land or in established cove neighborhoods, and the heavy rain that funnels down these ridges saturates fields fast. We know how to locate a buried tank on a slope, test a pump-and-float setup, and read whether a soggy spot in the yard is a failing field or a fixable upstream problem. Tell us where your tank is and what it is doing, and we will give you a straight, honest answer and a real price.',
    neighborhoods: ['Montreat', 'Ridgecrest', 'Swannanoa', 'Cragmont', 'Broad River'],
    landmarks: ['Swannanoa Valley', 'Montreat', 'Blue Ridge Parkway', 'Lake Tomahawk'],
    issues: [
      {
        title: 'Steep ridges and runoff onto fields',
        body: 'Black Mountain’s coves funnel a lot of water downhill, and that runoff saturates drain fields built on the limited flat ground a steep lot offers. Keeping surface water diverted away from the field and the tank pumped on schedule is the best defense against soggy spots and backups here.',
      },
      {
        title: 'Older cove and family-land systems',
        body: 'Many homes up the Swannanoa Valley sit on long-held family land with septic systems that have been in the ground for decades. Older tanks, worn baffles, and undersized fields are common, so a pump paired with an honest inspection catches trouble before it turns into a field replacement.',
      },
      {
        title: 'Pump-and-float systems on the slopes',
        body: 'With so many homes sitting below their drain field, pump systems that lift effluent uphill are common around Black Mountain. Those pumps and floats wear out, and a failure stops the whole system — we test and replace them so you get an alarm’s warning instead of a backup.',
      },
    ],
    nearby: ['asheville', 'marion', 'weaverville'],
    faqs: [
      {
        q: 'Do you serve Black Mountain, Montreat, and Swannanoa?',
        a: 'Yes. We cover Black Mountain and the surrounding Swannanoa Valley, including Montreat, Ridgecrest, and Swannanoa, and up the coves toward the Parkway. Tell us about the lot and where the tank is and we will come ready for the access.',
      },
      {
        q: 'There’s a soggy spot in my yard above the drain field — is the field dead?',
        a: 'Not necessarily. On these steep lots a soggy spot can come from runoff saturating the field or from a fixable upstream problem like a full tank or a failed pump, not a dead field. We diagnose the whole system before recommending anything as expensive as a field rebuild.',
      },
      {
        q: 'Can you reach a tank on a steep Black Mountain lot?',
        a: 'Yes. Steep access is normal here. We bring extra hose so the truck can stay on stable ground and still reach a tank uphill or down a bank, and we locate and dig to buried lids as part of the job.',
      },
    ],
  },
  {
    slug: 'weaverville',
    name: 'Weaverville',
    state: 'NC',
    intro:
      'Weaverville sits just north of Asheville at the foot of the Reems Creek Valley, a fast-growing town surrounded by farmland, rolling ridges, and rural Buncombe County communities like Barnardsville, Alexander, and the country running up toward Mars Hill. The town has some sewer, but the farms, the older homes, and the new builds on the outskirts run on septic. We pump, clean, repair, and inspect residential systems across the Weaverville area. The local pattern is a mix: long-held farm properties with older tanks and no service records, and a wave of newer homes on lots subdivided from larger tracts, where the drain field had to fit whatever soil and grade the lot offered. Both keep us busy. We see overdue tanks on properties that have changed hands, drain fields working in tight clay or rocky ground, and pump systems on the steeper lots up the valley. We know how to find a buried tank on a Reems Creek lot, test the pumps and floats, and tell you honestly whether a problem is the tank, a line, or the field. Give us a call with where your tank is and what is going on, and we will quote it straight.',
    neighborhoods: ['Reems Creek', 'Barnardsville', 'Alexander', 'Jupiter', 'Stocksville'],
    landmarks: ['Reems Creek Valley', 'Lake Louise', 'Vance Birthplace', 'Blue Ridge Parkway'],
    issues: [
      {
        title: 'Older farm systems on long-held land',
        body: 'Much of the country around Weaverville is long-held farm and family land with septic tanks decades old and often undersized for a modern household. These older systems need regular pumping and a look at the tank and baffles to keep solids from reaching and clogging the drain field.',
      },
      {
        title: 'New builds on subdivided lots',
        body: 'Weaverville’s growth means a lot of new homes on lots carved from larger tracts, where the drain field had to fit the soil and grade available. Knowing where the tank and field are, and pumping on schedule, protects a field that may be working in less-than-ideal ground.',
      },
      {
        title: 'Properties that changed hands without records',
        body: 'Homes around here often sell with no idea when the tank was last serviced. A pump and inspection after a purchase gives you a baseline and catches a worn baffle or struggling field before it becomes an emergency.',
      },
    ],
    nearby: ['asheville', 'burnsville', 'black-mountain'],
    faqs: [
      {
        q: 'Do you cover Weaverville and the Reems Creek area?',
        a: 'Yes. We cover Weaverville and the surrounding north-Buncombe communities — Reems Creek, Barnardsville, Alexander, Jupiter, and Stocksville — and the farm country running up toward Mars Hill. Call and tell us where you are and we will confirm.',
      },
      {
        q: 'How often should an older farm system be pumped?',
        a: 'Generally every three to five years, but older and undersized tanks common around Weaverville often need it sooner. If you cannot remember the last pump, it is overdue. We will look at the tank and your household and set a realistic schedule.',
      },
      {
        q: 'I bought a new build outside Weaverville — do I still need to think about septic?',
        a: 'Yes. Even a new system needs the tank pumped on schedule so solids never reach the drain field, and on a subdivided lot it helps to know exactly where the tank and field are. We can pump, mark the locations, and set you up so the system lasts.',
      },
    ],
  },
  {
    slug: 'fletcher',
    name: 'Fletcher',
    state: 'NC',
    intro:
      'Fletcher sits in the Cane Creek valley between Asheville and Hendersonville, straddling the Buncombe–Henderson county line along the busy US-25 corridor near the regional airport. It has grown fast, with subdivisions and new homes filling in around older farmland, and while parts of town have sewer, plenty of the homes — especially out toward Cane Creek, Mills River, and the rural edges — run on septic. We pump, clean, repair, and inspect residential systems throughout the Fletcher area. The mix here is suburban and rural at once: newer homes on lots subdivided from farm tracts, and long-owned properties with older tanks. We see drain fields working in the valley’s clay soils, tanks overdue on homes that changed hands without records, and the usual demand for inspections as properties sell in this fast-moving market. We know the Cane Creek and Mills River area, how its soils handle a drain field, and how to find and service a tank without tearing up a yard. Tell us where your tank is and what it is doing, and we will give you a straight answer and a real price.',
    neighborhoods: ['Cane Creek', 'Mills River', 'Royal Pines', 'Fanning Fields', 'Livingston Creek'],
    landmarks: ['Cane Creek', 'Asheville Regional Airport', 'US-25 corridor', 'Mills River'],
    issues: [
      {
        title: 'Fast growth and a hot resale market',
        body: 'Fletcher has grown quickly and homes change hands often, frequently with no record of the last septic service. A pump and inspection at the sale — or right after — gives buyers and sellers a clear, honest picture of the system instead of an expensive surprise later.',
      },
      {
        title: 'Drain fields in valley clay soils',
        body: 'The Cane Creek and Mills River valleys have clay soils that drain slowly, which is hard on a drain field, especially after a wet stretch. Pumping on schedule so solids never reach the field is the best way to protect a field working in tough ground.',
      },
      {
        title: 'Older tanks beside newer subdivisions',
        body: 'Fletcher mixes new subdivisions with long-owned farm homes, and the older properties often have undersized, decades-old tanks. Those systems need regular pumping and a look at the baffles to keep a small issue from becoming a field failure.',
      },
    ],
    nearby: ['arden', 'hendersonville', 'asheville'],
    faqs: [
      {
        q: 'Do you serve Fletcher and the Cane Creek area?',
        a: 'Yes. We cover Fletcher and the surrounding communities along the Buncombe–Henderson line, including Cane Creek, Mills River, and Royal Pines. Tell us where the property is and we will confirm and come prepared.',
      },
      {
        q: 'I’m selling my Fletcher home — do I need a septic inspection?',
        a: 'It is a smart move in this market. A clean, recently inspected system is real proof to hand a buyer, and catching anything ahead of time keeps the septic from derailing the deal. We inspect the tank, components, and drain field and give you a clear written summary.',
      },
      {
        q: 'My drains are slow — is it the tank or the field?',
        a: 'Either is possible, and the clay soils around Fletcher make a struggling field more likely after wet weather. We diagnose the whole system — the line, the tank, any pump, and the field — so the fix addresses the real cause rather than a guess.',
      },
    ],
  },
  {
    slug: 'arden',
    name: 'Arden',
    state: 'NC',
    intro:
      'Arden sits along the southern edge of Asheville in Buncombe County, a built-up stretch between the city and Fletcher that takes in Skyland, Royal Pines, Avery Creek, and the neighborhoods around Biltmore Park. It is one of the more suburban parts of the county, but plenty of homes here — the older neighborhoods and the properties on the wooded slopes off Long Shoals and toward Avery Creek — still run on septic. We pump, clean, repair, and inspect residential systems all over the Arden and Skyland area. The local mix leans toward established homes with tanks that have been in the ground for a while, plus newer builds on lots that back up to creeks and wooded grades. We see overdue tanks, drain fields working in the area’s clay and along the creek bottoms, and a steady demand for inspections as homes sell. We know the Avery Creek and Royal Pines area, how its lots and soils handle a system, and how to find and service a tank cleanly. Tell us where your tank is and what is going on, and we will give you an honest answer and a real price.',
    neighborhoods: ['Skyland', 'Royal Pines', 'Avery Creek', 'Biltmore Park area', 'Long Shoals'],
    landmarks: ['Biltmore Park', 'Avery Creek', 'Long Shoals Road', 'Blue Ridge Parkway access'],
    issues: [
      {
        title: 'Established homes with aging tanks',
        body: 'Many Arden and Skyland neighborhoods have homes with septic tanks that have been in the ground for decades. Older tanks and worn baffles are common, so regular pumping and an honest look at the tank keep solids from reaching and clogging the drain field.',
      },
      {
        title: 'Creek-bottom and wooded-slope drain fields',
        body: 'Homes off Avery Creek and the wooded grades toward Long Shoals often have drain fields in clay or creek-bottom soils that drain slowly and can saturate after rain. Keeping the tank pumped and runoff diverted protects a field working in damp ground.',
      },
      {
        title: 'Homes selling in a busy market',
        body: 'Arden is a popular, fast-moving market, and homes often sell with no septic records. A pump and inspection gives buyers a real picture and sellers clean proof, so the system does not become a last-minute problem in the deal.',
      },
    ],
    nearby: ['fletcher', 'asheville', 'hendersonville'],
    faqs: [
      {
        q: 'Do you cover Arden, Skyland, and Royal Pines?',
        a: 'Yes. We cover Arden and the surrounding south-Asheville communities, including Skyland, Royal Pines, Avery Creek, and the Biltmore Park area. Call and tell us where the property is and we will confirm.',
      },
      {
        q: 'My Arden home is on city water — could it still be on septic?',
        a: 'Often, yes. Plenty of homes in the Arden and Skyland area have city or community water but still treat their wastewater with a septic tank and drain field. If you have never found a sewer bill, you are almost certainly on septic — and that tank needs pumping on schedule.',
      },
      {
        q: 'How do I know when my tank needs pumping?',
        a: 'Go by time and symptoms: every three to five years, sooner if you see slow drains, gurgling toilets, sewage odor outside, or lush green grass over the tank or field. If you cannot remember the last pump, it is time. We will check the tank and set a schedule.',
      },
    ],
  },
  {
    slug: 'brevard',
    name: 'Brevard',
    state: 'NC',
    intro:
      'Brevard is the seat of Transylvania County, the "Land of Waterfalls," sitting where the mountains rise toward Pisgah National Forest and DuPont State Forest. It is one of the rainiest places in the eastern United States, and that single fact shapes septic work here more than anywhere else we cover. Outside the small town center, nearly everything runs on septic — the homes out toward Pisgah Forest, Cedar Mountain, Rosman, and the cabins tucked into the forest and along the rivers. We pump, clean, repair, and inspect residential systems throughout the Brevard area. The challenge is water: with this much rainfall, drain fields stay wet, and a field that is full or aging struggles to absorb anything more after a heavy stretch. Add steep, forested lots, rocky soil, and a lot of second homes and rentals near the waterfalls and forests, and you have systems that need attention and an honest eye. We know how rainfall and grade stress a Transylvania County field, how to find a buried tank in the woods, and when a soggy yard is a fixable problem versus a failing field. Tell us where your tank is and what is happening, and we will give you a straight answer.',
    neighborhoods: ['Pisgah Forest', 'Cedar Mountain', 'Rosman', 'Connestee Falls', 'Lake Toxaway area'],
    landmarks: ['DuPont State Forest', 'Pisgah National Forest', 'Looking Glass Falls', 'French Broad headwaters'],
    issues: [
      {
        title: 'The rainiest country we cover',
        body: 'Brevard and Transylvania County get some of the heaviest rainfall in the East, and that keeps drain fields wet year-round. A full or aging field cannot absorb more water when the ground is already saturated, so pumping on schedule and diverting runoff away from the field matter even more here than elsewhere.',
      },
      {
        title: 'Forest cabins and second homes',
        body: 'A lot of properties near Pisgah and DuPont are cabins, rentals, and second homes that sit empty and then fill up, on systems that are easy to neglect. Tanks tucked into the woods with no records are common, and we locate, pump, and inspect them as part of the job.',
      },
      {
        title: 'Steep, rocky forest lots',
        body: 'The forested grades around Brevard mean steep access, rocky soil, and drain fields squeezed onto whatever ground a lot allows. We bring the hose and the know-how to reach a tank on a wooded slope and to read whether a struggling field can be saved.',
      },
    ],
    nearby: ['hendersonville', 'waynesville', 'sylva'],
    faqs: [
      {
        q: 'Do you serve Brevard and Transylvania County?',
        a: 'Yes. We cover Brevard and the surrounding communities — Pisgah Forest, Cedar Mountain, Rosman, and the cabins and homes near DuPont and Pisgah. Tell us where the property is and how the access looks and we will come prepared.',
      },
      {
        q: 'My drain field is always soggy — is it the rain or the system?',
        a: 'In Brevard it is often both. With this much rainfall a healthy field can stay damp, but a field that is full or aging cannot keep up with the load on top of the rain. We diagnose whether it is saturation, a full tank, a failed pump, or a true field failure before recommending anything expensive.',
      },
      {
        q: 'I have a rental cabin near Pisgah — how should I manage the septic?',
        a: 'Get it pumped on a schedule that matches the heavy, bursty use rentals see, and have the system inspected if you do not know its history. We can locate the tank, set a pumping interval, and check the field so you are not facing a backup during a guest’s stay.',
      },
    ],
  },
  {
    slug: 'marion',
    name: 'Marion',
    state: 'NC',
    intro:
      'Marion is the seat of McDowell County, sitting where the Blue Ridge escarpment meets the foothills along the I-40 and US-221 corridors, with Lake James and Old Fort nearby. It is a more rural, working county than the towns closer to Asheville, with farms, foothill homes, and lake properties that almost all run on septic outside the town center. We pump, clean, repair, and inspect residential systems throughout the Marion and McDowell County area. The terrain here is a transition — less of the extreme grade you see up around Black Mountain, more rolling foothills and bottomland — but the septic challenges are familiar: older systems on long-held land, undersized tanks, drain fields in clay and bottom soils, and a lot of properties near Lake James where seasonal use and high water tables come into play. We see overdue tanks, fields struggling after wet weather, and homes that need an inspection before they sell. We know McDowell County, how its soils and lots handle a system, and how to give you a straight answer instead of an upsell. Tell us where your tank is and what is going on, and we will quote it honestly.',
    neighborhoods: ['Old Fort', 'Pleasant Gardens', 'Nebo', 'Lake James area', 'Glenwood'],
    landmarks: ['Lake James', 'Catawba River', 'Old Fort', 'Blue Ridge escarpment'],
    issues: [
      {
        title: 'Rural systems on long-held land',
        body: 'Much of McDowell County is farm and foothill land held for generations, with septic tanks decades old and often undersized for today’s households. Regular pumping and a look at the tank and baffles keep these older systems from washing solids into the drain field.',
      },
      {
        title: 'Lake James properties and high water tables',
        body: 'Homes near Lake James and along the bottomlands can sit over higher water tables, which leaves drain fields with less dry soil to work with. Keeping the tank pumped and the field free of extra runoff is especially important where the ground stays damp.',
      },
      {
        title: 'Seasonal and lake-area use',
        body: 'Lake and second homes around Marion see seasonal, bursty use and are easy to neglect between visits. A pumping schedule matched to actual use, plus an inspection if the history is unknown, keeps a quiet system from turning into a backup.',
      },
    ],
    nearby: ['black-mountain', 'asheville', 'burnsville'],
    faqs: [
      {
        q: 'Do you cover Marion and McDowell County?',
        a: 'Yes. We cover Marion and the surrounding McDowell County communities — Old Fort, Pleasant Gardens, Nebo, Glenwood, and the Lake James area. Tell us where the property is and we will confirm and come prepared.',
      },
      {
        q: 'My home is near Lake James — does the water table affect my septic?',
        a: 'It can. Properties near the lake and in the bottomlands may sit over a higher water table, which leaves a drain field less dry soil to absorb effluent, so fields there are more sensitive to overload. Pumping on schedule and keeping extra runoff off the field helps protect it.',
      },
      {
        q: 'How often should a rural McDowell County system be pumped?',
        a: 'Usually every three to five years, but older and undersized tanks common on long-held land here often need it sooner. If you cannot recall the last service, schedule it. We will look at the tank and your household and recommend a realistic interval.',
      },
    ],
  },
  {
    slug: 'burnsville',
    name: 'Burnsville',
    state: 'NC',
    intro:
      'Burnsville is the seat of Yancey County, high in the mountains under Mount Mitchell — the highest peak in the eastern United States — in some of the most rural, remote country we cover. The town is small and the county is spread out across steep ridges and the valleys of the Toe River, and outside the town center essentially every home runs on septic. We pump, clean, repair, and inspect residential systems across the Burnsville and Yancey County area. This is true high-country septic: long, steep, sometimes gravel access roads, tanks buried on grades with no records, pump systems lifting effluent uphill, and a lot of cabins, family land, and second homes that sit empty for stretches at elevation. Hard winters can freeze shallow lines and exposed pump parts on unheated homes. We bring the truck, the hose length, and the experience to reach a tank on a remote mountain lot, test the pumps and floats, and tell you honestly what a system needs. Out here, having a crew that will actually drive out and knows mountain systems matters. Tell us where your property is and what is going on, and we will give you a straight answer and a real price.',
    neighborhoods: ['Micaville', 'Pensacola', 'Cane River', 'South Toe', 'Bald Creek'],
    landmarks: ['Mount Mitchell', 'Toe River', 'Blue Ridge Parkway', 'Pisgah National Forest'],
    issues: [
      {
        title: 'Remote, steep access',
        body: 'Yancey County properties often sit at the end of long, steep, sometimes gravel roads, with tanks buried on grades and no records. We come prepared with the hose length and equipment to reach a tank on a remote mountain lot — and we actually make the drive.',
      },
      {
        title: 'High-elevation freezing',
        body: 'Under Mount Mitchell, hard winters can freeze shallow lines and exposed pump components, especially at cabins and second homes left unheated and empty. We can check vulnerable spots and advise on protecting a system through the coldest months.',
      },
      {
        title: 'Cabins and family land left empty',
        body: 'Much of Yancey County is long-held family land and seasonal cabins that sit empty between visits, on systems that are easy to forget. A pumping schedule matched to actual use, and an inspection when the history is unknown, keeps a neglected tank from becoming an emergency.',
      },
    ],
    nearby: ['weaverville', 'marion', 'asheville'],
    faqs: [
      {
        q: 'Do you really drive out to Yancey County?',
        a: 'Yes. We cover Burnsville and the surrounding Yancey County communities — Micaville, Pensacola, Cane River, South Toe, and Bald Creek — including the remote, steep properties. Tell us about the access road and where the tank is and we will come prepared.',
      },
      {
        q: 'My cabin sits empty in winter — should I worry about freezing?',
        a: 'At these elevations, yes. Shallow lines and exposed pump parts can freeze on an unheated home. We can look at the vulnerable spots and advise on protecting the system, and make sure the tank is in good shape before the cold sets in.',
      },
      {
        q: 'There are no records for my mountain property’s septic — can you find the tank?',
        a: 'Yes. Unmarked, buried tanks are the norm out here. We locate the tank from the plumbing, the layout, and probing, dig down to the lid, and can map the location so the next service is quick.',
      },
    ],
  },
  {
    slug: 'sylva',
    name: 'Sylva',
    state: 'NC',
    intro:
      'Sylva is the seat of Jackson County, a mountain town along the Tuckasegee River west of Waynesville, with Western Carolina University just up the road in Cullowhee and Dillsboro next door. It is a mix of a walkable downtown, a university community, and a lot of rural mountain country, and outside the town core nearly everything runs on septic — the homes up the coves, the rental cabins toward Cashiers and Cherokee, and the student and family rentals around Cullowhee. We pump, clean, repair, and inspect residential systems throughout the Sylva and Jackson County area. The local mix brings its own pattern: rentals with heavy, bursty occupancy that fills tanks fast, steep lots that use pump systems to reach a drain field, and older homes on long-held land with undersized tanks and no records. We know the Tuckasegee valley and the Cullowhee area, how grade and our heavy rain stress a Jackson County field, and how to find and service a tank on a mountain lot. Tell us where your tank is and what it is doing, and we will give you an honest answer and a price you can count on.',
    neighborhoods: ['Cullowhee', 'Dillsboro', 'Webster', 'Tuckasegee', 'Scotts Creek'],
    landmarks: ['Tuckasegee River', 'Western Carolina University', 'Pinnacle Park', 'Great Smoky Mountains Railroad'],
    issues: [
      {
        title: 'Rentals and student housing that fill tanks fast',
        body: 'Around Sylva and Cullowhee, rental cabins and student housing see heavy, bursty occupancy that fills septic tanks faster than a normal household. Those systems need more frequent pumping, and an overlooked rental tank is a backup waiting to happen during a full house.',
      },
      {
        title: 'Steep lots and pump systems',
        body: 'Many homes in the Tuckasegee valley sit below the only good spot for a drain field, so the system uses a pump to lift effluent uphill. Those pumps and floats wear out, and when one fails the system backs up — we test and replace them so you get an alarm before a mess.',
      },
      {
        title: 'Older homes on long-held land',
        body: 'Jackson County has plenty of long-owned mountain homes with decades-old, undersized tanks and no service records. Regular pumping and an honest look at the tank keep these older systems from washing solids into the drain field.',
      },
    ],
    nearby: ['waynesville', 'brevard', 'asheville'],
    faqs: [
      {
        q: 'Do you cover Sylva, Cullowhee, and Jackson County?',
        a: 'Yes. We cover Sylva and the surrounding Jackson County communities — Cullowhee, Dillsboro, Webster, Tuckasegee, and Scotts Creek. Tell us where the property is and how the access looks and we will come prepared.',
      },
      {
        q: 'I rent out a cabin near Sylva — how often should I pump?',
        a: 'More often than a normal home. Heavy, bursty rental use fills a tank fast, so depending on size and turnover many rentals need pumping every one to three years. We can set a schedule to your booking pattern so you avoid a backup while guests are there.',
      },
      {
        q: 'My home has a septic pump — what should I watch for?',
        a: 'On the steep lots around Sylva, a pump lifts effluent uphill to the drain field. Watch and listen for the alarm, which means the pump tank is filling faster than it empties — usually a failed pump or stuck float. Cut back on water use and call us before it backs up.',
      },
    ],
  },
];

export const getCity = (slug: string): City | undefined => CITIES.find((c) => c.slug === slug);

export const nearbyCities = (city: City): City[] =>
  city.nearby.map(getCity).filter((c): c is City => Boolean(c));
