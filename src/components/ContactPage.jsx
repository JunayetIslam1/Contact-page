
import React from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap
} from "react-leaflet";
import L from "leaflet";

import {
  ArrowUpRight,
  Building2,
  ChevronRight,
  Clock3,
  ExternalLink,
  Facebook,
  Globe2,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Youtube,
  Sparkles
} from "lucide-react";

import chairmanPhoto from "../assets/chairman.png";
import principalPhoto from "../assets/principal.png";

/* =========================================================
   SCHOOL DATA
   ========================================================= */

const SCHOOL = {
  name: "Leaders’ School & College Chattogram",
  address:
    "Hathazari Road, Baluchora, Jalalabad, Bayezid, Chattogram",
  email: "lscc2018@gmail.com",
  website: "https://leaders.edu.bd/",
  phone: ["+8801871-741551", "+8801871-250534"],
  facebookLabel: "Leaders’ School & College Chattogram",
  youtubeLabel: "Leaders’ School & College Chattogram",
  lat: 22.409991,
  lng: 91.819672
};

/* =========================================================
   PREMIUM MAP MARKER
   ========================================================= */

const markerIcon = L.divIcon({
  className: "premium-school-marker",
  html: `
    <div class="school-marker-wrap">
      <div class="school-marker-pulse"></div>

      <div class="pulse-marker">
        <span class="marker-core"></span>
      </div>

      <div class="map-pin-label">
        Leaders’ School & College
      </div>
    </div>
  `,
  iconSize: [190, 78],
  iconAnchor: [95, 12],
  popupAnchor: [0, -12]
});

/* =========================================================
   MAP CONTROLLER
   ========================================================= */

