import React, { useState } from "react";
import { PEOPLE, COMMUNITIES } from "../data";
import { Person, SocialLink, Community } from "../types";
import { Github, Users, MessageCircle, Instagram, Mail, Music2, Send, Radio, ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const iconFor = (type: SocialLink["type"]) => {
  const cls = "w-4 h-4";
  if (type === "github") return <Github className={cls} />;
  if (type === "telegram") return <Send className={cls} />;
  if (type === "instagram") return <Instagram className={cls} />;
  if (type === "email") return <Mail className={cls} />;
  if (type === "tiktok") return <Music2 className={cls} />;
  return <MessageCircle className={cls} />;
};

export default function PeopleAndCommunities() {
  const [selected, setSelected] = useState<Person | null>(null);
  return (
    <section id="network" className="py-32 px-6 select-none bg-transparent min-h-screen border-t border-zinc-950">
      <div className="max-w-6xl mx-auto w-full space-y-32">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-[#fab011] bg-amber-950/20 border border-amber-500/10 px-3 py-1 rounded-full uppercase">[ PEOPLE ALONG THE JOURNEY ]</span>
            <h2 className="text-5xl font-display font-medium text-white tracking-widest uppercase">PEOPLE ALONG THE JOURNEY</h2>
            <p className="text-sm text-zinc-500 max-w-xl mx-auto leading-relaxed">Klik kartu untuk membuka detail sosial media. Grid dibuat simpel: 3 profil per baris, fokus pada nama dan wajah.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PEOPLE.map((p, i) => <PersonCard key={p.name} person={p} idx={i} onOpen={() => setSelected(p)} />)}
          </div>
        </div>

        <div className="space-y-16">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-accent-cyan bg-cyan-950/20 border border-cyan-500/10 px-3 py-1 rounded-full uppercase">[ COMMUNITY HUB ]</span>
            <h2 className="text-5xl font-display font-medium text-white tracking-widest uppercase">COMMUNITY HUB</h2>
            <p className="text-sm text-zinc-500 max-w-xl mx-auto leading-relaxed">Komunitas sebagai bagian dari ekosistem pembelajaran & eksplorasi: belajar coding, scrape, promosi, dan bot lab.</p>
          </div>
          <div className="rounded-3xl border border-cyan-500/10 bg-zinc-950/30 p-5 md:p-8">
            <div className="flex items-center gap-3 mb-8"><Users className="text-cyan-300" /><div><h3 className="font-display text-2xl tracking-widest">COMMUNITY</h3><p className="text-xs text-zinc-500">Anggota/grup pembelajaran aktif di sekitar R_hmt.</p></div></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {COMMUNITIES.map((c, i) => <CommunityCard key={c.name} community={c} idx={i} />)}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-[80] bg-black/80 backdrop-blur flex items-center justify-center p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.div className="w-full max-w-md rounded-3xl border border-cyan-500/20 bg-zinc-950 p-7 shadow-2xl" initial={{ scale: .92, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .92, y: 20 }} onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelected(null)} className="float-right text-zinc-500 hover:text-white"><X className="w-5 h-5" /></button>
              <div className="flex items-center gap-4 mb-6">
                <Avatar person={selected} idx={99} size="w-20 h-20" />
                <div><h3 className="text-2xl font-display tracking-widest text-white">{selected.name}</h3><p className="text-xs font-mono text-cyan-300">@{selected.handle}</p><p className="text-xs text-zinc-500 mt-1">{selected.role}</p></div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {selected.socials?.map((s) => <a key={s.url} href={s.url} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-xl border border-zinc-800 bg-black/40 px-4 py-3 text-sm text-zinc-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"><span className="flex items-center gap-3">{iconFor(s.type)}{s.label}</span><ArrowUpRight className="w-4 h-4" /></a>)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Avatar({ person, idx, size = "w-24 h-24" }: { person: Person; idx: number; size?: string }) {
  return <div className={`${size} rounded-2xl border border-cyan-500/20 bg-zinc-900 overflow-hidden flex items-center justify-center text-cyan-300 font-display text-2xl`}>
    {person.avatar ? <img src={`/gambar/${person.avatar}`} alt={person.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.style.display = "none"; }} /> : person.name.charAt(0)}
  </div>;
}

function PersonCard({ person, idx, onOpen }: { person: Person; idx: number; onOpen: () => void }) {
  return <button onClick={onOpen} className="group rounded-3xl border border-zinc-900 bg-zinc-950/40 p-6 min-h-[230px] flex flex-col items-center justify-center text-center hover:border-cyan-500/40 hover:-translate-y-1 transition-all">
    <Avatar person={person} idx={idx} />
    <h4 className="mt-5 text-xl font-display tracking-widest text-white group-hover:text-cyan-300">{person.name}</h4>
    <p className="text-[10px] font-mono text-zinc-500 mt-1">TAP_TO_VIEW_SOCIALS</p>
  </button>;
}

function CommunityCard({ community, idx }: { community: Community; idx: number }) {
  const inner = <div className="rounded-2xl border border-zinc-900 bg-black/40 p-5 min-h-[190px] hover:border-cyan-500/30 hover:-translate-y-1 transition-all group">
    <div className="flex items-center gap-4 mb-4"><div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden flex items-center justify-center"><img src={`/gambar/${community.image}`} alt={community.name} className="w-full h-full object-cover" onError={(e)=>{e.currentTarget.style.display='none'}} /></div><div><p className="text-[10px] font-mono text-cyan-400">COMM_0{idx+1}</p><h4 className="font-display text-white tracking-wide">{community.name}</h4></div></div>
    <p className="text-xs text-zinc-500 leading-relaxed">{community.tagline}</p>
    <div className="mt-5 flex items-center justify-between text-[10px] font-mono text-zinc-600"><span>{community.status || "OPEN_LINK"}</span>{community.url ? <ArrowUpRight className="w-4 h-4 text-cyan-400" /> : <Radio className="w-4 h-4 text-amber-400" />}</div>
  </div>;
  return community.url ? <a href={community.url} target="_blank" rel="noreferrer">{inner}</a> : inner;
}