function LocateSchool() {
  const map = useMap();

  const flyToSchool = () => {
    map.flyTo(
      [SCHOOL.lat, SCHOOL.lng],
      16,
      {
        duration: 1.25,
        easeLinearity: 0.18
      }
    );
  };

  return (
    <button
      type="button"
      onClick={flyToSchool}
      className="
        absolute right-4 top-4 z-[1000]
        inline-flex items-center gap-2
        rounded-2xl
        border border-white/70
        bg-white/90
        px-4 py-3
        text-xs font-bold
        text-[#0b2f6b]
        shadow-[0_15px_35px_rgba(11,47,107,.18)]
        backdrop-blur-xl
        transition-all duration-300
        hover:-translate-y-1
        hover:bg-white
        hover:shadow-[0_20px_45px_rgba(11,47,107,.22)]
        active:scale-95
      "
      aria-label="Center map on Leaders' School & College"
    >
      <span className="grid h-6 w-6 place-items-center rounded-lg bg-[#edf4fc]">
        <Navigation size={14} />
      </span>

      Center map
    </button>
  );
}

/* =========================================================
   INFO ITEM
   ========================================================= */

function InfoItem({
  icon: Icon,
  label,
  children,
  href
}) {
  const content = href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={
        href.startsWith("http")
          ? "noreferrer"
          : undefined
      }
      className="
        group
        inline-flex
        w-full
        items-start
        gap-3
        text-[15px]
        font-semibold
        leading-6
        text-slate-700
        transition-all
        duration-300
        hover:text-[#0b4f9f]
      "
    >
      <span
        className="
          icon-orb
          mt-0.5
          grid
          h-10
          w-10
          shrink-0
          place-items-center
          rounded-xl
          bg-[#edf4fc]
          text-[#0b4f9f]
        "
      >
        <Icon size={17} strokeWidth={2.1} />
      </span>

      <span className="pt-1 underline-offset-4 group-hover:underline">
        {children}
      </span>
    </a>
  ) : (
    <div
      className="
        flex
        items-start
        gap-3
        text-[15px]
        font-semibold
        leading-6
        text-slate-700
      "
    >
      <span
        className="
          icon-orb
          mt-0.5
          grid
          h-10
          w-10
          shrink-0
          place-items-center
          rounded-xl
          bg-[#edf4fc]
          text-[#0b4f9f]
        "
      >
        <Icon size={17} strokeWidth={2.1} />
      </span>

      <span className="pt-1">
        {children}
      </span>
    </div>
  );

  return (
    <div>
      {label && (
        <p
          className="
            mb-1
            text-[10px]
            font-extrabold
            uppercase
            tracking-[0.18em]
            text-slate-400
          "
        >
          {label}
        </p>
      )}

      {content}
    </div>
  );
}

/* =========================================================
   PERSON CARD
   ========================================================= */

function PersonCard({
  eyebrow,
  image,
  name,
  children,
  badge
}) {
  return (
    <article
      className="
        portrait-card
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-white/80
        bg-white/88
        p-3
        shadow-[0_24px_65px_rgba(20,42,77,.11)]
        backdrop-blur-xl
      "
    >
      {/* Ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-48
          w-48
          rounded-full
          bg-[#145bae]/10
          blur-3xl
          transition-all
          duration-700
          group-hover:scale-150
          group-hover:bg-[#145bae]/15
        "
      />

      <div
        className="
          relative
          overflow-hidden
          rounded-[23px]
          border
          border-slate-100
          bg-[#f7f9fc]
          p-3
        "
      >
        {/* Card header */}
        <div className="mb-3 flex items-center justify-between gap-3">
          <span
            className="
              inline-flex
              items-center
              gap-2
              text-[11px]
              font-extrabold
              uppercase
              tracking-[0.18em]
              text-[#0b4f9f]
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#d5a63a]
                shadow-[0_0_0_5px_rgba(213,166,58,.13)]
              "
            />

            {eyebrow}
          </span>

          <span
            className="
              rounded-full
              bg-white
              px-2.5
              py-1
              text-[9px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-slate-400
              shadow-sm
            "
          >
            {badge}
          </span>
        </div>

        {/* =================================================
            FULL SIZE IMAGE
           ================================================= */}

        <div
          className="
            portrait-frame
            relative
            aspect-[1/1.08]
            min-h-[330px]
            overflow-hidden
            rounded-[19px]
            border
            border-slate-200
          "
        >
          <img
            src={image}
            alt={name}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
            "
          />

          {/* Bottom cinematic gradient */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-32
              bg-gradient-to-t
              from-[#071f47]/25
              to-transparent
            "
          />

          {/* Image corner accent */}
          <div
            className="
              absolute
              bottom-3
              right-3
              grid
              h-9
              w-9
              place-items-center
              rounded-xl
              border
              border-white/40
              bg-white/20
              text-white
              opacity-0
              backdrop-blur-md
              transition-all
              duration-500
              group-hover:opacity-100
            "
          >
            <Sparkles size={15} />
          </div>
        </div>

        {/* Person information */}
        <div className="px-1 pb-1 pt-5">
          <h3
            className="
              font-display
              text-[20px]
              font-bold
              leading-tight
              text-[#10213f]
            "
          >
            {name}
          </h3>

          <div
            className="
              mt-3
              space-y-1.5
              text-[13px]
              leading-5
              text-slate-600
            "
          >
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   CONTACT PAGE
   ========================================================= */

export default function ContactPage() {
  return (
    <main
      className="
        contact-shell
        soft-grid
        min-h-screen
        py-6
        sm:py-10
        lg:py-14
      "
    >
      <div
        className="
          relative
          z-10
          mx-auto
          w-[min(1180px,calc(100%-28px))]
        "
      >

        {/* =================================================
            HEADER
           ================================================= */}

        <header
          className="
            relative
            mb-8
            overflow-hidden
            rounded-[32px]
            border
            border-white/70
            bg-white/65
            px-5
            py-5
            shadow-[0_20px_65px_rgba(20,42,77,.08)]
            backdrop-blur-xl
            sm:px-7
          "
        >
          {/* Header glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-24
              h-64
              w-64
              rounded-full
              bg-[#d5a63a]/10
              blur-3xl
            "
          />

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p
                className="
                  mb-2
                  flex
                  items-center
                  gap-2
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.22em]
                  text-[#0b4f9f]
                "
              >
                <span className="h-px w-7 bg-[#d5a63a]" />

                Leaders' School & College Chattogram
              </p>

              <div className="flex items-center gap-3">
                <h1
                  className="
                    font-display
                    text-4xl
                    font-bold
                    tracking-[-0.03em]
                    text-[#10213f]
                    sm:text-5xl
                  "
                >
                  Contact
                </h1>

                <span
                  className="
                    mt-2
                    hidden
                    h-2
                    w-2
                    rounded-full
                    bg-[#d5a63a]
                    shadow-[0_0_0_7px_rgba(213,166,58,.10)]
                    sm:block
                  "
                />
              </div>
            </div>

            <a
              href={SCHOOL.website}
              target="_blank"
              rel="noreferrer"
              className="
                group
                relative
                inline-flex
                w-fit
                items-center
                gap-2
                overflow-hidden
                rounded-full
                border
                border-[#0b4f9f]/10
                bg-white
                px-4
                py-2.5
                text-xs
                font-bold
                text-[#0b4f9f]
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-[#0b4f9f]/5
                  to-transparent
                  transition-transform
                  duration-700
                  group-hover:translate-x-full
                "
              />

              <span className="relative">
                Visit official website
              </span>

              <ArrowUpRight
                size={15}
                className="
                  relative
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          </div>
        </header>

        {/* =================================================
            MAIN GRID
           ================================================= */}

        <section
          className="
            grid
            gap-6
            lg:grid-cols-[minmax(0,1.55fr)_minmax(300px,.78fr)]
          "
        >

          {/* =================================================
              LEFT CONTENT
             ================================================= */}

          <div
            className="
              glass-panel
              rounded-[32px]
              p-4
              sm:p-6
              lg:p-7
            "
          >

            {/* INFO CARDS */}

            <div className="grid gap-4 sm:grid-cols-3">

              {/* CAMPUS */}

              <div
                className="
                  info-card
                  rounded-[23px]
                  border
                  border-slate-100
                  bg-white/70
                  p-5
                "
              >
                <span
                  className="
                    icon-orb
                    mb-4
                    grid
                    h-11
                    w-11
                    place-items-center
                    rounded-2xl
                    bg-[#0b4f9f]
                    text-white
                  "
                >
                  <Building2 size={19} />
                </span>

                <p
                  className="
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.17em]
                    text-slate-400
                  "
                >
                  Campus
                </p>

                <h2
                  className="
                    mt-2
                    text-[15px]
                    font-extrabold
                    leading-6
                    text-[#10213f]
                  "
                >
                  Leaders’ School & College Chattogram
                </h2>

                <p
                  className="
                    mt-3
                    text-[13px]
                    leading-5
                    text-slate-500
                  "
                >
                  Hathazari Road, Baluchora, Jalalabad,
                  Bayezid, Chattogram
                </p>
              </div>

              {/* EMAIL / WEBSITE */}

              <div
                className="
                  info-card
                  rounded-[23px]
                  border
                  border-slate-100
                  bg-white/70
                  p-5
                "
              >
                <span
                  className="
                    icon-orb
                    mb-4
                    grid
                    h-11
                    w-11
                    place-items-center
                    rounded-2xl
                    bg-[#f3e6bd]
                    text-[#866515]
                  "
                >
                  <Mail size={19} />
                </span>

                <p
                  className="
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.17em]
                    text-slate-400
                  "
                >
                  Mail & website
                </p>

                <div className="mt-3 space-y-3">
                  <InfoItem
                    icon={Mail}
                    label="E-mail"
                    href={`mailto:${SCHOOL.email}`}
                  >
                    {SCHOOL.email}
                  </InfoItem>

                  <InfoItem
                    icon={Globe2}
                    label="Web"
                    href={SCHOOL.website}
                  >
                    leaders.edu.bd
                  </InfoItem>
                </div>

                <div
                  className="
                    mt-5
                    border-t
                    border-slate-100
                    pt-4
                  "
                >
                  <p className="text-[12px] leading-5 text-slate-500">
                    Facebook Page:
                    <span className="font-semibold text-slate-700">
                      {" "}
                      {SCHOOL.facebookLabel}
                    </span>
                  </p>

                  <p className="mt-2 text-[12px] leading-5 text-slate-500">
                    Youtube:
                    <span className="font-semibold text-slate-700">
                      {" "}
                      {SCHOOL.youtubeLabel}.
                    </span>
                  </p>
                </div>
              </div>

              {/* PHONE */}

              <div
                className="
                  info-card
                  rounded-[23px]
                  border
                  border-slate-100
                  bg-white/70
                  p-5
                "
              >
                <span
                  className="
                    icon-orb
                    mb-4
                    grid
                    h-11
                    w-11
                    place-items-center
                    rounded-2xl
                    bg-[#e9f5ef]
                    text-[#19724d]
                  "
                >
                  <Phone size={19} />
                </span>

                <p
                  className="
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.17em]
                    text-slate-400
                  "
                >
                  Phone number
                </p>

                <div className="mt-4 space-y-3">
                  {SCHOOL.phone.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(
                        /[^0-9+]/g,
                        ""
                      )}`}
                      className="
                        flex
                        items-center
                        gap-3
                        text-[14px]
                        font-bold
                        text-slate-700
                        transition-all
                        duration-300
                        hover:translate-x-1
                        hover:text-[#0b4f9f]
                      "
                    >
                      <span
                        className="
                          h-2
                          w-2
                          rounded-full
                          bg-[#d5a63a]
                          shadow-[0_0_0_5px_rgba(213,166,58,.10)]
                        "
                      />

                      {phone}
                    </a>
                  ))}
                </div>

                <p
                  className="
                    mt-5
                    flex
                    items-center
                    gap-2
                    text-[11px]
                    font-semibold
                    text-slate-400
                  "
                >
                  <Clock3 size={14} />

                  Office contact line
                </p>
              </div>
            </div>

            {/* =================================================
                MAP
               ================================================= */}

            <div
              className="
                mt-5
                overflow-hidden
                rounded-[28px]
                border
                border-slate-200
                bg-white
                shadow-[0_25px_65px_rgba(20,42,77,.10)]
              "
            >

              {/* Map header */}

              <div
                className="
                  relative
                  flex
                  flex-col
                  gap-3
                  overflow-hidden
                  border-b
                  border-slate-100
                  bg-white/90
                  px-5
                  py-4
                  backdrop-blur-xl
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-12
                    -top-16
                    h-36
                    w-36
                    rounded-full
                    bg-[#d5a63a]/10
                    blur-2xl
                  "
                />

                <div className="relative">
                  <p
                    className="
                      text-[10px]
                      font-extrabold
                      uppercase
                      tracking-[0.2em]
                      text-[#0b4f9f]
                    "
                  >
                    Live location
                  </p>

                  <h2
                    className="
                      mt-1
                      font-display
                      text-xl
                      font-bold
                      text-[#10213f]
                    "
                  >
                    Find the campus
                  </h2>
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${SCHOOL.lat},${SCHOOL.lng}`}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    relative
                    inline-flex
                    items-center
                    gap-2
                    self-start
                    overflow-hidden
                    rounded-xl
                    bg-[#0b2f6b]
                    px-4
                    py-2.5
                    text-xs
                    font-bold
                    text-white
                    shadow-[0_12px_28px_rgba(11,47,107,.20)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#0b4f9f]
                    hover:shadow-[0_18px_35px_rgba(11,47,107,.24)]
                    sm:self-auto
                  "
                >
                  <span
                    className="
                      absolute
                      inset-0
                      -translate-x-full
                      bg-gradient-to-r
                      from-transparent
                      via-white/15
                      to-transparent
                      transition-transform
                      duration-700
                      group-hover:translate-x-full
                    "
                  />

                  <ExternalLink
                    size={14}
                    className="relative"
                  />

                  <span className="relative">
                    Open in Google Maps
                  </span>
                </a>
              </div>

              {/* Map body */}

              <div
                className="
                  map-frame
                  h-[430px]
                  sm:h-[500px]
                  lg:h-[540px]
                "
              >
                <MapContainer
                  center={[SCHOOL.lat, SCHOOL.lng]}
                  zoom={15}
                  scrollWheelZoom={true}
                  className="h-full w-full"
                >
                  <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  <LocateSchool />

                  <Marker
                    position={[
                      SCHOOL.lat,
                      SCHOOL.lng
                    ]}
                    icon={markerIcon}
                  >
                    <Popup>
                      <div className="min-w-[210px] p-1">
                        <p className="font-bold text-[#0b2f6b]">
                          Leaders’ School & College Chattogram
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-600">
                          {SCHOOL.address}
                        </p>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>

                {/* Floating map information */}

                <div
                  className="
                    map-overlay
                    absolute
                    bottom-4
                    left-4
                    z-[1000]
                    max-w-[320px]
                    rounded-[20px]
                    border
                    border-white/25
                    bg-[#0b2f6b]/90
                    p-4
                    text-white
                    shadow-[0_22px_55px_rgba(11,47,107,.28)]
                    backdrop-blur-xl
                  "
                >
                  <div className="flex gap-3">
                    <span
                      className="
                        mt-0.5
                        grid
                        h-10
                        w-10
                        shrink-0
                        place-items-center
                        rounded-xl
                        bg-white/10
                        ring-1
                        ring-white/15
                      "
                    >
                      <MapPin size={16} />
                    </span>

                    <div>
                      <p
                        className="
                          text-[10px]
                          font-extrabold
                          uppercase
                          tracking-[0.16em]
                          text-[#e8cf8a]
                        "
                      >
                        Campus location
                      </p>

                      <p
                        className="
                          mt-1
                          text-[12px]
                          font-semibold
                          leading-5
                          text-white/90
                        "
                      >
                        {SCHOOL.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Small live indicator */}

                <div
                  className="
                    absolute
                    bottom-4
                    right-4
                    z-[1000]
                    hidden
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/60
                    bg-white/85
                    px-3
                    py-2
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.14em]
                    text-[#0b2f6b]
                    shadow-[0_12px_30px_rgba(11,47,107,.15)]
                    backdrop-blur-xl
                    sm:flex
                  "
                >
                  <span
                    className="
                      h-2
                      w-2
                      animate-pulse
                      rounded-full
                      bg-[#2fa66f]
                      shadow-[0_0_0_4px_rgba(47,166,111,.12)]
                    "
                  />

                  Live map
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDEBAR
             ================================================= */}

          <aside className="space-y-6">

            <PersonCard
              eyebrow="Chairman"
              badge="Leadership"
              image={chairmanPhoto}
              name="লে. কর্নেল ডা. মো: আব্দুর রহিম (অব.)"
            >
              <p className="font-bangla text-[13px] text-slate-600">
                শিক্ষাবোর্ড কর্তৃক মনোনিত সভাপতি
              </p>
            </PersonCard>

            <PersonCard
              eyebrow="Principal"
              badge="Academic head"
              image={principalPhoto}
              name="Colonel Abu Naser Md. Toha"
            >
              <p className="font-semibold text-slate-700">
                BSP, SGP, afwc, psc (Retd)
              </p>

              <p className="font-bold text-[#0b4f9f]">
                Principal
              </p>

              <p>
                Leaders’ School & College Chattogram
              </p>
            </PersonCard>

            {/* =================================================
                CONNECT CARD
               ================================================= */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#0b4f9f]/10
                bg-[#0b2f6b]
                p-5
                text-white
                shadow-[0_28px_65px_rgba(11,47,107,.20)]
              "
            >
              {/* Background glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-[#d5a63a]/15
                  blur-3xl
                "
              />

              <div className="relative flex items-center justify-between gap-4">
                <div>
                  <p
                    className="
                      text-[10px]
                      font-extrabold
                      uppercase
                      tracking-[0.2em]
                      text-[#e8cf8a]
                    "
                  >
                    Connect
                  </p>

                  <p
                    className="
                      mt-1
                      font-display
                      text-xl
                      font-bold
                    "
                  >
                    Official channels
                  </p>
                </div>

                <span
                  className="
                    grid
                    h-11
                    w-11
                    place-items-center
                    rounded-2xl
                    bg-white/10
                    ring-1
                    ring-white/10
                  "
                >
                  <ChevronRight size={19} />
                </span>
              </div>

              <div className="relative mt-5 grid grid-cols-2 gap-2">
                <a
                  href="#"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-white/8
                    px-3
                    py-3
                    text-xs
                    font-bold
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white/15
                    hover:shadow-lg
                  "
                >
                  <Facebook
                    size={15}
                    className="transition-transform group-hover:scale-110"
                  />

                  Facebook
                </a>

                <a
                  href="#"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-white/8
                    px-3
                    py-3
                    text-xs
                    font-bold
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white/15
                    hover:shadow-lg
                  "
                >
                  <Youtube
                    size={15}
                    className="transition-transform group-hover:scale-110"
                  />

                  YouTube
                </a>
              </div>
            </div>
          </aside>
        </section>

        {/* =================================================
            FOOTER
           ================================================= */}

        <footer
          className="
            mt-7
            flex
            flex-col
            gap-3
            rounded-[25px]
            border
            border-white/70
            bg-white/60
            px-5
            py-4
            text-xs
            text-slate-500
            shadow-sm
            backdrop-blur-xl
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span>
            Leaders’ School & College Chattogram
          </span>

          <span className="flex items-center gap-2">
            <MapPin size={13} />

            Hathazari Road, Baluchora, Chattogram
          </span>
        </footer>
      </div>
    </main>
  );
}
